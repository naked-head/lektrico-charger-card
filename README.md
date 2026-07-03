# Lektri.co Charger Card

A Home Assistant Lovelace card built specifically for **Lektri.co EV chargers**
(1P7K / One and 3P22K / Tri), on top of the official
[`lektrico`](https://www.home-assistant.io/integrations/lektrico/) core
integration.

Designed as a rethink of the generic
[charger-card](https://github.com/tmjo/charger-card) with the Lektri.co
hardware in mind:

- **Fully responsive** — the charger is drawn as an SVG, it scales with the
  card width and never overlaps the surrounding text, on any device.
- **Real LED behaviour** — the four LED bars mirror the physical device:
  - 🟢 green: unplugged / idle
  - 🔵 blue: EV connected / charge complete
  - ⚪ white spinning: charging — the spin speed follows the actual charging
    current, just like the real charger
  - 🔴 red: error
- **No overlapping dropdowns** — charging current and LED brightness are
  sliders with preset chips that wrap on small screens; every value
  (including 25 A and 32 A) is always reachable. Presets outside the range
  allowed by the charger (`min`/`max` of the number entity) are hidden
  automatically.
- **Auto-discovery** — point the card at the charger's state sensor and every
  other entity of the device (power, voltage, current, dynamic limit, LED
  brightness, authentication, lock, start/stop buttons, diagnostic error
  sensors, firmware) is found automatically through the entity registry.
  Works with renamed and localized entity ids; everything can be overridden.
- **Error handling** — when the charger reports an error, a red banner lists
  the active diagnostic sensors (overheating, RCD, overcurrent, …) with
  friendly names, and the stats row switches to the error view.
- **Quick actions** — start / stop charge, authentication and cable lock as
  one-tap buttons, enabled/disabled based on the charger state.
- **Custom actions** — your own scripts/automations (solar charging, zero
  cost, presets…) as chips in a dedicated section.
- **Localized** — English and Italian out of the box, every text overridable.
- Light & dark theme aware; works in narrow dashboard columns thanks to CSS
  container queries.

## Installation

### HACS (custom repository)

1. HACS → three-dot menu → *Custom repositories*
2. Add `https://github.com/naked-head/charger-card` with type **Dashboard**
3. Install *Lektri.co Charger Card* and reload

### Manual

1. Copy `dist/lektrico-charger-card.js` to `/config/www/`
2. Add the resource: *Settings → Dashboards → Resources* →
   `/local/lektrico-charger-card.js` (JavaScript module)

## Minimal configuration

That is really all you need — everything else is discovered from the device:

```yaml
type: custom:lektrico-charger-card
entity: sensor.1p7k_state
```

## Full example (Italian setup)

```yaml
type: custom:lektrico-charger-card
entity: sensor.1p7k_state
name: Lektri.co
location: Tettoia Macchine
substatus_entity: input_text.caricatore
current_presets: [6, 10, 13, 16, 20, 25, 32]
brightness_presets: [25, 50, 75, 100]
actions:
  - text: Costo Zero
    icon: mdi:currency-eur
    entity: automation.caricatore_costo_zero
    service: automation.turn_on
    service_data:
      entity_id: automation.caricatore_costo_zero
  - text: Costo Zero con Spegnimento
    icon: mdi:currency-eur-off
    entity: automation.caricatore_costo_zero_con_spegnimento
    service: automation.turn_on
    service_data:
      entity_id: automation.caricatore_costo_zero_con_spegnimento
  - text: Modalità Green
    icon: mdi:leaf
    entity: automation.caricatore_modalita_green
    service: automation.turn_on
    service_data:
      entity_id: automation.caricatore_modalita_green
  - text: Modalità Green con Spegnimento
    icon: mdi:leaf-off
    entity: automation.caricatore_modalita_green_con_spegnimento
    service: automation.turn_on
    service_data:
      entity_id: automation.caricatore_modalita_green_con_spegnimento
  - text: Massima Energia 32A
    icon: mdi:battery-high
    service: number.set_value
    service_data:
      entity_id: number.1p7k_limite_dinamico
      value: 32
  - text: Livello Standard 16A
    icon: mdi:battery-medium
    service: number.set_value
    service_data:
      entity_id: number.1p7k_limite_dinamico
      value: 16
  - text: Livello Basso 10A
    icon: mdi:battery-low
    service: number.set_value
    service_data:
      entity_id: number.1p7k_limite_dinamico
      value: 10
```

## Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `entity` | string | **required** | The charger state sensor (`sensor.<device>_state`). |
| `name` | string | friendly name | Charger name shown above the status. |
| `location` | string | — | Shown next to the name. |
| `substatus_entity` | string | — | Any entity whose state is shown under the status (e.g. an `input_text` describing the active charging mode). |
| `compact` | bool | `false` | Smaller image, no collapsible sections. |
| `show_name` / `show_stats` / `show_quick_actions` / `show_image` | bool | `true` | Toggle individual areas of the card. |
| `show_leds` | bool | `true` | Draw the LED cross. |
| `image` | string | built-in SVG | Path/URL of a custom charger image (e.g. `/local/lektri.co.png`). The LED cross is overlaid on top (see `led_overlay_position`). |
| `led_overlay_position` | object | centered | `{left, top, size}` CSS values for the LED overlay on a custom image, e.g. `{left: 28%, top: 25%, size: 44%}`. |
| `led_states` | object | device-like | Override LED color/animation per state: `charging: {color: '#ffffff', animation: spin}`. Animations: `spin`, `pulse`, `none`. |
| `led_spin` | object | `{slowest: 6.0, fastest: 2.0}` | Rotation period (seconds) of the white charging animation: `slowest` at minimal current, `fastest` at 32 A. |
| `state_text` | object | it/en defaults | Override the status text per state (`available`, `connected`, `need_auth`, `charging`, `paused`, `paused_by_scheduler`, `locked`, `error`, `updating_firmware`). |
| `language` | string | HA language | Force `en` or `it`. |
| `current_presets` | list | `[6,10,13,16,20,25,32]` | Preset chips for the charging current. Values outside the charger's allowed range are hidden. |
| `brightness_presets` | list | `[10,25,50,75,100]` | Preset chips for the LED brightness. |
| `info_left` / `info_right` | list | current+limit / voltage+power | Items beside the image. Each item is a role name (`current`, `dynamic_limit`, `voltage`, `power`, …), an entity id, or `{entity, label, icon}`. |
| `info_items` | list | installation current, lifetime energy, limit reason, temperature | Rows of the *Information* section (same item format). |
| `stats` | list or object | energy, time, temperature | Bottom stats. Either a list, or `{default: [...], charging: [...], error: [...]}` per state. |
| `actions` | list | — | Chips in the *Actions* section: `{text, icon, service, service_data, target, entity, confirm}`. `entity` highlights the chip when its state is `on`; `confirm` asks before running. |
| `entities` | object | auto | Override auto-discovery per role: `entities: {power: sensor.my_power, dynamic_limit: number.my_limit, errors: [binary_sensor.a, …]}`. Roles: `state`, `charging_time`, `session_energy`, `lifetime_energy`, `power`, `voltage`, `current`, `installation_current`, `limit_reason`, `temperature`, `dynamic_limit`, `led_brightness`, `authentication`, `lock`, `charge_start`, `charge_stop`, `update`, `errors`. |
| `section_titles` | object | localized | Override the accordion titles: `{parameters, info, actions}`. |

## How auto-discovery works

The card resolves the device of `entity` through the entity registry and then
matches each role by, in order:

1. explicit override in `entities:`
2. the integration's `translation_key` (language independent, survives renames)
3. entity id suffix (English **and** Italian ids are recognized:
   `_dynamic_limit`/`_limite_dinamico`, `_voltage`/`_tensione`, …)
4. unique device class among the device's entities

So it works even if you renamed the entities or your HA is not in English.

## Development

```bash
npm install
npm run build   # bundles src/ into dist/lektrico-charger-card.js
npm test        # jsdom smoke test
```

`demo/index.html` renders the card against a fake Home Assistant instance —
open it with any static file server (`npx serve .`) to try states, LED
animations and the responsive layout without a running HA.

## License

MIT
