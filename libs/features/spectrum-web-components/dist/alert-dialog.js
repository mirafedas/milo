// node_modules/@spectrum-web-components/alert-dialog/src/AlertDialog.js
import { html as s2, SpectrumElement as p } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as m, query as g } from "/libs/features/spectrum-web-components/dist/base.js";
import "/libs/features/spectrum-web-components/dist/button.js";
import { FocusVisiblePolyfillMixin as v } from "/libs/features/spectrum-web-components/dist/shared.js";
import { randomID as y } from "/libs/features/spectrum-web-components/dist/shared.js";
import { conditionAttributeWithId as c } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@lit-labs/observers/resize-controller.js
var s = class {
  constructor(s3, { target: t2, config: i, callback: h2, skipInitial: e2 }) {
    this.t = /* @__PURE__ */ new Set(), this.o = false, this.i = false, this.h = s3, null !== t2 && this.t.add(t2 ?? s3), this.l = i, this.o = e2 ?? this.o, this.callback = h2, window.ResizeObserver ? (this.u = new ResizeObserver((s4) => {
      this.handleChanges(s4), this.h.requestUpdate();
    }), s3.addController(this)) : console.warn("ResizeController error: browser does not support ResizeObserver.");
  }
  handleChanges(s3) {
    this.value = this.callback?.(s3, this.u);
  }
  hostConnected() {
    for (const s3 of this.t)
      this.observe(s3);
  }
  hostDisconnected() {
    this.disconnect();
  }
  async hostUpdated() {
    !this.o && this.i && this.handleChanges([]), this.i = false;
  }
  observe(s3) {
    this.t.add(s3), this.u.observe(s3, this.l), this.i = true, this.h.requestUpdate();
  }
  unobserve(s3) {
    this.t.delete(s3), this.u.unobserve(s3);
  }
  disconnect() {
    this.u.disconnect();
  }
};

// node_modules/@spectrum-web-components/alert-dialog/src/alert-dialog.css.js
import { css as t } from "/libs/features/spectrum-web-components/dist/base.js";
var e = t`
    :host{--spectrum-alert-dialog-min-width:var(--spectrum-alert-dialog-minimum-width);--spectrum-alert-dialog-max-width:var(--spectrum-alert-dialog-maximum-width);--spectrum-alert-dialog-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-alert-dialog-warning-icon-color:var(--spectrum-notice-visual-color);--spectrum-alert-dialog-error-icon-color:var(--spectrum-negative-visual-color);--spectrum-alert-dialog-title-font-family:var(--spectrum-sans-font-family-stack);--spectrum-alert-dialog-title-font-weight:var(--spectrum-heading-sans-serif-font-weight);--spectrum-alert-dialog-title-font-style:var(--spectrum-heading-sans-serif-font-style);--spectrum-alert-dialog-title-font-size:var(--spectrum-alert-dialog-title-size);--spectrum-alert-dialog-title-line-height:var(--spectrum-heading-line-height);--spectrum-alert-dialog-title-color:var(--spectrum-heading-color);--spectrum-alert-dialog-body-font-family:var(--spectrum-sans-font-family-stack);--spectrum-alert-dialog-body-font-weight:var(--spectrum-body-sans-serif-font-weight);--spectrum-alert-dialog-body-font-style:var(--spectrum-body-sans-serif-font-style);--spectrum-alert-dialog-body-font-size:var(--spectrum-alert-dialog-description-size);--spectrum-alert-dialog-body-line-height:var(--spectrum-line-height-100);--spectrum-alert-dialog-body-color:var(--spectrum-body-color);--spectrum-alert-dialog-title-to-divider:var(--spectrum-spacing-200);--spectrum-alert-dialog-divider-to-description:var(--spectrum-spacing-300);--spectrum-alert-dialog-title-to-icon:var(--spectrum-spacing-300);--mod-buttongroup-justify-content:flex-end;box-sizing:border-box;inline-size:-moz-fit-content;inline-size:fit-content;min-inline-size:var(--mod-alert-dialog-min-width,var(--spectrum-alert-dialog-min-width));max-inline-size:var(--mod-alert-dialog-max-width,var(--spectrum-alert-dialog-max-width));max-block-size:inherit;padding:var(--mod-alert-dialog-padding,var(--spectrum-alert-dialog-padding));outline:none;display:flex}.icon{inline-size:var(--mod-alert-dialog-icon-size,var(--spectrum-alert-dialog-icon-size));block-size:var(--mod-alert-dialog-icon-size,var(--spectrum-alert-dialog-icon-size));flex-shrink:0;margin-inline-start:var(--mod-alert-dialog-title-to-icon,var(--spectrum-alert-dialog-title-to-icon))}:host([variant=warning]){--mod-icon-color:var(--mod-alert-dialog-warning-icon-color,var(--spectrum-alert-dialog-warning-icon-color))}:host([variant=error]){--mod-icon-color:var(--mod-alert-dialog-error-icon-color,var(--spectrum-alert-dialog-error-icon-color))}.grid{display:grid}.header{justify-content:space-between;align-items:baseline;display:flex}::slotted([slot=heading]){font-family:var(--mod-alert-dialog-title-font-family,var(--spectrum-alert-dialog-title-font-family));font-weight:var(--mod-alert-dialog-title-font-weight,var(--spectrum-alert-dialog-title-font-weight));font-style:var(--mod-alert-dialog-title-font-style,var(--spectrum-alert-dialog-title-font-style));font-size:var(--mod-alert-dialog-title-font-size,var(--spectrum-alert-dialog-title-font-size));line-height:var(--mod-alert-dialog-title-line-height,var(--spectrum-alert-dialog-title-line-height));color:var(--mod-alert-dialog-title-color,var(--spectrum-alert-dialog-title-color));margin:0;margin-block-end:var(--mod-alert-dialog-title-to-divider,var(--spectrum-alert-dialog-title-to-divider))}.content{font-family:var(--mod-alert-dialog-body-font-family,var(--spectrum-alert-dialog-body-font-family));font-weight:var(--mod-alert-dialog-body-font-weight,var(--spectrum-alert-dialog-body-font-weight));font-style:var(--mod-alert-dialog-body-font-style,var(--spectrum-alert-dialog-body-font-style));font-size:var(--mod-alert-dialog-body-font-size,var(--spectrum-alert-dialog-body-font-size));line-height:var(--mod-alert-dialog-body-line-height,var(--spectrum-alert-dialog-body-line-height));color:var(--mod-alert-dialog-body-color,var(--spectrum-alert-dialog-body-color));-webkit-overflow-scrolling:touch;margin:0;margin-block-start:var(--mod-alert-dialog-divider-to-description,var(--spectrum-alert-dialog-divider-to-description));margin-block-end:var(--mod-alert-dialog-description-to-buttons,var(--spectrum-alert-dialog-description-to-buttons));overflow-y:auto}@media (forced-colors:active){:host{border:solid}}
`;
var alert_dialog_css_default = e;

