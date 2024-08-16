// node_modules/@spectrum-web-components/sidenav/src/Sidenav.js
import { html as v2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as n3 } from "/libs/features/spectrum-web-components/dist/base.js";
import { RovingTabindexController as c } from "/libs/features/spectrum-web-components/dist/reactive-controllers.js";

// node_modules/@spectrum-web-components/sidenav/src/sidenav.css.js
import { css as e } from "/libs/features/spectrum-web-components/dist/base.js";
var t = e`
    :host{--spectrum-sidenav-focus-ring-size:var(--spectrum-focus-indicator-thickness);--spectrum-sidenav-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-sidenav-focus-ring-color:var(--spectrum-focus-indicator-color);--spectrum-sidenav-min-height:var(--spectrum-component-height-100);--spectrum-sidenav-width:100%;--spectrum-sidenav-min-width:var(--spectrum-side-navigation-minimum-width);--spectrum-sidenav-max-width:var(--spectrum-side-navigation-maximum-width);--spectrum-sidenav-border-radius:var(--spectrum-corner-radius-100);--spectrum-sidenav-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-sidenav-icon-spacing:var(--spectrum-text-to-visual-100);--spectrum-sidenav-inline-padding:var(--spectrum-component-edge-to-text-100);--spectrum-sidenav-gap:var(--spectrum-side-navigation-item-to-item);--spectrum-sidenav-top-to-icon:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-sidenav-top-to-label:var(--spectrum-component-top-to-text-100);--spectrum-sidenav-bottom-to-label:var(--spectrum-side-navigation-bottom-to-text);--spectrum-sidenav-start-to-content-second-level:var(--spectrum-side-navigation-second-level-edge-to-text);--spectrum-sidenav-start-to-content-third-level:var(--spectrum-side-navigation-third-level-edge-to-text);--spectrum-sidenav-start-to-content-with-icon-second-level:var(--spectrum-side-navigation-with-icon-second-level-edge-to-text);--spectrum-sidenav-start-to-content-with-icon-third-level:var(--spectrum-side-navigation-with-icon-third-level-edge-to-text);--spectrum-sidenav-heading-top-margin:var(--spectrum-side-navigation-item-to-header);--spectrum-sidenav-heading-bottom-margin:var(--spectrum-side-navigation-header-to-item);--spectrum-sidenav-background-disabled:transparent;--spectrum-sidenav-background-default:transparent;--spectrum-sidenav-background-hover:var(--spectrum-gray-200);--spectrum-sidenav-item-background-down:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus:var(--spectrum-gray-200);--spectrum-sidenav-item-background-default-selected:var(--spectrum-gray-200);--spectrum-sidenav-background-hover-selected:var(--spectrum-gray-300);--spectrum-sidenav-item-background-down-selected:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus-selected:var(--spectrum-gray-200);--spectrum-sidenav-header-color:var(--spectrum-gray-600);--spectrum-sidenav-content-disabled-color:var(--spectrum-disabled-content-color);--spectrum-sidenav-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-sidenav-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-sidenav-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-sidenav-content-color-key-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-sidenav-content-color-default-selected:var(--spectrum-neutral-content-color-default);--spectrum-sidenav-content-color-hover-selected:var(--spectrum-neutral-content-color-hover);--spectrum-sidenav-content-color-down-selected:var(--spectrum-neutral-content-color-down);--spectrum-sidenav-content-color-key-focus-selected:var(--spectrum-neutral-content-color-key-focus);--spectrum-sidenav-text-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-text-font-weight:var(--spectrum-regular-font-weight);--spectrum-sidenav-text-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-text-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-text-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-top-level-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-top-level-font-weight:var(--spectrum-bold-font-weight);--spectrum-sidenav-top-level-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-top-level-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-header-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-header-font-weight:var(--spectrum-medium-font-weight);--spectrum-sidenav-header-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-header-font-size:var(--spectrum-font-size-75);--spectrum-sidenav-header-line-height:var(--spectrum-line-height-100)}:host:lang(ja),:host:lang(ko),:host:lang(zh){--spectrum-sidenav-text-line-height:var(--spectrum-cjk-line-height-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-cjk-line-height-100);--spectrum-sidenav-header-line-height:var(--spectrum-cjk-line-height-100)}:host{flex-direction:column;margin:0;padding:0;list-style-type:none;display:flex}@media (forced-colors:active){.spectrum-Icon{forced-color-adjust:preserve-parent-color}}:host{width:240px;--spectrum-web-component-sidenav-font-weight:var(--mod-sidenav-text-font-weight,var(--spectrum-sidenav-text-font-weight));display:block}:host(:not([variant=multilevel])){--mod-sidenav-top-level-font-weight:var(--mod-sidenav-text-font-weight,var(--spectrum-sidenav-text-font-weight))}
`;
var sidenav_css_default = t;

