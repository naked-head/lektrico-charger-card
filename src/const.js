export const CARD_VERSION = '1.1.0';

export const CARD_NAME = 'lektrico-charger-card';

// States reported by the Home Assistant core `lektrico` integration
// (sensor.<device>_state).
export const CHARGER_STATES = [
  'available',
  'connected',
  'need_auth',
  'charging',
  'error',
  'locked',
  'paused',
  'paused_by_scheduler',
  'updating_firmware',
];

// Default LED behaviour per charger state, mirroring the real device:
//   green        = idle / unplugged
//   blue         = EV connected / charge complete
//   white (spin) = charging, spin speed follows the charging current
//   red          = error
// Every entry can be overridden from YAML via `led_states`.
export const DEFAULT_LED_STATES = {
  available: { color: '#4caf50', animation: 'none' },
  connected: { color: '#2196f3', animation: 'none' },
  need_auth: { color: '#2196f3', animation: 'pulse' },
  charging: { color: '#ffffff', animation: 'spin' },
  paused: { color: '#2196f3', animation: 'pulse' },
  paused_by_scheduler: { color: '#2196f3', animation: 'pulse' },
  locked: { color: '#ff5722', animation: 'none' },
  error: { color: '#f44336', animation: 'pulse' },
  updating_firmware: { color: '#ab47bc', animation: 'pulse' },
  unavailable: { color: '#616161', animation: 'none' },
  unknown: { color: '#616161', animation: 'none' },
};

export const DEFAULT_STATE_TEXT = {
  en: {
    available: 'Unplugged',
    connected: 'Connected',
    need_auth: 'Waiting for authentication',
    charging: 'Charging',
    error: 'Error',
    locked: 'Locked',
    paused: 'Paused',
    paused_by_scheduler: 'Paused by scheduler',
    updating_firmware: 'Updating firmware',
    unavailable: 'Unavailable',
    unknown: 'Unknown',
  },
  it: {
    available: 'Scollegato',
    connected: 'Connesso',
    need_auth: 'In attesa di autenticazione',
    charging: 'In carica',
    error: 'Errore',
    locked: 'Bloccato',
    paused: 'In pausa',
    paused_by_scheduler: 'In pausa (programmata)',
    updating_firmware: 'Aggiornamento firmware',
    unavailable: 'Non disponibile',
    unknown: 'Sconosciuto',
  },
};

export const STRINGS = {
  en: {
    parameters: 'Parameters',
    info: 'Information',
    actions: 'Actions',
    start: 'Start',
    stop: 'Stop',
    reboot: 'Reboot',
    authentication: 'Authentication',
    lock: 'Lock',
    dynamic_limit: 'Charging current',
    led_brightness: 'LED brightness',
    energy: 'Energy',
    charging_time: 'Charging time',
    temperature: 'Temperature',
    power: 'Power',
    voltage: 'Voltage',
    current: 'Current',
    installation_current: 'Installation current',
    lifetime_energy: 'Lifetime energy',
    limit_reason: 'Limit reason',
    firmware: 'Firmware',
    errors: 'Active errors',
    entity_missing: 'Entity not found',
  },
  it: {
    parameters: 'Parametri',
    info: 'Informazioni',
    actions: 'Azioni',
    start: 'Avvia',
    stop: 'Ferma',
    reboot: 'Riavvia',
    authentication: 'Autenticazione',
    lock: 'Blocco',
    dynamic_limit: 'Corrente di ricarica',
    led_brightness: 'Luminosità LED',
    energy: 'Energia',
    charging_time: 'Tempo ricarica',
    temperature: 'Temperatura',
    power: 'Potenza',
    voltage: 'Tensione',
    current: 'Corrente',
    installation_current: 'Corrente di installazione',
    lifetime_energy: 'Energia erogata',
    limit_reason: 'Motivo limitazione',
    firmware: 'Firmware',
    errors: 'Errori attivi',
    entity_missing: 'Entità non trovata',
  },
};

// Friendly names for the diagnostic binary sensors of the integration.
export const ERROR_NAMES = {
  en: {
    ev_error: 'Vehicle error',
    ev_diode_short: 'Vehicle communication error',
    overheating: 'Overheating',
    thermal_throttling: 'Thermal throttling',
    metering_error: 'Metering error',
    overcurrent: 'Overcurrent',
    overvoltage: 'Overvoltage',
    undervoltage: 'Undervoltage',
    rcd_error: 'RCD error',
    relay_contacts_welded: 'Relay contacts welded',
  },
  it: {
    ev_error: 'Errore veicolo',
    ev_diode_short: 'Errore comunicazione veicolo',
    overheating: 'Surriscaldamento',
    thermal_throttling: 'Limitazione termica',
    metering_error: 'Errore misuratore',
    overcurrent: 'Sovracorrente',
    overvoltage: 'Sovratensione',
    undervoltage: 'Sottotensione',
    rcd_error: 'Errore RCD',
    relay_contacts_welded: 'Contatti relè incollati',
  },
};

