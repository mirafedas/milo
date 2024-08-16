// node_modules/@spectrum-web-components/tabs/src/Tabs.js
import { css as f, html as p, SizedMixin as m } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as n, query as d } from "/libs/features/spectrum-web-components/dist/base.js";
import { classMap as v, ifDefined as u } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@lit-labs/observers/intersection-controller.js
var t = class {
  constructor(t5, { target: s4, config: i, callback: h4, skipInitial: e2 }) {
    this.t = /* @__PURE__ */ new Set(), this.o = false, this.i = false, this.h = t5, null !== s4 && this.t.add(s4 ?? t5), this.o = e2 ?? this.o, this.callback = h4, window.IntersectionObserver ? (this.u = new IntersectionObserver((t6) => {
      const s5 = this.i;
      this.i = false, this.o && s5 || (this.handleChanges(t6), this.h.requestUpdate());
    }, i), t5.addController(this)) : console.warn("IntersectionController error: browser does not support IntersectionObserver.");
  }
  handleChanges(t5) {
    this.value = this.callback?.(t5, this.u);
  }
  hostConnected() {
    for (const t5 of this.t)
      this.observe(t5);
  }
  hostDisconnected() {
    this.disconnect();
  }
  async hostUpdated() {
    const t5 = this.u.takeRecords();
    t5.length && this.handleChanges(t5);
  }
  observe(t5) {
    this.t.add(t5), this.u.observe(t5), this.i = true;
  }
  unobserve(t5) {
    this.t.delete(t5), this.u.unobserve(t5);
  }
  disconnect() {
    this.u.disconnect();
  }
};

// node_modules/@lit-labs/observers/resize-controller.js
var s = class {
  constructor(s4, { target: t5, config: i, callback: h4, skipInitial: e2 }) {
    this.t = /* @__PURE__ */ new Set(), this.o = false, this.i = false, this.h = s4, null !== t5 && this.t.add(t5 ?? s4), this.l = i, this.o = e2 ?? this.o, this.callback = h4, window.ResizeObserver ? (this.u = new ResizeObserver((s5) => {
      this.handleChanges(s5), this.h.requestUpdate();
    }), s4.addController(this)) : console.warn("ResizeController error: browser does not support ResizeObserver.");
  }
  handleChanges(s4) {
    this.value = this.callback?.(s4, this.u);
  }
  hostConnected() {
    for (const s4 of this.t)
      this.observe(s4);
  }
  hostDisconnected() {
    this.disconnect();
  }
  async hostUpdated() {
    !this.o && this.i && this.handleChanges([]), this.i = false;
  }
  observe(s4) {
    this.t.add(s4), this.u.observe(s4, this.l), this.i = true, this.h.requestUpdate();
  }
  unobserve(s4) {
    this.t.delete(s4), this.u.unobserve(s4);
  }
  disconnect() {
    this.u.disconnect();
  }
};

// node_modules/@spectrum-web-components/tabs/src/Tabs.js
import { Focusable as y } from "/libs/features/spectrum-web-components/dist/shared.js";
import { RovingTabindexController as E } from "/libs/features/spectrum-web-components/dist/reactive-controllers.js";

