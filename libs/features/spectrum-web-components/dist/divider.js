// node_modules/@spectrum-web-components/divider/src/Divider.js
import { html as d, SizedMixin as m, SpectrumElement as c } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as v } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@spectrum-web-components/divider/src/divider.css.js
import { css as r } from "/libs/features/spectrum-web-components/dist/base.js";
var i = r`
    :host{--spectrum-divider-thickness:var(--spectrum-divider-thickness-medium);--spectrum-divider-background-color:var(--spectrum-divider-background-color-medium);--spectrum-divider-background-color-small:var(--spectrum-gray-300);--spectrum-divider-background-color-medium:var(--spectrum-gray-300);--spectrum-divider-background-color-large:var(--spectrum-gray-800);--spectrum-divider-background-color-small-static-white:var(--spectrum-transparent-white-300);--spectrum-divider-background-color-medium-static-white:var(--spectrum-transparent-white-300);--spectrum-divider-background-color-large-static-white:var(--spectrum-transparent-white-800);--spectrum-divider-background-color-small-static-black:var(--spectrum-transparent-black-300);--spectrum-divider-background-color-medium-static-black:var(--spectrum-transparent-black-300);--spectrum-divider-background-color-large-static-black:var(--spectrum-transparent-black-800)}:host([size=s]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-small);--spectrum-divider-background-color:var(--spectrum-divider-background-color-small)}:host{--spectrum-divider-thickness:var(--spectrum-divider-thickness-medium);--spectrum-divider-background-color:var(--spectrum-divider-background-color-medium)}:host([size=l]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-large);--spectrum-divider-background-color:var(--spectrum-divider-background-color-large)}@media (forced-colors:active){:host,:host([size=l]),:host,:host([size=s]){--spectrum-divider-background-color:CanvasText;--spectrum-divider-background-color-small-static-white:CanvasText;--spectrum-divider-background-color-medium-static-white:CanvasText;--spectrum-divider-background-color-large-static-white:CanvasText;--spectrum-divider-background-color-small-static-black:CanvasText;--spectrum-divider-background-color-medium-static-black:CanvasText;--spectrum-divider-background-color-large-static-black:CanvasText}}:host{block-size:var(--mod-divider-thickness,var(--spectrum-divider-thickness));inline-size:100%;border:none;border-width:var(--mod-divider-thickness,var(--spectrum-divider-thickness));border-radius:var(--mod-divider-thickness,var(--spectrum-divider-thickness));background-color:var(--mod-divider-background-color,var(--spectrum-divider-background-color));overflow:visible}:host([static=white][size=s]){--spectrum-divider-background-color:var(--mod-divider-background-color-small-static-white,var(--spectrum-divider-background-color-small-static-white))}:host([static=white]){--spectrum-divider-background-color:var(--mod-divider-background-color-medium-static-white,var(--spectrum-divider-background-color-medium-static-white))}:host([static=white][size=l]){--spectrum-divider-background-color:var(--mod-divider-background-color-large-static-white,var(--spectrum-divider-background-color-large-static-white))}:host([static=black][size=s]){--spectrum-divider-background-color:var(--mod-divider-background-color-small-static-black,var(--spectrum-divider-background-color-small-static-black))}:host([static=black]){--spectrum-divider-background-color:var(--mod-divider-background-color-medium-static-black,var(--spectrum-divider-background-color-medium-static-black))}:host([static=black][size=l]){--spectrum-divider-background-color:var(--mod-divider-background-color-large-static-black,var(--spectrum-divider-background-color-large-static-black))}:host([vertical]){inline-size:var(--mod-divider-thickness,var(--spectrum-divider-thickness));margin-block:var(--mod-divider-vertical-margin);block-size:var(--mod-divider-vertical-height,100%);align-self:var(--mod-divider-vertical-align)}:host{display:block}hr{border:none;margin:0}
`;
var divider_css_default = i;

// node_modules/@spectrum-web-components/divider/src/Divider.js
var p = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var l = (s, r2, e, i3) => {
  for (var t = i3 > 1 ? void 0 : i3 ? u(r2, e) : r2, o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (t = (i3 ? a(r2, e, t) : a(t)) || t);
  return i3 && t && p(r2, e, t), t;
};
var Divider = class extends m(c, { validSizes: ["s", "m", "l"], noDefaultSize: true }) {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  render() {
    return d``;
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.setAttribute("role", "separator");
  }
  updated(e) {
    super.updated(e), e.has("vertical") && (this.vertical ? this.setAttribute("aria-orientation", "vertical") : this.removeAttribute("aria-orientation"));
  }
};
Divider.styles = [divider_css_default], l([v({ type: Boolean, reflect: true })], Divider.prototype, "vertical", 2);

// node_modules/@spectrum-web-components/divider/sp-divider.js
import { defineElement as i2 } from "/libs/features/spectrum-web-components/dist/base.js";
i2("sp-divider", Divider);
//# sourceMappingURL=divider.js.map
