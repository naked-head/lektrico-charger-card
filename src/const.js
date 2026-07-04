export const CARD_VERSION = '1.3.0';

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
// Animations: 'spin', 'pulse', 'top' (only the top bar lit, steady,
// like the real device while paused), 'none'.
export const DEFAULT_LED_STATES = {
  available: { color: '#4caf50', animation: 'none' },
  connected: { color: '#2196f3', animation: 'none' },
  need_auth: { color: '#2196f3', animation: 'pulse' },
  charging: { color: '#ffffff', animation: 'spin' },
  paused: { color: '#ffffff', animation: 'top' },
  paused_by_scheduler: { color: '#ffffff', animation: 'top' },
  locked: { color: '#ff5722', animation: 'none' },
  error: { color: '#f44336', animation: 'pulse' },
  updating_firmware: { color: '#ab47bc', animation: 'pulse' },
  unavailable: { color: '#616161', animation: 'none' },
  unknown: { color: '#616161', animation: 'none' },
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
    keys: ['session_energy', 'energy'],
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
  // Three-phase chargers (3P22K / Tri) expose per-phase sensors instead
  // of the single voltage/current ones.
  voltage_l1: {
    domain: 'sensor',
    keys: ['voltage_l1'],
    suffixes: ['_voltage_l1', '_tensione_l1'],
  },
  voltage_l2: {
    domain: 'sensor',
    keys: ['voltage_l2'],
    suffixes: ['_voltage_l2', '_tensione_l2'],
  },
  voltage_l3: {
    domain: 'sensor',
    keys: ['voltage_l3'],
    suffixes: ['_voltage_l3', '_tensione_l3'],
  },
  current_l1: {
    domain: 'sensor',
    keys: ['current_l1'],
    suffixes: ['_current_l1', '_corrente_l1'],
  },
  current_l2: {
    domain: 'sensor',
    keys: ['current_l2'],
    suffixes: ['_current_l2', '_corrente_l2'],
  },
  current_l3: {
    domain: 'sensor',
    keys: ['current_l3'],
    suffixes: ['_current_l3', '_corrente_l3'],
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
  reboot: {
    domain: 'button',
    keys: ['reboot'],
    suffixes: ['_reboot', '_restart', '_riavvia'],
  },
  schedule_override: {
    domain: 'button',
    keys: ['charging_schedule_override'],
    suffixes: ['_charging_schedule_override', '_schedule_override'],
  },
  // Three-phase chargers only.
  force_single_phase: {
    domain: 'switch',
    keys: ['force_single_phase'],
    suffixes: ['_force_single_phase', '_forza_monofase'],
  },
  update: {
    domain: 'update',
    keys: ['firmware'],
    suffixes: ['_firmware'],
  },
};

// Roles of a paired Lektri.co energy meter (EM / 3EM), a separate device
// in the integration. Attached to the card via `meter_entity`.
export const METER_ROLES = {
  lb_mode: {
    domain: 'select',
    keys: ['lb_mode'],
    suffixes: ['_lb_mode', '_load_balancing_mode'],
  },
  breaker_current: {
    domain: 'sensor',
    keys: ['breaker_current'],
    suffixes: ['_breaker_current', '_corrente_interruttore'],
  },
  meter_power: {
    domain: 'sensor',
    keys: ['power'],
    suffixes: ['_power', '_potenza'],
    device_class: 'power',
  },
  meter_reboot: {
    domain: 'button',
    keys: ['reboot'],
    suffixes: ['_reboot', '_restart', '_riavvia'],
  },
};

// translation_keys / suffixes of the diagnostic (error) binary sensors.
// Both the core translation keys (ev_error, overheating, ...) and the
// device keys used in the integration docs (state_e_activated,
// overtemp, ...) are recognized.
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
  'state_e_activated',
  'overtemp',
  'critical_temp',
  'meter_fault',
  'cp_diode_failure',
  'contactor_failure',
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