// node_modules/@spectrum-web-components/tabs/src/tabs.css.js
import { css as t2 } from "/libs/features/spectrum-web-components/dist/base.js";
var o = t2`
    #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-medium);--spectrum-tabs-item-horizontal-spacing:var(--spectrum-tab-item-to-tab-item-horizontal-medium);--spectrum-tabs-item-vertical-spacing:var(--spectrum-tab-item-to-tab-item-vertical-medium);--spectrum-tabs-start-to-edge:var(--spectrum-tab-item-start-to-edge-medium);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-medium);--spectrum-tabs-bottom-to-text:var(--spectrum-tab-item-bottom-to-text-medium);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-100);--spectrum-tabs-top-to-icon:var(--spectrum-tab-item-top-to-workflow-icon-medium);--spectrum-tabs-color:var(--spectrum-neutral-subdued-content-color-default);--spectrum-tabs-color-selected:var(--spectrum-neutral-subdued-content-color-down);--spectrum-tabs-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--spectrum-tabs-color-key-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--spectrum-tabs-color-disabled:var(--spectrum-gray-500);--spectrum-tabs-font-family:var(--spectrum-sans-font-family-stack);--spectrum-tabs-font-style:var(--spectrum-default-font-style);--spectrum-tabs-font-size:var(--spectrum-font-size-100);--spectrum-tabs-line-height:var(--spectrum-line-height-100);--spectrum-tabs-focus-indicator-width:var(--spectrum-focus-indicator-thickness);--spectrum-tabs-focus-indicator-border-radius:var(--spectrum-corner-radius-100);--spectrum-tabs-focus-indicator-gap:var(--spectrum-tab-item-focus-indicator-gap-medium);--spectrum-tabs-focus-indicator-color:var(--spectrum-focus-indicator-color);--spectrum-tabs-selection-indicator-color:var(--spectrum-neutral-subdued-content-color-down);--spectrum-tabs-list-background-direction:top;--spectrum-tabs-divider-background-color:var(--spectrum-gray-300);--spectrum-tabs-divider-size:var(--spectrum-border-width-200);--spectrum-tabs-divider-border-radius:1px;--spectrum-tabs-animation-duration:var(--spectrum-animation-duration-100);--spectrum-tabs-animation-ease:var(--spectrum-animation-ease-in-out)}:host([emphasized]) #list{--mod-tabs-color-selected:var(--mod-tabs-color-selected-emphasized,var(--spectrum-accent-content-color-default));--mod-tabs-color-hover:var(--mod-tabs-color-hover-emphasized,var(--spectrum-accent-content-color-hover));--mod-tabs-color-key-focus:var(--mod-tabs-color-key-focus-emphasized,var(--spectrum-accent-content-color-key-focus));--mod-tabs-selection-indicator-color:var(--mod-tabs-selection-indicator-color-emphasized,var(--spectrum-accent-content-color-default))}:host([direction^=vertical]) #list{--mod-tabs-list-background-direction:var(--mod-tabs-list-background-direction-vertical,right)}:host([direction^=vertical-right]) #list{--mod-tabs-list-background-direction:var(--mod-tabs-list-background-direction-vertical-right,left)}:host([direction^=vertical]) #list:dir(rtl),:host([dir=rtl][direction^=vertical]) #list{--mod-tabs-list-background-direction:var(--mod-tabs-list-background-direction-vertical,left)}:host([direction^=vertical-right]) #list:dir(rtl),:host([dir=rtl][direction^=vertical-right]) #list{--mod-tabs-list-background-direction:var(--mod-tabs-list-background-direction-vertical,right)}:host([compact]) #list{--mod-tabs-item-height:var(--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-medium));--mod-tabs-top-to-text:var(--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-medium));--mod-tabs-bottom-to-text:var(--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-medium));--mod-tabs-top-to-icon:var(--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-medium))}#list{z-index:0;vertical-align:top;background:linear-gradient(to var(--mod-tabs-list-background-direction,var(--spectrum-tabs-list-background-direction)),var(--highcontrast-tabs-divider-background-color,var(--mod-tabs-divider-background-color,var(--spectrum-tabs-divider-background-color)))0 var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)),transparent var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)));margin:0;padding-block:0;display:flex;position:relative}::slotted([selected]:not([slot])){color:var(--highcontrast-tabs-color-selected,var(--mod-tabs-color-selected,var(--spectrum-tabs-color-selected)))}::slotted([disabled]:not([slot])){cursor:default;color:var(--highcontrast-tabs-color-disabled,var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled)))}#selection-indicator{background-color:var(--highcontrast-tabs-selection-indicator-color,var(--mod-tabs-selection-indicator-color,var(--spectrum-tabs-selection-indicator-color)));z-index:0;transition:transform var(--mod-tabs-animation-duration,var(--spectrum-tabs-animation-duration))var(--mod-tabs-animation-ease,var(--spectrum-tabs-animation-ease));transform-origin:0 0;border-radius:var(--mod-tabs-divider-border-radius,var(--spectrum-tabs-divider-border-radius));position:absolute;inset-inline-start:0}:host([direction^=horizontal]) #list{align-items:center}:host([direction^=horizontal]) #list ::slotted(:not([slot])){vertical-align:top}:host([direction^=horizontal]) ::slotted(:not(:first-child)){margin-inline-start:var(--mod-tabs-item-horizontal-spacing,var(--spectrum-tabs-item-horizontal-spacing))}:host([direction^=horizontal]) #list #selection-indicator{block-size:var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size));position:absolute;inset-block-end:0}:host([direction^=horizontal][compact]) #list{box-sizing:initial;align-items:end}:host([quiet]) #list{background:0 0;border-color:#0000;display:inline-flex}:host([quiet]) #selection-indicator{padding-inline-start:var(--mod-tabs-start-to-item-quiet,var(--spectrum-tabs-start-to-item-quiet))}:host([direction^=vertical]) #list,:host([direction^=vertical-right]) #list{flex-direction:column;padding:0;display:inline-flex}:host([direction^=vertical-right][quiet]) #list,:host([direction^=vertical][quiet]) #list{border-color:#0000}:host([direction^=vertical]) #list ::slotted(:not([slot])),:host([direction^=vertical-right]) #list ::slotted(:not([slot])){block-size:var(--mod-tabs-item-height,var(--spectrum-tabs-item-height));line-height:var(--mod-tabs-item-height,var(--spectrum-tabs-item-height));margin-block-end:var(--mod-tabs-item-vertical-spacing,var(--spectrum-tabs-item-vertical-spacing));margin-inline-start:var(--mod-tabs-start-to-edge,var(--spectrum-tabs-start-to-edge));margin-inline-end:var(--mod-tabs-start-to-edge,var(--spectrum-tabs-start-to-edge));padding-block:0}:host([direction^=vertical]) #list ::slotted(:not([slot])):before,:host([direction^=vertical-right]) #list ::slotted(:not([slot])):before{inset-inline-start:calc(var(--mod-tabs-focus-indicator-gap,var(--spectrum-tabs-focus-indicator-gap))*-1)}:host([direction^=vertical]) #list #selection-indicator,:host([direction^=vertical-right]) #list #selection-indicator{inline-size:var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size));position:absolute;inset-block-start:0;inset-inline-start:0}:host([direction^=vertical-right]) #list #selection-indicator{inset-inline:auto 0}@media (forced-colors:active){#list{--highcontrast-tabs-divider-background-color:var(--spectrum-gray-500);--highcontrast-tabs-selection-indicator-color:Highlight;--highcontrast-tabs-focus-indicator-color:CanvasText;--highcontrast-tabs-focus-indicator-background-color:Highlight;--highcontrast-tabs-color:ButtonText;--highcontrast-tabs-color-hover:ButtonText;--highcontrast-tabs-color-selected:HighlightText;--highcontrast-tabs-color-key-focus:ButtonText;--highcontrast-tabs-color-disabled:GrayText;forced-color-adjust:none}#list ::slotted([selected]:not([slot])):before{background-color:var(--highcontrast-tabs-focus-indicator-background-color)}:host([direction^=vertical][compact]) #list #list ::slotted(:not([slot])):before{block-size:100%;inset-block-start:0}:host([quiet]) #list{background:linear-gradient(to var(--mod-tabs-list-background-direction,var(--spectrum-tabs-list-background-direction)),var(--highcontrast-tabs-divider-background-color,var(--mod-tabs-divider-background-color,var(--spectrum-tabs-divider-background-color)))0 var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)),transparent var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)))}}#list{--spectrum-tabs-font-weight:var(--system-spectrum-tabs-font-weight)}:host{grid-template-columns:100%;display:grid;position:relative}:host(:not([direction^=vertical])){grid-template-rows:auto 1fr}:host([direction^=vertical]){grid-template-columns:auto 1fr}:host([dir=rtl]) #selection-indicator{left:0;right:auto}:host([direction=vertical-right]) #list #selection-indicator{inset-inline:auto 0}#list{justify-content:var(--swc-tabs-list-justify-content)}:host([disabled]) #list{pointer-events:none}:host([disabled]) #list #selection-indicator{background-color:var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled))}:host([disabled]) ::slotted(sp-tab){color:var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled))}:host([direction=vertical-right]) #list #selection-indicator,:host([direction=vertical]) #list #selection-indicator{inset-block-start:0}#selection-indicator.first-position{transition:none}:host([dir][direction=horizontal]) #list.scroll{scrollbar-width:none;overflow:auto hidden}:host([dir][direction=horizontal]) #list.scroll::-webkit-scrollbar{display:none}
`;
var tabs_css_default = o;