// node_modules/@spectrum-web-components/sidenav/src/Sidenav.js
import { Focusable as p3 } from "/libs/features/spectrum-web-components/dist/shared.js";

// node_modules/@spectrum-web-components/sidenav/src/SidenavItem.js
import { html as p, nothing as v } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as o } from "/libs/features/spectrum-web-components/dist/base.js";
import { ifDefined as s } from "/libs/features/spectrum-web-components/dist/base.js";
import { LikeAnchor as f } from "/libs/features/spectrum-web-components/dist/shared.js";
import { Focusable as m } from "/libs/features/spectrum-web-components/dist/shared.js";

// node_modules/@spectrum-web-components/sidenav/src/sidenav-item.css.js
import { css as e2 } from "/libs/features/spectrum-web-components/dist/base.js";
var t2 = e2`
    #list{--spectrum-sidenav-focus-ring-size:var(--spectrum-focus-indicator-thickness);--spectrum-sidenav-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-sidenav-focus-ring-color:var(--spectrum-focus-indicator-color);--spectrum-sidenav-min-height:var(--spectrum-component-height-100);--spectrum-sidenav-width:100%;--spectrum-sidenav-min-width:var(--spectrum-side-navigation-minimum-width);--spectrum-sidenav-max-width:var(--spectrum-side-navigation-maximum-width);--spectrum-sidenav-border-radius:var(--spectrum-corner-radius-100);--spectrum-sidenav-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-sidenav-icon-spacing:var(--spectrum-text-to-visual-100);--spectrum-sidenav-inline-padding:var(--spectrum-component-edge-to-text-100);--spectrum-sidenav-gap:var(--spectrum-side-navigation-item-to-item);--spectrum-sidenav-top-to-icon:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-sidenav-top-to-label:var(--spectrum-component-top-to-text-100);--spectrum-sidenav-bottom-to-label:var(--spectrum-side-navigation-bottom-to-text);--spectrum-sidenav-start-to-content-second-level:var(--spectrum-side-navigation-second-level-edge-to-text);--spectrum-sidenav-start-to-content-third-level:var(--spectrum-side-navigation-third-level-edge-to-text);--spectrum-sidenav-start-to-content-with-icon-second-level:var(--spectrum-side-navigation-with-icon-second-level-edge-to-text);--spectrum-sidenav-start-to-content-with-icon-third-level:var(--spectrum-side-navigation-with-icon-third-level-edge-to-text);--spectrum-sidenav-heading-top-margin:var(--spectrum-side-navigation-item-to-header);--spectrum-sidenav-heading-bottom-margin:var(--spectrum-side-navigation-header-to-item);--spectrum-sidenav-background-disabled:transparent;--spectrum-sidenav-background-default:transparent;--spectrum-sidenav-background-hover:var(--spectrum-gray-200);--spectrum-sidenav-item-background-down:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus:var(--spectrum-gray-200);--spectrum-sidenav-item-background-default-selected:var(--spectrum-gray-200);--spectrum-sidenav-background-hover-selected:var(--spectrum-gray-300);--spectrum-sidenav-item-background-down-selected:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus-selected:var(--spectrum-gray-200);--spectrum-sidenav-header-color:var(--spectrum-gray-600);--spectrum-sidenav-content-disabled-color:var(--spectrum-disabled-content-color);--spectrum-sidenav-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-sidenav-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-sidenav-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-sidenav-content-color-key-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-sidenav-content-color-default-selected:var(--spectrum-neutral-content-color-default);--spectrum-sidenav-content-color-hover-selected:var(--spectrum-neutral-content-color-hover);--spectrum-sidenav-content-color-down-selected:var(--spectrum-neutral-content-color-down);--spectrum-sidenav-content-color-key-focus-selected:var(--spectrum-neutral-content-color-key-focus);--spectrum-sidenav-text-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-text-font-weight:var(--spectrum-regular-font-weight);--spectrum-sidenav-text-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-text-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-text-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-top-level-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-top-level-font-weight:var(--spectrum-bold-font-weight);--spectrum-sidenav-top-level-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-top-level-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-header-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-header-font-weight:var(--spectrum-medium-font-weight);--spectrum-sidenav-header-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-header-font-size:var(--spectrum-font-size-75);--spectrum-sidenav-header-line-height:var(--spectrum-line-height-100)}#list:lang(ja),#list:lang(ko),#list:lang(zh){--spectrum-sidenav-text-line-height:var(--spectrum-cjk-line-height-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-cjk-line-height-100);--spectrum-sidenav-header-line-height:var(--spectrum-cjk-line-height-100)}#list{flex-direction:column;margin:0;padding:0;list-style-type:none;display:flex}:host{margin-inline:0;list-style-type:none}:host([disabled]) #item-link{background-color:var(--highcontrast-sidenav-background-disabled,var(--mod-sidenav-background-disabled,var(--spectrum-sidenav-background-disabled)));color:var(--highcontrast-sidenav-content-disabled-color,var(--mod-sidenav-content-disabled-color,var(--spectrum-sidenav-content-disabled-color)));cursor:default;pointer-events:none}:host([selected]) #item-link{background-color:var(--highcontrast-sidenav-item-background-default-selected,var(--mod-sidenav-item-background-default-selected,var(--spectrum-sidenav-item-background-default-selected)));color:var(--highcontrast-sidenav-content-color-default-selected,var(--mod-sidenav-content-color-default-selected,var(--spectrum-sidenav-content-color-default-selected)))}:host([selected]) #item-link:active{background-color:var(--highcontrast-sidenav-item-background-down-selected,var(--mod-sidenav-item-background-down-selected,var(--spectrum-sidenav-item-background-down-selected)));color:var(--mod-sidenav-content-color-down-selected,var(--spectrum-sidenav-content-color-down-selected))}:host([selected]) #item-link.is-keyboardFocused,:host([selected]) #item-link:focus-visible{background-color:var(--highcontrast-sidenav-background-key-focus-selected,var(--mod-sidenav-background-key-focus-selected,var(--spectrum-sidenav-background-key-focus-selected)));color:var(--mod-sidenav-content-color-key-focus-selected,var(--spectrum-sidenav-content-color-key-focus-selected))}#item-link{padding-inline:var(--mod-sidenav-inline-padding,var(--spectrum-sidenav-inline-padding));box-sizing:border-box;word-break:break-word;hyphens:auto;cursor:pointer;transition:background-color var(--spectrum-animation-duration-100)ease-out,color var(--spectrum-animation-duration-100)ease-out;border-radius:var(--mod-sidenav-border-radius,var(--spectrum-sidenav-border-radius));background-color:var(--highcontrast-sidenav-background-default,var(--mod-sidenav-background-default,var(--spectrum-sidenav-background-default)));color:var(--highcontrast-sidenav-content-color-default,var(--mod-sidenav-content-color-default,var(--spectrum-sidenav-content-color-default)));inline-size:var(--mod-sidenav-width,var(--spectrum-sidenav-width));min-inline-size:var(--mod-sidenav-min-width,var(--spectrum-sidenav-min-width));max-inline-size:var(--mod-sidenav-max-width,var(--spectrum-sidenav-max-width));min-block-size:var(--mod-sidenav-min-height,var(--spectrum-sidenav-min-height));font-family:var(--mod-sidenav-text-font-family,var(--spectrum-sidenav-text-font-family));font-size:var(--mod-sidenav-text-font-size,var(--spectrum-sidenav-text-font-size));font-weight:var(--mod-sidenav-text-font-weight,var(--spectrum-sidenav-text-font-weight));font-style:var(--mod-sidenav-text-font-style,var(--spectrum-sidenav-text-font-style));line-height:var(--mod-sidenav-text-line-height,var(--spectrum-sidenav-text-line-height));justify-content:start;margin-block-end:var(--mod-sidenav-gap,var(--spectrum-sidenav-gap));-webkit-text-decoration:none;text-decoration:none;display:inline-flex;position:relative}#item-link #link-text{margin-block-start:var(--mod-sidenav-top-to-label,var(--spectrum-sidenav-top-to-label));margin-block-end:var(--mod-sidenav-bottom-to-label,var(--spectrum-sidenav-bottom-to-label))}#item-link ::slotted([slot=icon]){inline-size:var(--mod-sidenav-icon-size,var(--spectrum-sidenav-icon-size));block-size:var(--mod-sidenav-icon-size,var(--spectrum-sidenav-icon-size));flex-shrink:0;margin-block-start:var(--mod-sidenav-top-to-icon,var(--spectrum-sidenav-top-to-icon));margin-inline-end:var(--mod-sidenav-icon-spacing,var(--spectrum-sidenav-icon-spacing))}@media (hover:hover){:host([selected]) #item-link:hover{background-color:var(--highcontrast-sidenav-background-hover-selected,var(--mod-sidenav-background-hover-selected,var(--spectrum-sidenav-background-hover-selected)));color:var(--mod-sidenav-content-color-hover-selected,var(--spectrum-sidenav-content-color-hover-selected))}#item-link:hover{background-color:var(--highcontrast-sidenav-background-hover,var(--mod-sidenav-background-hover,var(--spectrum-sidenav-background-hover)));color:var(--highcontrast-sidenav-content-color-hover,var(--mod-sidenav-content-color-hover,var(--spectrum-sidenav-content-color-hover)))}}#item-link:active{background-color:var(--highcontrast-sidenav-item-background-down,var(--mod-sidenav-item-background-down,var(--spectrum-sidenav-item-background-down)));color:var(--highcontrast-sidenav-content-color-down,var(--mod-sidenav-content-color-down,var(--spectrum-sidenav-content-color-down)))}#item-link.is-keyboardFocused,#item-link:focus-visible{outline:var(--highcontrast-sidenav-focus-ring-color,var(--mod-sidenav-focus-ring-color,var(--spectrum-sidenav-focus-ring-color)))solid var(--mod-sidenav-focus-ring-size,var(--spectrum-sidenav-focus-ring-size));outline-offset:var(--mod-sidenav-focus-ring-gap,var(--spectrum-sidenav-focus-ring-gap));background-color:var(--highcontrast-sidenav-background-key-focus,var(--mod-sidenav-background-key-focus,var(--spectrum-sidenav-background-key-focus)));color:var(--highcontrast-sidenav-content-color-key-focus,var(--mod-sidenav-content-color-key-focus,var(--spectrum-sidenav-content-color-key-focus)))}#item-link[data-level]{font-family:var(--mod-sidenav-top-level-font-family,var(--spectrum-sidenav-top-level-font-family));font-weight:var(--mod-sidenav-top-level-font-weight,var(--spectrum-sidenav-top-level-font-weight));font-style:var(--mod-sidenav-top-level-font-style,var(--spectrum-sidenav-top-level-font-style));font-size:var(--mod-sidenav-top-level-font-size,var(--spectrum-sidenav-top-level-font-size));line-height:var(--mod-sidenav-top-level-line-height,var(--spectrum-sidenav-top-level-line-height))}#item-link:not([data-level="0"]){font-weight:var(--mod-sidenav-text-font-weight,var(--spectrum-sidenav-text-font-weight));padding-inline-start:var(--mod-sidenav-start-to-content-second-level,var(--spectrum-sidenav-start-to-content-second-level))}#item-link[data-level="2"]{padding-inline-start:var(--mod-sidenav-start-to-content-third-level,var(--spectrum-sidenav-start-to-content-third-level))}.spectrum-SideNav--hasIcon#item-link:not([data-level="0"]){padding-inline-start:var(--mod-sidenav-start-to-content-with-icon-second-level,var(--spectrum-sidenav-start-to-content-with-icon-second-level))}.spectrum-SideNav--hasIcon#item-link[data-level="2"]{padding-inline-start:var(--mod-sidenav-start-to-content-with-icon-third-level,var(--spectrum-sidenav-start-to-content-with-icon-third-level))}@media (forced-colors:active){#list ::slotted([slot=icon]){forced-color-adjust:preserve-parent-color}:host{forced-color-adjust:none;--highcontrast-sidenav-content-disabled-color:GrayText;--highcontrast-sidenav-focus-ring-color:Highlight;--highcontrast-sidenav-content-color-default-selected:SelectedItemText;--highcontrast-sidenav-item-background-default-selected:SelectedItem;--highcontrast-sidenav-background-key-focus-selected:Highlight;--highcontrast-sidenav-background-hover-selected:Highlight;--highcontrast-sidenav-item-background-down-selected:Highlight;--highcontrast-sidenav-item-background-down:Highlight;--highcontrast-sidenav-background-hover:Highlight;--highcontrast-sidenav-content-color-hover:HighlightText;--highcontrast-sidenav-background-key-focus:Highlight;--highcontrast-sidenav-top-level-font-color:ButtonText;--highcontrast-sidenav-content-color-default:ButtonText;--highcontrast-sidenav-content-color-down:HighlightText}}:host{display:block}:host([disabled]){pointer-events:none}a ::slotted(sp-sidenav-item){display:none}
`;
var sidenav_item_css_default = t2;

