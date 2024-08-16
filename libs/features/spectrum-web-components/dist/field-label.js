// node_modules/@spectrum-web-components/field-label/src/FieldLabel.js
import { html as p, nothing as u, SizedMixin as m, SpectrumElement as b } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as a, query as f } from "/libs/features/spectrum-web-components/dist/base.js";
import { randomID as h } from "/libs/features/spectrum-web-components/dist/shared.js";
import "/libs/features/spectrum-web-components/dist/icons-ui.js";
import g from "/libs/features/spectrum-web-components/dist/icons/asterisk.js";
import { conditionAttributeWithId as y, conditionAttributeWithoutId as v } from "/libs/features/spectrum-web-components/dist/base.js";
import { ElementResolutionController as E, elementResolverUpdatedSymbol as T } from "/libs/features/spectrum-web-components/dist/reactive-controllers.js";

// node_modules/@spectrum-web-components/field-label/src/field-label.css.js
import { css as e } from "/libs/features/spectrum-web-components/dist/base.js";
var t = e`
    :host{--spectrum-fieldlabel-min-height:var(--spectrum-component-height-75);--spectrum-fieldlabel-color:var(--spectrum-neutral-subdued-content-color-default);--spectrum-field-label-text-to-asterisk:var(--spectrum-field-label-text-to-asterisk-medium);--spectrum-fieldlabel-font-weight:var(--spectrum-regular-font-weight);--spectrum-fieldlabel-line-height:var(--spectrum-line-height-100);--spectrum-fieldlabel-line-height-cjk:var(--spectrum-cjk-line-height-100)}:host([size=s]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-75);--spectrum-fieldlabel-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-fieldlabel-bottom-to-text:var(--spectrum-component-bottom-to-text-75);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-75);--spectrum-fieldlabel-side-margin-block-start:var(--spectrum-field-label-top-margin-small);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-100);--spectrum-field-label-text-to-asterisk:var(--spectrum-field-label-text-to-asterisk-small)}:host{--spectrum-fieldlabel-min-height:var(--spectrum-component-height-75);--spectrum-fieldlabel-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-fieldlabel-bottom-to-text:var(--spectrum-component-bottom-to-text-75);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-75);--spectrum-fieldlabel-side-margin-block-start:var(--spectrum-field-label-top-margin-medium);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-text-to-asterisk:var(--spectrum-field-label-text-to-asterisk-medium)}:host([size=l]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-100);--spectrum-fieldlabel-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-fieldlabel-bottom-to-text:var(--spectrum-component-bottom-to-text-100);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-100);--spectrum-fieldlabel-side-margin-block-start:var(--spectrum-field-label-top-margin-large);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-text-to-asterisk:var(--spectrum-field-label-text-to-asterisk-large)}:host([size=xl]){--spectrum-fieldlabel-min-height:var(--spectrum-component-height-200);--spectrum-fieldlabel-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-fieldlabel-bottom-to-text:var(--spectrum-component-bottom-to-text-200);--spectrum-fieldlabel-font-size:var(--spectrum-font-size-200);--spectrum-fieldlabel-side-margin-block-start:var(--spectrum-field-label-top-margin-extra-large);--spectrum-fieldlabel-side-padding-right:var(--spectrum-spacing-200);--spectrum-field-label-text-to-asterisk:var(--spectrum-field-label-text-to-asterisk-extra-large)}:host{box-sizing:border-box;min-block-size:var(--mod-fieldlabel-min-height,var(--spectrum-fieldlabel-min-height));padding-block:var(--mod-field-label-top-to-text,var(--spectrum-fieldlabel-top-to-text))var(--mod-field-label-bottom-to-text,var(--spectrum-fieldlabel-bottom-to-text));font-size:var(--mod-fieldlabel-font-size,var(--spectrum-fieldlabel-font-size));font-weight:var(--mod-fieldlabel-font-weight,var(--spectrum-fieldlabel-font-weight));line-height:var(--mod-fieldlabel-line-height,var(--spectrum-fieldlabel-line-height));-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;color:var(--spectrum-fieldlabel-color);padding-inline:0;display:block}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){line-height:var(--mod-fieldlabel-line-height-cjk,var(--spectrum-fieldlabel-line-height-cjk))}.required-icon{margin-block:0;margin-inline:var(--mod-field-label-text-to-asterisk,var(--spectrum-field-label-text-to-asterisk))0;vertical-align:var(--mod-field-label-asterisk-vertical-align,baseline)}:host([side-aligned=start]),:host([side-aligned=end]){vertical-align:top;margin-block-start:var(--mod-fieldlabel-side-margin-block-start,var(--spectrum-fieldlabel-side-margin-block-start));margin-block-end:0;margin-inline-end:var(--mod-fieldlabel-side-padding-right,var(--spectrum-fieldlabel-side-padding-right));display:inline-block}:host([side-aligned=end]){text-align:end}:host([disabled]),:host([disabled]) .required-icon{color:var(--highcontrast-disabled-content-color,var(--mod-disabled-content-color,var(--spectrum-disabled-content-color)))}@media (forced-colors:active){:host{--highcontrast-disabled-content-color:GrayText}}label{display:inline-block}
`;
var field_label_css_default = t;