// node_modules/@spectrum-web-components/tabs/src/tabs-sizes.css.js
import { css as t3 } from "/libs/features/spectrum-web-components/dist/base.js";
var a = t3`
    :host([size=s]) #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-small);--spectrum-tabs-item-horizontal-spacing:var(--spectrum-tab-item-to-tab-item-horizontal-small);--spectrum-tabs-item-vertical-spacing:var(--spectrum-tab-item-to-tab-item-vertical-small);--spectrum-tabs-start-to-edge:var(--spectrum-tab-item-start-to-edge-small);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-small);--spectrum-tabs-bottom-to-text:var(--spectrum-tab-item-bottom-to-text-small);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-50);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-75);--spectrum-tabs-top-to-icon:var(--spectrum-tab-item-top-to-workflow-icon-small);--spectrum-tabs-focus-indicator-gap:var(--spectrum-tab-item-focus-indicator-gap-small);--spectrum-tabs-font-size:var(--spectrum-font-size-75)}:host([size=l]) #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-large);--spectrum-tabs-item-horizontal-spacing:var(--spectrum-tab-item-to-tab-item-horizontal-large);--spectrum-tabs-item-vertical-spacing:var(--spectrum-tab-item-to-tab-item-vertical-large);--spectrum-tabs-start-to-edge:var(--spectrum-tab-item-start-to-edge-large);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-large);--spectrum-tabs-bottom-to-text:var(--spectrum-tab-item-bottom-to-text-large);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-200);--spectrum-tabs-top-to-icon:var(--spectrum-tab-item-top-to-workflow-icon-large);--spectrum-tabs-focus-indicator-gap:var(--spectrum-tab-item-focus-indicator-gap-large);--spectrum-tabs-font-size:var(--spectrum-font-size-200)}:host([size=xl]) #list{--spectrum-tabs-item-height:var(--spectrum-tab-item-height-extra-large);--spectrum-tabs-item-horizontal-spacing:var(--spectrum-tab-item-to-tab-item-horizontal-extra-large);--spectrum-tabs-item-vertical-spacing:var(--spectrum-tab-item-to-tab-item-vertical-extra-large);--spectrum-tabs-start-to-edge:var(--spectrum-tab-item-start-to-edge-extra-large);--spectrum-tabs-top-to-text:var(--spectrum-tab-item-top-to-text-extra-large);--spectrum-tabs-bottom-to-text:var(--spectrum-tab-item-bottom-to-text-extra-large);--spectrum-tabs-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-tabs-icon-to-text:var(--spectrum-text-to-visual-300);--spectrum-tabs-top-to-icon:var(--spectrum-tab-item-top-to-workflow-icon-extra-large);--spectrum-tabs-focus-indicator-gap:var(--spectrum-tab-item-focus-indicator-gap-extra-large);--spectrum-tabs-font-size:var(--spectrum-font-size-300)}:host([size=s]) #list.spectrum-Tabs--compact{--mod-tabs-item-height:var(--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-small));--mod-tabs-top-to-text:var(--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-small));--mod-tabs-bottom-to-text:var(--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-small));--mod-tabs-top-to-icon:var(--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-small))}:host([size=l]) #list.spectrum-Tabs--compact{--mod-tabs-item-height:var(--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-large));--mod-tabs-top-to-text:var(--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-large));--mod-tabs-bottom-to-text:var(--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-large));--mod-tabs-top-to-icon:var(--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-large))}:host([size=xl]) #list.spectrum-Tabs--compact{--mod-tabs-item-height:var(--mod-tabs-item-height-compact,var(--spectrum-tab-item-compact-height-extra-large));--mod-tabs-top-to-text:var(--mod-tabs-top-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-extra-large));--mod-tabs-bottom-to-text:var(--mod-tabs-bottom-to-text-compact,var(--spectrum-tab-item-top-to-text-compact-extra-large));--mod-tabs-top-to-icon:var(--mod-tabs-top-to-icon-compact,var(--spectrum-tab-item-top-to-workflow-icon-compact-extra-large))}
`;
var tabs_sizes_css_default = a;

