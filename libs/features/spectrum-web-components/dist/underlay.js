// node_modules/@spectrum-web-components/underlay/src/Underlay.js
import { html as c, SpectrumElement as a2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as h } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@spectrum-web-components/underlay/src/underlay.css.js
import { css as a } from "/libs/features/spectrum-web-components/dist/base.js";
var n = a`
    :host{pointer-events:none;visibility:hidden;opacity:0;transition:transform var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,opacity var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,visibility 0s linear var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))}:host([open]){pointer-events:auto;visibility:visible;opacity:1;transition-delay:var(--mod-overlay-animation-duration-opened,var(--spectrum-animation-duration-0,0s))}:host{--spectrum-underlay-background-entry-animation-delay:var(--spectrum-animation-duration-0);--spectrum-underlay-background-exit-animation-ease:var(--spectrum-animation-ease-in);--spectrum-underlay-background-entry-animation-ease:var(--spectrum-animation-ease-out);--spectrum-underlay-background-exit-animation-duration:var(--spectrum-animation-duration-100);--spectrum-underlay-background-entry-animation-duration:var(--spectrum-animation-duration-600);--spectrum-underlay-background-exit-animation-duration:var(--spectrum-animation-duration-300);--spectrum-underlay-background-exit-animation-delay:var(--spectrum-animation-duration-200);--spectrum-underlay-background-color:rgba(var(--spectrum-black-rgb),var(--spectrum-overlay-opacity));background-color:var(--mod-underlay-background-color,var(--spectrum-underlay-background-color));z-index:1;transition:opacity var(--mod-underlay-background-exit-animation-duration,var(--spectrum-underlay-background-exit-animation-duration))var(--mod-underlay-background-exit-animation-ease,var(--spectrum-underlay-background-exit-animation-ease))var(--mod-underlay-background-exit-animation-delay,var(--spectrum-underlay-background-exit-animation-delay)),visibility 0s linear calc(var(--mod-underlay-background-exit-animation-delay,var(--spectrum-underlay-background-exit-animation-delay)) + var(--mod-underlay-background-exit-animation-duration,var(--spectrum-underlay-background-exit-animation-duration)));position:fixed;inset-block:0;inset-inline:0;overflow:hidden}:host([open]){transition:opacity var(--mod-underlay-background-entry-animation-duration,var(--spectrum-underlay-background-entry-animation-duration))var(--mod-underlay-background-entry-animation-ease,var(--spectrum-underlay-background-entry-animation-ease))var(--mod-underlay-background-entry-animation-delay,var(--spectrum-underlay-background-entry-animation-delay))}
`;
var underlay_css_default = n;

// node_modules/@spectrum-web-components/underlay/src/Underlay.js
var d = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var s = (i, t, o, r) => {
  for (var e = r > 1 ? void 0 : r ? p(t, o) : t, n2 = i.length - 1, l; n2 >= 0; n2--)
    (l = i[n2]) && (e = (r ? l(t, o, e) : l(e)) || e);
  return r && e && d(t, o, e), e;
};
var Underlay = class extends a2 {
  constructor() {
    super(...arguments);
    this.canClick = false;
    this.open = false;
  }
  static get styles() {
    return [underlay_css_default];
  }
  click() {
    this.dispatchEvent(new Event("close"));
  }
  handlePointerdown() {
    this.canClick = true;
  }
  handlePointerup() {
    this.canClick && this.click(), this.canClick = false;
  }
  render() {
    return c``;
  }
  firstUpdated() {
    this.addEventListener("pointerdown", this.handlePointerdown), this.addEventListener("pointerup", this.handlePointerup);
  }
};
s([h({ type: Boolean, reflect: true })], Underlay.prototype, "open", 2);

// node_modules/@spectrum-web-components/underlay/sp-underlay.js
import { defineElement as a3 } from "/libs/features/spectrum-web-components/dist/base.js";
a3("sp-underlay", Underlay);
//# sourceMappingURL=underlay.js.map
