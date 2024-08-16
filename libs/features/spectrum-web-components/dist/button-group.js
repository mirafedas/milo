// node_modules/@spectrum-web-components/button-group/src/ButtonGroup.js
import { html as p, SizedMixin as c, SpectrumElement as u } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as d } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@spectrum-web-components/button-group/src/button-group.css.js
import { css as t } from "/libs/features/spectrum-web-components/dist/base.js";
var o = t`
    :host{--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host([size=s]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-200);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-200)}:host([size=l]),:host,:host([size=xl]){--spectrum-buttongroup-spacing-horizontal:var(--spectrum-spacing-300);--spectrum-buttongroup-spacing-vertical:var(--spectrum-spacing-300)}:host{gap:var(--mod-buttongroup-spacing-horizontal,var(--spectrum-buttongroup-spacing-horizontal));justify-content:var(--mod-buttongroup-justify-content,normal);flex-wrap:wrap;display:flex}::slotted(*){flex-shrink:0}:host([vertical]){gap:var(--mod-buttongroup-spacing-vertical,var(--spectrum-buttongroup-spacing-vertical));flex-direction:column;display:inline-flex}:host([vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-flex-grow:1}:host([dir=ltr][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:left}:host([dir=rtl][vertical]) ::slotted(sp-action-button){--spectrum-actionbutton-label-text-align:right}
`;
var button_group_css_default = o;

// node_modules/@spectrum-web-components/button-group/src/ButtonGroup.js
var i = Object.defineProperty;
var m = Object.getOwnPropertyDescriptor;
var a = (o2, t3, r, s) => {
  for (var e = s > 1 ? void 0 : s ? m(t3, r) : t3, l = o2.length - 1, n; l >= 0; l--)
    (n = o2[l]) && (e = (s ? n(t3, r, e) : n(e)) || e);
  return s && e && i(t3, r, e), e;
};
var ButtonGroup = class extends c(u, { noDefaultSize: true }) {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  static get styles() {
    return [button_group_css_default];
  }
  handleSlotchange({ target: r }) {
    r.assignedElements().forEach((e) => {
      e.size = this.size;
    });
  }
  render() {
    return p`
            <slot @slotchange=${this.handleSlotchange}></slot>
        `;
  }
};
a([d({ type: Boolean, reflect: true })], ButtonGroup.prototype, "vertical", 2);

// node_modules/@spectrum-web-components/button-group/sp-button-group.js
import { defineElement as t2 } from "/libs/features/spectrum-web-components/dist/base.js";
t2("sp-button-group", ButtonGroup);
//# sourceMappingURL=button-group.js.map
