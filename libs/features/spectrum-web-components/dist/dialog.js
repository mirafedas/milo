// node_modules/@spectrum-web-components/dialog/src/Dialog.js
import { html as s, nothing as l } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as o2, query as m } from "/libs/features/spectrum-web-components/dist/base.js";
import "/libs/features/spectrum-web-components/dist/divider.js";
import "/libs/features/spectrum-web-components/dist/button.js";
import "/libs/features/spectrum-web-components/dist/button-group.js";
import "/libs/features/spectrum-web-components/dist/icons-workflow.js";
import { ObserveSlotPresence as b } from "/libs/features/spectrum-web-components/dist/shared.js";

// node_modules/@spectrum-web-components/dialog/src/dialog.css.js
import { css as o } from "/libs/features/spectrum-web-components/dist/base.js";
var i = o`
    :host{--spectrum-dialog-fullscreen-header-text-size:28px;--spectrum-dialog-min-inline-size:288px;--spectrum-dialog-confirm-small-width:400px;--spectrum-dialog-confirm-medium-width:480px;--spectrum-dialog-confirm-large-width:640px;--spectrum-dialog-confirm-divider-block-spacing-start:var(--spectrum-spacing-300);--spectrum-dialog-confirm-divider-block-spacing-end:var(--spectrum-spacing-200);--spectrum-dialog-confirm-description-text-color:var(--spectrum-gray-800);--spectrum-dialog-confirm-title-text-color:var(--spectrum-gray-900);--spectrum-dialog-confirm-description-text-line-height:var(--spectrum-line-height-100);--spectrum-dialog-confirm-title-text-line-height:var(--spectrum-line-height-100);--spectrum-dialog-heading-font-weight:var(--spectrum-heading-sans-serif-font-weight);--spectrum-dialog-confirm-description-padding:var(--spectrum-spacing-50);--spectrum-dialog-confirm-description-margin:calc(var(--spectrum-spacing-50)*-1);--spectrum-dialog-confirm-footer-padding-top:var(--spectrum-spacing-600);--spectrum-dialog-confirm-gap-size:var(--spectrum-component-pill-edge-to-text-100);--spectrum-dialog-confirm-buttongroup-padding-top:var(--spectrum-spacing-600);--spectrum-dialog-confirm-close-button-size:var(--spectrum-component-height-100);--spectrum-dialog-confirm-close-button-padding:calc(26px - var(--spectrum-component-bottom-to-text-300));--spectrum-dialog-confirm-divider-height:var(--spectrum-spacing-50);box-sizing:border-box;inline-size:-moz-fit-content;inline-size:fit-content;min-inline-size:var(--mod-dialog-min-inline-size,var(--spectrum-dialog-min-inline-size));max-inline-size:100%;max-block-size:inherit;outline:none;display:flex}:host([size=s]){inline-size:var(--mod-dialog-confirm-small-width,var(--spectrum-dialog-confirm-small-width))}:host([size=m]){inline-size:var(--mod-dialog-confirm-medium-width,var(--spectrum-dialog-confirm-medium-width))}:host([size=l]){inline-size:var(--mod-dialog-confirm-large-width,var(--spectrum-dialog-confirm-large-width))}::slotted([slot=hero]){block-size:var(--mod-dialog-confirm-hero-height,var(--spectrum-dialog-confirm-hero-height));background-position:50%;background-size:cover;border-start-start-radius:var(--mod-dialog-confirm-border-radius,var(--spectrum-dialog-confirm-border-radius));border-start-end-radius:var(--mod-dialog-confirm-border-radius,var(--spectrum-dialog-confirm-border-radius));grid-area:hero;overflow:hidden}.grid{grid-template-columns:var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid))auto 1fr auto minmax(0,auto)var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid));grid-template-rows:auto var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid))auto auto 1fr auto var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid));inline-size:100%;grid-template-areas:"hero hero hero hero hero hero"". . . . . ."".heading header header header."".divider divider divider divider."".content content content content."".footer footer buttonGroup buttonGroup."". . . . . .";display:grid}::slotted([slot=heading]){font-size:var(--mod-dialog-confirm-title-text-size,var(--spectrum-dialog-confirm-title-text-size));font-weight:var(--mod-dialog-heading-font-weight,var(--spectrum-dialog-heading-font-weight));line-height:var(--mod-dialog-confirm-title-text-line-height,var(--spectrum-dialog-confirm-title-text-line-height));color:var(--mod-dialog-confirm-title-text-color,var(--spectrum-dialog-confirm-title-text-color));outline:none;grid-area:heading;margin:0;padding-inline-end:var(--mod-dialog-confirm-gap-size,var(--spectrum-dialog-confirm-gap-size))}.no-header::slotted([slot=heading]){grid-area:heading-start/heading-start/header-end/header-end;padding-inline-end:0}.header{box-sizing:border-box;outline:none;grid-area:header;justify-content:flex-end;align-items:center;display:flex}.divider{inline-size:100%;grid-area:divider;margin-block-start:var(--mod-dialog-confirm-divider-block-spacing-end,var(--spectrum-dialog-confirm-divider-block-spacing-end));margin-block-end:var(--mod-dialog-confirm-divider-block-spacing-start,var(--spectrum-dialog-confirm-divider-block-spacing-start))}:host([mode=fullscreen]) [name=heading]+.divider{margin-block-end:calc(var(--mod-dialog-confirm-divider-block-spacing-start,var(--spectrum-dialog-confirm-divider-block-spacing-start)) - var(--mod-dialog-confirm-description-padding,var(--spectrum-dialog-confirm-description-padding))*2)}:host([no-divider]) .divider{display:none}:host([no-divider]) ::slotted([slot=heading]){padding-block-end:calc(var(--mod-dialog-confirm-divider-block-spacing-end,var(--spectrum-dialog-confirm-divider-block-spacing-end)) + var(--mod-dialog-confirm-divider-block-spacing-start,var(--spectrum-dialog-confirm-divider-block-spacing-start)) + var(--mod-dialog-confirm-divider-height,var(--spectrum-dialog-confirm-divider-height)))}.content{box-sizing:border-box;-webkit-overflow-scrolling:touch;font-size:var(--mod-dialog-confirm-description-text-size,var(--spectrum-dialog-confirm-description-text-size));font-weight:var(--mod-dialog-confirm-description-font-weight,var(--spectrum-regular-font-weight));line-height:var(--mod-dialog-confirm-description-text-line-height,var(--spectrum-dialog-confirm-description-text-line-height));color:var(--mod-dialog-confirm-description-text-color,var(--spectrum-dialog-confirm-description-text-color));padding:calc(var(--mod-dialog-confirm-description-padding,var(--spectrum-dialog-confirm-description-padding))*2);margin:0 var(--mod-dialog-confirm-description-margin,var(--spectrum-dialog-confirm-description-margin));outline:none;grid-area:content;overflow-y:auto}.footer{outline:none;flex-wrap:wrap;grid-area:footer;padding-block-start:var(--mod-dialog-confirm-footer-padding-top,var(--spectrum-dialog-confirm-footer-padding-top));display:flex}.footer>*,.footer>.spectrum-Button+.spectrum-Button{margin-block-end:0}.button-group{grid-area:buttonGroup;justify-content:flex-end;padding-block-start:var(--mod-dialog-confirm-buttongroup-padding-top,var(--spectrum-dialog-confirm-buttongroup-padding-top));padding-inline-start:var(--mod-dialog-confirm-gap-size,var(--spectrum-dialog-confirm-gap-size));display:flex}.button-group.button-group--noFooter{grid-area:footer-start/footer-start/buttonGroup-end/buttonGroup-end}:host([dismissable]) .grid{grid-template-columns:var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid))auto 1fr auto minmax(0,auto)minmax(0,var(--mod-dialog-confirm-close-button-size,var(--spectrum-dialog-confirm-close-button-size)))var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid));grid-template-rows:auto var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid))auto auto 1fr auto var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid));grid-template-areas:"hero hero hero hero hero hero hero"". . . . .closeButton closeButton"".heading header header typeIcon closeButton closeButton"".divider divider divider divider divider."".content content content content content."".footer footer buttonGroup buttonGroup buttonGroup."". . . . . . ."}:host([dismissable]) .grid .button-group{display:none}:host([dismissable]) .grid .footer{color:var(--mod-dialog-confirm-description-text-color,var(--spectrum-dialog-confirm-description-text-color));grid-area:footer/footer/buttonGroup/buttonGroup}.close-button{grid-area:closeButton;place-self:start end;margin-block-start:var(--mod-dialog-confirm-close-button-padding,var(--spectrum-dialog-confirm-close-button-padding));margin-inline-end:var(--mod-dialog-confirm-close-button-padding,var(--spectrum-dialog-confirm-close-button-padding))}:host([mode=fullscreen]){inline-size:100%;block-size:100%}:host([mode=fullscreenTakeover]){inline-size:100%;block-size:100%;border-radius:0}:host([mode=fullscreen]),:host([mode=fullscreenTakeover]){max-block-size:none;max-inline-size:none}:host([mode=fullscreen]) .grid,:host([mode=fullscreenTakeover]) .grid{grid-template-columns:var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid))1fr auto auto var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid));grid-template-rows:var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid))auto auto 1fr var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid));grid-template-areas:". . . . ."".heading header buttonGroup."".divider divider divider."".content content content."". . . . .";display:grid}:host([mode=fullscreen]) ::slotted([slot=heading]),:host([mode=fullscreenTakeover]) ::slotted([slot=heading]){font-size:var(--mod-dialog-fullscreen-header-text-size,var(--spectrum-dialog-fullscreen-header-text-size))}:host([mode=fullscreen]) .content,:host([mode=fullscreenTakeover]) .content{max-block-size:none}:host([mode=fullscreen]) .button-group,:host([mode=fullscreen]) .footer,:host([mode=fullscreenTakeover]) .button-group,:host([mode=fullscreenTakeover]) .footer{padding-block-start:0}:host([mode=fullscreen]) .footer,:host([mode=fullscreenTakeover]) .footer{display:none}:host([mode=fullscreen]) .button-group,:host([mode=fullscreenTakeover]) .button-group{grid-area:buttonGroup;align-self:start}@media screen and (width<=700px){.grid{grid-template-columns:var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid))auto 1fr auto minmax(0,auto)var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid));grid-template-areas:"hero hero hero hero hero hero"". . . . . ."".heading heading heading heading."".header header header header."".divider divider divider divider."".content content content content."".footer footer buttonGroup buttonGroup."". . . . . ."}.grid,:host([dismissable]) .grid{grid-template-rows:auto var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid))auto auto auto 1fr auto var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid))}:host([dismissable]) .grid{grid-template-columns:var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid))auto 1fr auto minmax(0,auto)minmax(0,var(--mod-dialog-confirm-close-button-size,var(--spectrum-dialog-confirm-close-button-size)))var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid));grid-template-areas:"hero hero hero hero hero hero hero"". . . . .closeButton closeButton"".heading heading heading heading closeButton closeButton"".header header header header header."".divider divider divider divider divider."".content content content content content."".footer footer buttonGroup buttonGroup buttonGroup."". . . . . . ."}.header{justify-content:flex-start}:host([mode=fullscreen]) .grid,:host([mode=fullscreenTakeover]) .grid{grid-template-columns:var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid))1fr var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid));grid-template-rows:var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid))auto auto auto 1fr auto var(--mod-dialog-confirm-padding-grid,var(--spectrum-dialog-confirm-padding-grid));grid-template-areas:". . ."".heading."".header."".divider."".content."".buttonGroup."". . .";display:grid}:host([mode=fullscreen]) .button-group,:host([mode=fullscreenTakeover]) .button-group{padding-block-start:var(--mod-dialog-confirm-buttongroup-padding-top,var(--spectrum-dialog-confirm-buttongroup-padding-top))}:host([mode=fullscreen]) ::slotted([slot=heading]),:host([mode=fullscreenTakeover]) ::slotted([slot=heading]){font-size:var(--mod-dialog-confirm-title-text-size,var(--spectrum-dialog-confirm-title-text-size))}}@media (forced-colors:active){:host{border:solid}}:host{--swc-alert-dialog-error-icon-color:var(--spectrum-negative-visual-color)}.content{overflow:hidden}.footer{color:var(--spectrum-dialog-confirm-description-text-color,var(--spectrum-gray-800))}.type-icon{color:var(--mod-alert-dialog-error-icon-color,var(--swc-alert-dialog-error-icon-color));grid-area:typeIcon}.content[tabindex]{overflow:auto}::slotted(img[slot=hero]){width:100%;height:auto}.grid{inline-size:100%;grid-template-areas:"hero hero hero hero hero hero"". . . . . ."".heading header header typeIcon."".divider divider divider divider."".content content content content."".footer footer buttonGroup buttonGroup."". . . . . .";display:grid}
`;
var dialog_css_default = i;

