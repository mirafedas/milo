// node_modules/@spectrum-web-components/menu/src/Menu.js
import { html as I, SizedMixin as v, SpectrumElement as b } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as a, query as g } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@spectrum-web-components/menu/src/menu.css.js
import { css as e } from "/libs/features/spectrum-web-components/dist/base.js";
var t = e`
    :host{--spectrum-menu-item-min-height:var(--spectrum-component-height-100);--spectrum-menu-item-icon-height:var(--spectrum-workflow-icon-size-100);--spectrum-menu-item-icon-width:var(--spectrum-workflow-icon-size-100);--spectrum-menu-item-label-font-size:var(--spectrum-font-size-100);--spectrum-menu-item-label-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-menu-item-label-inline-edge-to-content:var(--spectrum-component-edge-to-text-100);--spectrum-menu-item-top-edge-to-text:var(--spectrum-component-top-to-text-100);--spectrum-menu-item-bottom-edge-to-text:var(--spectrum-component-bottom-to-text-100);--spectrum-menu-item-text-to-control:var(--spectrum-text-to-control-100);--spectrum-menu-item-description-font-size:var(--spectrum-font-size-75);--spectrum-menu-section-header-font-size:var(--spectrum-font-size-100);--spectrum-menu-section-header-min-width:var(--spectrum-component-height-100);--spectrum-menu-item-selectable-edge-to-text-not-selected:var(--spectrum-menu-item-selectable-edge-to-text-not-selected-medium);--spectrum-menu-item-checkmark-height:var(--spectrum-menu-item-checkmark-height-medium);--spectrum-menu-item-checkmark-width:var(--spectrum-menu-item-checkmark-width-medium);--spectrum-menu-item-top-to-checkmark:var(--spectrum-menu-item-top-to-selected-icon-medium);--spectrum-menu-item-top-to-action:var(--spectrum-spacing-50);--spectrum-menu-item-top-to-checkbox:var(--spectrum-spacing-50);--spectrum-menu-item-label-line-height:var(--spectrum-line-height-100);--spectrum-menu-item-label-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-menu-item-label-to-description-spacing:var(--spectrum-menu-item-label-to-description);--spectrum-menu-item-focus-indicator-width:var(--spectrum-border-width-200);--spectrum-menu-item-focus-indicator-color:var(--spectrum-blue-800);--spectrum-menu-item-label-to-value-area-min-spacing:var(--spectrum-spacing-100);--spectrum-menu-item-label-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-menu-item-label-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-menu-item-label-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-menu-item-label-content-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-menu-item-label-icon-color-default:var(--spectrum-neutral-content-color-default);--spectrum-menu-item-label-icon-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-menu-item-label-icon-color-down:var(--spectrum-neutral-content-color-down);--spectrum-menu-item-label-icon-color-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-menu-item-label-content-color-disabled:var(--spectrum-disabled-content-color);--spectrum-menu-item-label-icon-color-disabled:var(--spectrum-disabled-content-color);--spectrum-menu-item-description-line-height:var(--spectrum-line-height-100);--spectrum-menu-item-description-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-menu-item-description-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-menu-item-description-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--spectrum-menu-item-description-color-down:var(--spectrum-neutral-subdued-content-color-down);--spectrum-menu-item-description-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--spectrum-menu-item-description-color-disabled:var(--spectrum-disabled-content-color);--spectrum-menu-section-header-line-height:var(--spectrum-line-height-100);--spectrum-menu-section-header-line-height-cjk:var(--spectrum-cjk-line-height-100);--spectrum-menu-section-header-font-weight:var(--spectrum-bold-font-weight);--spectrum-menu-section-header-color:var(--spectrum-gray-900);--spectrum-menu-collapsible-icon-color:var(--spectrum-gray-900);--spectrum-menu-checkmark-icon-color-default:var(--spectrum-accent-color-900);--spectrum-menu-checkmark-icon-color-hover:var(--spectrum-accent-color-1000);--spectrum-menu-checkmark-icon-color-down:var(--spectrum-accent-color-1100);--spectrum-menu-checkmark-icon-color-focus:var(--spectrum-accent-color-1000);--spectrum-menu-drillin-icon-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-menu-drillin-icon-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--spectrum-menu-drillin-icon-color-down:var(--spectrum-neutral-subdued-content-color-down);--spectrum-menu-drillin-icon-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--spectrum-menu-item-value-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-menu-item-value-color-hover:var(--spectrum-neutral-subdued-content-color-hover);--spectrum-menu-item-value-color-down:var(--spectrum-neutral-subdued-content-color-down);--spectrum-menu-item-value-color-focus:var(--spectrum-neutral-subdued-content-color-key-focus);--spectrum-menu-checkmark-display-hidden:none;--spectrum-menu-checkmark-display-shown:block;--spectrum-menu-checkmark-display:var(--spectrum-menu-checkmark-display-shown);--spectrum-menu-back-icon-margin:var(--spectrum-navigational-indicator-top-to-back-icon-medium);--spectrum-menu-item-collapsible-has-icon-submenu-item-padding-x-start:calc(var(--spectrum-menu-item-label-inline-edge-to-content) + var(--spectrum-menu-item-checkmark-width) + var(--spectrum-menu-item-text-to-control) + var(--spectrum-menu-item-icon-width) + var(--spectrum-menu-item-label-text-to-visual) + var(--spectrum-menu-item-focus-indicator-width));--spectrum-menu-item-collapsible-no-icon-submenu-item-padding-x-start:calc(var(--spectrum-menu-item-label-inline-edge-to-content) + var(--spectrum-menu-item-checkmark-width) + var(--spectrum-menu-item-label-text-to-visual) + var(--spectrum-menu-item-focus-indicator-width))}:host([size=s]){--spectrum-menu-item-min-height:var(--spectrum-component-height-75);--spectrum-menu-item-icon-height:var(--spectrum-workflow-icon-size-75);--spectrum-menu-item-icon-width:var(--spectrum-workflow-icon-size-75);--spectrum-menu-item-label-font-size:var(--spectrum-font-size-75);--spectrum-menu-item-label-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-menu-item-label-inline-edge-to-content:var(--spectrum-component-edge-to-text-75);--spectrum-menu-item-top-edge-to-text:var(--spectrum-component-top-to-text-75);--spectrum-menu-item-bottom-edge-to-text:var(--spectrum-component-bottom-to-text-75);--spectrum-menu-item-text-to-control:var(--spectrum-text-to-control-75);--spectrum-menu-item-description-font-size:var(--spectrum-font-size-50);--spectrum-menu-section-header-font-size:var(--spectrum-font-size-75);--spectrum-menu-section-header-min-width:var(--spectrum-component-height-75);--spectrum-menu-item-selectable-edge-to-text-not-selected:var(--spectrum-menu-item-selectable-edge-to-text-not-selected-small);--spectrum-menu-item-checkmark-height:var(--spectrum-menu-item-checkmark-height-small);--spectrum-menu-item-checkmark-width:var(--spectrum-menu-item-checkmark-width-small);--spectrum-menu-item-top-to-checkmark:var(--spectrum-menu-item-top-to-selected-icon-small);--spectrum-menu-back-icon-margin:var(--spectrum-navigational-indicator-top-to-back-icon-small)}:host([size=l]){--spectrum-menu-item-min-height:var(--spectrum-component-height-200);--spectrum-menu-item-icon-height:var(--spectrum-workflow-icon-size-200);--spectrum-menu-item-icon-width:var(--spectrum-workflow-icon-size-200);--spectrum-menu-item-label-font-size:var(--spectrum-font-size-200);--spectrum-menu-item-label-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-menu-item-label-inline-edge-to-content:var(--spectrum-component-edge-to-text-200);--spectrum-menu-item-top-edge-to-text:var(--spectrum-component-top-to-text-200);--spectrum-menu-item-bottom-edge-to-text:var(--spectrum-component-bottom-to-text-200);--spectrum-menu-item-text-to-control:var(--spectrum-text-to-control-200);--spectrum-menu-item-description-font-size:var(--spectrum-font-size-100);--spectrum-menu-section-header-font-size:var(--spectrum-font-size-200);--spectrum-menu-section-header-min-width:var(--spectrum-component-height-200);--spectrum-menu-item-selectable-edge-to-text-not-selected:var(--spectrum-menu-item-selectable-edge-to-text-not-selected-large);--spectrum-menu-item-checkmark-height:var(--spectrum-menu-item-checkmark-height-large);--spectrum-menu-item-checkmark-width:var(--spectrum-menu-item-checkmark-width-large);--spectrum-menu-item-top-to-checkmark:var(--spectrum-menu-item-top-to-selected-icon-large);--spectrum-menu-back-icon-margin:var(--spectrum-navigational-indicator-top-to-back-icon-large)}:host([size=xl]){--spectrum-menu-item-min-height:var(--spectrum-component-height-300);--spectrum-menu-item-icon-height:var(--spectrum-workflow-icon-size-300);--spectrum-menu-item-icon-width:var(--spectrum-workflow-icon-size-300);--spectrum-menu-item-label-font-size:var(--spectrum-font-size-300);--spectrum-menu-item-label-text-to-visual:var(--spectrum-text-to-visual-300);--spectrum-menu-item-label-inline-edge-to-content:var(--spectrum-component-edge-to-text-300);--spectrum-menu-item-top-edge-to-text:var(--spectrum-component-top-to-text-300);--spectrum-menu-item-bottom-edge-to-text:var(--spectrum-component-bottom-to-text-300);--spectrum-menu-item-text-to-control:var(--spectrum-text-to-control-300);--spectrum-menu-item-description-font-size:var(--spectrum-font-size-200);--spectrum-menu-section-header-font-size:var(--spectrum-font-size-300);--spectrum-menu-section-header-min-width:var(--spectrum-component-height-300);--spectrum-menu-item-selectable-edge-to-text-not-selected:var(--spectrum-menu-item-selectable-edge-to-text-not-selected-extra-large);--spectrum-menu-item-checkmark-height:var(--spectrum-menu-item-checkmark-height-extra-large);--spectrum-menu-item-checkmark-width:var(--spectrum-menu-item-checkmark-width-extra-large);--spectrum-menu-item-top-to-checkmark:var(--spectrum-menu-item-top-to-selected-icon-extra-large);--spectrum-menu-back-icon-margin:var(--spectrum-navigational-indicator-top-to-back-icon-extra-large)}@media (forced-colors:active){:host{--highcontrast-menu-item-background-color-default:ButtonFace;--highcontrast-menu-item-color-default:ButtonText;--highcontrast-menu-item-background-color-focus:Highlight;--highcontrast-menu-item-color-focus:HighlightText;--highcontrast-menu-checkmark-icon-color-default:Highlight;--highcontrast-menu-item-color-disabled:GrayText;--highcontrast-menu-item-focus-indicator-color:Highlight;--highcontrast-menu-item-selected-background-color:Highlight;--highcontrast-menu-item-selected-color:HighlightText}@supports (color:SelectedItem){:host{--highcontrast-menu-item-selected-background-color:SelectedItem;--highcontrast-menu-item-selected-color:SelectedItemText}}}:host{inline-size:var(--mod-menu-inline-size,auto);box-sizing:border-box;margin:0;padding:0;list-style-type:none;display:inline-block;overflow:auto}:host:lang(ja),:host:lang(ko),:host:lang(zh){--spectrum-menu-item-label-line-height:var(--mod-menu-item-label-line-height-cjk,var(--spectrum-menu-item-label-line-height-cjk));--spectrum-menu-item-description-line-height:var(--mod-menu-item-description-line-height-cjk,var(--spectrum-menu-item-description-line-height-cjk));--spectrum-menu-section-header-line-height:var(--mod-menu-section-header-line-height-cjk,var(--spectrum-menu-section-header-line-height-cjk))}:host([selects]) ::slotted(sp-menu-item){--spectrum-menu-checkmark-display:var(--spectrum-menu-checkmark-display-hidden);padding-inline-start:var(--mod-menu-item-selectable-edge-to-text-not-selected,var(--spectrum-menu-item-selectable-edge-to-text-not-selected))}:host([selects]) ::slotted(sp-menu-item[selected]){--spectrum-menu-checkmark-display:var(--spectrum-menu-checkmark-display-shown);padding-inline-start:var(--mod-menu-item-label-inline-edge-to-content,var(--spectrum-menu-item-label-inline-edge-to-content))}.spectrum-Menu-back:focus-visible{box-shadow:inset calc(var(--mod-menu-item-focus-indicator-width,var(--spectrum-menu-item-focus-indicator-width))*var(--spectrum-menu-item-focus-indicator-direction-scalar,1))0 0 0 var(--highcontrast-menu-item-focus-indicator-color,var(--mod-menu-item-focus-indicator-color,var(--spectrum-menu-item-focus-indicator-color)))}.spectrum-Menu-sectionHeading{color:var(--highcontrast-menu-item-color-default,var(--mod-menu-section-header-color,var(--spectrum-menu-section-header-color)));font-size:var(--mod-menu-section-header-font-size,var(--spectrum-menu-section-header-font-size));font-weight:var(--mod-menu-section-header-font-weight,var(--spectrum-menu-section-header-font-weight));line-height:var(--mod-menu-section-header-line-height,var(--spectrum-menu-section-header-line-height));min-inline-size:var(--mod-menu-section-header-min-width,var(--spectrum-menu-section-header-min-width));padding-block-start:var(--mod-menu-section-header-top-edge-to-text,var(--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text)));padding-block-end:var(--mod-menu-section-header-bottom-edge-to-text,var(--mod-menu-item-bottom-edge-to-text,var(--spectrum-menu-item-bottom-edge-to-text)));padding-inline:var(--mod-menu-item-label-inline-edge-to-content,var(--spectrum-menu-item-label-inline-edge-to-content));grid-area:sectionHeadingArea/1/sectionHeadingArea/-1;display:block}.spectrum-Menu-back{padding-inline:var(--mod-menu-back-padding-inline-start,0)var(--mod-menu-back-padding-inline-end,var(--spectrum-menu-item-label-inline-edge-to-content));padding-block:var(--mod-menu-back-padding-block-start,0)var(--mod-menu-back-padding-block-end,0);flex-flow:wrap;align-items:center;display:flex}.spectrum-Menu-back .spectrum-Menu-sectionHeading{padding:0}.spectrum-Menu-backButton{cursor:pointer;background:0 0;border:0;margin:0;padding:0;display:inline-flex}.spectrum-Menu-backButton:focus-visible{outline:var(--spectrum-focus-indicator-thickness)solid var(--spectrum-focus-indicator-color);outline-offset:calc((var(--spectrum-focus-indicator-thickness) + 1px)*-1)}.spectrum-Menu-backHeading{color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-heading-color,var(--spectrum-menu-section-header-color)));font-size:var(--mod-menu-section-header-font-size,var(--spectrum-menu-section-header-font-size));font-weight:var(--mod-menu-section-header-font-weight,var(--spectrum-menu-section-header-font-weight));line-height:var(--mod-menu-section-header-line-height,var(--spectrum-menu-section-header-line-height));display:block}.spectrum-Menu-backIcon{margin-block:var(--mod-menu-back-icon-margin-block,var(--spectrum-menu-back-icon-margin));margin-inline:var(--mod-menu-back-icon-margin-inline,var(--spectrum-menu-back-icon-margin));fill:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default))}:host{width:var(--swc-menu-width);flex-direction:column;display:inline-flex}:host(:focus){outline:none}::slotted(*){flex-shrink:0}
`;
var menu_css_default = t;

