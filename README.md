<p align="center">
  <img src="docs/images/logo.png" width="140" alt="Lektri.co Charger Card" />
</p>

# Lektri.co Charger Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/release/naked-head/lektrico-charger-card.svg)](https://github.com/naked-head/lektrico-charger-card/releases)
[![Validate](https://github.com/naked-head/lektrico-charger-card/actions/workflows/validate.yml/badge.svg)](https://github.com/naked-head/lektrico-charger-card/actions/workflows/validate.yml)
[![License](https://img.shields.io/github/license/naked-head/lektrico-charger-card.svg)](https://github.com/naked-head/lektrico-charger-card/blob/main/LICENSE)

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=naked-head&repository=lektrico-charger-card&category=plugin)

A Home Assistant Lovelace card built specifically for **Lektri.co EV
chargers** (1P7K / One and 3P22K / Tri), on top of the official
[`lektrico`](https://www.home-assistant.io/integrations/lektrico/) core
integration. Designed as a rethink of the generic
[charger-card](https://github.com/tmjo/charger-card) with the Lektri.co
hardware in mind.

## Features

- 📱 **Fully responsive** — the charger is drawn as an SVG, it scales with
  the card width and never overlaps the surrounding text, on any device.
- 💡 **Real LED behaviour** — the four LED bars mirror the physical device:
  green when idle, blue when the EV is connected, white spinning while
  charging (the spin speed follows the actual charging current), red on
  error. Colors and animations are overridable per state.
- 🎚️ **No overlapping dropdowns** — charging current and LED brightness are
  sliders with preset chips that wrap on small screens; every value is
  always reachable, and presets outside the charger's allowed range are
  hidden automatically.
- 🔍 **Auto-discovery** — point the card at the charger's state sensor and
  every other entity of the device is found automatically through the
  entity registry. Works with renamed and localized entity ids; everything
  can be overridden.
- 🚨 **Error handling** — on error, a red banner lists the active
  diagnostic sensors (overheating, RCD, overcurrent, …) with friendly
  names, and the stats row switches to the error view.
- ▶️ **Quick actions** — start / stop charge, authentication and cable lock
  as one-tap buttons, enabled/disabled based on the charger state.
- ⚡ **Charging modes** — your own automations (solar charging, zero cost,
  fixed levels…) as chips; the active mode is shown under the status
  automatically. See [DOCS.md](DOCS.md) for ready-made automations.
- 🖱️ **GUI editor** — the main options are configurable from the dashboard
  UI; advanced options remain available in YAML.
- 🌍 **Localized** — English and Italian out of the box
  ([add a language](DOCS.md#adding-a-language)), every text overridable.
- 🌗 Light & dark theme aware; works in narrow dashboard columns thanks to
  CSS container queries.

## Screenshots

| Charging (dark) | Parameters |
| :---: | :---: |
| ![Charging](docs/images/charging.png) | ![Parameters](docs/images/parameters.png) |

| Error state | Charging modes (light) |
| :---: | :---: |
| ![Error](docs/images/error.png) | ![Modes](docs/images/light.png) |

## Installation

### Via HACS (recommended)

1. HACS → three-dot menu → **Custom repositories**
2. Add `https://github.com/naked-head/lektrico-charger-card` with type
   **Dashboard**
3. Install **Lektri.co Charger Card** and reload

Or click the badge above to open the repository directly in HACS.

### Manual

1. Copy `dist/lektrico-charger-card.js` to `/config/www/`
2. Add the resource: *Settings → Dashboards → Resources* →
   `/local/lektrico-charger-card.js` (JavaScript module)

## Configuration

The card has a **GUI editor** for the main options (entity, name,
location, substatus entity, view toggles, language, custom image).
Minimal YAML — everything else is discovered from the device:

```yaml
type: custom:lektrico-charger-card
entity: sensor.1p7k_state
```

### Full example

When an action has an `entity`, that entity is also used as the default
service target — no need to repeat it in `service_data`. More modes
(Zero Cost and the shutdown variants, with the matching automations) are
in [DOCS.md](DOCS.md).

```yaml
type: custom:lektrico-charger-card
entity: sensor.1p7k_state
name: Lektri.co
location: Carport
current_presets: [6, 10, 13, 16, 20, 25, 32]
brightness_presets: [25, 50, 75, 100]
actions:
  - text: Green Mode
    icon: mdi:leaf
    entity: automation.charger_green_mode
    service: automation.turn_on
  - text: Green + Shutdown
    icon: mdi:leaf-off
    entity: automation.charger_green_mode_shutdown
    service: automation.turn_on
  - text: Standard 16A
    icon: mdi:battery-medium
    service: number.set_value
    service_data:
      entity_id: number.1p7k_dynamic_limit
      value: 16
  - text: Low 10A
    icon: mdi:battery-low
    service: number.set_value
    service_data:
      entity_id: number.1p7k_dynamic_limit
      value: 10
```

### Substatus (active charging mode)

The line under the status shows the active charging mode. Two mechanisms,
in order of precedence:

1. **`substatus_entity`** — any entity (e.g. an `input_text` that your
   automations update) whose state is displayed as-is.
2. **Derived from actions** (default) — every action that has an `entity`
   whose state is `on` contributes its `text` (or its `substatus` string).
   This works out of the box when each mode automation *enables itself and
   disables the sibling modes* (see the
   [mode selector](DOCS.md#the-mode-selector) automation), so exactly one
   is `on` at a time. Set `substatus: false` on an action to exclude it,
   or `substatus_from_actions: false` to disable the mechanism.

### Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `entity` | string | **required** | The charger state sensor (`sensor.<device>_state`). |
| `name` | string | friendly name | Charger name shown above the status. |
| `location` | string | — | Shown next to the name. |
| `substatus_entity` | string | — | Any entity whose state is shown under the status (e.g. an `input_text` describing the active charging mode). Takes precedence over the actions-derived substatus. |
| `substatus_from_actions` | bool | `true` | Derive the substatus from the actions whose `entity` is `on` (see *Substatus* above). |
| `compact` | bool | `false` | Smaller image, no collapsible sections. |
| `show_name` / `show_stats` / `show_quick_actions` / `show_image` | bool | `true` | Toggle individual areas of the card. |
| `show_leds` | bool | `true` | Draw the LED cross. |
| `image` | string | built-in SVG | Path/URL of a custom charger image (e.g. `/local/lektri.co.png`). The LED cross is overlaid on top (see `led_overlay_position`). |
| `led_overlay_position` | object | centered | `{left, top, size}` CSS values for the LED overlay on a custom image, e.g. `{left: 28%, top: 25%, size: 44%}`. |
| `led_states` | object | device-like | Override LED color/animation per state: `charging: {color: '#ffffff', animation: spin}`. Animations: `spin`, `pulse`, `none`. |
| `led_spin` | object | `{slowest: 6.0, fastest: 2.0}` | Rotation period (seconds) of the white charging animation: `slowest` at minimal current, `fastest` at the charger's maximum. The maximum is read from the dynamic-limit entity (6–32 A per phase on both the 7.4 kW and the 22 kW models), so it adapts to derated installations too. |
| `state_text` | object | it/en defaults | Override the status text per state (`available`, `connected`, `need_auth`, `charging`, `paused`, `paused_by_scheduler`, `locked`, `error`, `updating_firmware`). |
| `language` | string | HA language | Force `en` or `it`. |
| `current_presets` | list | `[6,10,13,16,20,25,32]` | Preset chips for the charging current. Values outside the charger's allowed range are hidden. |
| `brightness_presets` | list | `[10,25,50,75,100]` | Preset chips for the LED brightness. |
| `info_left` / `info_right` | list | current+limit / voltage+power | Items beside the image. Each item is a role name (`current`, `dynamic_limit`, `voltage`, `power`, …), an entity id, or `{entity, label, icon, decimals}`. `decimals` forces fixed decimals on numeric values; the default left item shows the instantaneous charging current with one decimal (`0.0 A` when idle). |
| `info_items` | list | installation current, lifetime energy, limit reason, temperature | Rows of the *Information* section (same item format). |
| `stats` | list or object | energy, time, temperature | Bottom stats. Either a list, or `{default: [...], charging: [...], error: [...]}` per state. |
| `actions` | list | — | Chips in the *Actions* section: `{text, icon, service, service_data, target, entity, confirm, substatus}`. `entity` highlights the chip when its state is `on` and doubles as the default service target; `confirm` asks before running; `substatus` customizes (string) or suppresses (`false`) the chip's contribution to the derived substatus. |
| `entities` | object | auto | Override auto-discovery per role: `entities: {power: sensor.my_power, dynamic_limit: number.my_limit, errors: [binary_sensor.a, …]}`. Roles: `state`, `charging_time`, `session_energy`, `lifetime_energy`, `power`, `voltage`, `current`, `installation_current`, `limit_reason`, `temperature`, `dynamic_limit`, `led_brightness`, `authentication`, `lock`, `charge_start`, `charge_stop`, `update`, `errors`. |
| `section_titles` | object | localized | Override the accordion titles: `{parameters, info, actions}`. |

### How auto-discovery works

The card resolves the device of `entity` through the entity registry and
then matches each role by, in order:

1. explicit override in `entities:`
2. the integration's `translation_key` (language independent, survives renames)
3. entity id (exact prefix + suffix first, then suffix; English **and**
   Italian ids are recognized: `_dynamic_limit`/`_limite_dinamico`,
   `_voltage`/`_tensione`, …)
4. unique device class among the device's entities

So it works even if you renamed the entities or your HA is not in English.

## Automations

Ready-made automations for the charging modes (solar Green mode, Zero
Cost, shutdown variants, fixed levels) and the mode-selector pattern are
documented in **[DOCS.md](DOCS.md)**.

## Development & testing

```bash
npm install
npm run build   # bundles src/ into dist/lektrico-charger-card.js
npm test        # jsdom smoke test
```

`demo/index.html` renders the card against a fake Home Assistant instance —
open it with any static file server (`npx serve .`) to try states, LED
animations and the responsive layout without a running HA. Translations
live in `src/translations/` — see
[DOCS.md](DOCS.md#adding-a-language) to add a language.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## License

[MIT](LICENSE)

## Disclaimer

This is an independent project, not affiliated with or endorsed by
LEKTRI.CO.

## Acknowledgments

Built with the assistance of [Claude](https://claude.ai) by Anthropic.