// How card roles map onto the entities created by the `lektrico`
// integration. Matching strategies, in order:
//   1. explicit override from the `entities:` card option
//   2. entity-registry translation_key (language independent)
//   3. entity_id suffix (covers renamed/localized entity ids)
//   4. unique device_class among the device entities
export const ENTITY_ROLES = {
  state: {
    domain: 'sensor',
    keys: ['state'],
    suffixes: ['_state', '_stato'],
  },
  charging_time: {
    domain: 'sensor',
    keys: ['charging_time'],
    suffixes: ['_charging_time', '_tempo_ricarica', '_tempo_di_ricarica'],
  },
  session_energy: {
    domain: 'sensor',
    keys: ['session_energy'],
    suffixes: ['_session_energy', '_energia', '_energia_sessione', '_energy'],
  },
  lifetime_energy: {
    domain: 'sensor',
    keys: ['lifetime_energy'],
    suffixes: ['_lifetime_energy', '_energia_erogata'],
  },
  power: {
    domain: 'sensor',
    keys: ['instant_power', 'power'],
    suffixes: ['_instant_power', '_power', '_potenza'],
    device_class: 'power',
  },
  voltage: {
    domain: 'sensor',
    keys: ['voltage'],
    suffixes: ['_voltage', '_tensione'],
    device_class: 'voltage',
  },
  current: {
    domain: 'sensor',
    keys: ['current'],
    suffixes: ['_current', '_corrente'],
    device_class: 'current',
  },
  installation_current: {
    domain: 'sensor',
    keys: ['installation_current'],
    suffixes: ['_installation_current', '_corrente_di_installazione'],
  },
  limit_reason: {
    domain: 'sensor',
    keys: ['limit_reason'],
    suffixes: ['_limit_reason', '_motivo_limitazione'],
  },
  temperature: {
    domain: 'sensor',
    keys: ['temperature'],
    suffixes: ['_temperature', '_temperatura'],
    device_class: 'temperature',
  },
  dynamic_limit: {
    domain: 'number',
    keys: ['dynamic_limit'],
    suffixes: ['_dynamic_limit', '_limite_dinamico'],
  },
  led_brightness: {
    domain: 'number',
    keys: ['led_max_brightness'],
    suffixes: ['_led_max_brightness', '_led_brightness', '_luminosita_led', '_luminosita_massima_led'],
  },
  authentication: {
    domain: 'switch',
    keys: ['authentication'],
    suffixes: ['_authentication', '_autenticazione'],
  },
  lock: {
    domain: 'switch',
    keys: ['lock'],
    suffixes: ['_lock', '_blocca', '_blocco'],
  },
  charge_start: {
    domain: 'button',
    keys: ['charge_start'],
    suffixes: ['_charge_start', '_avvia_ricarica'],
  },
  charge_stop: {
    domain: 'button',
    keys: ['charge_stop'],
    suffixes: ['_charge_stop', '_ferma_ricarica', '_arresta_ricarica'],
  },
  update: {
    domain: 'update',
    keys: ['firmware'],
    suffixes: ['_firmware'],
  },
};

// translation_keys / suffixes of the diagnostic (error) binary sensors.
export const ERROR_KEYS = [
  'ev_error',
  'ev_diode_short',
  'overheating',
  'thermal_throttling',
  'metering_error',
  'overcurrent',
  'overvoltage',
  'undervoltage',
  'rcd_error',
  'relay_contacts_welded',
];

// Spin animation period bounds (seconds): slowest at minimal current,
// fastest at the charger's maximum current. The maximum is read from the
// dynamic-limit number entity (6-32 A per phase on both 1P7K/One 7.4 kW
// and 3P22K/Tri 22 kW, per the manufacturer's specs), so derated
// installations scale automatically. Overridable via
// `led_spin: {slowest, fastest}`.
export const DEFAULT_LED_SPIN = { slowest: 6.0, fastest: 2.0 };

export const DEFAULT_CURRENT_PRESETS = [6, 10, 13, 16, 20, 25, 32];
export const DEFAULT_BRIGHTNESS_PRESETS = [10, 25, 50, 75, 100];