// node_modules/@spectrum-web-components/sidenav/src/SidenavItem.js
var h = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var n = (c2, a3, e4, t4) => {
  for (var i = t4 > 1 ? void 0 : t4 ? u(a3, e4) : a3, d = c2.length - 1, l; d >= 0; d--)
    (l = c2[d]) && (i = (t4 ? l(a3, e4, i) : l(i)) || i);
  return t4 && i && h(a3, e4, i), i;
};
var r = class r2 extends f(m) {
  constructor() {
    super(...arguments);
    this.value = void 0;
    this.selected = false;
    this.expanded = false;
  }
  static get styles() {
    return [sidenav_item_css_default];
  }
  get parentSideNav() {
    return this._parentSidenav || (this._parentSidenav = this.closest("sp-sidenav")), this._parentSidenav;
  }
  get hasChildren() {
    return !!this.querySelector("sp-sidenav-item");
  }
  get depth() {
    let e4 = 0, t4 = this.parentElement;
    for (; t4 instanceof r2; )
      e4++, t4 = t4.parentElement;
    return e4;
  }
  handleSideNavSelect(e4) {
    this.selected = e4.target === this;
  }
  handleClick(e4) {
    !this.href && e4 && e4.preventDefault(), !this.disabled && (!this.href || e4 != null && e4.defaultPrevented) && (this.hasChildren ? this.expanded = !this.expanded : this.value && this.announceSelected(this.value));
  }
  announceSelected(e4) {
    const t4 = { value: e4 }, i = new CustomEvent("sidenav-select", { bubbles: true, composed: true, detail: t4 });
    this.dispatchEvent(i);
  }
  click() {
    this.handleClick();
  }
  get focusElement() {
    return this.shadowRoot.querySelector("#item-link");
  }
  update(e4) {
    this.hasAttribute("slot") || (this.slot = "descendant"), super.update(e4);
  }
  render() {
    return p`
            <a
                href=${this.href || "#"}
                target=${s(this.target)}
                download=${s(this.download)}
                rel=${s(this.rel)}
                data-level="${this.depth}"
                @click="${this.handleClick}"
                id="item-link"
                aria-current=${s(this.selected && this.href ? "page" : void 0)}
                aria-expanded=${s(this.hasChildren ? this.expanded : void 0)}
                aria-controls=${s(this.hasChildren && this.expanded ? "list" : void 0)}
            >
                <slot name="icon"></slot>
                <span id="link-text">
                    ${this.label}
                    <slot></slot>
                </span>
            </a>
            ${this.expanded ? p`
                      <div id="list" aria-labelledby="item-link" role="list">
                          <slot name="descendant"></slot>
                      </div>
                  ` : v}
        `;
  }
  updated(e4) {
    var t4;
    this.hasChildren && this.expanded && !this.selected && ((t4 = this.parentSideNav) != null && t4.manageTabIndex) ? this.focusElement.tabIndex = -1 : this.focusElement.removeAttribute("tabindex"), super.updated(e4);
  }
  connectedCallback() {
    super.connectedCallback(), this.startTrackingSelection();
  }
  disconnectedCallback() {
    this.stopTrackingSelection(), super.disconnectedCallback();
  }
  async startTrackingSelection() {
    const e4 = this.parentSideNav;
    if (e4 && (await e4.updateComplete, e4.startTrackingSelectionForItem(this), this.selected = this.value != null && this.value === e4.value, this.selected === true && e4.variant === "multilevel")) {
      let t4 = this.parentElement;
      for (; t4 instanceof r2; )
        t4.expanded = true, t4 = t4.parentElement;
    }
  }
  stopTrackingSelection() {
    const e4 = this.parentSideNav;
    e4 && e4.stopTrackingSelectionForItem(this), this._parentSidenav = void 0;
  }
  firstUpdated(e4) {
    super.firstUpdated(e4), this.setAttribute("role", "listitem");
  }
};
n([o()], r.prototype, "value", 2), n([o({ type: Boolean, reflect: true })], r.prototype, "selected", 2), n([o({ type: Boolean, reflect: true })], r.prototype, "expanded", 2);
var SideNavItem = r;

