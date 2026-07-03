# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