// node_modules/@spectrum-web-components/dialog/src/Dialog.js
import { AlertDialog as f } from "/libs/features/spectrum-web-components/dist/alert-dialog.js";
import { classMap as v } from "/libs/features/spectrum-web-components/dist/base.js";
var a = Object.defineProperty;
var c = Object.getOwnPropertyDescriptor;
var t = (u3, i4, e3, n) => {
  for (var r2 = n > 1 ? void 0 : n ? c(i4, e3) : i4, p2 = u3.length - 1, d2; p2 >= 0; p2--)
    (d2 = u3[p2]) && (r2 = (n ? d2(i4, e3, r2) : d2(r2)) || r2);
  return n && r2 && a(i4, e3, r2), r2;
};
var Dialog = class extends b(f, ['[slot="hero"]', '[slot="footer"]', '[slot="button"]']) {
  constructor() {
    super(...arguments);
    this.error = false;
    this.dismissable = false;
    this.dismissLabel = "Close";
    this.noDivider = false;
  }
  static get styles() {
    return [dialog_css_default];
  }
  get hasFooter() {
    return this.getSlotContentPresence('[slot="footer"]');
  }
  get hasButtons() {
    return this.getSlotContentPresence('[slot="button"]');
  }
  get hasHero() {
    return this.getSlotContentPresence('[slot="hero"]');
  }
  close() {
    this.dispatchEvent(new Event("close", { bubbles: true, composed: true, cancelable: true }));
  }
  renderHero() {
    return s`
            <slot name="hero"></slot>
        `;
  }
  renderFooter() {
    return s`
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        `;
  }
  renderButtons() {
    const e3 = { "button-group": true, "button-group--noFooter": !this.hasFooter };
    return s`
            <sp-button-group class=${v(e3)}>
                <slot name="button"></slot>
            </sp-button-group>
        `;
  }
  renderDismiss() {
    return s`
            <sp-close-button
                class="close-button"
                label=${this.dismissLabel}
                quiet
                size="m"
                @click=${this.close}
            ></sp-close-button>
        `;
  }
  render() {
    return s`
            <div class="grid">
                ${this.renderHero()} ${this.renderHeading()}
                ${this.error ? s`
                          <sp-icon-alert class="type-icon"></sp-icon-alert>
                      ` : l}
                ${this.noDivider ? l : s`
                          <sp-divider size="m" class="divider"></sp-divider>
                      `}
                ${this.renderContent()}
                ${this.hasFooter ? this.renderFooter() : l}
                ${this.hasButtons ? this.renderButtons() : l}
                ${this.dismissable ? this.renderDismiss() : l}
            </div>
        `;
  }
  shouldUpdate(e3) {
    return e3.has("mode") && this.mode && (this.dismissable = false), e3.has("dismissable") && this.dismissable && (this.dismissable = !this.mode), super.shouldUpdate(e3);
  }
  firstUpdated(e3) {
    super.firstUpdated(e3), this.setAttribute("role", "dialog");
  }
};
t([m(".close-button")], Dialog.prototype, "closeButton", 2), t([o2({ type: Boolean, reflect: true })], Dialog.prototype, "error", 2), t([o2({ type: Boolean, reflect: true })], Dialog.prototype, "dismissable", 2), t([o2({ type: String, reflect: true, attribute: "dismiss-label" })], Dialog.prototype, "dismissLabel", 2), t([o2({ type: Boolean, reflect: true, attribute: "no-divider" })], Dialog.prototype, "noDivider", 2), t([o2({ type: String, reflect: true })], Dialog.prototype, "mode", 2), t([o2({ type: String, reflect: true })], Dialog.prototype, "size", 2);

