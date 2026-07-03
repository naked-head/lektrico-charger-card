import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './styles.js';
import { chargerSvg, ledOverlaySvg } from './charger-svg.js';
import {
  CARD_VERSION,
  CARD_NAME,
  DEFAULT_LED_STATES,
  DEFAULT_STATE_TEXT,
  STRINGS,
  ERROR_NAMES,
  ENTITY_ROLES,
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
    _openSection: { state: true },
    _pendingSlider: { state: true },
  };

  constructor() {
    super();
    this._openSection = null;
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

  /* ------------------------------------------------------------------ */
  /* localization                                                        */
  /* ------------------------------------------------------------------ */

  get _lang() {
    const lang = this._config.language || this.hass?.language || 'en';
    return lang.split('-')[0];
  }

  _t(key) {
    const lang = STRINGS[this._lang] ? this._lang : 'en';
    return STRINGS[lang][key] || STRINGS.en[key] || key;
  }

  _stateText(state) {
    const custom = this._config.state_text || {};
    if (custom[state]) return custom[state];
    const lang = DEFAULT_STATE_TEXT[this._lang] ? this._lang : 'en';
    return DEFAULT_STATE_TEXT[lang][state] || state;
  }

  _errorName(key, stateObj) {
    const lang = ERROR_NAMES[this._lang] ? this._lang : 'en';
    return (
      ERROR_NAMES[lang][key] ||
      stateObj?.attributes.friendly_name ||
      key
    );
  }

  /* ------------------------------------------------------------------ */
  /* entity discovery                                                    */
  /* ------------------------------------------------------------------ */

  _discover() {
    const hass = this.hass;
    const stateEid = this._config.entity;
    const registry = hass.entities || {};
    const deviceId = registry[stateEid]?.device_id;

    // Cache: recompute only when the device (or config) changes.
    const key = `${stateEid}|${deviceId || 'nodevice'}`;
    if (this._roles && this._rolesKey === key) return this._roles;

    const overrides = this._config.entities || {};
    const deviceEntities = deviceId
      ? Object.values(registry).filter((e) => e.device_id === deviceId)
      : [];
    const prefix = stateEid
      .split('.')[1]
      .replace(/_(state|stato)$/, '');

    const roles = {};
    for (const [role, spec] of Object.entries(ENTITY_ROLES)) {
      if (overrides[role]) {
        roles[role] = overrides[role];
        continue;
      }
      let found;
      // 1. entity registry translation_key (language independent)
      if (deviceEntities.length) {
        found = deviceEntities.find(
          (e) =>
            e.entity_id.startsWith(`${spec.domain}.`) &&
            spec.keys?.includes(e.translation_key)
        );
      }
      // 2. entity_id suffix
      if (!found) {
        const pool = deviceEntities.length
          ? deviceEntities.map((e) => e.entity_id)
          : Object.keys(hass.states).filter((id) =>
              id.startsWith(`${spec.domain}.${prefix}`)
            );
        for (const suffix of spec.suffixes || []) {
          const eid = pool.find(
            (id) => id.startsWith(`${spec.domain}.`) && id.endsWith(suffix)
          );
          if (eid) {
            found = eid;
            break;
          }
        }
      }
      // 3. unique device_class among the device entities
      if (!found && spec.device_class && deviceEntities.length) {
        const candidates = deviceEntities.filter(
          (e) =>
            e.entity_id.startsWith(`${spec.domain}.`) &&
            hass.states[e.entity_id]?.attributes.device_class ===
              spec.device_class
        );
        if (candidates.length === 1) found = candidates[0];
      }
      if (found) roles[role] = found.entity_id || found;
    }
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

  _stateObj(roleOrEntity) {
    if (!roleOrEntity) return undefined;
    if (roleOrEntity.includes('.')) return this.hass.states[roleOrEntity];
    const roles = this._discover();
    const eid = roles[roleOrEntity];
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
    this.hass.callService(domain, service, data, action.target);
  }

  _toggleSection(name) {
    this._openSection = this._openSection === name ? null : name;
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

    return html`
      <ha-card class=${classMap({ compact })}>
        ${this._renderTop(state)}
        ${this._renderStatus(stateObj, state)}
        ${activeErrors.length ? this._renderErrors(activeErrors) : nothing}
        ${this._config.show_quick_actions !== false
          ? this._renderQuickActions(state)
          : nothing}
        ${compact ? nothing : this._renderSections()}
        ${this._config.show_stats !== false
          ? this._renderStats(state, activeErrors)
          : nothing}
      </ha-card>
    `;
  }

  /* ---------- top: side infos + charger image ---------- */

  _renderTop(state) {
    if (this._config.show_image === false) return nothing;
    const left = this._config.info_left ?? ['current', 'dynamic_limit'];
    const right = this._config.info_right ?? ['voltage', 'power'];
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

  _renderInfoItem(item) {
    const conf = typeof item === 'string' ? { entity: item } : item;
    const stateObj = this._stateObj(conf.entity);
    if (!stateObj) return nothing;
    const label =
      conf.label ||
      (typeof item === 'string' && STRINGS.en[item]
        ? this._t(item)
        : stateObj.attributes.friendly_name);
    return html`
      <div
        class="info-item"
        @click=${() => this._moreInfo(stateObj.entity_id)}
      >
        <div class="value">
          ${conf.icon ? html`<ha-icon .icon=${conf.icon}></ha-icon>` : nothing}
          ${this._fmt(stateObj)}
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

  _ledPeriod() {
    // Spin speed follows the charging current, like the real device.
    const current = this._stateObj('current');
    const limit = this._stateObj('dynamic_limit');
    let amps = Number(current?.state);
    if (!amps || Number.isNaN(amps)) amps = Number(limit?.state) || 8;
    const { slowest, fastest } = {
      ...DEFAULT_LED_SPIN,
      ...(this._config.led_spin || {}),
    };
    const period = slowest - (Math.min(amps, 32) / 32) * (slowest - fastest);
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

  _renderStatus(stateObj, state) {
    const name = this._config.name || stateObj.attributes.friendly_name;
    const location = this._config.location;
    const substatus = this._config.substatus_entity
      ? this.hass.states[this._config.substatus_entity]
      : undefined;
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
        ${substatus && substatus.state
          ? html`<div class="substatus">${substatus.state}</div>`
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

  _renderQuickActions(state) {
    const start = this._stateObj('charge_start');
    const stop = this._stateObj('charge_stop');
    const auth = this._stateObj('authentication');
    const lock = this._stateObj('lock');
    const buttons = [];

    if (start) {
      buttons.push(html`
        <button
          class="qa-button"
          .disabled=${state === 'charging'}
          @click=${() => this._pressButton('charge_start')}
        >
          <ha-icon icon="mdi:play"></ha-icon>${this._t('start')}
        </button>
      `);
    }
    if (stop) {
      buttons.push(html`
        <button
          class="qa-button"
          .disabled=${state !== 'charging' && state !== 'paused'}
          @click=${() => this._pressButton('charge_stop')}
        >
          <ha-icon icon="mdi:stop"></ha-icon>${this._t('stop')}
        </button>
      `);
    }
    if (auth) {
      buttons.push(html`
        <button
          class=${classMap({ 'qa-button': true, active: auth.state === 'on' })}
          @click=${() => this._toggleSwitch('authentication')}
        >
          <ha-icon icon="mdi:fingerprint"></ha-icon>${this._t('authentication')}
        </button>
      `);
    }
    if (lock) {
      buttons.push(html`
        <button
          class=${classMap({ 'qa-button': true, active: lock.state === 'on' })}
          @click=${() => this._toggleSwitch('lock')}
        >
          <ha-icon
            icon=${lock.state === 'on' ? 'mdi:lock' : 'mdi:lock-open-outline'}
          ></ha-icon
          >${this._t('lock')}
        </button>
      `);
    }
    if (!buttons.length) return nothing;
    return html`<div class="quick-actions">${buttons}</div>`;
  }

  /* ---------- accordion sections ---------- */

  _renderSections() {
    const actions = this._config.actions || [];
    const sections = [
      {
        id: 'parameters',
        icon: 'mdi:speedometer',
        title:
      this._config.section_titles?.parameters || this._t('parameters'),
        body: () => this._renderParameters(),
      },
      {
        id: 'info',
        icon: 'mdi:information-outline',
        title: this._config.section_titles?.info || this._t('info'),
        body: () => this._renderInfoList(),
      },
    ];
    if (actions.length) {
      sections.push({
        id: 'actions',
        icon: 'mdi:gesture-tap-button',
        title: this._config.section_titles?.actions || this._t('actions'),
        body: () => this._renderActions(actions),
      });
    }

    return html`
      <div class="sections">
        ${sections.map(
          (s) => html`
            <div class="section">
              <button
                class="section-header"
                @click=${() => this._toggleSection(s.id)}
              >
                <ha-icon icon=${s.icon}></ha-icon>
                ${s.title}
                <ha-icon
                  class=${classMap({
                    chevron: true,
                    open: this._openSection === s.id,
                  })}
                  icon="mdi:chevron-down"
                ></ha-icon>
              </button>
              ${this._openSection === s.id
                ? html`<div class="section-body">${s.body()}</div>`
                : nothing}
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
    const items = this._config.info_items ?? defaults;
    const rows = items
      .map((item) => {
        const conf = typeof item === 'string' ? { entity: item } : item;
        const stateObj = this._stateObj(conf.entity);
        if (!stateObj) return nothing;
        const label =
          conf.label ||
          (STRINGS.en[conf.entity]
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

  /* ---------- custom actions ---------- */

  _renderActions(actions) {
    return html`
      <div class="actions-grid">
        ${actions.map((action) => {
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
            (STRINGS.en[conf.entity]
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