// node_modules/@spectrum-web-components/menu/src/Menu.js
var p = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var l = (r2, o3, e3, s) => {
  for (var t3 = s > 1 ? void 0 : s ? f(o3, e3) : o3, i = r2.length - 1, n; i >= 0; i--)
    (n = r2[i]) && (t3 = (s ? n(o3, e3, t3) : n(t3)) || t3);
  return s && t3 && p(o3, e3, t3), t3;
};
function S(r2, o3) {
  return !!o3 && (r2 === o3 || r2.contains(o3));
}
var Menu = class extends v(b, { noDefaultSize: true }) {
  constructor() {
    super();
    this.label = "";
    this.ignore = false;
    this.value = "";
    this.valueSeparator = ",";
    this._selected = [];
    this.selectedItems = [];
    this.childItemSet = /* @__PURE__ */ new Set();
    this.focusedItemIndex = 0;
    this.focusInItemIndex = 0;
    this.selectedItemsMap = /* @__PURE__ */ new Map();
    this.pointerUpTarget = null;
    this.descendentOverlays = /* @__PURE__ */ new Map();
    this.handleSubmenuClosed = (e3) => {
      e3.stopPropagation(), e3.composedPath()[0].dispatchEvent(new Event("sp-menu-submenu-closed", { bubbles: true, composed: true }));
    };
    this.handleSubmenuOpened = (e3) => {
      e3.stopPropagation(), e3.composedPath()[0].dispatchEvent(new Event("sp-menu-submenu-opened", { bubbles: true, composed: true }));
      const t3 = this.childItems[this.focusedItemIndex];
      t3 && (t3.focused = false);
      const i = e3.composedPath().find((d) => this.childItemSet.has(d));
      if (!i)
        return;
      const n = this.childItems.indexOf(i);
      this.focusedItemIndex = n, this.focusInItemIndex = n;
    };
    this._hasUpdatedSelectedItemIndex = false;
    this._willUpdateItems = false;
    this.cacheUpdated = Promise.resolve();
    this.resolveCacheUpdated = () => {
    };
    this.addEventListener("sp-menu-item-added-or-updated", this.onSelectableItemAddedOrUpdated), this.addEventListener("sp-menu-item-added-or-updated", this.onFocusableItemAddedOrUpdated, { capture: true }), this.addEventListener("click", this.handleClick), this.addEventListener("pointerup", this.handlePointerup), this.addEventListener("focusin", this.handleFocusin), this.addEventListener("blur", this.handleBlur), this.addEventListener("sp-opened", this.handleSubmenuOpened), this.addEventListener("sp-closed", this.handleSubmenuClosed);
  }
  static get styles() {
    return [menu_css_default];
  }
  get isSubmenu() {
    return this.slot === "submenu";
  }
  get selected() {
    return this._selected;
  }
  set selected(e3) {
    if (e3 === this.selected)
      return;
    const s = this.selected;
    this._selected = e3, this.selectedItems = [], this.selectedItemsMap.clear(), this.childItems.forEach((t3) => {
      this === t3.menuData.selectionRoot && (t3.selected = this.selected.includes(t3.value), t3.selected && (this.selectedItems.push(t3), this.selectedItemsMap.set(t3, true)));
    }), this.requestUpdate("selected", s);
  }
  get childItems() {
    return this.cachedChildItems || (this.cachedChildItems = this.updateCachedMenuItems()), this.cachedChildItems;
  }
  updateCachedMenuItems() {
    if (this.cachedChildItems = [], !this.menuSlot)
      return [];
    const e3 = this.menuSlot.assignedElements({ flatten: true });
    for (const [s, t3] of e3.entries()) {
      if (this.childItemSet.has(t3)) {
        this.cachedChildItems.push(t3);
        continue;
      }
      const n = t3.localName === "slot" ? t3.assignedElements({ flatten: true }) : [...t3.querySelectorAll(":scope > *")];
      e3.splice(s, 1, t3, ...n);
    }
    return this.cachedChildItems;
  }
  get childRole() {
    if (this.resolvedRole === "listbox")
      return "option";
    switch (this.resolvedSelects) {
      case "single":
        return "menuitemradio";
      case "multiple":
        return "menuitemcheckbox";
      default:
        return "menuitem";
    }
  }
  get ownRole() {
    return "menu";
  }
  onFocusableItemAddedOrUpdated(e3) {
    e3.menuCascade.set(this, { hadFocusRoot: !!e3.item.menuData.focusRoot, ancestorWithSelects: e3.currentAncestorWithSelects }), this.selects && (e3.currentAncestorWithSelects = this), e3.item.menuData.focusRoot = e3.item.menuData.focusRoot || this;
  }
  onSelectableItemAddedOrUpdated(e3) {
    var i, n;
    const s = e3.menuCascade.get(this);
    if (!s)
      return;
    if (e3.item.menuData.parentMenu = e3.item.menuData.parentMenu || this, s.hadFocusRoot && !this.ignore && (this.tabIndex = -1), this.addChildItem(e3.item), this.selects === "inherit") {
      this.resolvedSelects = "inherit";
      const d = (i = e3.currentAncestorWithSelects) == null ? void 0 : i.ignore;
      this.resolvedRole = d ? "none" : ((n = e3.currentAncestorWithSelects) == null ? void 0 : n.getAttribute("role")) || this.getAttribute("role") || void 0;
    } else
      this.selects ? (this.resolvedRole = this.ignore ? "none" : this.getAttribute("role") || void 0, this.resolvedSelects = this.selects) : (this.resolvedRole = this.ignore ? "none" : this.getAttribute("role") || void 0, this.resolvedSelects = this.resolvedRole === "none" ? "ignore" : "none");
    const t3 = this.resolvedSelects === "single" || this.resolvedSelects === "multiple";
    e3.item.menuData.cleanupSteps.push((d) => this.removeChildItem(d)), (t3 || !this.selects && this.resolvedSelects !== "ignore") && !e3.item.menuData.selectionRoot && (e3.item.setRole(this.childRole), e3.item.menuData.selectionRoot = e3.item.menuData.selectionRoot || this, e3.item.selected && (this.selectedItemsMap.set(e3.item, true), this.selectedItems = [...this.selectedItems, e3.item], this._selected = [...this.selected, e3.item.value], this.value = this.selected.join(this.valueSeparator)));
  }
  addChildItem(e3) {
    this.childItemSet.add(e3), this.handleItemsChanged();
  }
  async removeChildItem(e3) {
    this.childItemSet.delete(e3), this.cachedChildItems = void 0, e3.focused && (this.handleItemsChanged(), await this.updateComplete, this.focus());
  }
  focus({ preventScroll: e3 } = {}) {
    if (!this.childItems.length || this.childItems.every((t3) => t3.disabled))
      return;
    if (this.childItems.some((t3) => t3.menuData.focusRoot !== this)) {
      super.focus({ preventScroll: e3 });
      return;
    }
    this.focusMenuItemByOffset(0), super.focus({ preventScroll: e3 });
    const s = this.selectedItems[0];
    s && !e3 && s.scrollIntoView({ block: "nearest" });
  }
  handleClick(e3) {
    if (this.pointerUpTarget === e3.target) {
      this.pointerUpTarget = null;
      return;
    }
    this.handlePointerBasedSelection(e3);
  }
  handlePointerup(e3) {
    this.pointerUpTarget = e3.target, this.handlePointerBasedSelection(e3);
  }
  handlePointerBasedSelection(e3) {
    if (e3 instanceof MouseEvent && e3.button !== 0)
      return;
    const t3 = e3.composedPath().find((i) => i instanceof Element ? i.getAttribute("role") === this.childRole : false);
    if (e3.defaultPrevented) {
      const i = this.childItems.indexOf(t3);
      (t3 == null ? void 0 : t3.menuData.focusRoot) === this && i > -1 && (this.focusedItemIndex = i);
      return;
    }
    if (t3 != null && t3.href && t3.href.length) {
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      return;
    } else if ((t3 == null ? void 0 : t3.menuData.selectionRoot) === this && this.childItems.length) {
      if (e3.preventDefault(), t3.hasSubmenu || t3.open)
        return;
      this.selectOrToggleItem(t3);
    } else
      return;
    this.prepareToCleanUp();
  }
  handleFocusin(e3) {
    var i;
    if (this.childItems.some((n) => n.menuData.focusRoot !== this))
      return;
    const s = this.getRootNode().activeElement, t3 = ((i = this.childItems[this.focusedItemIndex]) == null ? void 0 : i.menuData.selectionRoot) || this;
    if ((s !== t3 || e3.target !== this) && (t3.focus({ preventScroll: true }), s && this.focusedItemIndex === 0)) {
      const n = this.childItems.findIndex((d) => d === s);
      this.focusMenuItemByOffset(Math.max(n, 0));
    }
    this.startListeningToKeyboard();
  }
  startListeningToKeyboard() {
    this.addEventListener("keydown", this.handleKeydown);
  }
  handleBlur(e3) {
    S(this, e3.relatedTarget) || (this.stopListeningToKeyboard(), this.childItems.forEach((s) => s.focused = false), this.removeAttribute("aria-activedescendant"));
  }
  stopListeningToKeyboard() {
    this.removeEventListener("keydown", this.handleKeydown);
  }
  handleDescendentOverlayOpened(e3) {
    const s = e3.composedPath()[0];
    s.overlayElement && this.descendentOverlays.set(s.overlayElement, s.overlayElement);
  }
  handleDescendentOverlayClosed(e3) {
    const s = e3.composedPath()[0];
    s.overlayElement && this.descendentOverlays.delete(s.overlayElement);
  }
  async selectOrToggleItem(e3) {
    const s = this.resolvedSelects, t3 = new Map(this.selectedItemsMap), i = this.selected.slice(), n = this.selectedItems.slice(), d = this.value, c2 = this.childItems[this.focusedItemIndex];
    if (c2 && (c2.focused = false, c2.active = false), this.focusedItemIndex = this.childItems.indexOf(e3), this.forwardFocusVisibleToItem(e3), s === "multiple") {
      this.selectedItemsMap.has(e3) ? this.selectedItemsMap.delete(e3) : this.selectedItemsMap.set(e3, true);
      const h2 = [], m4 = [];
      this.childItemSet.forEach((u2) => {
        u2.menuData.selectionRoot === this && this.selectedItemsMap.has(u2) && (h2.push(u2.value), m4.push(u2));
      }), this._selected = h2, this.selectedItems = m4, this.value = this.selected.join(this.valueSeparator);
    } else
      this.selectedItemsMap.clear(), this.selectedItemsMap.set(e3, true), this.value = e3.value, this._selected = [e3.value], this.selectedItems = [e3];
    if (!this.dispatchEvent(new Event("change", { cancelable: true, bubbles: true, composed: true }))) {
      this._selected = i, this.selectedItems = n, this.selectedItemsMap = t3, this.value = d;
      return;
    }
    if (s === "single") {
      for (const h2 of t3.keys())
        h2 !== e3 && (h2.selected = false);
      e3.selected = true;
    } else
      s === "multiple" && (e3.selected = !e3.selected);
  }
  navigateWithinMenu(e3) {
    const { key: s } = e3, t3 = this.childItems[this.focusedItemIndex], i = s === "ArrowDown" ? 1 : -1, n = this.focusMenuItemByOffset(i);
    n !== t3 && (e3.preventDefault(), e3.stopPropagation(), n.scrollIntoView({ block: "nearest" }));
  }
  navigateBetweenRelatedMenus(e3) {
    const { key: s } = e3;
    e3.stopPropagation();
    const t3 = this.isLTR && s === "ArrowRight" || !this.isLTR && s === "ArrowLeft", i = this.isLTR && s === "ArrowLeft" || !this.isLTR && s === "ArrowRight";
    if (t3) {
      const n = this.childItems[this.focusedItemIndex];
      n != null && n.hasSubmenu && n.openOverlay();
    } else
      i && this.isSubmenu && (this.dispatchEvent(new Event("close", { bubbles: true })), this.updateSelectedItemIndex());
  }
  handleKeydown(e3) {
    if (e3.defaultPrevented)
      return;
    const s = this.childItems[this.focusedItemIndex];
    s && (s.focused = true);
    const { key: t3 } = e3;
    if (e3.shiftKey && e3.target !== this && this.hasAttribute("tabindex")) {
      this.removeAttribute("tabindex");
      const i = (n) => {
        !n.shiftKey && !this.hasAttribute("tabindex") && (this.tabIndex = 0, document.removeEventListener("keyup", i), this.removeEventListener("focusout", i));
      };
      document.addEventListener("keyup", i), this.addEventListener("focusout", i);
    }
    if (t3 === "Tab") {
      this.prepareToCleanUp();
      return;
    }
    if (t3 === " " && s != null && s.hasSubmenu) {
      s.openOverlay();
      return;
    }
    if (t3 === " " || t3 === "Enter") {
      const i = this.childItems[this.focusedItemIndex];
      i && i.menuData.selectionRoot === e3.target && (e3.preventDefault(), i.click());
      return;
    }
    if (t3 === "ArrowDown" || t3 === "ArrowUp") {
      const i = this.childItems[this.focusedItemIndex];
      i && i.menuData.selectionRoot === e3.target && this.navigateWithinMenu(e3);
      return;
    }
    this.navigateBetweenRelatedMenus(e3);
  }
  focusMenuItemByOffset(e3) {
    const s = e3 || 1, t3 = this.childItems[this.focusedItemIndex];
    t3 && (t3.focused = false, t3.active = t3.open), this.focusedItemIndex = (this.childItems.length + this.focusedItemIndex + e3) % this.childItems.length;
    let i = this.childItems[this.focusedItemIndex], n = this.childItems.length;
    for (; i != null && i.disabled && n; )
      n -= 1, this.focusedItemIndex = (this.childItems.length + this.focusedItemIndex + s) % this.childItems.length, i = this.childItems[this.focusedItemIndex];
    return i != null && i.disabled || this.forwardFocusVisibleToItem(i), i;
  }
  prepareToCleanUp() {
    document.addEventListener("focusout", () => {
      requestAnimationFrame(() => {
        const e3 = this.childItems[this.focusedItemIndex];
        e3 && (e3.focused = false, this.updateSelectedItemIndex());
      });
    }, { once: true });
  }
  updateSelectedItemIndex() {
    let e3 = 0;
    const s = /* @__PURE__ */ new Map(), t3 = [], i = [];
    let n = this.childItems.length;
    for (; n; ) {
      n -= 1;
      const d = this.childItems[n];
      d.menuData.selectionRoot === this && ((d.selected || !this._hasUpdatedSelectedItemIndex && this.selected.includes(d.value)) && (e3 = n, s.set(d, true), t3.unshift(d.value), i.unshift(d)), n !== e3 && (d.focused = false));
    }
    i.map((d, c2) => {
      c2 > 0 && (d.focused = false);
    }), this.selectedItemsMap = s, this._selected = t3, this.selectedItems = i, this.value = this.selected.join(this.valueSeparator), this.focusedItemIndex = e3, this.focusInItemIndex = e3;
  }
  handleItemsChanged() {
    this.cachedChildItems = void 0, this._willUpdateItems || (this._willUpdateItems = true, this.cacheUpdated = this.updateCache());
  }
  async updateCache() {
    this.hasUpdated ? await new Promise((e3) => requestAnimationFrame(() => e3(true))) : await Promise.all([new Promise((e3) => requestAnimationFrame(() => e3(true))), this.updateComplete]), this.cachedChildItems === void 0 && (this.updateSelectedItemIndex(), this.updateItemFocus()), this._willUpdateItems = false;
  }
  updateItemFocus() {
    if (this.childItems.length == 0)
      return;
    const e3 = this.childItems[this.focusInItemIndex];
    this.getRootNode().activeElement === e3.menuData.focusRoot && this.forwardFocusVisibleToItem(e3);
  }
  closeDescendentOverlays() {
    this.descendentOverlays.forEach((e3) => {
      e3.open = false;
    }), this.descendentOverlays = /* @__PURE__ */ new Map();
  }
  forwardFocusVisibleToItem(e3) {
    if (!e3 || e3.menuData.focusRoot !== this)
      return;
    this.closeDescendentOverlays();
    const s = this.hasVisibleFocusInTree() || !!this.childItems.find((t3) => t3.hasVisibleFocusInTree());
    e3.focused = s, this.setAttribute("aria-activedescendant", e3.id), e3.menuData.selectionRoot && e3.menuData.selectionRoot !== this && e3.menuData.selectionRoot.focus();
  }
  handleSlotchange({ target: e3 }) {
    const s = e3.assignedElements({ flatten: true });
    this.childItems.length !== s.length && s.forEach((t3) => {
      typeof t3.triggerUpdate != "undefined" ? t3.triggerUpdate() : typeof t3.childItems != "undefined" && t3.childItems.forEach((i) => {
        i.triggerUpdate();
      });
    });
  }
  renderMenuItemSlot() {
    return I`
            <slot
                @sp-menu-submenu-opened=${this.handleDescendentOverlayOpened}
                @sp-menu-submenu-closed=${this.handleDescendentOverlayClosed}
                @slotchange=${this.handleSlotchange}
            ></slot>
        `;
  }
  render() {
    return this.renderMenuItemSlot();
  }
  firstUpdated(e3) {
    super.firstUpdated(e3), !this.hasAttribute("tabindex") && !this.ignore && (this.getAttribute("role") === "group" ? this.tabIndex = -1 : this.tabIndex = 0);
    const s = [new Promise((t3) => requestAnimationFrame(() => t3(true)))];
    [...this.children].forEach((t3) => {
      t3.localName === "sp-menu-item" && s.push(t3.updateComplete);
    }), this.childItemsUpdated = Promise.all(s);
  }
  updated(e3) {
    super.updated(e3), e3.has("selects") && this.hasUpdated && this.selectsChanged(), e3.has("label") && (this.label || typeof e3.get("label") != "undefined") && (this.label ? this.setAttribute("aria-label", this.label) : this.removeAttribute("aria-label"));
  }
  selectsChanged() {
    const e3 = [new Promise((s) => requestAnimationFrame(() => s(true)))];
    this.childItemSet.forEach((s) => {
      e3.push(s.triggerUpdate());
    }), this.childItemsUpdated = Promise.all(e3);
  }
  connectedCallback() {
    super.connectedCallback(), !this.hasAttribute("role") && !this.ignore && this.setAttribute("role", this.ownRole), this.updateComplete.then(() => this.updateItemFocus());
  }
  disconnectedCallback() {
    this.cachedChildItems = void 0, this.selectedItems = [], this.selectedItemsMap.clear(), this.childItemSet.clear(), this.descendentOverlays = /* @__PURE__ */ new Map(), super.disconnectedCallback();
  }
  async getUpdateComplete() {
    const e3 = await super.getUpdateComplete();
    return await this.childItemsUpdated, await this.cacheUpdated, e3;
  }
};
l([a({ type: String, reflect: true })], Menu.prototype, "label", 2), l([a({ type: Boolean, reflect: true })], Menu.prototype, "ignore", 2), l([a({ type: String, reflect: true })], Menu.prototype, "selects", 2), l([a({ type: String })], Menu.prototype, "value", 2), l([a({ type: String, attribute: "value-separator" })], Menu.prototype, "valueSeparator", 2), l([a({ attribute: false })], Menu.prototype, "selected", 1), l([a({ attribute: false })], Menu.prototype, "selectedItems", 2), l([g("slot:not([name])")], Menu.prototype, "menuSlot", 2);

