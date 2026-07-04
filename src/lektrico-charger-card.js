import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './styles.js';
import { chargerSvg, ledOverlaySvg } from './charger-svg.js';
import './editor.js';
import { LANGUAGES, bestLanguage, localize } from './translations/index.js';
import {
  CARD_VERSION,
  CARD_NAME,
  DEFAULT_LED_STATES,
  ENTITY_ROLES,
  METER_ROLES,
  ERROR_KEYS,
  DEFAULT_CURRENT_PRESETS,
  DEFAULT_BRIGHTNESS_PRESETS,
  DEFAULT_LED_SPIN,
} from './const.js';

const fireEvent = (node, type, detail = {}) => {
  const event = new Event(type, { bubbles: true, composed: true });
  event.detail = detail;
  node.dispatchEvent(event);
};

class LektricoChargerCard extends LitElement {
  static styles = styles;

  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _openSections: { state: true },
    _pendingSlider: { state: true },
  };

  constructor() {
    super();
    this._openSections = {};
    this._pendingSlider = {};
    this._roles = null;
    this._rolesKey = null;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error(
        "Please define the charger state entity, e.g. entity: sensor.1p7k_state"
      );
    }
    this._config = config;
    this._roles = null;
    this._rolesKey = null;
    this._meterRoles = null;
    this._meterKey = null;
  }

  getCardSize() {
    return this._config?.compact ? 4 : 8;
  }

  static getStubConfig(hass) {
    const entities = hass?.entities || {};
    const guess = Object.values(entities).find(
      (e) => e.platform === 'lektrico' && e.translation_key === 'state'
    );
    return { entity: guess ? guess.entity_id : 'sensor.1p7k_state' };
  }

  static getConfigElement() {
    return document.createElement('lektrico-charger-card-editor');
  }

  /* ------------------------------------------------------------------ */
  /* localization                                                        */
  /* ------------------------------------------------------------------ */

  get _lang() {
    return bestLanguage(this._config.language || this.hass?.language);
  }

  _t(key) {
    return localize(this._lang, 'ui', key);
  }

  _stateText(state) {
    const custom = this._config.state_text || {};
    if (custom[state]) return custom[state];
    return localize(this._lang, 'states', state);
  }

  _errorName(key, stateObj) {
    const name =
      LANGUAGES[this._lang]?.errors?.[key] ?? LANGUAGES.en.errors?.[key];
    return name || stateObj?.attributes.friendly_name || key;
  }

  /* ------------------------------------------------------------------ */
  /* entity discovery                                                    */
  /* ------------------------------------------------------------------ */

  // Shared role-matching engine, used for the charger device and for the
  // optional paired energy meter.
  _matchRoles(rolesSpec, overrides, deviceEntities, prefix) {
    const hass = this.hass;
    const roleEntries = Object.entries(rolesSpec);
    const roles = {};
    const claimed = new Set();
    const claim = (role, eid) => {
      roles[role] = eid;
      claimed.add(eid);
    };

    // 0. explicit overrides
    for (const [role] of roleEntries) {
      if (overrides[role]) claim(role, overrides[role]);
    }
    // 1. entity registry translation_key (language independent)
    for (const [role, spec] of roleEntries) {
      if (roles[role] || !deviceEntities.length) continue;
      const found = deviceEntities.find(
        (e) =>
          !claimed.has(e.entity_id) &&
          e.entity_id.startsWith(`${spec.domain}.`) &&
          spec.keys?.includes(e.translation_key)
      );
      if (found) claim(role, found.entity_id);
    }
    // 2. exact `<domain>.<prefix><suffix>` entity ids
    for (const [role, spec] of roleEntries) {
      if (roles[role]) continue;
      for (const suffix of spec.suffixes || []) {
        const eid = `${spec.domain}.${prefix}${suffix}`;
        if (!claimed.has(eid) && hass.states[eid]) {
          claim(role, eid);
          break;
        }
      }
    }
    // 3. suffix match. A candidate is skipped when a *longer* suffix of a
    //    different role also matches, so `current` can never steal
    //    `..._installation_current`.
    const allSuffixes = roleEntries.flatMap(([, s]) => s.suffixes || []);
    for (const [role, spec] of roleEntries) {
      if (roles[role]) continue;
      const pool = deviceEntities.length
        ? deviceEntities.map((e) => e.entity_id)
        : Object.keys(hass.states).filter((id) =>
            id.startsWith(`${spec.domain}.${prefix}`)
          );
      outer: for (const suffix of spec.suffixes || []) {
        for (const id of pool) {
          if (
            claimed.has(id) ||
            !id.startsWith(`${spec.domain}.`) ||
            !id.endsWith(suffix)
          ) {
            continue;
          }
          const longerMatch = allSuffixes.some(
            (s2) =>
              s2.length > suffix.length &&
              !(spec.suffixes || []).includes(s2) &&
              id.endsWith(s2)
          );
          if (longerMatch) continue;
          claim(role, id);
          break outer;
        }
      }
    }
    // 4. unique device_class among the remaining device entities
    for (const [role, spec] of roleEntries) {
      if (roles[role] || !spec.device_class || !deviceEntities.length) continue;
      const candidates = deviceEntities.filter(
        (e) =>
          !claimed.has(e.entity_id) &&
          e.entity_id.startsWith(`${spec.domain}.`) &&
          hass.states[e.entity_id]?.attributes.device_class ===
            spec.device_class
      );
      if (candidates.length === 1) claim(role, candidates[0].entity_id);
    }
    return roles;
  }

  _deviceEntitiesOf(anchorEid) {
    const registry = this.hass.entities || {};
    const deviceId = registry[anchorEid]?.device_id;
    return {
      deviceId,
      deviceEntities: deviceId
        ? Object.values(registry).filter((e) => e.device_id === deviceId)
        : [],
    };
  }

  _discover() {
    const stateEid = this._config.entity;
    const { deviceId, deviceEntities } = this._deviceEntitiesOf(stateEid);

    // Cache: recompute only when the device (or config) changes.
    const key = `${stateEid}|${deviceId || 'nodevice'}`;
    if (this._roles && this._rolesKey === key) return this._roles;

    const hass = this.hass;
    const overrides = this._config.entities || {};
    const prefix = stateEid.split('.')[1].replace(/_(state|stato)$/, '');

    const roles = this._matchRoles(
      ENTITY_ROLES,
      overrides,
      deviceEntities,
      prefix
    );
    roles.state = roles.state || stateEid;

    // Diagnostic binary sensors -> error list
    let errors = [];
    if (Array.isArray(overrides.errors)) {
      errors = overrides.errors;
    } else if (deviceEntities.length) {
      errors = deviceEntities
        .filter(
          (e) =>
            e.entity_id.startsWith('binary_sensor.') &&
            (ERROR_KEYS.includes(e.translation_key) ||
              ERROR_KEYS.some((k) => e.entity_id.endsWith(`_${k}`)))
        )
        .map((e) => e.entity_id);
    } else {
      errors = ERROR_KEYS.map((k) => `binary_sensor.${prefix}_${k}`).filter(
        (id) => hass.states[id]
      );
    }
    roles.errors = errors;

    this._roles = roles;
    this._rolesKey = key;
    return roles;
  }

  // Roles of the paired Lektri.co energy meter (EM / 3EM), attached via
  // `meter_entity` (any entity of the meter device).
  _discoverMeter() {
    const anchor = this._config.meter_entity;
    if (!anchor) return {};
    const { deviceId, deviceEntities } = this._deviceEntitiesOf(anchor);
    const key = `${anchor}|${deviceId || 'nodevice'}`;
    if (this._meterRoles && this._meterKey === key) return this._meterRoles;

    let prefix = anchor.split('.')[1];
    for (const spec of Object.values(METER_ROLES)) {
      for (const suffix of spec.suffixes || []) {
        if (prefix.endsWith(suffix)) {
          prefix = prefix.slice(0, -suffix.length);
          break;
        }
      }
    }
    const roles = this._matchRoles(METER_ROLES, {}, deviceEntities, prefix);
    this._meterRoles = roles;
    this._meterKey = key;
    return roles;
  }

  _isThreePhase() {
    const roles = this._discover();
    return Boolean(roles.current_l1 || roles.voltage_l1);
  }

  _stateObj(roleOrEntity) {
    if (!roleOrEntity) return undefined;
    if (roleOrEntity.includes('.')) return this.hass.states[roleOrEntity];
    const eid =
      this._discover()[roleOrEntity] ?? this._discoverMeter()[roleOrEntity];
    return eid ? this.hass.states[eid] : undefined;
  }

  _errorKeyOf(entityId) {
    const key = ERROR_KEYS.find((k) => entityId.endsWith(`_${k}`));
    if (key) return key;
    return this.hass.entities?.[entityId]?.translation_key || entityId;
  }

  /* ------------------------------------------------------------------ */
  /* formatting                                                          */
  /* ------------------------------------------------------------------ */

  _fmt(stateObj) {
    if (!stateObj) return '—';
    const { state, attributes } = stateObj;
    if (state === 'unavailable' || state === 'unknown') return '—';
    // charging time: always render as HH:MM:SS
    if (
      attributes.device_class === 'duration' &&
      !Number.isNaN(Number(state))
    ) {
      const total = Math.round(Number(state));
      const h = String(Math.floor(total / 3600)).padStart(2, '0');
      const m = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
      const s = String(total % 60).padStart(2, '0');
      return `${h}:${m}:${s}`;
    }
    if (typeof this.hass.formatEntityState === 'function') {
      try {
        return this.hass.formatEntityState(stateObj);
      } catch (_e) {
        /* fall through */
      }
    }
    const u = attributes.unit_of_measurement
      ? ` ${attributes.unit_of_measurement}`
      : '';
    return `${state}${u}`;
  }

  /* ------------------------------------------------------------------ */
  /* interactions                                                        */
  /* ------------------------------------------------------------------ */

  _moreInfo(entityId) {
    if (entityId) fireEvent(this, 'hass-more-info', { entityId });
  }

  _pressButton(role) {
    const stateObj = this._stateObj(role);
    if (stateObj) {
      this.hass.callService('button', 'press', {
        entity_id: stateObj.entity_id,
      });
    }
  }

  _toggleSwitch(role) {
    const stateObj = this._stateObj(role);
    if (stateObj) {
      this.hass.callService('switch', 'toggle', {
        entity_id: stateObj.entity_id,
      });
    }
  }

  _setNumber(role, value) {
    const stateObj = this._stateObj(role);
    if (stateObj) {
      this.hass.callService('number', 'set_value', {
        entity_id: stateObj.entity_id,
        value,
      });
    }
  }

  _sliderInput(role, ev) {
    this._pendingSlider = {
      ...this._pendingSlider,
      [role]: Number(ev.target.value),
    };
  }

  _sliderChange(role, ev) {
    const value = Number(ev.target.value);
    const pending = { ...this._pendingSlider };
    delete pending[role];
    this._pendingSlider = pending;
    this._setNumber(role, value);
  }

  _runAction(action) {
    if (!action.service) {
      if (action.entity) this._moreInfo(action.entity);
      return;
    }
    if (
      action.confirm &&
      !window.confirm(action.confirm === true ? `${action.text}?` : action.confirm)
    ) {
      return;
    }
    const [domain, service] = action.service.split('.');
    const data = { ...(action.service_data || action.data || {}) };
    // `entity` doubles as the default service target, so simple actions
    // don't have to repeat the id in service_data.
    if (action.entity && !data.entity_id && !action.target) {
      data.entity_id = action.entity;
    }
    this.hass.callService(domain, service, data, action.target);
  }

  _toggleSection(name) {
    this._openSections = {
      ...this._openSections,
      [name]: !this._openSections[name],
    };
  }

  /* ------------------------------------------------------------------ */
  /* render                                                              */
  /* ------------------------------------------------------------------ */

  render() {
    if (!this.hass || !this._config) return nothing;
    const roles = this._discover();
    const stateObj = this.hass.states[roles.state];

    if (!stateObj) {
      return html`<ha-card>
        <div style="padding:16px;color:var(--error-color,#f44336)">
          ${this._t('entity_missing')}: ${roles.state}
        </div>
      </ha-card>`;
    }

    const state = stateObj.state;
    const compact = this._config.compact === true;
    const activeErrors = (roles.errors || [])
      .map((id) => this.hass.states[id])
      .filter((s) => s && s.state === 'on');
    const sections = this._computeSections(compact);

    return html`
      <ha-card class=${classMap({ compact })}>
        ${compact
          ? html`${this._renderCompactTop(stateObj, state)}
            ${this._renderSectionToggleBar(sections, true)}`
          : html`${this._renderTop(state)}
            <div class="status-line">
              ${this._renderStatus(stateObj, state)}
              ${this._renderSectionToggleBar(sections)}
            </div>`}
        ${activeErrors.length ? this._renderErrors(activeErrors) : nothing}
        ${this._config.show_quick_actions !== false
          ? this._renderQuickActions(state)
          : nothing}
        ${this._renderSectionBodies(sections)}
        ${this._config.show_stats !== false
          ? this._renderStats(state, activeErrors)
          : nothing}
      </ha-card>
    `;
  }

  /* ---------- top: side infos + charger image ---------- */

  _defaultInfoColumns() {
    // Three-phase chargers show the three per-phase currents/voltages in
    // the side columns; single-phase ones the plain current/voltage.
    if (this._isThreePhase()) {
      return {
        left: [
          { entity: 'current_l1', decimals: 1 },
          { entity: 'current_l2', decimals: 1 },
          { entity: 'current_l3', decimals: 1 },
          'dynamic_limit',
        ],
        right: ['voltage_l1', 'voltage_l2', 'voltage_l3', 'power'],
      };
    }
    return {
      left: [{ entity: 'current', decimals: 1 }, 'dynamic_limit'],
      right: ['voltage', 'power'],
    };
  }

  _renderTop(state) {
    if (this._config.show_image === false) return nothing;
    const defaults = this._defaultInfoColumns();
    const left = this._config.info_left ?? defaults.left;
    const right = this._config.info_right ?? defaults.right;
    return html`
      <div class="top">
        <div class="side-info left">
          ${left.map((item) => this._renderInfoItem(item))}
        </div>
        ${this._renderImage(state)}
        <div class="side-info right">
          ${right.map((item) => this._renderInfoItem(item))}
        </div>
      </div>
    `;
  }

  // Compact: small image beside the status, one info column with the
  // currents and the dynamic limit (no location, no power).
  _renderCompactTop(stateObj, state) {
    const three = this._isThreePhase();
    const infos =
      this._config.info_right ??
      (three
        ? [
            { entity: 'current_l1', decimals: 1 },
            { entity: 'current_l2', decimals: 1 },
            { entity: 'current_l3', decimals: 1 },
            'dynamic_limit',
          ]
        : [{ entity: 'current', decimals: 1 }, 'dynamic_limit', 'voltage']);
    return html`
      <div class="compact-top">
        ${this._renderImage(state)}
        ${this._renderStatus(stateObj, state, { showLocation: false })}
        <div class="side-info right">
          ${infos.map((item) => this._renderInfoItem(item))}
        </div>
      </div>
    `;
  }

  _renderInfoItem(item) {
    const conf = typeof item === 'string' ? { entity: item } : item;
    const stateObj = this._stateObj(conf.entity);
    if (!stateObj) return nothing;
    const label =
      conf.label ||
      (LANGUAGES.en.ui[conf.entity]
        ? this._t(conf.entity)
        : stateObj.attributes.friendly_name);
    // `decimals` forces a fixed number of decimals on numeric states
    // (e.g. the instantaneous charging current).
    let value;
    const num = Number(stateObj.state);
    if (
      conf.decimals != null &&
      stateObj.state !== '' &&
      !Number.isNaN(num) &&
      stateObj.state !== 'unavailable' &&
      stateObj.state !== 'unknown'
    ) {
      const unit = stateObj.attributes.unit_of_measurement;
      value = `${num.toFixed(conf.decimals)}${unit ? ` ${unit}` : ''}`;
    } else {
      value = this._fmt(stateObj);
    }
    return html`
      <div
        class="info-item"
        @click=${() => this._moreInfo(stateObj.entity_id)}
      >
        <div class="value">
          ${conf.icon ? html`<ha-icon .icon=${conf.icon}></ha-icon>` : nothing}
          ${value}
        </div>
        <div class="label">${label}</div>
      </div>
    `;
  }

  _ledConfig(state) {
    const custom = this._config.led_states || {};
    return {
      ...(DEFAULT_LED_STATES[state] || DEFAULT_LED_STATES.unknown),
      ...(custom[state] || {}),
    };
  }

  _maxAmps() {
    // Per-phase maximum of the charger: read from the dynamic-limit
    // number entity (6-32 A on both the 7.4 kW and the 22 kW models),
    // falling back to the installation current, then 32 A.
    const limit = this._stateObj('dynamic_limit');
    const installation = this._stateObj('installation_current');
    return (
      Number(limit?.attributes.max) ||
      Number(installation?.state) ||
      32
    );
  }

  _ledPeriod() {
    // Spin speed follows the charging current, like the real device,
    // normalized to this charger's actual maximum.
    const current = this._stateObj('current');
    const limit = this._stateObj('dynamic_limit');
    let amps = Number(current?.state);
    if (!amps || Number.isNaN(amps)) amps = Number(limit?.state) || 8;
    const { slowest, fastest } = {
      ...DEFAULT_LED_SPIN,
      ...(this._config.led_spin || {}),
    };
    const max = this._maxAmps();
    const period = slowest - (Math.min(amps, max) / max) * (slowest - fastest);
    return `${Math.max(period, fastest).toFixed(2)}s`;
  }

  _renderImage(state) {
    const led = this._ledConfig(state);
    const ledStyles = {
      '--led-color': led.color,
      '--led-period': this._ledPeriod(),
    };
    const ledClass = `leds anim-${led.animation || 'none'}`;
    const image = this._config.image;
    const showLeds = this._config.show_leds !== false;

    let inner;
    if (image && image !== 'svg') {
      const pos = this._config.led_overlay_position || {};
      const overlayStyles = {
        ...ledStyles,
        '--led-overlay-left': pos.left,
        '--led-overlay-top': pos.top,
        '--led-overlay-size': pos.size,
      };
      inner = html`
        <img class="custom-image" src=${image} alt="charger" />
        ${showLeds
          ? html`<div class=${ledClass} style=${styleMap(overlayStyles)}>
              ${ledOverlaySvg()}
            </div>`
          : nothing}
      `;
    } else {
      inner = html`
        <div
          class=${showLeds ? ledClass : 'leds-off'}
          style=${styleMap(ledStyles)}
        >
          ${chargerSvg()}
        </div>
      `;
    }

    return html`
      <div
        class="image-wrap"
        @click=${() => this._moreInfo(this._config.entity)}
      >
        ${inner}
      </div>
    `;
  }

  /* ---------- status ---------- */

  _substatusText() {
    // 1. explicit helper entity (e.g. an input_text set by automations)
    if (this._config.substatus_entity) {
      const sub = this.hass.states[this._config.substatus_entity];
      if (sub && sub.state && !['unknown', 'unavailable'].includes(sub.state)) {
        return sub.state;
      }
      return undefined;
    }
    // 2. derived from the actions: every action whose `entity` is `on`
    //    contributes its text (or its `substatus` string). Works out of
    //    the box when each mode-automation disables the others.
    if (this._config.substatus_from_actions === false) return undefined;
    const active = (this._config.actions || []).filter(
      (a) =>
        a.entity &&
        a.substatus !== false &&
        this.hass.states[a.entity]?.state === 'on'
    );
    if (!active.length) return undefined;
    return active
      .map((a) =>
        typeof a.substatus === 'string' ? a.substatus : a.text || a.name
      )
      .join(' · ');
  }

  _renderStatus(stateObj, state, { showLocation = true } = {}) {
    const name = this._config.name || stateObj.attributes.friendly_name;
    const location = showLocation ? this._config.location : undefined;
    const substatus = this._substatusText();
    return html`
      <div class="status" @click=${() => this._moreInfo(this._config.entity)}>
        ${this._config.show_name !== false
          ? html`<div class="name">
              ${name}${location ? ` — ${location}` : ''}
            </div>`
          : nothing}
        <div
          class=${classMap({
            state: true,
            'state-error': state === 'error',
            'state-charging': state === 'charging',
          })}
        >
          ${this._stateText(state)}
        </div>
        ${substatus
          ? html`<div class="substatus">${substatus}</div>`
          : nothing}
      </div>
    `;
  }

  /* ---------- errors ---------- */

  _renderErrors(activeErrors) {
    return html`
      <div class="error-banner">
        <div class="title">
          <ha-icon icon="mdi:alert-circle"></ha-icon>
          ${this._t('errors')}
        </div>
        <ul>
          ${activeErrors.map(
            (s) => html`<li
              @click=${() => this._moreInfo(s.entity_id)}
            >
              ${this._errorName(this._errorKeyOf(s.entity_id), s)}
            </li>`
          )}
        </ul>
      </div>
    `;
  }

  /* ---------- quick actions ---------- */

  // Default 4 built-in candidates, kept for backward compatibility when
  // `quick_actions` isn't set.
  static QUICK_ACTION_DEFAULTS = ['start', 'stop', 'authentication', 'lock'];

  // Device action ids excluded from the quick-actions pool: one-off /
  // destructive operations, not a good fit for a persistent button.
  static QUICK_ACTION_EXCLUDED_DEVICE_IDS = [
    'schedule_override',
    'reboot',
    'meter_reboot',
  ];

  // Builds the full pool of buttons the user can pick `quick_actions`
  // from: the built-in charge/auth/lock controls, the discovered device
  // chips (minus the one-off ones above), and every configured custom
  // action (referenced by its `id`, or `custom:<index>` otherwise).
  _quickActionCandidates(state) {
    const candidates = [];

    const start = this._stateObj('charge_start');
    if (start) {
      candidates.push({
        id: 'start',
        render: () => html`
          <button
            class="qa-button"
            .disabled=${state === 'charging'}
            @click=${() => this._pressButton('charge_start')}
          >
            <ha-icon icon="mdi:play"></ha-icon>${this._t('start')}
          </button>
        `,
      });
    }
    const stop = this._stateObj('charge_stop');
    if (stop) {
      candidates.push({
        id: 'stop',
        render: () => html`
          <button
            class="qa-button"
            .disabled=${state !== 'charging' && state !== 'paused'}
            @click=${() => this._pressButton('charge_stop')}
          >
            <ha-icon icon="mdi:stop"></ha-icon>${this._t('stop')}
          </button>
        `,
      });
    }
    const auth = this._stateObj('authentication');
    if (auth) {
      candidates.push({
        id: 'authentication',
        render: () => html`
          <button
            class=${classMap({
              'qa-button': true,
              active: auth.state === 'on',
            })}
            @click=${() => this._toggleSwitch('authentication')}
          >
            <ha-icon icon="mdi:fingerprint"></ha-icon>${this._t(
              'authentication'
            )}
          </button>
        `,
      });
    }
    const lock = this._stateObj('lock');
    if (lock) {
      candidates.push({
        id: 'lock',
        render: () => html`
          <button
            class=${classMap({
              'qa-button': true,
              active: lock.state === 'on',
            })}
            @click=${() => this._toggleSwitch('lock')}
          >
            <ha-icon
              icon=${lock.state === 'on'
                ? 'mdi:lock'
                : 'mdi:lock-open-outline'}
            ></ha-icon
            >${this._t('lock')}
          </button>
        `,
      });
    }

    for (const chip of this._deviceActions()) {
      if (
        LektricoChargerCard.QUICK_ACTION_EXCLUDED_DEVICE_IDS.includes(chip.id)
      ) {
        continue;
      }
      candidates.push({
        id: chip.id,
        render: () => html`
          <button
            class=${classMap({ 'qa-button': true, active: !!chip.active })}
            @click=${() => {
              if (chip.confirm && !window.confirm(`${chip.text}?`)) return;
              chip.run();
            }}
          >
            <ha-icon icon=${chip.icon}></ha-icon>${chip.text}
          </button>
        `,
      });
    }

    (this._config.actions || []).forEach((action, i) => {
      const stateObj = action.entity
        ? this.hass.states[action.entity]
        : undefined;
      const active = stateObj?.state === 'on';
      candidates.push({
        id: action.id || `custom:${i}`,
        render: () => html`
          <button
            class=${classMap({ 'qa-button': true, active })}
            @click=${() => this._runAction(action)}
          >
            ${action.icon
              ? html`<ha-icon icon=${action.icon}></ha-icon>`
              : nothing}${action.text || action.name || action.entity}
          </button>
        `,
      });
    });

    return candidates;
  }

  _renderQuickActions(state) {
    const candidates = this._quickActionCandidates(state);
    const selected = this._config.quick_actions;
    const chosen = Array.isArray(selected)
      ? selected
          .map((id) => candidates.find((c) => c.id === id))
          .filter(Boolean)
          .slice(0, 4)
      : candidates.filter((c) =>
          LektricoChargerCard.QUICK_ACTION_DEFAULTS.includes(c.id)
        );
    if (!chosen.length) return nothing;
    return html`<div class="quick-actions">
      ${chosen.map((c) => c.render())}
    </div>`;
  }

  /* ---------- collapsible sections ---------- */

  // Each section can be disabled individually (show_parameters /
  // show_info / show_actions: false). In compact view only the Actions
  // section is kept. Sections are toggled from a lateral icon bar (next
  // to the status text) and any number can be open at once; their
  // content renders below, in its usual place, separated by a divider.
  _computeSections(compact = false) {
    const sections = [];
    if (!compact && this._config.show_parameters !== false) {
      sections.push({
        id: 'parameters',
        icon: 'mdi:speedometer',
        title:
      this._config.section_titles?.parameters || this._t('parameters'),
        body: () => this._renderParameters(),
      });
    }
    if (!compact && this._config.show_info !== false) {
      sections.push({
        id: 'info',
        icon: 'mdi:information-outline',
        title: this._config.section_titles?.info || this._t('info'),
        body: () => this._renderInfoList(),
      });
    }
    if (this._config.show_actions !== false) {
      const actionsGrid = this._renderActionsGrid();
      if (actionsGrid !== nothing) {
        sections.push({
          id: 'actions',
          icon: 'mdi:gesture-tap-button',
          title: this._config.section_titles?.actions || this._t('actions'),
          body: () => actionsGrid,
        });
      }
    }
    return sections;
  }

  _renderSectionToggleBar(sections, horizontal = false) {
    if (!sections.length) return nothing;
    return html`
      <div
        class=${classMap({ 'section-toggle-bar': true, horizontal })}
      >
        ${sections.map(
          (s) => html`
            <button
              class=${classMap({
                'section-toggle': true,
                active: !!this._openSections[s.id],
              })}
              title=${s.title}
              aria-label=${s.title}
              @click=${() => this._toggleSection(s.id)}
            >
              <ha-icon icon=${s.icon}></ha-icon>
            </button>
          `
        )}
      </div>
    `;
  }

  _renderSectionBodies(sections) {
    const open = sections.filter((s) => this._openSections[s.id]);
    if (!open.length) return nothing;
    return html`
      <div class="sections">
        ${open.map(
          (s, i) => html`
            <div
              class=${classMap({ 'section-body': true, divider: i > 0 })}
            >
              ${s.body()}
            </div>
          `
        )}
      </div>
    `;
  }

  /* ---------- parameters section ---------- */

  _renderSlider(role, labelKey, presets, unit) {
    const stateObj = this._stateObj(role);
    if (!stateObj) return nothing;
    const attr = stateObj.attributes;
    const min = Number(attr.min ?? 0);
    const max = Number(attr.max ?? 100);
    const step = Number(attr.step ?? 1);
    const raw = Number(stateObj.state);
    const current =
      this._pendingSlider[role] ?? (Number.isNaN(raw) ? min : raw);
    const u = unit || attr.unit_of_measurement || '';
    const usablePresets = (presets || []).filter(
      (p) => p >= min && p <= max
    );
    return html`
      <div class="slider-row">
        <div class="slider-head">
          <span>${this._t(labelKey)}</span>
          <span class="val">${current}${u ? ` ${u}` : ''}</span>
        </div>
        <input
          type="range"
          min=${min}
          max=${max}
          step=${step}
          .value=${String(current)}
          @input=${(ev) => this._sliderInput(role, ev)}
          @change=${(ev) => this._sliderChange(role, ev)}
        />
        ${usablePresets.length
          ? html`<div class="presets">
              ${usablePresets.map(
                (p) => html`
                  <button
                    class=${classMap({
                      'preset-chip': true,
                      active: Number(current) === p,
                    })}
                    @click=${() => this._setNumber(role, p)}
                  >
                    ${p}${u ? ` ${u}` : ''}
                  </button>
                `
              )}
            </div>`
          : nothing}
      </div>
    `;
  }

  _renderParameters() {
    const auth = this._stateObj('authentication');
    const lock = this._stateObj('lock');
    const forceSinglePhase = this._stateObj('force_single_phase');
    return html`
      ${this._renderSlider(
        'dynamic_limit',
        'dynamic_limit',
        this._config.current_presets ?? DEFAULT_CURRENT_PRESETS,
        'A'
      )}
      ${this._renderSlider(
        'led_brightness',
        'led_brightness',
        this._config.brightness_presets ?? DEFAULT_BRIGHTNESS_PRESETS,
        '%'
      )}
      <div class="toggle-list">
        ${auth ? this._renderToggle('authentication', auth, 'mdi:fingerprint') : nothing}
        ${lock ? this._renderToggle('lock', lock, 'mdi:lock-outline') : nothing}
        ${forceSinglePhase
          ? this._renderToggle('force_single_phase', forceSinglePhase, 'mdi:sine-wave')
          : nothing}
      </div>
    `;
  }

  _renderToggle(role, stateObj, icon) {
    return html`
      <div class="toggle-row">
        <ha-icon icon=${icon}></ha-icon>
        <span class="grow" @click=${() => this._moreInfo(stateObj.entity_id)}>
          ${this._t(role)}
        </span>
        <ha-switch
          .checked=${stateObj.state === 'on'}
          @change=${() => this._toggleSwitch(role)}
        ></ha-switch>
      </div>
    `;
  }

  /* ---------- info section ---------- */

  _renderInfoList() {
    const defaults = [
      { entity: 'installation_current', icon: 'mdi:gauge' },
      { entity: 'lifetime_energy', icon: 'mdi:counter' },
      { entity: 'limit_reason', icon: 'mdi:information-outline' },
      { entity: 'temperature', icon: 'mdi:thermometer' },
    ];
    // Paired energy meter, when attached via `meter_entity`.
    if (this._stateObj('breaker_current')) {
      defaults.push({ entity: 'breaker_current', icon: 'mdi:fuse' });
    }
    if (this._stateObj('meter_power')) {
      defaults.push({ entity: 'meter_power', icon: 'mdi:flash' });
    }
    const items = this._config.info_items ?? defaults;
    const rows = items
      .map((item) => {
        const conf = typeof item === 'string' ? { entity: item } : item;
        const stateObj = this._stateObj(conf.entity);
        if (!stateObj) return nothing;
        const label =
          conf.label ||
          (LANGUAGES.en.ui[conf.entity]
            ? this._t(conf.entity)
            : stateObj.attributes.friendly_name);
        return html`
          <div
            class="info-row"
            @click=${() => this._moreInfo(stateObj.entity_id)}
          >
            <ha-icon icon=${conf.icon || 'mdi:information-outline'}></ha-icon>
            <span class="name">${label}</span>
            <span class="val">${this._fmt(stateObj)}</span>
          </div>
        `;
      })
      .filter((r) => r !== nothing);

    const update = this._stateObj('update');
    if (update) {
      rows.push(html`
        <div
          class="info-row"
          @click=${() => this._moreInfo(update.entity_id)}
        >
          <ha-icon icon="mdi:chip"></ha-icon>
          <span class="name">${this._t('firmware')}</span>
          <span class="val">
            ${update.attributes.installed_version || '—'}
            ${update.state === 'on' ? ' ⬆' : ''}
          </span>
        </div>
      `);
    }
    return html`<div class="info-list">${rows}</div>`;
  }

  /* ---------- actions: device chips + custom chips ---------- */

  // Chips auto-discovered from the charger and the optional energy
  // meter; rendered with a distinct (filled) style.
  _deviceActions() {
    if (this._config.show_device_actions === false) return [];
    const chips = [];
    const scheduleOverride = this._stateObj('schedule_override');
    if (scheduleOverride) {
      chips.push({
        id: 'schedule_override',
        text: this._t('schedule_override'),
        icon: 'mdi:calendar-clock',
        run: () => this._pressButton('schedule_override'),
      });
    }
    const forceSinglePhase = this._stateObj('force_single_phase');
    if (forceSinglePhase) {
      chips.push({
        id: 'force_single_phase',
        text: this._t('force_single_phase'),
        icon: 'mdi:sine-wave',
        active: forceSinglePhase.state === 'on',
        run: () => this._toggleSwitch('force_single_phase'),
      });
    }
    const lbMode = this._stateObj('lb_mode');
    if (lbMode && Array.isArray(lbMode.attributes.options)) {
      for (const option of lbMode.attributes.options) {
        chips.push({
          id: `lb_mode:${option}`,
          text: `${this._t('lb_mode')}: ${option}`,
          icon: 'mdi:scale-balance',
          active: lbMode.state === option,
          run: () =>
            this.hass.callService('select', 'select_option', {
              entity_id: lbMode.entity_id,
              option,
            }),
        });
      }
    }
    const reboot = this._stateObj('reboot');
    if (reboot) {
      chips.push({
        id: 'reboot',
        text: this._t('reboot'),
        icon: 'mdi:restart',
        confirm: true,
        run: () => this._pressButton('reboot'),
      });
    }
    const meterReboot = this._stateObj('meter_reboot');
    if (meterReboot && meterReboot.entity_id !== reboot?.entity_id) {
      chips.push({
        id: 'meter_reboot',
        text: this._t('meter_reboot'),
        icon: 'mdi:restart',
        confirm: true,
        run: () => this._pressButton('meter_reboot'),
      });
    }
    return chips;
  }

  _renderActionsGrid() {
    const custom = this._config.actions || [];
    const device = this._deviceActions();
    if (!custom.length && !device.length) return nothing;
    const both = custom.length > 0 && device.length > 0;
    return html`
      <div class="actions-grid">
        ${both
          ? html`<div class="actions-caption">
              ${this._t('device_actions')}
            </div>`
          : nothing}
        ${device.map(
          (chip) => html`
            <button
              class=${classMap({
                'action-chip': true,
                device: true,
                active: !!chip.active,
              })}
              @click=${() => {
                if (chip.confirm && !window.confirm(`${chip.text}?`)) return;
                chip.run();
              }}
            >
              <ha-icon icon=${chip.icon}></ha-icon>
              ${chip.text}
            </button>
          `
        )}
        ${both
          ? html`<div class="actions-caption">
              ${this._t('custom_actions')}
            </div>`
          : nothing}
        ${custom.map((action) => {
          const stateObj = action.entity
            ? this.hass.states[action.entity]
            : undefined;
          const active = stateObj?.state === 'on';
          return html`
            <button
              class=${classMap({ 'action-chip': true, active })}
              @click=${() => this._runAction(action)}
            >
              ${action.icon
                ? html`<ha-icon icon=${action.icon}></ha-icon>`
                : nothing}
              ${action.text || action.name || action.entity}
            </button>
          `;
        })}
      </div>
    `;
  }

  /* ---------- stats ---------- */

  _renderStats(state, activeErrors) {
    const defaults = [
      { entity: 'session_energy', label: this._t('energy') },
      { entity: 'charging_time', label: this._t('charging_time') },
      { entity: 'temperature', label: this._t('temperature') },
    ];
    const statsConfig = this._config.stats || {};
    let items = Array.isArray(statsConfig)
      ? statsConfig
      : statsConfig[state] || statsConfig.default || defaults;

    // In error state, surface the active error sensors instead.
    if (state === 'error' && activeErrors.length && !statsConfig.error) {
      items = activeErrors.map((s) => ({
        entity: s.entity_id,
        label: this._errorName(this._errorKeyOf(s.entity_id), s),
        value: '⚠',
      }));
    }

    return html`
      <div class="stats">
        ${items.map((item) => {
          const conf = typeof item === 'string' ? { entity: item } : item;
          const stateObj = this._stateObj(conf.entity);
          if (!stateObj) return nothing;
          const label =
            conf.label ||
            (LANGUAGES.en.ui[conf.entity]
              ? this._t(conf.entity)
              : stateObj.attributes.friendly_name);
          return html`
            <div
              class="stat"
              @click=${() => this._moreInfo(stateObj.entity_id)}
            >
              <div class="value">${conf.value || this._fmt(stateObj)}</div>
              <div class="label">${label}</div>
            </div>
          `;
        })}
      </div>
    `;
  }
}

if (!customElements.get(CARD_NAME)) {
  customElements.define(CARD_NAME, LektricoChargerCard);
}

window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === CARD_NAME)) {
  window.customCards.push({
    type: CARD_NAME,
    name: 'Lektri.co Charger Card',
    description:
      'Card for Lektri.co EV chargers (1P7K / One / 3P22K / Tri) with animated status LEDs.',
    preview: true,
  });
}

console.info(
  `%c LEKTRICO-CHARGER-CARD %c v${CARD_VERSION} `,
  'color: white; background: #1b1c1e; font-weight: 700;',
  'color: #4caf50; background: #26282a; font-weight: 700;'
);
