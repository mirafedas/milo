// node_modules/@spectrum-web-components/action-menu/src/ActionMenu.js
import { html as s } from "/libs/features/spectrum-web-components/dist/base.js";
import { state as b } from "/libs/features/spectrum-web-components/dist/base.js";
import { ifDefined as d } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as p } from "/libs/features/spectrum-web-components/dist/base.js";
import { DESCRIPTION_ID as c, PickerBase as m } from "/libs/features/spectrum-web-components/dist/picker.js";
import "/libs/features/spectrum-web-components/dist/action-button.js";
import { ObserveSlotPresence as f } from "/libs/features/spectrum-web-components/dist/shared.js";
import { ObserveSlotText as $ } from "/libs/features/spectrum-web-components/dist/shared.js";
import "/libs/features/spectrum-web-components/dist/icons-workflow.js";

// node_modules/@spectrum-web-components/action-menu/src/action-menu.css.js
import { css as t } from "/libs/features/spectrum-web-components/dist/base.js";
var o = t`
    :host{display:inline-flex}:host([quiet]){min-width:0}:host>sp-menu{display:none}::slotted([slot=icon]){flex-shrink:0}.icon{flex-shrink:0}#popover{max-width:none}:host([dir=ltr]) ::slotted([slot=icon]),:host([dir=ltr]) .icon{margin-left:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir=rtl]) ::slotted([slot=icon]),:host([dir=rtl]) .icon{margin-right:calc(-1*(var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted)))}:host([dir]) slot[icon-only]::slotted([slot=icon]),:host([dir]) slot[icon-only] .icon{margin-inline:calc(( var(--custom-actionbutton-edge-to-text,var(--spectrum-actionbutton-edge-to-text)) - var(--custom-actionbutton-edge-to-visual-only,var(--spectrum-actionbutton-edge-to-visual-only)))*-1)}sp-overlay:not(:defined){display:none}
`;
var action_menu_css_default = o;

// node_modules/@spectrum-web-components/action-menu/src/ActionMenu.js
import { SlottableRequestEvent as y } from "/libs/features/spectrum-web-components/dist/overlay.js";
var u = Object.defineProperty;
var h = Object.getOwnPropertyDescriptor;
var l = (r, i, e, o2) => {
  for (var t2 = o2 > 1 ? void 0 : o2 ? h(i, e) : i, n2 = r.length - 1, a; n2 >= 0; n2--)
    (a = r[n2]) && (t2 = (o2 ? a(i, e, t2) : a(t2)) || t2);
  return o2 && t2 && u(i, e, t2), t2;
};
var ActionMenu = class extends f($(m, "label"), '[slot="label-only"]') {
  constructor() {
    super(...arguments);
    this.selects = void 0;
    this.static = void 0;
    this.listRole = "menu";
    this.itemRole = "menuitem";
    this.handleSlottableRequest = (e) => {
      this.dispatchEvent(new y(e.name, e.data));
    };
  }
  static get styles() {
    return [action_menu_css_default];
  }
  get hasLabel() {
    return this.slotHasContent;
  }
  get labelOnly() {
    return this.slotContentIsPresent;
  }
  get buttonContent() {
    return [s`
                ${this.labelOnly ? s`` : s`
                          <slot
                              name="icon"
                              slot="icon"
                              ?icon-only=${!this.hasLabel}
                              ?hidden=${this.labelOnly}
                          >
                              <sp-icon-more class="icon"></sp-icon-more>
                          </slot>
                      `}
                <slot name="label" ?hidden=${!this.hasLabel}></slot>
                <slot name="label-only"></slot>
                <slot
                    name="tooltip"
                    @slotchange=${this.handleTooltipSlotchange}
                ></slot>
            `];
  }
  render() {
    return this.tooltipEl && (this.tooltipEl.disabled = this.open), s`
            <sp-action-button
                aria-describedby=${c}
                ?quiet=${this.quiet}
                ?selected=${this.open}
                static=${d(this.static)}
                aria-haspopup="true"
                aria-controls=${d(this.open ? "menu" : void 0)}
                aria-expanded=${this.open ? "true" : "false"}
                aria-label=${d(this.label || void 0)}
                id="button"
                class="button"
                size=${this.size}
                @blur=${this.handleButtonBlur}
                @focus=${this.handleButtonFocus}
                @keydown=${{ handleEvent: this.handleEnterKeydown, capture: true }}
                ?disabled=${this.disabled}
            >
                ${this.buttonContent}
            </sp-action-button>
            ${this.renderMenu} ${this.renderDescriptionSlot}
        `;
  }
  update(e) {
    e.has("invalid") && (this.invalid = false), super.update(e);
  }
};
l([p({ type: String })], ActionMenu.prototype, "selects", 2), l([p({ type: String, reflect: true })], ActionMenu.prototype, "static", 2), l([b()], ActionMenu.prototype, "labelOnly", 1);

// node_modules/@spectrum-web-components/action-menu/sp-action-menu.js
import { defineElement as n } from "/libs/features/spectrum-web-components/dist/base.js";
n("sp-action-menu", ActionMenu);
//# sourceMappingURL=action-menu.js.map