// node_modules/@spectrum-web-components/menu/sp-menu.js
import { defineElement as m } from "/libs/features/spectrum-web-components/dist/base.js";
m("sp-menu", Menu);

// node_modules/@spectrum-web-components/menu/src/MenuItem.js
import { html as l2, nothing as c } from "/libs/features/spectrum-web-components/dist/base.js";
import { ObserveSlotPresence as m2, ObserveSlotText as v2, randomID as b2 } from "/libs/features/spectrum-web-components/dist/shared.js";
import { property as o2, query as u } from "/libs/features/spectrum-web-components/dist/base.js";
import "/libs/features/spectrum-web-components/dist/icons-ui.js";
import { LikeAnchor as f2 } from "/libs/features/spectrum-web-components/dist/shared.js";
import { Focusable as E } from "/libs/features/spectrum-web-components/dist/shared.js";
import "/libs/features/spectrum-web-components/dist/icons-ui.js";
import y from "/libs/features/spectrum-web-components/dist/icons/chevron.js";
import { DependencyManagerController as S2 } from "/libs/features/spectrum-web-components/dist/reactive-controllers.js";

// node_modules/@spectrum-web-components/menu/src/menu-item.css.js
import { css as e2 } from "/libs/features/spectrum-web-components/dist/base.js";
var o = e2`
    .checkmark{display:var(--mod-menu-checkmark-display,var(--spectrum-menu-checkmark-display));fill:var(--highcontrast-menu-checkmark-icon-color-default,var(--mod-menu-checkmark-icon-color-default,var(--spectrum-menu-checkmark-icon-color-default)));color:var(--highcontrast-menu-checkmark-icon-color-default,var(--mod-menu-checkmark-icon-color-default,var(--spectrum-menu-checkmark-icon-color-default)));opacity:1;align-self:center}.spectrum-Menu-back:focus-visible{box-shadow:inset calc(var(--mod-menu-item-focus-indicator-width,var(--spectrum-menu-item-focus-indicator-width))*var(--spectrum-menu-item-focus-indicator-direction-scalar,1))0 0 0 var(--highcontrast-menu-item-focus-indicator-color,var(--mod-menu-item-focus-indicator-color,var(--spectrum-menu-item-focus-indicator-color)))}.checkmark{block-size:var(--mod-menu-item-checkmark-height,var(--spectrum-menu-item-checkmark-height));inline-size:var(--mod-menu-item-checkmark-width,var(--spectrum-menu-item-checkmark-width));grid-area:checkmarkArea;align-self:start;margin-block-start:calc(var(--mod-menu-item-top-to-checkmark,var(--spectrum-menu-item-top-to-checkmark)) - var(--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text)));margin-inline-end:var(--mod-menu-item-text-to-control,var(--spectrum-menu-item-text-to-control))}.spectrum-Menu-back{padding-inline:var(--mod-menu-back-padding-inline-start,0)var(--mod-menu-back-padding-inline-end,var(--spectrum-menu-item-label-inline-edge-to-content));padding-block:var(--mod-menu-back-padding-block-start,0)var(--mod-menu-back-padding-block-end,0);flex-flow:wrap;align-items:center;display:flex}.spectrum-Menu-backButton{cursor:pointer;background:0 0;border:0;margin:0;padding:0;display:inline-flex}.spectrum-Menu-backButton:focus-visible{outline:var(--spectrum-focus-indicator-thickness)solid var(--spectrum-focus-indicator-color);outline-offset:calc((var(--spectrum-focus-indicator-thickness) + 1px)*-1)}.spectrum-Menu-backHeading{color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-heading-color,var(--spectrum-menu-section-header-color)));font-size:var(--mod-menu-section-header-font-size,var(--spectrum-menu-section-header-font-size));font-weight:var(--mod-menu-section-header-font-weight,var(--spectrum-menu-section-header-font-weight));line-height:var(--mod-menu-section-header-line-height,var(--spectrum-menu-section-header-line-height));display:block}.spectrum-Menu-backIcon{margin-block:var(--mod-menu-back-icon-margin-block,var(--spectrum-menu-back-icon-margin));margin-inline:var(--mod-menu-back-icon-margin-inline,var(--spectrum-menu-back-icon-margin));fill:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default))}.spectrum-Menu-back:focus-visible{box-shadow:inset calc(var(--mod-menu-item-focus-indicator-width,var(--spectrum-menu-item-focus-indicator-width))*var(--spectrum-menu-item-focus-indicator-direction-scalar,1))0 0 0 var(--highcontrast-menu-item-focus-indicator-color,var(--mod-menu-item-focus-indicator-color,var(--spectrum-menu-item-focus-indicator-color)))}.chevron{block-size:var(--spectrum-menu-item-checkmark-height);inline-size:var(--spectrum-menu-item-checkmark-width);grid-area:chevronArea;align-self:center;margin-inline-end:var(--mod-menu-item-text-to-control,var(--spectrum-menu-item-text-to-control))}.chevron:dir(rtl),:host([dir=rtl]) .chevron{transform:rotate(-180deg)}.spectrum-Menu-back{padding-inline:var(--mod-menu-back-padding-inline-start,0)var(--mod-menu-back-padding-inline-end,var(--spectrum-menu-item-label-inline-edge-to-content));padding-block:var(--mod-menu-back-padding-block-start,0)var(--mod-menu-back-padding-block-end,0);flex-flow:wrap;align-items:center;display:flex}.spectrum-Menu-backButton{cursor:pointer;background:0 0;border:0;margin:0;padding:0;display:inline-flex}.spectrum-Menu-backButton:focus-visible{outline:var(--spectrum-focus-indicator-thickness)solid var(--spectrum-focus-indicator-color);outline-offset:calc((var(--spectrum-focus-indicator-thickness) + 1px)*-1)}.spectrum-Menu-backHeading{color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-heading-color,var(--spectrum-menu-section-header-color)));font-size:var(--mod-menu-section-header-font-size,var(--spectrum-menu-section-header-font-size));font-weight:var(--mod-menu-section-header-font-weight,var(--spectrum-menu-section-header-font-weight));line-height:var(--mod-menu-section-header-line-height,var(--spectrum-menu-section-header-line-height));display:block}.spectrum-Menu-backIcon{margin-block:var(--mod-menu-back-icon-margin-block,var(--spectrum-menu-back-icon-margin));margin-inline:var(--mod-menu-back-icon-margin-inline,var(--spectrum-menu-back-icon-margin));fill:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default))}::slotted([slot=icon]){fill:var(--highcontrast-menu-item-color-default,var(--mod-menu-item-label-icon-color-default,var(--spectrum-menu-item-label-icon-color-default)));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-item-label-icon-color-default,var(--spectrum-menu-item-label-icon-color-default)))}.checkmark{display:var(--mod-menu-checkmark-display,var(--spectrum-menu-checkmark-display));fill:var(--highcontrast-menu-checkmark-icon-color-default,var(--mod-menu-checkmark-icon-color-default,var(--spectrum-menu-checkmark-icon-color-default)));color:var(--highcontrast-menu-checkmark-icon-color-default,var(--mod-menu-checkmark-icon-color-default,var(--spectrum-menu-checkmark-icon-color-default)));opacity:1;align-self:center}:host{cursor:pointer;box-sizing:border-box;background-color:var(--highcontrast-menu-item-background-color-default,var(--mod-menu-item-background-color-default,var(--spectrum-menu-item-background-color-default)));line-height:var(--mod-menu-item-label-line-height,var(--spectrum-menu-item-label-line-height));min-block-size:var(--mod-menu-item-min-height,var(--spectrum-menu-item-min-height));padding-block-start:var(--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text));padding-block-end:var(--mod-menu-item-bottom-edge-to-text,var(--spectrum-menu-item-bottom-edge-to-text));padding-inline:var(--mod-menu-item-label-inline-edge-to-content,var(--spectrum-menu-item-label-inline-edge-to-content));align-items:center;margin:0;-webkit-text-decoration:none;text-decoration:none;position:relative}.spectrum-Menu-itemCheckbox{--mod-checkbox-top-to-text:0;--mod-checkbox-text-to-control:0;min-block-size:0}.spectrum-Menu-itemCheckbox .spectrum-Checkbox-box{margin-block-start:var(--mod-menu-item-top-to-checkbox,var(--spectrum-menu-item-top-to-checkbox));margin-block-end:0;margin-inline-end:var(--mod-menu-item-text-to-control,var(--spectrum-menu-item-text-to-control))}.spectrum-Menu-itemSwitch{min-block-size:0}.spectrum-Menu-itemSwitch .spectrum-Switch-switch{margin-block-start:var(--mod-menu-item-top-to-action,var(--spectrum-menu-item-top-to-action));margin-block-end:0}:host{grid-template:".chevronAreaCollapsible.headingIconArea sectionHeadingArea. . ."1fr"selectedArea chevronAreaCollapsible checkmarkArea iconArea labelArea valueArea actionsArea chevronAreaDrillIn"". . . .descriptionArea. . ."". . . .submenuArea. . ."/auto auto auto auto 1fr auto auto auto;display:grid}#label{grid-area:submenuItemLabelArea}::slotted([slot=value]){grid-area:submenuItemValueArea}:host([focused]),:host(:focus){background-color:var(--highcontrast-menu-item-background-color-focus,var(--mod-menu-item-background-color-key-focus,var(--spectrum-menu-item-background-color-key-focus)));outline:none}:host([focused])>#label,:host(:focus)>#label{color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-content-color-focus,var(--spectrum-menu-item-label-content-color-focus)))}:host([focused])>[name=description]::slotted(*),:host(:focus)>[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-description-color-focus,var(--spectrum-menu-item-description-color-focus)))}:host([focused])>::slotted([slot=value]),:host(:focus)>::slotted([slot=value]){color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-value-color-focus,var(--spectrum-menu-item-value-color-focus)))}:host([focused])>.icon:not(.chevron,.checkmark),:host(:focus)>.icon:not(.chevron,.checkmark){fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-focus,var(--spectrum-menu-item-label-icon-color-focus)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-focus,var(--spectrum-menu-item-label-icon-color-focus)))}:host([focused])>.chevron,:host(:focus)>.chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)))}:host([focused])>.checkmark,:host(:focus)>.checkmark{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-checkmark-icon-color-focus,var(--spectrum-menu-checkmark-icon-color-focus)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-checkmark-icon-color-focus,var(--spectrum-menu-checkmark-icon-color-focus)))}:host([focused]) .spectrum-Menu-back,:host([focused]){box-shadow:inset calc(var(--mod-menu-item-focus-indicator-width,var(--spectrum-menu-item-focus-indicator-width))*var(--spectrum-menu-item-focus-indicator-direction-scalar,1))0 0 0 var(--highcontrast-menu-item-focus-indicator-color,var(--mod-menu-item-focus-indicator-color,var(--spectrum-menu-item-focus-indicator-color)))}:host:dir(rtl),:host([dir=rtl]){--spectrum-menu-item-focus-indicator-direction-scalar:-1}:host(:is(:active,[active])){background-color:var(--highcontrast-menu-item-background-color-focus,var(--mod-menu-item-background-color-down,var(--spectrum-menu-item-background-color-down)))}:host(:is(:active,[active]))>#label{color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-content-color-down,var(--spectrum-menu-item-label-content-color-down)))}:host(:is(:active,[active]))>[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-description-color-down,var(--spectrum-menu-item-description-color-down)))}:host(:is(:active,[active]))>::slotted([slot=value]){color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-value-color-down,var(--spectrum-menu-item-value-color-down)))}:host(:is(:active,[active]))>.icon:not(.chevron,.checkmark){fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-down,var(--spectrum-menu-item-label-icon-color-down)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-down,var(--spectrum-menu-item-label-icon-color-down)))}:host(:is(:active,[active]))>.chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)))}:host(:is(:active,[active]))>.checkmark{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-checkmark-icon-color-down,var(--spectrum-menu-checkmark-icon-color-down)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-checkmark-icon-color-down,var(--spectrum-menu-checkmark-icon-color-down)))}::slotted([slot=icon]){grid-area:iconArea;align-self:start}.spectrum-Menu-item--collapsible ::slotted([slot=icon]){grid-area:headingIconArea}:host .is-selectableMultiple{align-items:start}.is-selectableMultiple .spectrum-Menu-itemCheckbox{grid-area:checkmarkArea}.checkmark{grid-area:checkmarkArea;align-self:start}.spectrum-Menu-itemSelection{grid-area:selectedArea}#label{font-size:var(--mod-menu-item-label-font-size,var(--spectrum-menu-item-label-font-size));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-item-label-content-color-default,var(--spectrum-menu-item-label-content-color-default)));grid-area:labelArea}::slotted([slot=value]){grid-area:valueArea}.spectrum-Menu-itemActions{grid-area:actionsArea;align-self:start;margin-inline-start:var(--mod-menu-item-label-to-value-area-min-spacing,var(--spectrum-menu-item-label-to-value-area-min-spacing))}.chevron{block-size:var(--spectrum-menu-item-checkmark-height);inline-size:var(--spectrum-menu-item-checkmark-width);grid-area:chevronArea;align-self:center}.spectrum-Menu-item--collapsible .chevron{grid-area:chevronAreaCollapsible}[name=description]::slotted(*){grid-area:descriptionArea}:host([has-submenu]) .chevron{grid-area:chevronAreaDrillIn}.icon:not(.chevron,.checkmark){block-size:var(--mod-menu-item-icon-height,var(--spectrum-menu-item-icon-height));inline-size:var(--mod-menu-item-icon-width,var(--spectrum-menu-item-icon-width))}.checkmark{block-size:var(--mod-menu-item-checkmark-height,var(--spectrum-menu-item-checkmark-height));inline-size:var(--mod-menu-item-checkmark-width,var(--spectrum-menu-item-checkmark-width));margin-block-start:calc(var(--mod-menu-item-top-to-checkmark,var(--spectrum-menu-item-top-to-checkmark)) - var(--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text)));margin-inline-end:var(--mod-menu-item-text-to-control,var(--spectrum-menu-item-text-to-control))}::slotted([slot=icon]){margin-inline-end:var(--mod-menu-item-label-text-to-visual,var(--spectrum-menu-item-label-text-to-visual))}.chevron{margin-inline-end:var(--mod-menu-item-text-to-control,var(--spectrum-menu-item-text-to-control))}[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-default,var(--mod-menu-item-description-color-default,var(--spectrum-menu-item-description-color-default)));font-size:var(--mod-menu-item-description-font-size,var(--spectrum-menu-item-description-font-size));line-height:var(--mod-menu-item-description-line-height,var(--spectrum-menu-item-description-line-height));margin-block-start:var(--mod-menu-item-label-to-description-spacing,var(--spectrum-menu-item-label-to-description-spacing))}[name=description]::slotted(*),#label{hyphens:auto;overflow-wrap:break-word}::slotted([slot=value]){color:var(--highcontrast-menu-item-color-default,var(--mod-menu-item-value-color-default,var(--spectrum-menu-item-value-color-default)));font-size:var(--mod-menu-item-label-font-size,var(--spectrum-menu-item-label-font-size));place-self:start end;margin-inline-start:var(--mod-menu-item-label-to-value-area-min-spacing,var(--spectrum-menu-item-label-to-value-area-min-spacing))}:host([no-wrap]) #label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.spectrum-Menu-item--collapsible.is-open{padding-block-end:0}.spectrum-Menu-item--collapsible.is-open .chevron{transform:rotate(90deg)}:host([focused]) .spectrum-Menu-item--collapsible.is-open,:host(:is(:active,[active])) .spectrum-Menu-item--collapsible.is-open,.spectrum-Menu-item--collapsible.is-open:focus{background-color:var(--highcontrast-menu-item-background-color-default,var(--mod-menu-item-background-color-default,var(--spectrum-menu-item-background-color-default)))}.spectrum-Menu-item--collapsible>::slotted([slot=icon]){padding-block-start:var(--mod-menu-section-header-top-edge-to-text,var(--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text)));padding-block-end:var(--mod-menu-section-header-bottom-edge-to-text,var(--mod-menu-item-bottom-edge-to-text,var(--spectrum-menu-item-bottom-edge-to-text)))}.chevron:dir(rtl),:host([dir=rtl]) .chevron{transform:rotate(-180deg)}:host([has-submenu]) .chevron{fill:var(--highcontrast-menu-item-color-default,var(--mod-menu-drillin-icon-color-default,var(--spectrum-menu-drillin-icon-color-default)));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-drillin-icon-color-default,var(--spectrum-menu-drillin-icon-color-default)));margin-inline-start:var(--mod-menu-item-label-to-value-area-min-spacing,var(--spectrum-menu-item-label-to-value-area-min-spacing));margin-inline-end:0}:host([has-submenu]) .is-open{--spectrum-menu-item-background-color-default:var(--highcontrast-menu-item-selected-background-color,var(--mod-menu-item-background-color-hover,var(--spectrum-menu-item-background-color-hover)))}:host([has-submenu]) .is-open .icon:not(.chevron,.checkmark){fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-hover,var(--spectrum-menu-item-label-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-hover,var(--spectrum-menu-item-label-icon-color-hover)))}:host([has-submenu]) .is-open .chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-hover,var(--spectrum-menu-drillin-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-hover,var(--spectrum-menu-drillin-icon-color-hover)))}:host([has-submenu]) .is-open .checkmark{fill:var(--highcontrast-menu-checkmark-icon-color-default,var(--mod-menu-checkmark-icon-color-hover,var(--spectrum-menu-checkmark-icon-color-hover)));color:var(--highcontrast-menu-checkmark-icon-color-default,var(--mod-menu-checkmark-icon-color-hover,var(--spectrum-menu-checkmark-icon-color-hover)))}:host([has-submenu][focused]) .chevron,:host([has-submenu]:focus) .chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-focus,var(--spectrum-menu-drillin-icon-color-focus)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-focus,var(--spectrum-menu-drillin-icon-color-focus)))}:host([has-submenu]:is(:active,[active])) .chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-down,var(--spectrum-menu-drillin-icon-color-down)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-down,var(--spectrum-menu-drillin-icon-color-down)))}:host([disabled]),:host([aria-disabled=true]){background-color:initial}:host([disabled]) #label,:host([disabled]) ::slotted([slot=value]),:host([aria-disabled=true]) #label,:host([aria-disabled=true]) ::slotted([slot=value]){color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-content-color-disabled,var(--spectrum-menu-item-label-content-color-disabled)))}:host([disabled]) [name=description]::slotted(*),:host([aria-disabled=true]) [name=description]::slotted(*){color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-description-color-disabled,var(--spectrum-menu-item-description-color-disabled)))}:host([disabled]) ::slotted([slot=icon]),:host([aria-disabled=true]) ::slotted([slot=icon]){fill:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)));color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)))}@media (hover:hover){:host(:hover){background-color:var(--highcontrast-menu-item-background-color-focus,var(--mod-menu-item-background-color-hover,var(--spectrum-menu-item-background-color-hover)))}:host(:hover)>#label{color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-content-color-hover,var(--spectrum-menu-item-label-content-color-hover)))}:host(:hover)>[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-description-color-hover,var(--spectrum-menu-item-description-color-hover)))}:host(:hover)>::slotted([slot=value]){color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-value-color-hover,var(--spectrum-menu-item-value-color-hover)))}:host(:hover)>.icon:not(.chevron,.checkmark){fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-hover,var(--spectrum-menu-item-label-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-hover,var(--spectrum-menu-item-label-icon-color-hover)))}:host(:hover)>.chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)))}:host(:hover)>.checkmark{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-checkmark-icon-color-hover,var(--spectrum-menu-checkmark-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-checkmark-icon-color-hover,var(--spectrum-menu-checkmark-icon-color-hover)))}.spectrum-Menu-item--collapsible.is-open:hover{background-color:var(--highcontrast-menu-item-background-color-default,var(--mod-menu-item-background-color-default,var(--spectrum-menu-item-background-color-default)))}:host([has-submenu]:hover) .chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-hover,var(--spectrum-menu-drillin-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-hover,var(--spectrum-menu-drillin-icon-color-hover)))}:host([disabled]:hover),:host([aria-disabled=true]:hover){cursor:default;background-color:initial}:host([disabled]:hover) #label,:host([disabled]:hover) ::slotted([slot=value]),:host([aria-disabled=true]:hover) #label,:host([aria-disabled=true]:hover) ::slotted([slot=value]){color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-content-color-disabled,var(--spectrum-menu-item-label-content-color-disabled)))}:host([disabled]:hover) [name=description]::slotted(*),:host([aria-disabled=true]:hover) [name=description]::slotted(*){color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-description-color-disabled,var(--spectrum-menu-item-description-color-disabled)))}:host([disabled]:hover) ::slotted([slot=icon]),:host([aria-disabled=true]:hover) ::slotted([slot=icon]){fill:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)));color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)))}}.spectrum-Menu-back{padding-inline:var(--mod-menu-back-padding-inline-start,0)var(--mod-menu-back-padding-inline-end,var(--spectrum-menu-item-label-inline-edge-to-content));padding-block:var(--mod-menu-back-padding-block-start,0)var(--mod-menu-back-padding-block-end,0);flex-flow:wrap;align-items:center;display:flex}.spectrum-Menu-backButton{cursor:pointer;background:0 0;border:0;margin:0;padding:0;display:inline-flex}:host([focused]) .spectrum-Menu-backButton{outline:var(--spectrum-focus-indicator-thickness)solid var(--spectrum-focus-indicator-color);outline-offset:calc((var(--spectrum-focus-indicator-thickness) + 1px)*-1)}.spectrum-Menu-backHeading{color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-heading-color,var(--spectrum-menu-section-header-color)));font-size:var(--mod-menu-section-header-font-size,var(--spectrum-menu-section-header-font-size));font-weight:var(--mod-menu-section-header-font-weight,var(--spectrum-menu-section-header-font-weight));line-height:var(--mod-menu-section-header-line-height,var(--spectrum-menu-section-header-line-height));display:block}.spectrum-Menu-backIcon{margin-block:var(--mod-menu-back-icon-margin-block,var(--spectrum-menu-back-icon-margin));margin-inline:var(--mod-menu-back-icon-margin-inline,var(--spectrum-menu-back-icon-margin));fill:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default))}:host([hidden]){display:none}:host([disabled]){pointer-events:none}:host([disabled]) [name=value]::slotted(*){color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)))}:host([has-submenu][disabled]) .chevron{color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)))}#button{position:absolute;inset:0}:host([dir=ltr]) [icon-only]::slotted(:last-of-type){margin-right:auto}:host([dir=rtl]) [icon-only]::slotted(:last-of-type){margin-left:auto}@media (forced-colors:active){:host{forced-color-adjust:none}}::slotted([slot=submenu]){width:max-content;max-width:100%}:host([no-wrap]) #label{display:block}
`;
var menu_item_css_default = o;