// node_modules/@spectrum-web-components/tabs/src/Tabs.js
var h = Object.defineProperty;
var b = Object.getOwnPropertyDescriptor;
var l = (a6, o3, e2, t5) => {
  for (var i = t5 > 1 ? void 0 : t5 ? b(o3, e2) : o3, s4 = a6.length - 1, r2; s4 >= 0; s4--)
    (r2 = a6[s4]) && (i = (t5 ? r2(o3, e2, i) : r2(i)) || i);
  return t5 && i && h(o3, e2, i), i;
};
var ScaledIndicator = { baseSize: 100, noSelectionStyle: "transform: translateX(0px) scaleX(0) scaleY(0)", transformX(a6, o3) {
  const e2 = o3 / this.baseSize;
  return `transform: translateX(${a6}px) scaleX(${e2});`;
}, transformY(a6, o3) {
  const e2 = o3 / this.baseSize;
  return `transform: translateY(${a6}px) scaleY(${e2});`;
}, baseStyles() {
  return f`
            :host([direction='vertical-right']) #selection-indicator,
            :host([direction='vertical']) #selection-indicator {
                height: ${this.baseSize}px;
            }
            :host([dir][direction='horizontal']) #selection-indicator {
                width: ${this.baseSize}px;
            }
        `;
} };
function calculateScrollTargetForRightSide(a6, o3, e2, t5) {
  const i = a6 + (o3 === "rtl" ? -1 : 1), s4 = e2[i], r2 = t5.scrollLeft + t5.offsetWidth;
  return s4 ? s4.offsetLeft - t5.offsetWidth : r2;
}
function calculateScrollTargetForLeftSide(a6, o3, e2, t5) {
  const i = a6 + (o3 === "rtl" ? 1 : -1), s4 = e2[i], r2 = o3 === "rtl" ? -t5.offsetWidth : 0;
  return s4 ? s4.offsetLeft + s4.offsetWidth : r2;
}
var Tabs = class extends m(y, { noDefaultSize: true }) {
  constructor() {
    super();
    this.auto = false;
    this.compact = false;
    this.direction = "horizontal";
    this.emphasized = false;
    this.label = "";
    this.enableTabsScroll = false;
    this.quiet = false;
    this.selectionIndicatorStyle = ScaledIndicator.noSelectionStyle;
    this.shouldAnimate = false;
    this.selected = "";
    this._tabs = [];
    this.resizeController = new s(this, { callback: () => {
      this.updateSelectionIndicator();
    } });
    this.rovingTabindexController = new E(this, { focusInIndex: (e2) => {
      let t5 = 0;
      return e2.find((s4, r2) => {
        const c3 = this.selected ? !s4.disabled && s4.value === this.selected : !s4.disabled;
        return t5 = r2, c3;
      }) ? t5 : -1;
    }, direction: () => "both", elementEnterAction: (e2) => {
      this.auto && (this.shouldAnimate = true, this.selectTarget(e2));
    }, elements: () => this.tabs, isFocusableElement: (e2) => !e2.disabled, listenerScope: () => this.tabList });
    this.onTabsScroll = () => {
      this.dispatchEvent(new Event("sp-tabs-scroll", { bubbles: true, composed: true }));
    };
    this.onClick = (e2) => {
      if (this.disabled)
        return;
      const t5 = e2.composedPath().find((i) => i.parentElement === this);
      !t5 || t5.disabled || (this.shouldAnimate = true, this.selectTarget(t5));
    };
    this.onKeyDown = (e2) => {
      if (e2.code === "Enter" || e2.code === "Space") {
        e2.preventDefault();
        const t5 = e2.target;
        t5 && this.selectTarget(t5);
      }
    };
    this.updateCheckedState = () => {
      if (this.tabs.forEach((e2) => {
        e2.removeAttribute("selected");
      }), this.selected) {
        const e2 = this.tabs.find((t5) => t5.value === this.selected);
        e2 ? e2.selected = true : this.selected = "";
      } else {
        const e2 = this.tabs[0];
        e2 && e2.setAttribute("tabindex", "0");
      }
      this.updateSelectionIndicator();
    };
    this.updateSelectionIndicator = async () => {
      const e2 = this.tabs.find((s4) => s4.selected);
      if (!e2) {
        this.selectionIndicatorStyle = ScaledIndicator.noSelectionStyle;
        return;
      }
      await Promise.all([e2.updateComplete, document.fonts ? document.fonts.ready : Promise.resolve()]);
      const { width: t5, height: i } = e2.getBoundingClientRect();
      this.selectionIndicatorStyle = this.direction === "horizontal" ? ScaledIndicator.transformX(e2.offsetLeft, t5) : ScaledIndicator.transformY(e2.offsetTop, i);
    };
    new t(this, { config: { root: null, rootMargin: "0px", threshold: [0, 1] }, callback: () => {
      this.updateSelectionIndicator();
    } });
  }
  static get styles() {
    return [tabs_sizes_css_default, tabs_css_default, ScaledIndicator.baseStyles()];
  }
  set tabs(e2) {
    e2 !== this.tabs && (this._tabs.forEach((t5) => {
      this.resizeController.unobserve(t5);
    }), e2.forEach((t5) => {
      this.resizeController.observe(t5);
    }), this._tabs = e2, this.rovingTabindexController.clearElementCache());
  }
  get tabs() {
    return this._tabs;
  }
  get focusElement() {
    return this.rovingTabindexController.focusInElement || this;
  }
  scrollTabs(e2, t5 = "smooth") {
    var i;
    (i = this.tabList) == null || i.scrollBy({ left: e2, top: 0, behavior: t5 });
  }
  get scrollState() {
    if (this.tabList) {
      const { scrollLeft: e2, clientWidth: t5, scrollWidth: i } = this.tabList, s4 = Math.abs(e2) > 0, r2 = Math.ceil(Math.abs(e2)) < i - t5;
      return { canScrollLeft: this.dir === "ltr" ? s4 : r2, canScrollRight: this.dir === "ltr" ? r2 : s4 };
    }
    return {};
  }
  async getUpdateComplete() {
    const e2 = await super.getUpdateComplete(), i = [...this.children].map((s4) => typeof s4.updateComplete != "undefined" ? s4.updateComplete : Promise.resolve(true));
    return await Promise.all(i), e2;
  }
  getNecessaryAutoScroll(e2) {
    const t5 = this.tabs[e2], i = t5.offsetLeft + t5.offsetWidth, s4 = this.tabList.scrollLeft + this.tabList.offsetWidth, r2 = t5.offsetLeft, c3 = this.tabList.scrollLeft;
    return i > s4 ? calculateScrollTargetForRightSide(e2, this.dir, this.tabs, this.tabList) : r2 < c3 ? calculateScrollTargetForLeftSide(e2, this.dir, this.tabs, this.tabList) : -1;
  }
  async scrollToSelection() {
    if (!this.enableTabsScroll || !this.selected)
      return;
    await this.updateComplete;
    const e2 = this.tabs.findIndex((t5) => t5.value === this.selected);
    if (e2 !== -1 && this.tabList) {
      const t5 = this.getNecessaryAutoScroll(e2);
      t5 !== -1 && this.tabList.scrollTo({ left: t5 });
    }
  }
  updated(e2) {
    super.updated(e2), e2.has("selected") && this.scrollToSelection();
  }
  managePanels({ target: e2 }) {
    e2.assignedElements().map((i) => {
      const { value: s4, id: r2 } = i, c3 = this.querySelector(`[role="tab"][value="${s4}"]`);
      c3 && (c3.setAttribute("aria-controls", r2), i.setAttribute("aria-labelledby", c3.id)), i.selected = s4 === this.selected;
    });
  }
  render() {
    return p`
            <div
                class=${v({ scroll: this.enableTabsScroll })}
                aria-label=${u(this.label ? this.label : void 0)}
                @click=${this.onClick}
                @keydown=${this.onKeyDown}
                @scroll=${this.onTabsScroll}
                id="list"
                role="tablist"
                part="tablist"
            >
                <slot @slotchange=${this.onSlotChange}></slot>
                <div
                    id="selection-indicator"
                    class=${u(this.shouldAnimate ? void 0 : "first-position")}
                    style=${this.selectionIndicatorStyle}
                    role="presentation"
                ></div>
            </div>
            <slot name="tab-panel" @slotchange=${this.managePanels}></slot>
        `;
  }
  willUpdate(e2) {
    if (!this.hasUpdated) {
      const t5 = this.querySelector(":scope > [selected]");
      t5 && this.selectTarget(t5);
    }
    if (super.willUpdate(e2), e2.has("selected")) {
      if (this.tabs.length && this.updateCheckedState(), e2.get("selected")) {
        const i = this.querySelector(`[role="tabpanel"][value="${e2.get("selected")}"]`);
        i && (i.selected = false);
      }
      const t5 = this.querySelector(`[role="tabpanel"][value="${this.selected}"]`);
      t5 && (t5.selected = true);
    }
    e2.has("direction") && (this.direction === "horizontal" ? this.removeAttribute("aria-orientation") : this.setAttribute("aria-orientation", "vertical")), e2.has("dir") && this.updateSelectionIndicator(), e2.has("disabled") && (this.disabled ? this.setAttribute("aria-disabled", "true") : this.removeAttribute("aria-disabled")), !this.shouldAnimate && typeof e2.get("shouldAnimate") != "undefined" && (this.shouldAnimate = true);
  }
  selectTarget(e2) {
    const t5 = e2.getAttribute("value");
    if (t5) {
      const i = this.selected;
      this.selected = t5, this.dispatchEvent(new Event("change", { cancelable: true })) || (this.selected = i);
    }
  }
  onSlotChange() {
    this.tabs = this.slotEl.assignedElements().filter((e2) => e2.getAttribute("role") === "tab"), this.updateCheckedState();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("resize", this.updateSelectionIndicator), "fonts" in document && document.fonts.addEventListener("loadingdone", this.updateSelectionIndicator);
  }
  disconnectedCallback() {
    window.removeEventListener("resize", this.updateSelectionIndicator), "fonts" in document && document.fonts.removeEventListener("loadingdone", this.updateSelectionIndicator), super.disconnectedCallback();
  }
};
l([n({ type: Boolean })], Tabs.prototype, "auto", 2), l([n({ type: Boolean, reflect: true })], Tabs.prototype, "compact", 2), l([n({ reflect: true })], Tabs.prototype, "dir", 2), l([n({ reflect: true })], Tabs.prototype, "direction", 2), l([n({ type: Boolean, reflect: true })], Tabs.prototype, "emphasized", 2), l([n()], Tabs.prototype, "label", 2), l([n({ type: Boolean })], Tabs.prototype, "enableTabsScroll", 2), l([n({ type: Boolean, reflect: true })], Tabs.prototype, "quiet", 2), l([n({ attribute: false })], Tabs.prototype, "selectionIndicatorStyle", 2), l([n({ attribute: false })], Tabs.prototype, "shouldAnimate", 2), l([d("slot")], Tabs.prototype, "slotEl", 2), l([d("#list")], Tabs.prototype, "tabList", 2), l([n({ reflect: true })], Tabs.prototype, "selected", 2);

