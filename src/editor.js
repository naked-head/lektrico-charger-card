import { LitElement, html, nothing } from 'lit';

// GUI editor for the main options. Advanced options (actions, entity
// overrides, per-state LED colors, ...) remain YAML-only and are kept
// untouched by the editor.

const fireEvent = (node, type, detail = {}) => {
  const event = new Event(type, { bubbles: true, composed: true });
  event.detail = detail;
  node.dispatchEvent(event);
};

// Options whose absence means `true`/`false`: pre-filled so the toggles
// reflect the effective value, stripped again when left at the default.
const BOOL_DEFAULTS = {
  compact: false,
  show_leds: true,
  show_stats: true,
  show_quick_actions: true,
  show_name: true,
};

const SCHEMA = [
  { name: 'entity', required: true, selector: { entity: { domain: 'sensor' } } },
  { name: 'name', selector: { text: {} } },
  { name: 'location', selector: { text: {} } },
  { name: 'substatus_entity', selector: { entity: {} } },
  {
    name: '',
    type: 'grid',
    schema: [
      { name: 'compact', selector: { boolean: {} } },
      { name: 'show_leds', selector: { boolean: {} } },
      { name: 'show_stats', selector: { boolean: {} } },
      { name: 'show_quick_actions', selector: { boolean: {} } },
      { name: 'show_name', selector: { boolean: {} } },
    ],
  },
  {
    name: 'language',
    selector: {
      select: {
        mode: 'dropdown',
        options: [
          { value: '', label: 'Auto' },
          { value: 'en', label: 'English' },
          { value: 'it', label: 'Italiano' },
        ],
      },
    },
  },
  { name: 'image', selector: { text: {} } },
];

const LABELS = {
  en: {
    entity: 'Charger state sensor (required)',
    name: 'Name',
    location: 'Location',
    substatus_entity: 'Substatus entity (optional)',
    compact: 'Compact view',
    show_leds: 'Show LEDs',
    show_stats: 'Show stats',
    show_quick_actions: 'Show quick actions',
    show_name: 'Show name',
    language: 'Language',
    image: 'Custom image (optional path)',
  },
  it: {
    entity: 'Sensore stato del charger (obbligatorio)',
    name: 'Nome',
    location: 'Posizione',
    substatus_entity: 'Entità sottostato (opzionale)',
    compact: 'Vista compatta',
    show_leds: 'Mostra LED',
    show_stats: 'Mostra statistiche',
    show_quick_actions: 'Mostra azioni rapide',
    show_name: 'Mostra nome',
    language: 'Lingua',
    image: 'Immagine personalizzata (percorso, opzionale)',
  },
};

class LektricoChargerCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  setConfig(config) {
    this._config = config;
  }

  get _lang() {
    const lang = (this.hass?.language || 'en').split('-')[0];
    return LABELS[lang] ? lang : 'en';
  }

  _computeLabel = (schema) =>
    LABELS[this._lang][schema.name] || schema.name;

  render() {
    if (!this.hass || !this._config) return nothing;
    const data = { ...BOOL_DEFAULTS, ...this._config };
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  _valueChanged(ev) {
    ev.stopPropagation();
    const config = { ...ev.detail.value };
    for (const [key, def] of Object.entries(BOOL_DEFAULTS)) {
      if (config[key] === def) delete config[key];
    }
    for (const key of ['name', 'location', 'substatus_entity', 'image', 'language']) {
      if (config[key] === '') delete config[key];
    }
    fireEvent(this, 'config-changed', { config });
  }
}

if (!customElements.get('lektrico-charger-card-editor')) {
  customElements.define('lektrico-charger-card-editor', LektricoChargerCardEditor);
}
