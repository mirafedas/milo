// node_modules/@spectrum-web-components/tray/src/Tray.js
import { html as d, SpectrumElement as m } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as c, query as h } from "/libs/features/spectrum-web-components/dist/base.js";
import "/libs/features/spectrum-web-components/dist/underlay.js";
import { firstFocusableIn as u } from "/libs/features/spectrum-web-components/dist/shared.js";
import { MatchMediaController as f } from "/libs/features/spectrum-web-components/dist/reactive-controllers.js";

// node_modules/@spectrum-web-components/modal/src/modal.css.js
import { css as a } from "/libs/features/spectrum-web-components/dist/base.js";
var i = a`
    .modal{pointer-events:none;visibility:hidden;opacity:0;transition:transform var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,opacity var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,visibility 0s linear var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))}:host([open]) .modal{pointer-events:auto;visibility:visible;opacity:1;transition-delay:var(--mod-overlay-animation-duration-opened,var(--spectrum-animation-duration-0,0s))}:host{--spectrum-modal-confirm-exit-animation-delay:var(--spectrum-animation-duration-0);--spectrum-modal-fullscreen-margin:32px;--spectrum-modal-max-height:90vh;--spectrum-modal-max-width:90%;--spectrum-modal-background-color:var(--spectrum-gray-100);--spectrum-modal-confirm-border-radius:var(--spectrum-corner-radius-100);--spectrum-modal-confirm-exit-animation-duration:var(--spectrum-animation-duration-100);--spectrum-modal-confirm-entry-animation-duration:var(--spectrum-animation-duration-500);--spectrum-modal-confirm-entry-animation-delay:var(--spectrum-animation-duration-200);--spectrum-modal-transition-animation-duration:var(--spectrum-animation-duration-100)}.modal{transform:translateY(var(--mod-modal-confirm-entry-animation-distance,var(--spectrum-modal-confirm-entry-animation-distance)));z-index:1;max-block-size:var(--mod-modal-max-height,var(--spectrum-modal-max-height));max-inline-size:var(--mod-modal-max-width,var(--spectrum-modal-max-width));background:var(--mod-modal-background-color,var(--spectrum-modal-background-color));border-radius:var(--mod-modal-confirm-border-radius,var(--spectrum-modal-confirm-border-radius));pointer-events:auto;transition:opacity var(--mod-modal-confirm-exit-animation-duration,var(--spectrum-modal-confirm-exit-animation-duration))var(--spectrum-animation-ease-in)var(--mod-modal-confirm-exit-animation-delay,var(--spectrum-modal-confirm-exit-animation-delay)),visibility 0s linear calc(var(--mod-modal-confirm-exit-animation-delay,var(--spectrum-modal-confirm-exit-animation-delay)) + var(--mod-modal-confirm-exit-animation-duration,var(--spectrum-modal-confirm-exit-animation-duration))),transform 0s linear calc(var(--mod-modal-confirm-exit-animation-delay,var(--spectrum-modal-confirm-exit-animation-delay)) + var(--mod-modal-confirm-exit-animation-duration,var(--spectrum-modal-confirm-exit-animation-duration)));outline:none;overflow:hidden}:host([open]) .modal{transition:transform var(--mod-modal-confirm-entry-animation-duration,var(--spectrum-modal-confirm-entry-animation-duration))var(--spectrum-animation-ease-out)var(--mod-modal-confirm-entry-animation-delay,var(--spectrum-modal-confirm-entry-animation-delay)),opacity var(--mod-modal-confirm-entry-animation-duration,var(--spectrum-modal-confirm-entry-animation-duration))var(--spectrum-animation-ease-out)var(--mod-modal-confirm-entry-animation-delay,var(--spectrum-modal-confirm-entry-animation-delay));transform:translateY(0)}@media only screen and (device-height<=350px),only screen and (device-width<=400px){:host([responsive]) .modal{inline-size:100%;block-size:100%;max-inline-size:100%;max-block-size:100%;border-radius:0}}.fullscreen{max-inline-size:none;max-block-size:none;position:fixed;inset-block-start:var(--mod-modal-fullscreen-margin,var(--spectrum-modal-fullscreen-margin));inset-block-end:var(--mod-modal-fullscreen-margin,var(--spectrum-modal-fullscreen-margin));inset-inline-start:var(--mod-modal-fullscreen-margin,var(--spectrum-modal-fullscreen-margin));inset-inline-end:var(--mod-modal-fullscreen-margin,var(--spectrum-modal-fullscreen-margin))}.fullscreenTakeover{max-inline-size:none;max-block-size:none;box-sizing:border-box;border:none;border-radius:0;position:fixed;inset:0}.fullscreenTakeover,:host([open]) .fullscreenTakeover{transform:none}:host{--spectrum-dialog-confirm-exit-animation-duration:var(--swc-test-duration);--spectrum-dialog-confirm-entry-animation-duration:var(--swc-test-duration);--spectrum-modal-confirm-entry-animation-distance:var(--spectrum-dialog-confirm-entry-animation-distance);height:100dvh}.modal{overflow:visible}
`;
var modal_css_default = i;