// node_modules/@spectrum-web-components/tabs/sp-tabs.js
import { defineElement as a2 } from "/libs/features/spectrum-web-components/dist/base.js";
a2("sp-tabs", Tabs);

// node_modules/@spectrum-web-components/tabs/src/Tab.js
import { html as p2, nothing as u2, SpectrumElement as c } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as s2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { FocusVisiblePolyfillMixin as h2 } from "/libs/features/spectrum-web-components/dist/shared.js";
import { ObserveSlotPresence as m2 } from "/libs/features/spectrum-web-components/dist/shared.js";
import { ObserveSlotText as f2 } from "/libs/features/spectrum-web-components/dist/shared.js";
import { randomID as y2 } from "/libs/features/spectrum-web-components/dist/shared.js";

// node_modules/@spectrum-web-components/tabs/src/tab.css.js
import { css as t4 } from "/libs/features/spectrum-web-components/dist/base.js";
var o2 = t4`
    :host{box-sizing:border-box;block-size:calc(var(--mod-tabs-item-height,var(--spectrum-tabs-item-height)) - var(--mod-tabs-divider-size,var(--spectrum-tabs-divider-size)));z-index:1;white-space:nowrap;color:var(--highcontrast-tabs-color,var(--mod-tabs-color,var(--spectrum-tabs-color)));transition:color var(--mod-tabs-animation-duration,var(--spectrum-tabs-animation-duration))ease-out;cursor:pointer;outline:none;-webkit-text-decoration:none;text-decoration:none;position:relative}::slotted([slot=icon]){block-size:var(--mod-tabs-icon-size,var(--spectrum-tabs-icon-size));inline-size:var(--mod-tabs-icon-size,var(--spectrum-tabs-icon-size));margin-block-start:var(--mod-tabs-top-to-icon,var(--spectrum-tabs-top-to-icon))}[name=icon]+#item-label{margin-inline-start:var(--mod-tabs-icon-to-text,var(--spectrum-tabs-icon-to-text))}:host:before{content:"";box-sizing:border-box;block-size:calc(100% - var(--mod-tabs-top-to-text,var(--spectrum-tabs-top-to-text)));inline-size:calc(100% + var(--mod-tabs-focus-indicator-gap,var(--spectrum-tabs-focus-indicator-gap))*2);border:var(--mod-tabs-focus-indicator-width,var(--spectrum-tabs-focus-indicator-width))solid transparent;border-radius:var(--mod-tabs-focus-indicator-border-radius,var(--spectrum-tabs-focus-indicator-border-radius));pointer-events:none;position:absolute;inset-block-start:calc(var(--mod-tabs-top-to-text,var(--spectrum-tabs-top-to-text))/2);inset-inline-start:calc(var(--mod-tabs-focus-indicator-gap,var(--spectrum-tabs-focus-indicator-gap))*-1);inset-inline-end:calc(var(--mod-tabs-focus-indicator-gap,var(--spectrum-tabs-focus-indicator-gap))*-1)}@media (hover:hover){:host(:hover){color:var(--highcontrast-tabs-color-hover,var(--mod-tabs-color-hover,var(--spectrum-tabs-color-hover)))}}:host([selected]){color:var(--highcontrast-tabs-color-selected,var(--mod-tabs-color-selected,var(--spectrum-tabs-color-selected)))}:host([disabled]){cursor:default;color:var(--highcontrast-tabs-color-disabled,var(--mod-tabs-color-disabled,var(--spectrum-tabs-color-disabled)))}:host([disabled]) #item-label{cursor:default}:host(:focus-visible){color:var(--highcontrast-tabs-color-key-focus,var(--mod-tabs-color-key-focus,var(--spectrum-tabs-color-key-focus)))}:host(:focus-visible):before{border-color:var(--highcontrast-tabs-focus-indicator-color,var(--mod-tabs-focus-indicator-color,var(--spectrum-tabs-focus-indicator-color)))}#item-label{cursor:pointer;vertical-align:top;font-family:var(--mod-tabs-font-family,var(--spectrum-tabs-font-family));font-style:var(--mod-tabs-font-style,var(--spectrum-tabs-font-style));font-size:var(--mod-tabs-font-size,var(--spectrum-tabs-font-size));font-weight:var(--mod-tabs-font-weight,var(--spectrum-tabs-font-weight));line-height:var(--mod-tabs-line-height,var(--spectrum-tabs-line-height));margin-block-start:var(--mod-tabs-top-to-text,var(--spectrum-tabs-top-to-text));margin-block-end:var(--mod-tabs-bottom-to-text,var(--spectrum-tabs-bottom-to-text));-webkit-text-decoration:none;text-decoration:none;display:inline-block}#item-label:empty{display:none}:host{scroll-margin-inline:var(--mod-tabs-item-horizontal-spacing,var(--spectrum-tabs-item-horizontal-spacing))}:host([disabled]){pointer-events:none}#item-label[hidden]{display:none}@media (forced-colors:active){:host:before{background-color:ButtonFace}:host ::slotted([slot=icon]){z-index:1;color:inherit;position:relative}#item-label{z-index:1;position:relative}:host([selected]){color:HighlightText}:host([selected]) ::slotted([slot=icon]){color:HighlightText}:host([selected]) #item-label{color:HighlightText}}:host([vertical]){height:auto;flex-direction:column;justify-content:center;align-items:center;display:flex}:host([dir][vertical]) slot[name=icon]+#item-label{margin-inline-start:0;margin-block:calc(var(--mod-tabs-top-to-text,var(--spectrum-tabs-top-to-text))/2)calc(var(--mod-tabs-bottom-to-text,var(--spectrum-tabs-bottom-to-text))/2)}:host([vertical]) ::slotted([slot=icon]){margin-block-start:calc(var(--mod-tabs-top-to-icon,var(--spectrum-tabs-top-to-icon))/2)}
`;
var tab_css_default = o2;