// node_modules/@spectrum-web-components/sidenav/src/SidenavHeading.js
import { html as u2, SpectrumElement as m2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as n2 } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@spectrum-web-components/sidenav/src/sidenav-heading.css.js
import { css as e3 } from "/libs/features/spectrum-web-components/dist/base.js";
var t3 = e3`
    #list{--spectrum-sidenav-focus-ring-size:var(--spectrum-focus-indicator-thickness);--spectrum-sidenav-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-sidenav-focus-ring-color:var(--spectrum-focus-indicator-color);--spectrum-sidenav-min-height:var(--spectrum-component-height-100);--spectrum-sidenav-width:100%;--spectrum-sidenav-min-width:var(--spectrum-side-navigation-minimum-width);--spectrum-sidenav-max-width:var(--spectrum-side-navigation-maximum-width);--spectrum-sidenav-border-radius:var(--spectrum-corner-radius-100);--spectrum-sidenav-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-sidenav-icon-spacing:var(--spectrum-text-to-visual-100);--spectrum-sidenav-inline-padding:var(--spectrum-component-edge-to-text-100);--spectrum-sidenav-gap:var(--spectrum-side-navigation-item-to-item);--spectrum-sidenav-top-to-icon:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-sidenav-top-to-label:var(--spectrum-component-top-to-text-100);--spectrum-sidenav-bottom-to-label:var(--spectrum-side-navigation-bottom-to-text);--spectrum-sidenav-start-to-content-second-level:var(--spectrum-side-navigation-second-level-edge-to-text);--spectrum-sidenav-start-to-content-third-level:var(--spectrum-side-navigation-third-level-edge-to-text);--spectrum-sidenav-start-to-content-with-icon-second-level:var(--spectrum-side-navigation-with-icon-second-level-edge-to-text);--spectrum-sidenav-start-to-content-with-icon-third-level:var(--spectrum-side-navigation-with-icon-third-level-edge-to-text);--spectrum-sidenav-heading-top-margin:var(--spectrum-side-navigation-item-to-header);--spectrum-sidenav-heading-bottom-margin:var(--spectrum-side-navigation-header-to-item);--spectrum-sidenav-background-disabled:transparent;--spectrum-sidenav-background-default:transparent;--spectrum-sidenav-background-hover:var(--spectrum-gray-200);--spectrum-sidenav-item-background-down:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus:var(--spectrum-gray-200);--spectrum-sidenav-item-background-default-selected:var(--spectrum-gray-200);--spectrum-sidenav-background-hover-selected:var(--spectrum-gray-300);--spectrum-sidenav-item-background-down-selected:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus-selected:var(--spectrum-gray-200);--spectrum-sidenav-header-color:var(--spectrum-gray-600);--spectrum-sidenav-content-disabled-color:var(--spectrum-disabled-content-color);--spectrum-sidenav-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-sidenav-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-sidenav-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-sidenav-content-color-key-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-sidenav-content-color-default-selected:var(--spectrum-neutral-content-color-default);--spectrum-sidenav-content-color-hover-selected:var(--spectrum-neutral-content-color-hover);--spectrum-sidenav-content-color-down-selected:var(--spectrum-neutral-content-color-down);--spectrum-sidenav-content-color-key-focus-selected:var(--spectrum-neutral-content-color-key-focus);--spectrum-sidenav-text-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-text-font-weight:var(--spectrum-regular-font-weight);--spectrum-sidenav-text-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-text-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-text-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-top-level-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-top-level-font-weight:var(--spectrum-bold-font-weight);--spectrum-sidenav-top-level-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-top-level-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-header-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-header-font-weight:var(--spectrum-medium-font-weight);--spectrum-sidenav-header-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-header-font-size:var(--spectrum-font-size-75);--spectrum-sidenav-header-line-height:var(--spectrum-line-height-100)}#list:lang(ja),#list:lang(ko),#list:lang(zh){--spectrum-sidenav-text-line-height:var(--spectrum-cjk-line-height-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-cjk-line-height-100);--spectrum-sidenav-header-line-height:var(--spectrum-cjk-line-height-100)}#list{flex-direction:column;margin:0;padding:0;list-style-type:none;display:flex}#heading{padding-inline:var(--mod-sidenav-inline-padding,var(--spectrum-sidenav-inline-padding));color:var(--mod-sidenav-header-color,var(--spectrum-sidenav-header-color));font-size:var(--mod-sidenav-header-font-size,var(--spectrum-sidenav-header-font-size));font-weight:var(--mod-sidenav-header-font-weight,var(--spectrum-sidenav-header-font-weight));font-style:var(--mod-sidenav-header-font-style,var(--spectrum-sidenav-header-font-style));line-height:var(--mod-sidenav-header-line-height,var(--spectrum-sidenav-header-line-height));margin-block-start:calc(var(--mod-sidenav-heading-top-margin,var(--spectrum-sidenav-heading-top-margin)) - var(--mod-sidenav-gap,var(--spectrum-sidenav-gap)));margin-block-end:var(--mod-sidenav-heading-bottom-margin,var(--spectrum-sidenav-heading-bottom-margin))}@media (forced-colors:active){#list .spectrum-Icon{forced-color-adjust:preserve-parent-color}}:host{display:block}
`;
var sidenav_heading_css_default = t3;