// node_modules/@spectrum-web-components/alert-dialog/src/AlertDialog.js
var b = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var l = (a, r, e2, t2) => {
  for (var i = t2 > 1 ? void 0 : t2 ? u(r, e2) : r, n = a.length - 1, d; n >= 0; n--)
    (d = a[n]) && (i = (t2 ? d(r, e2, i) : d(i)) || i);
  return t2 && i && b(r, e2, i), i;
};
var alertDialogVariants = ["confirmation", "information", "warning", "error", "destructive", "secondary"];
function h(a, r) {
  const e2 = a.assignedElements(), t2 = [];
  return e2.forEach((i) => {
    if (i.id)
      t2.push(i.id);
    else {
      const n = r + `-${y()}`;
      i.id = n, t2.push(n);
    }
  }), t2;
}
var o = class o2 extends v(p) {
  constructor() {
    super(...arguments);
    this.resizeController = new s(this, { callback: () => {
      this.shouldManageTabOrderForScrolling();
    } });
    this._variant = "";
    this.labelledbyId = `sp-dialog-label-${o2.instanceCount++}`;
    this.shouldManageTabOrderForScrolling = () => {
      if (!this.contentElement)
        return;
      const { offsetHeight: e2, scrollHeight: t2 } = this.contentElement;
      e2 < t2 ? this.contentElement.tabIndex = 0 : this.contentElement.removeAttribute("tabindex");
    };
    this.describedbyId = `sp-dialog-description-${o2.instanceCount++}`;
  }
  static get styles() {
    return [alert_dialog_css_default];
  }
  set variant(e2) {
    if (e2 === this.variant)
      return;
    const t2 = this.variant;
    alertDialogVariants.includes(e2) ? (this.setAttribute("variant", e2), this._variant = e2) : (this.removeAttribute("variant"), this._variant = ""), this.requestUpdate("variant", t2);
  }
  get variant() {
    return this._variant;
  }
  renderIcon() {
    switch (this.variant) {
      case "warning":
      case "error":
        return s2`
                    <sp-icon-alert class="icon"></sp-icon-alert>
                `;
      default:
        return s2``;
    }
  }
  renderHeading() {
    return s2`
            <slot name="heading" @slotchange=${this.onHeadingSlotchange}></slot>
        `;
  }
  renderContent() {
    return s2`
            <div class="content">
                <slot @slotchange=${this.onContentSlotChange}></slot>
            </div>
        `;
  }
  onHeadingSlotchange({ target: e2 }) {
    this.conditionLabelledby && (this.conditionLabelledby(), delete this.conditionLabelledby);
    const t2 = h(e2, this.labelledbyId);
    t2.length && (this.conditionLabelledby = c(this, "aria-labelledby", t2));
  }
  onContentSlotChange({ target: e2 }) {
    requestAnimationFrame(() => {
      this.resizeController.unobserve(this.contentElement), this.resizeController.observe(this.contentElement);
    }), this.conditionDescribedby && (this.conditionDescribedby(), delete this.conditionDescribedby);
    const t2 = h(e2, this.describedbyId);
    if (t2.length && t2.length < 4)
      this.conditionDescribedby = c(this, "aria-describedby", t2);
    else if (!t2.length) {
      const i = !!this.id;
      i || (this.id = this.describedbyId);
      const n = c(this, "aria-describedby", this.id);
      this.conditionDescribedby = () => {
        n(), i || this.removeAttribute("id");
      };
    }
  }
  renderButtons() {
    return s2`
            <sp-button-group class="button-group">
                <slot name="button"></slot>
            </sp-button-group>
        `;
  }
  render() {
    return s2`
            <div class="grid">
                <div class="header">
                    ${this.renderHeading()} ${this.renderIcon()}
                </div>
                <sp-divider size="m" class="divider"></sp-divider>
                ${this.renderContent()} ${this.renderButtons()}
            </div>
        `;
  }
};
o.instanceCount = 0, l([g(".content")], o.prototype, "contentElement", 2), l([m({ type: String, reflect: true })], o.prototype, "variant", 1);
var AlertDialog = o;

// node_modules/@spectrum-web-components/alert-dialog/sp-alert-dialog.js
import { defineElement as l2 } from "/libs/features/spectrum-web-components/dist/base.js";
l2("sp-alert-dialog", AlertDialog);
export {
  AlertDialog,
  alertDialogVariants
};
//# sourceMappingURL=alert-dialog.js.map
