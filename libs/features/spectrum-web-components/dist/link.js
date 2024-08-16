// node_modules/@spectrum-web-components/link/src/Link.js
import { property as u, query as s } from "/libs/features/spectrum-web-components/dist/base.js";
import { LikeAnchor as m } from "/libs/features/spectrum-web-components/dist/shared.js";
import { Focusable as d } from "/libs/features/spectrum-web-components/dist/shared.js";

// node_modules/@spectrum-web-components/link/src/link.css.js
import { css as t } from "/libs/features/spectrum-web-components/dist/base.js";
var o = t`
    :host{--spectrum-link-animation-duration:var(--spectrum-animation-duration-100);--spectrum-link-text-color-primary-default:var(--spectrum-accent-content-color-default);--spectrum-link-text-color-primary-hover:var(--spectrum-accent-content-color-hover);--spectrum-link-text-color-primary-active:var(--spectrum-accent-content-color-down);--spectrum-link-text-color-primary-focus:var(--spectrum-accent-content-color-key-focus);--spectrum-link-text-color-secondary-default:var(--spectrum-neutral-content-color-default);--spectrum-link-text-color-secondary-hover:var(--spectrum-neutral-content-color-hover);--spectrum-link-text-color-secondary-active:var(--spectrum-neutral-content-color-down);--spectrum-link-text-color-secondary-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-link-text-color-white:var(--spectrum-white);--spectrum-link-text-color-black:var(--spectrum-black)}@media (forced-colors:active){:host{--highcontrast-link-text-color-primary-default:LinkText;--highcontrast-link-text-color-primary-hover:LinkText;--highcontrast-link-text-color-primary-active:LinkText;--highcontrast-link-text-color-primary-focus:LinkText;--highcontrast-link-text-color-secondary-default:LinkText;--highcontrast-link-text-color-secondary-hover:LinkText;--highcontrast-link-text-color-secondary-active:LinkText;--highcontrast-link-text-color-secondary-focus:LinkText;--highcontrast-link-text-color-white:LinkText;--highcontrast-link-text-color-black:LinkText}}a{background-color:initial;-webkit-text-decoration-skip:objects;text-decoration-skip:objects;transition:color var(--mod-link-animation-duration,var(--spectrum-link-animation-duration))ease-in-out;cursor:pointer;color:var(--highcontrast-link-text-color-primary-default,var(--mod-link-text-color-primary-default,var(--spectrum-link-text-color-primary-default)));outline:none;-webkit-text-decoration:underline;text-decoration:underline}a:active{color:var(--highcontrast-link-text-color-primary-active,var(--mod-link-text-color-primary-active,var(--spectrum-link-text-color-primary-active)))}a:focus-visible{color:var(--highcontrast-link-text-color-primary-focus,var(--mod-link-text-color-primary-focus,var(--spectrum-link-text-color-primary-focus)));-webkit-text-decoration:underline double;text-decoration:underline double;text-decoration-color:var(--highcontrast-link-focus-color,inherit)}:host([variant=secondary]) a{color:var(--highcontrast-link-text-color-secondary-default,var(--mod-link-text-color-secondary-default,var(--spectrum-link-text-color-secondary-default)))}:host([variant=secondary]) a:active{color:var(--highcontrast-link-text-color-secondary-active,var(--mod-link-text-color-secondary-active,var(--spectrum-link-text-color-secondary-active)))}:host([variant=secondary]) a:focus{color:var(--highcontrast-link-text-color-secondary-focus,var(--mod-link-text-color-secondary-focus,var(--spectrum-link-text-color-secondary-focus)))}:host([quiet]) a{-webkit-text-decoration:none;text-decoration:none}:host([static=white]) a,:host([static=white]) a:active,:host([static=white]) a:focus{color:var(--highcontrast-link-text-color-white,var(--mod-link-text-color-white,var(--spectrum-link-text-color-white)))}:host([static=black]) a,:host([static=black]) a:active,:host([static=black]) a:focus{color:var(--highcontrast-link-text-color-black,var(--mod-link-text-color-black,var(--spectrum-link-text-color-black)))}@media (hover:hover){a:hover{color:var(--highcontrast-link-text-color-primary-hover,var(--mod-link-text-color-primary-hover,var(--spectrum-link-text-color-primary-hover)))}:host([variant=secondary]) a:hover{color:var(--highcontrast-link-text-color-secondary-hover,var(--mod-link-text-color-secondary-hover,var(--spectrum-link-text-color-secondary-hover)))}:host([quiet]) a:hover{-webkit-text-decoration:underline;text-decoration:underline}:host([static=white]) a:hover{color:var(--highcontrast-link-text-color-white,var(--mod-link-text-color-white,var(--spectrum-link-text-color-white)))}:host([static=black]) a:hover{color:var(--highcontrast-link-text-color-black,var(--mod-link-text-color-black,var(--spectrum-link-text-color-black)))}}:host{display:inline}:host(:focus){outline:none}:host([href]) a:focus-visible{text-decoration:underline double}:host([disabled]){pointer-events:none}
`;
var link_css_default = o;

// node_modules/@spectrum-web-components/link/src/Link.js
var a = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var t2 = (l, r, i2, o2) => {
  for (var e = o2 > 1 ? void 0 : o2 ? p(r, i2) : r, n = l.length - 1, c; n >= 0; n--)
    (c = l[n]) && (e = (o2 ? c(r, i2, e) : c(e)) || e);
  return o2 && e && a(r, i2, e), e;
};
var Link = class extends m(d) {
  constructor() {
    super(...arguments);
    this.quiet = false;
  }
  static get styles() {
    return [link_css_default];
  }
  get focusElement() {
    return this.anchorElement;
  }
  render() {
    return this.renderAnchor({ id: "anchor" });
  }
};
t2([s("#anchor")], Link.prototype, "anchorElement", 2), t2([u({ type: String, reflect: true })], Link.prototype, "variant", 2), t2([u({ type: String, reflect: true })], Link.prototype, "static", 2), t2([u({ type: Boolean, reflect: true, attribute: "quiet" })], Link.prototype, "quiet", 2);

// node_modules/@spectrum-web-components/link/sp-link.js
import { defineElement as i } from "/libs/features/spectrum-web-components/dist/base.js";
i("sp-link", Link);
//# sourceMappingURL=link.js.map