// node_modules/@spectrum-web-components/sidenav/src/SidenavHeading.js
var a = Object.defineProperty;
var p2 = Object.getOwnPropertyDescriptor;
var o2 = (s2, r4, e4, i) => {
  for (var t4 = i > 1 ? void 0 : i ? p2(r4, e4) : r4, l = s2.length - 1, d; l >= 0; l--)
    (d = s2[l]) && (t4 = (i ? d(r4, e4, t4) : d(t4)) || t4);
  return i && t4 && a(r4, e4, t4), t4;
};
var SideNavHeading = class extends m2 {
  constructor() {
    super(...arguments);
    this.label = "";
  }
  static get styles() {
    return [sidenav_item_css_default, sidenav_heading_css_default];
  }
  update(e4) {
    this.hasAttribute("slot") || (this.slot = "descendant"), super.update(e4);
  }
  render() {
    return u2`
            <h2 id="heading">${this.label}</h2>
            <div id="list" aria-labelledby="heading" role="list">
                <slot name="descendant"></slot>
            </div>
        `;
  }
  firstUpdated(e4) {
    super.firstUpdated(e4), this.setAttribute("role", "listitem");
  }
};
o2([n2({ reflect: true })], SideNavHeading.prototype, "label", 2);

// node_modules/@spectrum-web-components/sidenav/src/Sidenav.js
import { ifDefined as f2 } from "/libs/features/spectrum-web-components/dist/base.js";
var o3 = Object.defineProperty;
var u3 = Object.getOwnPropertyDescriptor;
var r3 = (d, l, e4, t4) => {
  for (var a3 = t4 > 1 ? void 0 : t4 ? u3(l, e4) : l, i = d.length - 1, s2; i >= 0; i--)
    (s2 = d[i]) && (a3 = (t4 ? s2(l, e4, a3) : s2(a3)) || a3);
  return t4 && a3 && o3(l, e4, a3), a3;
};
var SideNav = class extends p3 {
  constructor() {
    super(...arguments);
    this.items = /* @__PURE__ */ new Set();
    this.rovingTabindexController = new c(this, { focusInIndex: (e4) => {
      let t4, a3 = e4.findIndex((i) => (i.value === this.value && this.isDisabledChild(i) && (t4 = i.closest("sp-sidenav-item:not([expanded])")), this.value ? !i.disabled && !this.isDisabledChild(i) && i.value === this.value : !i.disabled && !this.isDisabledChild(i)));
      return a3 === -1 && t4 && (a3 = e4.findIndex((i) => i === t4)), a3;
    }, direction: "vertical", elements: () => [...this.querySelectorAll("sp-sidenav-item")], isFocusableElement: (e4) => !e4.disabled && !this.isDisabledChild(e4) });
    this.manageTabIndex = false;
    this.value = void 0;
    this.variant = void 0;
    this.label = void 0;
  }
  static get styles() {
    return [sidenav_css_default];
  }
  startTrackingSelectionForItem(e4) {
    this.items.add(e4), this.rovingTabindexController.clearElementCache();
  }
  stopTrackingSelectionForItem(e4) {
    this.items.delete(e4), this.rovingTabindexController.clearElementCache();
  }
  handleSelect(e4) {
    if (e4.stopPropagation(), this.value === e4.detail.value)
      return;
    const t4 = this.value;
    this.value = e4.detail.value, this.dispatchEvent(new Event("change", { bubbles: true, composed: true, cancelable: true })) ? this.items.forEach((i) => i.handleSideNavSelect(e4)) : (this.value = t4, e4.target.selected = false, e4.preventDefault());
  }
  focus() {
    this.rovingTabindexController.focus();
  }
  blur() {
    this.focusElement !== this && super.blur();
  }
  click() {
    this.focusElement !== this && super.click();
  }
  get focusElement() {
    return this.rovingTabindexController.focusInElement || this;
  }
  isDisabledChild(e4) {
    if (e4.disabled)
      return true;
    let t4 = e4.parentElement;
    for (; t4 instanceof SideNavHeading || !t4.disabled && t4 instanceof SideNavItem && t4.expanded; )
      t4 = t4.parentElement;
    return t4 !== this;
  }
  handleSlotchange() {
    this.manageTabIndex ? this.rovingTabindexController.manage() : this.rovingTabindexController.unmanage();
  }
  render() {
    return v2`
            <nav
                @sidenav-select=${this.handleSelect}
                aria-label=${f2(this.label)}
            >
                <div role="list">
                    <slot
                        name="descendant"
                        @slotchange=${this.handleSlotchange}
                    ></slot>
                </div>
            </nav>
        `;
  }
  willUpdate() {
    if (!this.hasUpdated) {
      const e4 = this.querySelector("[selected]");
      e4 && (this.value = e4.value);
    }
  }
  updated(e4) {
    super.updated(e4), e4.has("manageTabIndex") && (this.manageTabIndex ? this.rovingTabindexController.manage() : this.rovingTabindexController.unmanage());
  }
};
r3([n3({ type: Boolean, reflect: true, attribute: "manage-tab-index" })], SideNav.prototype, "manageTabIndex", 2), r3([n3({ reflect: true })], SideNav.prototype, "value", 2), r3([n3({ reflect: true })], SideNav.prototype, "variant", 2), r3([n3({ reflect: true })], SideNav.prototype, "label", 2);

// node_modules/@spectrum-web-components/sidenav/sp-sidenav.js
import { defineElement as a2 } from "/libs/features/spectrum-web-components/dist/base.js";
a2("sp-sidenav", SideNav);

// node_modules/@spectrum-web-components/sidenav/sp-sidenav-item.js
import { defineElement as m3 } from "/libs/features/spectrum-web-components/dist/base.js";
m3("sp-sidenav-item", SideNavItem);
//# sourceMappingURL=sidenav.js.map