// node_modules/@spectrum-web-components/menu/src/MenuItem.js
import C from "/libs/features/spectrum-web-components/dist/icons/checkmark.js";

// node_modules/@lit-labs/observers/mutation-controller.js
var t2 = class {
  constructor(t3, { target: s, config: i, callback: h2, skipInitial: o3 }) {
    this.t = /* @__PURE__ */ new Set(), this.o = false, this.i = false, this.h = t3, null !== s && this.t.add(s ?? t3), this.l = i, this.o = o3 ?? this.o, this.callback = h2, window.MutationObserver ? (this.u = new MutationObserver((t4) => {
      this.handleChanges(t4), this.h.requestUpdate();
    }), t3.addController(this)) : console.warn("MutationController error: browser does not support MutationObserver.");
  }
  handleChanges(t3) {
    this.value = this.callback?.(t3, this.u);
  }
  hostConnected() {
    for (const t3 of this.t)
      this.observe(t3);
  }
  hostDisconnected() {
    this.disconnect();
  }
  async hostUpdated() {
    const t3 = this.u.takeRecords();
    (t3.length || !this.o && this.i) && this.handleChanges(t3), this.i = false;
  }
  observe(t3) {
    this.t.add(t3), this.u.observe(t3, this.l), this.i = true, this.h.requestUpdate();
  }
  disconnect() {
    this.u.disconnect();
  }
};