// node_modules/@spectrum-web-components/tabs/src/Tab.js
var b2 = Object.defineProperty;
var n2 = Object.getOwnPropertyDescriptor;
var r = (o3, l3, e2, i) => {
  for (var t5 = i > 1 ? void 0 : i ? n2(l3, e2) : l3, a6 = o3.length - 1, d2; a6 >= 0; a6--)
    (d2 = o3[a6]) && (t5 = (i ? d2(l3, e2, t5) : d2(t5)) || t5);
  return i && t5 && b2(l3, e2, t5), t5;
};
var Tab = class extends h2(f2(m2(c, '[slot="icon"]'), "")) {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.label = "";
    this.selected = false;
    this.vertical = false;
    this.value = "";
  }
  static get styles() {
    return [tab_css_default];
  }
  get hasIcon() {
    return this.slotContentIsPresent;
  }
  get hasLabel() {
    return !!this.label || this.slotHasContent;
  }
  render() {
    return p2`
            ${this.hasIcon ? p2`
                      <slot name="icon"></slot>
                  ` : u2}
            <label id="item-label" ?hidden=${!this.hasLabel}>
                ${this.slotHasContent ? u2 : this.label}
                <slot>${this.label}</slot>
            </label>
        `;
  }
  firstUpdated(e2) {
    super.firstUpdated(e2), this.setAttribute("role", "tab"), this.hasAttribute("id") || (this.id = `sp-tab-${y2()}`);
  }
  updated(e2) {
    super.updated(e2), e2.has("selected") && (this.setAttribute("aria-selected", this.selected ? "true" : "false"), this.setAttribute("tabindex", this.selected ? "0" : "-1")), e2.has("disabled") && (this.disabled ? this.setAttribute("aria-disabled", "true") : this.removeAttribute("aria-disabled"));
  }
};
r([s2({ type: Boolean, reflect: true })], Tab.prototype, "disabled", 2), r([s2({ reflect: true })], Tab.prototype, "label", 2), r([s2({ type: Boolean, reflect: true })], Tab.prototype, "selected", 2), r([s2({ type: Boolean, reflect: true })], Tab.prototype, "vertical", 2), r([s2({ type: String, reflect: true })], Tab.prototype, "value", 2);