// node_modules/@spectrum-web-components/dialog/sp-dialog.js
import { defineElement as a2 } from "/libs/features/spectrum-web-components/dist/base.js";
a2("sp-dialog", Dialog);

// node_modules/@spectrum-web-components/dialog/src/DialogWrapper.js
import { html as s2, nothing as l2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as t2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { ifDefined as a4 } from "/libs/features/spectrum-web-components/dist/base.js";
import "/libs/features/spectrum-web-components/dist/underlay.js";
import "/libs/features/spectrum-web-components/dist/button.js";

// node_modules/@spectrum-web-components/dialog/src/DialogBase.js
import { html as d, nothing as u, SpectrumElement as c2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as r } from "/libs/features/spectrum-web-components/dist/base.js";
import "/libs/features/spectrum-web-components/dist/underlay.js";
import "/libs/features/spectrum-web-components/dist/button.js";

// node_modules/@spectrum-web-components/modal/src/modal-wrapper.css.js
import { css as i2 } from "/libs/features/spectrum-web-components/dist/base.js";
var e = i2`
    :host{box-sizing:border-box;inline-size:100vw;block-size:100vh;block-size:-webkit-fill-available;block-size:-moz-available;block-size:stretch;visibility:hidden;pointer-events:none;z-index:1;transition:visibility 0s linear var(--mod-modal-transition-animation-duration,var(--spectrum-modal-transition-animation-duration));justify-content:center;align-items:center;display:flex;position:fixed;inset-block-start:0;inset-inline-start:0}:host([open]){visibility:visible}@media only screen and (device-height<=350px),only screen and (device-width<=400px){:host([responsive]){inline-size:100%;block-size:100%;max-inline-size:100%;max-block-size:100%;border-radius:0}:host([responsive]){margin-block-start:0}}
`;
var modal_wrapper_css_default = e;

// node_modules/@spectrum-web-components/modal/src/modal.css.js
import { css as a3 } from "/libs/features/spectrum-web-components/dist/base.js";
var i3 = a3`
    .modal{pointer-events:none;visibility:hidden;opacity:0;transition:transform var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,opacity var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,visibility 0s linear var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))}:host([open]) .modal{pointer-events:auto;visibility:visible;opacity:1;transition-delay:var(--mod-overlay-animation-duration-opened,var(--spectrum-animation-duration-0,0s))}:host{--spectrum-modal-confirm-exit-animation-delay:var(--spectrum-animation-duration-0);--spectrum-modal-fullscreen-margin:32px;--spectrum-modal-max-height:90vh;--spectrum-modal-max-width:90%;--spectrum-modal-background-color:var(--spectrum-gray-100);--spectrum-modal-confirm-border-radius:var(--spectrum-corner-radius-100);--spectrum-modal-confirm-exit-animation-duration:var(--spectrum-animation-duration-100);--spectrum-modal-confirm-entry-animation-duration:var(--spectrum-animation-duration-500);--spectrum-modal-confirm-entry-animation-delay:var(--spectrum-animation-duration-200);--spectrum-modal-transition-animation-duration:var(--spectrum-animation-duration-100)}.modal{transform:translateY(var(--mod-modal-confirm-entry-animation-distance,var(--spectrum-modal-confirm-entry-animation-distance)));z-index:1;max-block-size:var(--mod-modal-max-height,var(--spectrum-modal-max-height));max-inline-size:var(--mod-modal-max-width,var(--spectrum-modal-max-width));background:var(--mod-modal-background-color,var(--spectrum-modal-background-color));border-radius:var(--mod-modal-confirm-border-radius,var(--spectrum-modal-confirm-border-radius));pointer-events:auto;transition:opacity var(--mod-modal-confirm-exit-animation-duration,var(--spectrum-modal-confirm-exit-animation-duration))var(--spectrum-animation-ease-in)var(--mod-modal-confirm-exit-animation-delay,var(--spectrum-modal-confirm-exit-animation-delay)),visibility 0s linear calc(var(--mod-modal-confirm-exit-animation-delay,var(--spectrum-modal-confirm-exit-animation-delay)) + var(--mod-modal-confirm-exit-animation-duration,var(--spectrum-modal-confirm-exit-animation-duration))),transform 0s linear calc(var(--mod-modal-confirm-exit-animation-delay,var(--spectrum-modal-confirm-exit-animation-delay)) + var(--mod-modal-confirm-exit-animation-duration,var(--spectrum-modal-confirm-exit-animation-duration)));outline:none;overflow:hidden}:host([open]) .modal{transition:transform var(--mod-modal-confirm-entry-animation-duration,var(--spectrum-modal-confirm-entry-animation-duration))var(--spectrum-animation-ease-out)var(--mod-modal-confirm-entry-animation-delay,var(--spectrum-modal-confirm-entry-animation-delay)),opacity var(--mod-modal-confirm-entry-animation-duration,var(--spectrum-modal-confirm-entry-animation-duration))var(--spectrum-animation-ease-out)var(--mod-modal-confirm-entry-animation-delay,var(--spectrum-modal-confirm-entry-animation-delay));transform:translateY(0)}@media only screen and (device-height<=350px),only screen and (device-width<=400px){:host([responsive]) .modal{inline-size:100%;block-size:100%;max-inline-size:100%;max-block-size:100%;border-radius:0}}.fullscreen{max-inline-size:none;max-block-size:none;position:fixed;inset-block-start:var(--mod-modal-fullscreen-margin,var(--spectrum-modal-fullscreen-margin));inset-block-end:var(--mod-modal-fullscreen-margin,var(--spectrum-modal-fullscreen-margin));inset-inline-start:var(--mod-modal-fullscreen-margin,var(--spectrum-modal-fullscreen-margin));inset-inline-end:var(--mod-modal-fullscreen-margin,var(--spectrum-modal-fullscreen-margin))}.fullscreenTakeover{max-inline-size:none;max-block-size:none;box-sizing:border-box;border:none;border-radius:0;position:fixed;inset:0}.fullscreenTakeover,:host([open]) .fullscreenTakeover{transform:none}:host{--spectrum-dialog-confirm-exit-animation-duration:var(--swc-test-duration);--spectrum-dialog-confirm-entry-animation-duration:var(--swc-test-duration);--spectrum-modal-confirm-entry-animation-distance:var(--spectrum-dialog-confirm-entry-animation-distance);height:100dvh}.modal{overflow:visible}
`;
var modal_css_default = i3;

// node_modules/@spectrum-web-components/dialog/src/DialogBase.js
import { FocusVisiblePolyfillMixin as f2 } from "/libs/features/spectrum-web-components/dist/shared.js";
import { firstFocusableIn as b2 } from "/libs/features/spectrum-web-components/dist/shared.js";
var p = Object.defineProperty;
var h = Object.getOwnPropertyDescriptor;
var o3 = (n, s3, e3, i4) => {
  for (var t3 = i4 > 1 ? void 0 : i4 ? h(s3, e3) : s3, a7 = n.length - 1, l3; a7 >= 0; a7--)
    (l3 = n[a7]) && (t3 = (i4 ? l3(s3, e3, t3) : l3(t3)) || t3);
  return i4 && t3 && p(s3, e3, t3), t3;
};
var DialogBase = class extends f2(c2) {
  constructor() {
    super(...arguments);
    this.dismissable = false;
    this.open = false;
    this.responsive = false;
    this.transitionPromise = Promise.resolve();
    this.resolveTransitionPromise = () => {
    };
    this.underlay = false;
    this.animating = false;
  }
  static get styles() {
    return [modal_wrapper_css_default, modal_css_default];
  }
  get dialog() {
    return this.shadowRoot.querySelector("slot").assignedElements()[0] || this;
  }
  async focus() {
    if (this.shadowRoot) {
      const e3 = b2(this.dialog);
      e3 ? (e3.updateComplete && await e3.updateComplete, e3.focus()) : this.dialog.focus();
    } else
      super.focus();
  }
  overlayWillCloseCallback() {
    return this.open ? (this.close(), true) : this.animating;
  }
  dismiss() {
    this.dismissable && this.close();
  }
  handleClose(e3) {
    e3.stopPropagation(), this.close();
  }
  close() {
    this.open = false;
  }
  dispatchClosed() {
    this.dispatchEvent(new Event("close", { bubbles: true }));
  }
  handleTransitionEvent(e3) {
    this.dispatchEvent(new TransitionEvent(e3.type, { bubbles: true, composed: true, propertyName: e3.propertyName }));
  }
  handleUnderlayTransitionend(e3) {
    !this.open && e3.propertyName === "visibility" && this.resolveTransitionPromise(), this.handleTransitionEvent(e3);
  }
  handleModalTransitionend(e3) {
    (this.open || !this.underlay) && this.resolveTransitionPromise(), this.handleTransitionEvent(e3);
  }
  update(e3) {
    e3.has("open") && e3.get("open") !== void 0 && (this.animating = true, this.transitionPromise = new Promise((i4) => {
      this.resolveTransitionPromise = () => {
        this.animating = false, i4();
      };
    }), this.open || this.dispatchClosed()), super.update(e3);
  }
  renderDialog() {
    return d`
            <slot></slot>
        `;
  }
  render() {
    return d`
            ${this.underlay ? d`
                      <sp-underlay
                          ?open=${this.open}
                          @close=${this.dismiss}
                          @transitionrun=${this.handleTransitionEvent}
                          @transitionend=${this.handleUnderlayTransitionend}
                          @transitioncancel=${this.handleTransitionEvent}
                      ></sp-underlay>
                  ` : u}
            <div
                class="modal ${this.mode}"
                @transitionrun=${this.handleTransitionEvent}
                @transitionend=${this.handleModalTransitionend}
                @transitioncancel=${this.handleTransitionEvent}
                @close=${this.handleClose}
            >
                ${this.renderDialog()}
            </div>
        `;
  }
  updated(e3) {
    e3.has("open") && this.open && "updateComplete" in this.dialog && "shouldManageTabOrderForScrolling" in this.dialog && this.dialog.updateComplete.then(() => {
      this.dialog.shouldManageTabOrderForScrolling();
    });
  }
  async getUpdateComplete() {
    const e3 = await super.getUpdateComplete();
    return await this.transitionPromise, e3;
  }
};
o3([r({ type: Boolean, reflect: true })], DialogBase.prototype, "dismissable", 2), o3([r({ type: Boolean, reflect: true })], DialogBase.prototype, "open", 2), o3([r({ type: String, reflect: true })], DialogBase.prototype, "mode", 2), o3([r({ type: Boolean })], DialogBase.prototype, "responsive", 2), o3([r({ type: Boolean })], DialogBase.prototype, "underlay", 2);

// node_modules/@spectrum-web-components/dialog/src/DialogWrapper.js
var h2 = Object.defineProperty;
var u2 = Object.getOwnPropertyDescriptor;
var e2 = (c3, o4, r2, n) => {
  for (var i4 = n > 1 ? void 0 : n ? u2(o4, r2) : o4, b3 = c3.length - 1, d2; b3 >= 0; b3--)
    (d2 = c3[b3]) && (i4 = (n ? d2(o4, r2, i4) : d2(i4)) || i4);
  return n && i4 && h2(o4, r2, i4), i4;
};
var DialogWrapper = class extends DialogBase {
  constructor() {
    super(...arguments);
    this.error = false;
    this.cancelLabel = "";
    this.confirmLabel = "";
    this.dismissLabel = "Close";
    this.footer = "";
    this.hero = "";
    this.heroLabel = "";
    this.noDivider = false;
    this.secondaryLabel = "";
    this.headline = "";
  }
  static get styles() {
    return [...super.styles];
  }
  get dialog() {
    return this.shadowRoot.querySelector("sp-dialog");
  }
  clickSecondary() {
    this.dispatchEvent(new Event("secondary", { bubbles: true }));
  }
  clickCancel() {
    this.dispatchEvent(new Event("cancel", { bubbles: true }));
  }
  clickConfirm() {
    this.dispatchEvent(new Event("confirm", { bubbles: true }));
  }
  renderDialog() {
    const r2 = this.noDivider || !this.headline || this.headlineVisibility === "none";
    return s2`
            <sp-dialog
                ?dismissable=${this.dismissable}
                dismiss-label=${this.dismissLabel}
                ?no-divider=${r2}
                ?error=${this.error}
                mode=${a4(this.mode)}
                size=${a4(this.size)}
            >
                ${this.hero ? s2`
                          <img
                              src="${this.hero}"
                              slot="hero"
                              aria-hidden=${a4(this.heroLabel ? void 0 : "true")}
                              alt=${a4(this.heroLabel ? this.heroLabel : void 0)}
                          />
                      ` : l2}
                ${this.headline ? s2`
                          <h2
                              slot="heading"
                              ?hidden=${this.headlineVisibility === "none"}
                          >
                              ${this.headline}
                          </h2>
                      ` : l2}
                <slot></slot>
                ${this.footer ? s2`
                          <div slot="footer">${this.footer}</div>
                      ` : l2}
                ${this.cancelLabel ? s2`
                          <sp-button
                              variant="secondary"
                              treatment="outline"
                              slot="button"
                              @click=${this.clickCancel}
                          >
                              ${this.cancelLabel}
                          </sp-button>
                      ` : l2}
                ${this.secondaryLabel ? s2`
                          <sp-button
                              variant="primary"
                              treatment="outline"
                              slot="button"
                              @click=${this.clickSecondary}
                          >
                              ${this.secondaryLabel}
                          </sp-button>
                      ` : l2}
                ${this.confirmLabel ? s2`
                          <sp-button
                              variant="accent"
                              slot="button"
                              @click=${this.clickConfirm}
                          >
                              ${this.confirmLabel}
                          </sp-button>
                      ` : l2}
            </sp-dialog>
        `;
  }
};
e2([t2({ type: Boolean, reflect: true })], DialogWrapper.prototype, "error", 2), e2([t2({ attribute: "cancel-label" })], DialogWrapper.prototype, "cancelLabel", 2), e2([t2({ attribute: "confirm-label" })], DialogWrapper.prototype, "confirmLabel", 2), e2([t2({ attribute: "dismiss-label" })], DialogWrapper.prototype, "dismissLabel", 2), e2([t2()], DialogWrapper.prototype, "footer", 2), e2([t2()], DialogWrapper.prototype, "hero", 2), e2([t2({ attribute: "hero-label" })], DialogWrapper.prototype, "heroLabel", 2), e2([t2({ type: Boolean, reflect: true, attribute: "no-divider" })], DialogWrapper.prototype, "noDivider", 2), e2([t2({ type: String, reflect: true })], DialogWrapper.prototype, "size", 2), e2([t2({ attribute: "secondary-label" })], DialogWrapper.prototype, "secondaryLabel", 2), e2([t2()], DialogWrapper.prototype, "headline", 2), e2([t2({ type: String, attribute: "headline-visibility" })], DialogWrapper.prototype, "headlineVisibility", 2);

// node_modules/@spectrum-web-components/dialog/sp-dialog-wrapper.js
import { defineElement as a5 } from "/libs/features/spectrum-web-components/dist/base.js";
a5("sp-dialog-wrapper", DialogWrapper);

// node_modules/@spectrum-web-components/dialog/sp-dialog-base.js
import { defineElement as a6 } from "/libs/features/spectrum-web-components/dist/base.js";
a6("sp-dialog-base", DialogBase);
//# sourceMappingURL=dialog.js.map