// node_modules/@spectrum-web-components/menu/src/MenuItem.js
import { SlottableRequestEvent as T } from "/libs/features/spectrum-web-components/dist/overlay.js";
var h = Object.defineProperty;
var p2 = Object.getOwnPropertyDescriptor;
var r = (a2, s, e3, t3) => {
  for (var n = t3 > 1 ? void 0 : t3 ? p2(s, e3) : s, i = a2.length - 1, d; i >= 0; i--)
    (d = a2[i]) && (n = (t3 ? d(s, e3, n) : d(n)) || n);
  return t3 && n && h(s, e3, n), n;
};
var L = 100;
var MenuItemAddedOrUpdatedEvent = class extends Event {
  constructor(e3) {
    super("sp-menu-item-added-or-updated", { bubbles: true, composed: true });
    this.menuCascade = /* @__PURE__ */ new WeakMap();
    this.clear(e3);
  }
  clear(e3) {
    this._item = e3, this.currentAncestorWithSelects = void 0, e3.menuData = { cleanupSteps: [], focusRoot: void 0, selectionRoot: void 0, parentMenu: void 0 }, this.menuCascade = /* @__PURE__ */ new WeakMap();
  }
  get item() {
    return this._item;
  }
};
var MenuItem = class extends f2(v2(m2(E, '[slot="icon"]'))) {
  constructor() {
    super();
    this.active = false;
    this.dependencyManager = new S2(this);
    this.focused = false;
    this.selected = false;
    this._value = "";
    this.hasSubmenu = false;
    this.noWrap = false;
    this.open = false;
    this.handleSlottableRequest = (e3) => {
      var t3;
      (t3 = this.submenuElement) == null || t3.dispatchEvent(new T(e3.name, e3.data));
    };
    this.proxyFocus = () => {
      this.focus();
    };
    this.handleBeforetoggle = (e3) => {
      e3.newState === "closed" && (this.open = true, this.overlayElement.manuallyKeepOpen(), this.overlayElement.removeEventListener("beforetoggle", this.handleBeforetoggle));
    };
    this.recentlyLeftChild = false;
    this.willDispatchUpdate = false;
    this.menuData = { focusRoot: void 0, parentMenu: void 0, selectionRoot: void 0, cleanupSteps: [] };
    this.addEventListener("click", this.handleClickCapture, { capture: true }), new t2(this, { config: { characterData: true, childList: true, subtree: true }, callback: (e3) => {
      e3.every((n) => n.target.slot === "submenu") || this.breakItemChildrenCache();
    } });
  }
  static get styles() {
    return [menu_item_css_default, C, y];
  }
  get value() {
    return this._value || this.itemText;
  }
  set value(e3) {
    e3 !== this._value && (this._value = e3 || "", this._value ? this.setAttribute("value", this._value) : this.removeAttribute("value"));
  }
  get itemText() {
    return this.itemChildren.content.reduce((e3, t3) => e3 + (t3.textContent || "").trim(), "");
  }
  get focusElement() {
    return this;
  }
  get hasIcon() {
    return this.slotContentIsPresent;
  }
  get itemChildren() {
    if (!this.iconSlot || !this.contentSlot)
      return { icon: [], content: [] };
    if (this._itemChildren)
      return this._itemChildren;
    const e3 = this.iconSlot.assignedElements().map((n) => {
      const i = n.cloneNode(true);
      return i.removeAttribute("slot"), i.classList.toggle("icon"), i;
    }), t3 = this.contentSlot.assignedNodes().map((n) => n.cloneNode(true));
    return this._itemChildren = { icon: e3, content: t3 }, this._itemChildren;
  }
  click() {
    this.disabled || this.shouldProxyClick() || super.click();
  }
  handleClickCapture(e3) {
    if (this.disabled)
      return e3.preventDefault(), e3.stopImmediatePropagation(), e3.stopPropagation(), false;
  }
  shouldProxyClick() {
    let e3 = false;
    return this.anchorElement && (this.anchorElement.click(), e3 = true), e3;
  }
  breakItemChildrenCache() {
    this._itemChildren = void 0, this.triggerUpdate();
  }
  renderSubmenu() {
    const e3 = l2`
            <slot
                name="submenu"
                @slotchange=${this.manageSubmenu}
                @sp-menu-item-added-or-updated=${{ handleEvent: (t3) => {
      t3.clear(t3.item);
    }, capture: true }}
                @focusin=${(t3) => t3.stopPropagation()}
            ></slot>
        `;
    return this.hasSubmenu ? (this.dependencyManager.add("sp-overlay"), this.dependencyManager.add("sp-popover"), import("/libs/features/spectrum-web-components/dist/overlay.js"), import("/libs/features/spectrum-web-components/dist/popover.js"), l2`
            <sp-overlay
                .triggerElement=${this}
                ?disabled=${!this.hasSubmenu}
                ?open=${this.hasSubmenu && this.open && this.dependencyManager.loaded}
                .placement=${this.isLTR ? "right-start" : "left-start"}
                .offset=${[-10, -5]}
                .type=${"auto"}
                @close=${(t3) => t3.stopPropagation()}
                @slottable-request=${this.handleSlottableRequest}
            >
                <sp-popover
                    @change=${(t3) => {
      this.handleSubmenuChange(t3), this.open = false;
    }}
                    @pointerenter=${this.handleSubmenuPointerenter}
                    @pointerleave=${this.handleSubmenuPointerleave}
                    @sp-menu-item-added-or-updated=${(t3) => t3.stopPropagation()}
                >
                    ${e3}
                </sp-popover>
            </sp-overlay>
            <sp-icon-chevron100
                class="spectrum-UIIcon-ChevronRight100 chevron icon"
            ></sp-icon-chevron100>
        `) : e3;
  }
  render() {
    return l2`
            ${this.selected ? l2`
                      <sp-icon-checkmark100
                          id="selected"
                          class="spectrum-UIIcon-Checkmark100 
                            icon 
                            checkmark
                            ${this.hasIcon ? "checkmark--withAdjacentIcon" : ""}"
                      ></sp-icon-checkmark100>
                  ` : c}
            <slot name="icon"></slot>
            <div id="label">
                <slot id="slot"></slot>
            </div>
            <slot name="description"></slot>
            <slot name="value"></slot>
            ${this.href && this.href.length > 0 ? super.renderAnchor({ id: "button", ariaHidden: true, className: "button anchor hidden" }) : c}
            ${this.renderSubmenu()}
        `;
  }
  manageSubmenu(e3) {
    this.submenuElement = e3.target.assignedElements({ flatten: true })[0], this.hasSubmenu = !!this.submenuElement, this.hasSubmenu && this.setAttribute("aria-haspopup", "true");
  }
  handlePointerdown(e3) {
    e3.target === this && this.hasSubmenu && this.open && (this.addEventListener("focus", this.handleSubmenuFocus, { once: true }), this.overlayElement.addEventListener("beforetoggle", this.handleBeforetoggle));
  }
  firstUpdated(e3) {
    super.firstUpdated(e3), this.setAttribute("tabindex", "-1"), this.addEventListener("pointerdown", this.handlePointerdown), this.addEventListener("pointerenter", this.closeOverlaysForRoot), this.hasAttribute("id") || (this.id = `sp-menu-item-${b2()}`);
  }
  closeOverlaysForRoot() {
    var e3;
    this.open || (e3 = this.menuData.parentMenu) == null || e3.closeDescendentOverlays();
  }
  handleSubmenuClick(e3) {
    e3.composedPath().includes(this.overlayElement) || this.openOverlay();
  }
  handleSubmenuFocus() {
    requestAnimationFrame(() => {
      this.overlayElement.open = this.open;
    });
  }
  handlePointerenter() {
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout), delete this.leaveTimeout;
      return;
    }
    this.openOverlay();
  }
  handlePointerleave() {
    this.open && !this.recentlyLeftChild && (this.leaveTimeout = setTimeout(() => {
      delete this.leaveTimeout, this.open = false;
    }, L));
  }
  handleSubmenuChange(e3) {
    var t3;
    e3.stopPropagation(), (t3 = this.menuData.selectionRoot) == null || t3.selectOrToggleItem(this);
  }
  handleSubmenuPointerenter() {
    this.recentlyLeftChild = true;
  }
  async handleSubmenuPointerleave() {
    requestAnimationFrame(() => {
      this.recentlyLeftChild = false;
    });
  }
  handleSubmenuOpen(e3) {
    this.focused = false;
    const t3 = e3.composedPath().find((n) => n !== this.overlayElement && n.localName === "sp-overlay");
    this.overlayElement.parentOverlayToForceClose = t3;
  }
  cleanup() {
    this.open = false, this.active = false;
  }
  async openOverlay() {
    !this.hasSubmenu || this.open || this.disabled || (this.open = true, this.active = true, this.setAttribute("aria-expanded", "true"), this.addEventListener("sp-closed", this.cleanup, { once: true }));
  }
  updateAriaSelected() {
    const e3 = this.getAttribute("role");
    e3 === "option" ? this.setAttribute("aria-selected", this.selected ? "true" : "false") : (e3 === "menuitemcheckbox" || e3 === "menuitemradio") && this.setAttribute("aria-checked", this.selected ? "true" : "false");
  }
  setRole(e3) {
    this.setAttribute("role", e3), this.updateAriaSelected();
  }
  updated(e3) {
    var t3, n;
    if (super.updated(e3), e3.has("label") && (this.label || typeof e3.get("label") != "undefined") && this.setAttribute("aria-label", this.label || ""), e3.has("active") && (this.active || typeof e3.get("active") != "undefined") && this.active && ((t3 = this.menuData.selectionRoot) == null || t3.closeDescendentOverlays()), this.anchorElement && (this.anchorElement.addEventListener("focus", this.proxyFocus), this.anchorElement.tabIndex = -1), e3.has("selected") && this.updateAriaSelected(), e3.has("hasSubmenu") && (this.hasSubmenu || typeof e3.get("hasSubmenu") != "undefined"))
      if (this.hasSubmenu) {
        this.abortControllerSubmenu = new AbortController();
        const i = { signal: this.abortControllerSubmenu.signal };
        this.addEventListener("click", this.handleSubmenuClick, i), this.addEventListener("pointerenter", this.handlePointerenter, i), this.addEventListener("pointerleave", this.handlePointerleave, i), this.addEventListener("sp-opened", this.handleSubmenuOpen, i);
      } else
        (n = this.abortControllerSubmenu) == null || n.abort();
  }
  connectedCallback() {
    super.connectedCallback(), this.triggerUpdate();
  }
  disconnectedCallback() {
    this.menuData.cleanupSteps.forEach((e3) => e3(this)), this.menuData = { focusRoot: void 0, parentMenu: void 0, selectionRoot: void 0, cleanupSteps: [] }, super.disconnectedCallback();
  }
  async triggerUpdate() {
    this.willDispatchUpdate || (this.willDispatchUpdate = true, await new Promise((e3) => requestAnimationFrame(e3)), this.dispatchUpdate());
  }
  dispatchUpdate() {
    this.isConnected && (this.dispatchEvent(new MenuItemAddedOrUpdatedEvent(this)), this.willDispatchUpdate = false);
  }
};
r([o2({ type: Boolean, reflect: true })], MenuItem.prototype, "active", 2), r([o2({ type: Boolean, reflect: true })], MenuItem.prototype, "focused", 2), r([o2({ type: Boolean, reflect: true })], MenuItem.prototype, "selected", 2), r([o2({ type: String })], MenuItem.prototype, "value", 1), r([o2({ type: Boolean, reflect: true, attribute: "has-submenu" })], MenuItem.prototype, "hasSubmenu", 2), r([u("slot:not([name])")], MenuItem.prototype, "contentSlot", 2), r([u('slot[name="icon"]')], MenuItem.prototype, "iconSlot", 2), r([o2({ type: Boolean, reflect: true, attribute: "no-wrap", hasChanged() {
  return false;
} })], MenuItem.prototype, "noWrap", 2), r([u(".anchor")], MenuItem.prototype, "anchorElement", 2), r([u("sp-overlay")], MenuItem.prototype, "overlayElement", 2), r([o2({ type: Boolean, reflect: true })], MenuItem.prototype, "open", 2);

// node_modules/@spectrum-web-components/menu/sp-menu-item.js
import { defineElement as m3 } from "/libs/features/spectrum-web-components/dist/base.js";
m3("sp-menu-item", MenuItem);
//# sourceMappingURL=menu.js.map