// node_modules/@spectrum-web-components/field-label/src/FieldLabel.js
var c = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var o = (n, l2, e2, i) => {
  for (var t2 = i > 1 ? void 0 : i ? d(l2, e2) : l2, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (t2 = (i ? r(l2, e2, t2) : r(t2)) || t2);
  return i && t2 && c(l2, e2, t2), t2;
};
var FieldLabel = class extends m(b, { noDefaultSize: true }) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.id = "";
    this.for = "";
    this.required = false;
    this.resolvedElement = new E(this);
  }
  static get styles() {
    return [field_label_css_default, g];
  }
  handleClick(e2) {
    if (!this.target || this.disabled || e2.defaultPrevented)
      return;
    this.target.focus();
    const i = this.getRootNode(), t2 = this.target, s = t2.getRootNode(), r = s.host;
    s === i && t2.forceFocusVisible ? t2.forceFocusVisible() : r && r.forceFocusVisible && r.forceFocusVisible();
  }
  applyTargetLabel(e2) {
    if (this.target = e2 || this.target, this.target) {
      const i = this.target.applyFocusElementLabel, t2 = this.target.focusElement || this.target, s = t2.getRootNode();
      typeof i != "undefined" ? i(this.labelText, this) : s === this.getRootNode() ? (e2 ? y : v)(t2, "aria-labelledby", [this.id]) : e2 ? t2.setAttribute("aria-label", this.labelText) : t2.removeAttribute("aria-label");
    }
  }
  async manageTarget() {
    this.applyTargetLabel();
    const e2 = this.resolvedElement.element;
    if (!e2) {
      this.target = e2;
      return;
    }
    e2.localName.search("-") > 0 && await customElements.whenDefined(e2.localName), typeof e2.updateComplete != "undefined" && await e2.updateComplete, this.applyTargetLabel(e2);
  }
  get labelText() {
    const e2 = this.slotEl.assignedNodes({ flatten: true });
    return e2.length ? e2.map((t2) => (t2.textContent || "").trim()).join(" ") : "";
  }
  render() {
    return p`
            <label>
                <slot></slot>
                ${this.required ? p`
                          <sp-icon-asterisk100
                              class="required-icon spectrum-UIIcon-Asterisk100"
                          ></sp-icon-asterisk100>
                      ` : u}
            </label>
        `;
  }
  firstUpdated(e2) {
    super.firstUpdated(e2), this.addEventListener("click", this.handleClick);
  }
  willUpdate(e2) {
    this.hasAttribute("id") || this.setAttribute("id", `${this.tagName.toLowerCase()}-${h()}`), e2.has("for") && (this.resolvedElement.selector = this.for ? `#${this.for}` : ""), (e2.has("id") || e2.has(T)) && this.manageTarget();
  }
};
o([a({ type: Boolean, reflect: true })], FieldLabel.prototype, "disabled", 2), o([a({ type: String })], FieldLabel.prototype, "id", 2), o([a({ type: String })], FieldLabel.prototype, "for", 2), o([a({ type: Boolean, reflect: true })], FieldLabel.prototype, "required", 2), o([f("slot")], FieldLabel.prototype, "slotEl", 2), o([a({ type: String, reflect: true, attribute: "side-aligned" })], FieldLabel.prototype, "sideAligned", 2);

// node_modules/@spectrum-web-components/field-label/sp-field-label.js
import { defineElement as l } from "/libs/features/spectrum-web-components/dist/base.js";
l("sp-field-label", FieldLabel);
//# sourceMappingURL=field-label.js.map