// node_modules/@spectrum-web-components/tabs/sp-tab.js
import { defineElement as a3 } from "/libs/features/spectrum-web-components/dist/base.js";
a3("sp-tab", Tab);

// node_modules/@spectrum-web-components/tabs/src/TabPanel.js
import { html as h3, SpectrumElement as n3 } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as a4 } from "/libs/features/spectrum-web-components/dist/base.js";
import { randomID as c2 } from "/libs/features/spectrum-web-components/dist/shared.js";

// node_modules/@spectrum-web-components/tabs/src/tab-panel.css.js
import { css as s3 } from "/libs/features/spectrum-web-components/dist/base.js";
var e = s3`
    :host{display:inline-flex}:host(:not([selected])){display:none}
`;
var tab_panel_css_default = e;

// node_modules/@spectrum-web-components/tabs/src/TabPanel.js
var p3 = Object.defineProperty;
var u3 = Object.getOwnPropertyDescriptor;
var l2 = (s4, t5, i, r2) => {
  for (var e2 = r2 > 1 ? void 0 : r2 ? u3(t5, i) : t5, o3 = s4.length - 1, d2; o3 >= 0; o3--)
    (d2 = s4[o3]) && (e2 = (r2 ? d2(t5, i, e2) : d2(e2)) || e2);
  return r2 && e2 && p3(t5, i, e2), e2;
};
var TabPanel = class extends n3 {
  constructor() {
    super(...arguments);
    this.selected = false;
    this.value = "";
  }
  handleFocusin() {
    this.removeAttribute("tabindex");
  }
  handleFocusout() {
    this.tabIndex = this.selected ? 0 : -1;
  }
  render() {
    return h3`
            <slot
                @focusin=${this.handleFocusin}
                @focusout=${this.handleFocusout}
            ></slot>
        `;
  }
  firstUpdated() {
    this.slot = "tab-panel", this.setAttribute("role", "tabpanel"), this.tabIndex = 0, this.hasAttribute("id") || (this.id = `sp-tab-panel-${c2()}`);
  }
  updated(i) {
    i.has("selected") && (this.selected ? (this.removeAttribute("aria-hidden"), this.tabIndex = 0) : (this.setAttribute("aria-hidden", "true"), this.tabIndex = -1));
  }
};
TabPanel.styles = [tab_panel_css_default], l2([a4({ type: Boolean, reflect: true })], TabPanel.prototype, "selected", 2), l2([a4({ type: String, reflect: true })], TabPanel.prototype, "value", 2);

// node_modules/@spectrum-web-components/tabs/sp-tab-panel.js
import { defineElement as a5 } from "/libs/features/spectrum-web-components/dist/base.js";
a5("sp-tab-panel", TabPanel);
//# sourceMappingURL=tabs.js.map