// node_modules/@spectrum-web-components/tray/src/tray.css.js
import { css as a2 } from "/libs/features/spectrum-web-components/dist/base.js";
var r = a2`
    :host{inline-size:100%;justify-content:center;display:flex;position:fixed;inset-block-end:0;inset-inline-start:0}:host{--spectrum-tray-exit-animation-delay:0s;--spectrum-tray-entry-animation-delay:.16s;--spectrum-tray-max-inline-size:375px;--spectrum-tray-spacing-edge-to-tray-safe-zone:64px;--spectrum-tray-entry-animation-duration:var(--spectrum-animation-duration-500);--spectrum-tray-exit-animation-duration:var(--spectrum-animation-duration-100);--spectrum-tray-corner-radius:var(--spectrum-corner-radius-100);--spectrum-tray-background-color:var(--spectrum-background-layer-2-color)}.tray{inline-size:100%;--mod-modal-max-width:100%;max-inline-size:100%;max-block-size:calc(100vh - var(--mod-tray-spacing-edge-to-tray-safe-zone,var(--spectrum-tray-spacing-edge-to-tray-safe-zone)));box-sizing:border-box;border-radius:var(--mod-tray-corner-radius-portrait,0)var(--mod-tray-corner-radius-portrait,0)0 0;transition:opacity var(--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration))cubic-bezier(.5,0,1,1)var(--mod-tray-exit-animation-delay,var(--spectrum-tray-exit-animation-delay)),visibility var(--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration))linear calc(var(--mod-tray-exit-animation-delay,var(--spectrum-tray-exit-animation-delay)) + var(--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration))),transform var(--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration))cubic-bezier(.5,0,1,1)var(--mod-tray-exit-animation-delay,var(--spectrum-tray-exit-animation-delay));background-color:var(--highcontrast-tray-background-color,var(--mod-tray-background-color,var(--spectrum-tray-background-color)));outline:none;margin-block-start:var(--mod-tray-spacing-edge-to-tray-safe-zone,var(--spectrum-tray-spacing-edge-to-tray-safe-zone));padding-block-start:var(--mod-tray-top-to-content-area,var(--spectrum-tray-top-to-content-area));padding-block-end:var(--mod-tray-bottom-to-content-area,var(--spectrum-tray-top-to-content-area));overflow:auto;transform:translateY(100%)}:host([open]) .tray{transition:transform var(--mod-tray-entry-animation-duration,var(--spectrum-tray-entry-animation-duration))cubic-bezier(0,0,.4,1)var(--mod-tray-entry-animation-delay,var(--spectrum-tray-entry-animation-delay)),opacity var(--spectrum-tray-entry-animation-duration,var(--mod-tray-entry-animation-duration))cubic-bezier(0,0,.4,1)var(--mod-tray-entry-animation-delay,var(--spectrum-tray-entry-animation-delay));transform:translateY(0)}@media screen and (orientation:landscape){.tray{max-inline-size:var(--mod-tray-max-inline-size,var(--spectrum-tray-max-inline-size));border-start-start-radius:var(--mod-tray-corner-radius,var(--spectrum-tray-corner-radius));border-start-end-radius:var(--mod-tray-corner-radius,var(--spectrum-tray-corner-radius))}}@media (forced-colors:active){.tray{--highcontrast-tray-background-color:Canvas;border:solid}.tray ::slotted(*){border:none}}:host{max-height:100vh;max-height:100dvh;align-items:flex-end;position:fixed!important}sp-underlay{touch-action:none}.tray{overscroll-behavior:contain;display:inline-flex}::slotted(.visually-hidden){clip:rect(0,0,0,0);clip-path:inset(50%);height:1px;width:1px;white-space:nowrap;border:0;margin:0 -1px -1px 0;padding:0;position:absolute;overflow:hidden}
`;
var tray_css_default = r;

// node_modules/@spectrum-web-components/tray/src/Tray.js
var l = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var a3 = (o, r2, e, i2) => {
  for (var t = i2 > 1 ? void 0 : i2 ? p(r2, e) : r2, s = o.length - 1, n; s >= 0; s--)
    (n = o[s]) && (t = (i2 ? n(r2, e, t) : n(t)) || t);
  return i2 && t && l(r2, e, t), t;
};
var Tray = class extends m {
  constructor() {
    super(...arguments);
    this.open = false;
    this.prefersMotion = new f(this, "(prefers-reduced-motion: no-preference)");
    this.transitionPromise = Promise.resolve();
    this.animating = false;
  }
  static get styles() {
    return [modal_css_default, tray_css_default];
  }
  focus() {
    const e = u(this);
    e ? e.focus() : this.children.length === 1 ? this.tray.focus() : super.focus();
  }
  overlayWillCloseCallback() {
    return this.open ? (this.close(), true) : this.animating;
  }
  close() {
    this.open = false, this.prefersMotion.matches || this.dispatchClosed();
  }
  dispatchClosed() {
    this.dispatchEvent(new Event("close", { bubbles: true }));
  }
  handleUnderlayTransitionend() {
    this.open || (this.resolveTransitionPromise(), this.dispatchClosed());
  }
  handleTrayTransitionend() {
    this.open && this.resolveTransitionPromise();
  }
  update(e) {
    e.has("open") && e.get("open") !== void 0 && this.prefersMotion.matches && (this.animating = true, this.transitionPromise = new Promise((i2) => {
      this.resolveTransitionPromise = () => {
        this.animating = false, i2();
      };
    })), super.update(e);
  }
  render() {
    return d`
            <sp-underlay
                ?open=${this.open}
                @close=${this.close}
                @transitionend=${this.handleUnderlayTransitionend}
            ></sp-underlay>
            <div
                class="tray modal"
                tabindex="-1"
                @transitionend=${this.handleTrayTransitionend}
            >
                <slot></slot>
            </div>
        `;
  }
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.transitionPromise, e;
  }
};
a3([c({ type: Boolean, reflect: true })], Tray.prototype, "open", 2), a3([h(".tray")], Tray.prototype, "tray", 2);

// node_modules/@spectrum-web-components/tray/sp-tray.js
import { defineElement as a4 } from "/libs/features/spectrum-web-components/dist/base.js";
a4("sp-tray", Tray);
//# sourceMappingURL=tray.js.map
