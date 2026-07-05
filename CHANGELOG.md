# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [1.5.2] - 2026-07-05

### Fixed
- Default LED colors/animations corrected against the manufacturer's manual:
  `available` now pulses green (was steady), `need_auth` (waiting for
  remote-server authorization) is a steady violet instead of a pulsing
  blue, `locked` pulses red instead of a steady orange, `updating_firmware`
  is a steady yellow instead of pulsing purple, `error` is a steady red
  instead of pulsing, and `unavailable`/`unknown` reuse the device's
  "ready but no WiFi" steady green instead of gray.
- `DOCS.md` gains a full LED-states reference table, including the two
  device LED states (RFID tag learning, factory reset) that have no
  matching integration state and so aren't implemented.

## [1.5.1] - 2026-07-05

### Fixed
- Ultra-compact view: the start/stop button was left-aligned instead of
  centered in the middle column.
- Ultra-compact view: the energy figure showed the entity's full friendly
  name (device name included) instead of just "Energy"/"Energia", unlike
  the standard stats row.

## [1.5.0] - 2026-07-04

### Added
- Ultra-compact view (`compact: ultra`): purely informational one-row layout with
  charger image, state / substatus / dynamic limit in the centre column, and
  actual current / session energy / temperature in a right column; an inline
  error chip and an optional start/stop button below.
- Translations for German (`de`), French (`fr`), Dutch (`nl`), Swedish (`sv`),
  Danish (`da`), Norwegian Bokmål (`nb`), Romanian (`ro`), and Spanish (`es`).

### Changed
- Compact-mode selector in the GUI editor is now a three-way dropdown
  (Standard / Compact / Ultra compact) instead of a boolean toggle.

## [1.4.0] - 2026-07-04

### Added
- Quick actions (max 4) are user-selectable via `quick_actions: [id, ...]`,
  picked from the built-ins (`start`/`stop`/`authentication`/`lock`), the
  auto-discovered device actions (excluding the one-off
  `schedule_override`/`reboot`/`meter_reboot`), and custom actions
  (referenced by an `id` you set, or `custom:<index>`). Unset, the
  previous default (start/stop/auth/lock) is unchanged.

### Changed
- Parameters/Information/Actions no longer open from a full-width
  accordion header; a vertical column of small icon toggles sits beside
  the status text instead (matching the reference `tmjo/charger-card`
  layout), minimizing vertical space when every section is collapsed.
  Any number of sections can now be open simultaneously; their content
  still renders in the same place as before, with a divider between
  additional open blocks.

## [1.3.0] - 2026-07-03

### Added
- Three-phase chargers (3P22K/Tri): per the integration's docs, discover
  `voltage_l1/l2/l3` and `current_l1/l2/l3` and default to showing the
  three currents / voltages in the side columns.
- Paired energy meter (EM/3EM) support via the new `meter_entity` option
  (never auto-attached — see DOCS.md for why): load-balancing mode chips
  (Disabled/Power/Hybrid/Green), breaker current and meter power in the
  Information section, meter reboot.
- Device-provided actions (schedule override, single-phase toggle, load
  balancing, reboots) render as filled chips in the Actions section,
  graphically distinct from the outlined custom chips, with group
  captions when both are present (`show_device_actions: false` to hide).
- `show_parameters` / `show_info` / `show_actions` to disable each
  section individually — with all off (and quick actions too) the card
  becomes purely informative.
- Recognize the diagnostic binary sensors' device-style keys from the
  integration docs (`state_e_activated`, `overtemp`, `critical_temp`,
  `meter_fault`, `cp_diode_failure`, `contactor_failure`) alongside the
  core translation keys.

### Changed
- Paused / paused-by-scheduler: only the top LED bar stays lit, steady
  white, matching the real device (new `top` LED animation).
- Compact view redesigned: small image beside the status (no location,
  no power), quick actions, and the Actions section — Parameters and
  Information are unavailable in compact.
- LED bars slightly thinner.

## [1.2.0] - 2026-07-03

### Added
- Translation files split into `src/translations/` (English and Italian),
  with automatic English fallback and a documented path for adding new
  languages.
- HACS scaffolding: `CHANGELOG.md`, GitHub Actions workflows for HACS
  validation + build/test (`validate.yml`) and for attaching the built
  card to releases (`release.yml`), minimum Home Assistant version in
  `hacs.json`.
- `DOCS.md` with a structured guide to the charging-mode automations
  (solar Green mode, Zero Cost, shutdown variants, fixed levels, mode
  selector) and to contributing translations.
- README restyled with badges, install button and screenshots.

### Changed
- Full example in the README trimmed down (zero-cost actions moved to
  `DOCS.md`).

## [1.1.0] - 2026-07-03

### Fixed
- Entity discovery could resolve the `current` role to
  `..._installation_current`; the top-left item now always shows the
  instantaneous charging current, with one decimal (`0.0 A` when idle).

### Added
- GUI editor (`ha-form`) for the main options, localized en/it.
- Substatus derived from the actions whose `entity` is `on`
  (`substatus_from_actions`, per-action `substatus` override);
  `substatus_entity` keeps priority.
- `entity` of an action doubles as the default service target.

### Changed
- LED spin speed and preset filtering normalize on the charger's real
  maximum current (dynamic-limit entity, then installation current):
  both the 7.4 kW and 22 kW models regulate 6–32 A per phase, and
  derated installations scale automatically.
- Thinner LED bars, closer to the device.

## [1.0.0] - 2026-07-03

### Added
- Initial release: responsive SVG charger with animated status LEDs
  (green idle, blue connected, white spinning while charging with speed
  following the current, red on error), overlap-free sliders + preset
  chips, entity auto-discovery via the entity registry, error banner
  from the diagnostic sensors, quick actions, custom action chips,
  en/it localization, jsdom smoke test and standalone demo page.

[Unreleased]: https://github.com/naked-head/lektrico-charger-card/compare/v1.5.2...HEAD
[1.5.2]: https://github.com/naked-head/lektrico-charger-card/compare/v1.5.1...v1.5.2
[1.5.1]: https://github.com/naked-head/lektrico-charger-card/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/naked-head/lektrico-charger-card/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/naked-head/lektrico-charger-card/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/naked-head/lektrico-charger-card/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/naked-head/lektrico-charger-card/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/naked-head/lektrico-charger-card/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/naked-head/lektrico-charger-card/releases/tag/v1.0.0
