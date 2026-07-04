import { svg } from 'lit';

// Vector rendering of a Lektri.co charger (1P7K / One / 3P22K / Tri):
// a dark rounded square with four thin LED bars arranged as a cross.
// Being SVG it scales to any card width without ever covering the
// surrounding texts, and the LED bars can change color and animate.
export const chargerSvg = () => svg`
  <svg
    class="charger-svg"
    viewBox="0 0 240 240"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-label="Lektri.co charger"
  >
    <defs>
      <linearGradient id="lkt-body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#3a3d40"></stop>
        <stop offset="0.5" stop-color="#26282a"></stop>
        <stop offset="1" stop-color="#1b1c1e"></stop>
      </linearGradient>
      <radialGradient id="lkt-sheen" cx="0.3" cy="0.2" r="1">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0.10"></stop>
        <stop offset="0.6" stop-color="#ffffff" stop-opacity="0.02"></stop>
        <stop offset="1" stop-color="#ffffff" stop-opacity="0"></stop>
      </radialGradient>
    </defs>

    <rect x="10" y="10" width="220" height="220" rx="42"
      fill="url(#lkt-body)" stroke="#0d0d0e" stroke-width="2"></rect>
    <rect x="10" y="10" width="220" height="220" rx="42"
      fill="url(#lkt-sheen)"></rect>

    <!-- LED cross: top / right / bottom / left -->
    <g class="leds">
      <rect class="led led-0" x="117.5" y="42" width="5" height="54" rx="2.5"></rect>
      <rect class="led led-1" x="144" y="117.5" width="54" height="5" rx="2.5"></rect>
      <rect class="led led-2" x="117.5" y="144" width="5" height="54" rx="2.5"></rect>
      <rect class="led led-3" x="42" y="117.5" width="54" height="5" rx="2.5"></rect>
    </g>

    <text x="120" y="216" text-anchor="middle" class="brand-text">LEKTRI.CO</text>
  </svg>
`;

// Small LED-cross overlay used on top of a user supplied image
// (config: image + led_overlay).
export const ledOverlaySvg = () => svg`
  <svg
    class="led-overlay-svg"
    viewBox="0 0 200 200"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <g class="leds">
      <rect class="led led-0" x="97.5" y="22" width="5" height="54" rx="2.5"></rect>
      <rect class="led led-1" x="124" y="97.5" width="54" height="5" rx="2.5"></rect>
      <rect class="led led-2" x="97.5" y="124" width="5" height="54" rx="2.5"></rect>
      <rect class="led led-3" x="22" y="97.5" width="54" height="5" rx="2.5"></rect>
    </g>
  </svg>
`;
