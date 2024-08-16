// node_modules/@spectrum-web-components/reactive-controllers/src/MatchMedia.js
var DARK_MODE = "(prefers-color-scheme: dark)";
var IS_MOBILE = "(max-width: 700px) and (hover: none) and (pointer: coarse), (max-height: 700px) and (hover: none) and (pointer: coarse)";
var MatchMediaController = class {
  constructor(e, t) {
    this.key = Symbol("match-media-key");
    this.matches = false;
    this.host = e, this.host.addController(this), this.media = window.matchMedia(t), this.matches = this.media.matches, this.onChange = this.onChange.bind(this), e.addController(this);
  }
  hostConnected() {
    var e;
    (e = this.media) == null || e.addEventListener("change", this.onChange);
  }
  hostDisconnected() {
    var e;
    (e = this.media) == null || e.removeEventListener("change", this.onChange);
  }
  onChange(e) {
    this.matches !== e.matches && (this.matches = e.matches, this.host.requestUpdate(this.key, !this.matches));
  }
};

// node_modules/@spectrum-web-components/reactive-controllers/src/FocusGroup.js
function o(i, e, t) {
  return typeof i === e ? () => i : typeof i == "function" ? i : t;
}
var FocusGroupController = class {
  constructor(e, { direction: t, elementEnterAction: n, elements: s, focusInIndex: r, isFocusableElement: h, listenerScope: c } = { elements: () => [] }) {
    this._currentIndex = -1;
    this.prevIndex = -1;
    this._direction = () => "both";
    this.directionLength = 5;
    this.elementEnterAction = (e2) => {
    };
    this._focused = false;
    this._focusInIndex = (e2) => 0;
    this.isFocusableElement = (e2) => true;
    this._listenerScope = () => this.host;
    this.offset = 0;
    this.recentlyConnected = false;
    this.handleFocusin = (e2) => {
      if (!this.isEventWithinListenerScope(e2))
        return;
      this.isRelatedTargetOrContainAnElement(e2) && this.hostContainsFocus();
      const t2 = e2.composedPath();
      let n2 = -1;
      t2.find((s2) => (n2 = this.elements.indexOf(s2), n2 !== -1)), this.prevIndex = this.currentIndex, this.currentIndex = n2 > -1 ? n2 : this.currentIndex;
    };
    this.handleFocusout = (e2) => {
      this.isRelatedTargetOrContainAnElement(e2) && this.hostNoLongerContainsFocus();
    };
    this.handleKeydown = (e2) => {
      if (!this.acceptsEventCode(e2.code) || e2.defaultPrevented)
        return;
      let t2 = 0;
      switch (this.prevIndex = this.currentIndex, e2.code) {
        case "ArrowRight":
          t2 += 1;
          break;
        case "ArrowDown":
          t2 += this.direction === "grid" ? this.directionLength : 1;
          break;
        case "ArrowLeft":
          t2 -= 1;
          break;
        case "ArrowUp":
          t2 -= this.direction === "grid" ? this.directionLength : 1;
          break;
        case "End":
          this.currentIndex = 0, t2 -= 1;
          break;
        case "Home":
          this.currentIndex = this.elements.length - 1, t2 += 1;
          break;
      }
      e2.preventDefault(), this.direction === "grid" && this.currentIndex + t2 < 0 ? this.currentIndex = 0 : this.direction === "grid" && this.currentIndex + t2 > this.elements.length - 1 ? this.currentIndex = this.elements.length - 1 : this.setCurrentIndexCircularly(t2), this.elementEnterAction(this.elements[this.currentIndex]), this.focus();
    };
    this.mutationObserver = new MutationObserver(() => {
      this.handleItemMutation();
    }), this.host = e, this.host.addController(this), this._elements = s, this.isFocusableElement = h || this.isFocusableElement, this._direction = o(t, "string", this._direction), this.elementEnterAction = n || this.elementEnterAction, this._focusInIndex = o(r, "number", this._focusInIndex), this._listenerScope = o(c, "object", this._listenerScope);
  }
  get currentIndex() {
    return this._currentIndex === -1 && (this._currentIndex = this.focusInIndex), this._currentIndex - this.offset;
  }
  set currentIndex(e) {
    this._currentIndex = e + this.offset;
  }
  get direction() {
    return this._direction();
  }
  get elements() {
    return this.cachedElements || (this.cachedElements = this._elements()), this.cachedElements;
  }
  set focused(e) {
    e !== this.focused && (this._focused = e);
  }
  get focused() {
    return this._focused;
  }
  get focusInElement() {
    return this.elements[this.focusInIndex];
  }
  get focusInIndex() {
    return this._focusInIndex(this.elements);
  }
  isEventWithinListenerScope(e) {
    return this._listenerScope() === this.host ? true : e.composedPath().includes(this._listenerScope());
  }
  handleItemMutation() {
    if (this._currentIndex == -1 || this.elements.length <= this._elements().length)
      return;
    const e = this.elements[this.currentIndex];
    if (this.clearElementCache(), this.elements.includes(e))
      return;
    const t = this.currentIndex !== this.elements.length, n = t ? 1 : -1;
    t && this.setCurrentIndexCircularly(-1), this.setCurrentIndexCircularly(n), this.focus();
  }
  update({ elements: e } = { elements: () => [] }) {
    this.unmanage(), this._elements = e, this.clearElementCache(), this.manage();
  }
  focus(e) {
    var s;
    const t = this.elements;
    if (!t.length)
      return;
    let n = t[this.currentIndex];
    (!n || !this.isFocusableElement(n)) && (this.setCurrentIndexCircularly(1), n = t[this.currentIndex]), n && this.isFocusableElement(n) && ((s = t[this.prevIndex]) == null || s.setAttribute("tabindex", "-1"), n.tabIndex = 0, n.focus(e));
  }
  clearElementCache(e = 0) {
    this.mutationObserver.disconnect(), delete this.cachedElements, this.offset = e, requestAnimationFrame(() => {
      this.elements.forEach((t) => {
        this.mutationObserver.observe(t, { attributes: true });
      });
    });
  }
  setCurrentIndexCircularly(e) {
    const { length: t } = this.elements;
    let n = t;
    this.prevIndex = this.currentIndex;
    let s = (t + this.currentIndex + e) % t;
    for (; n && this.elements[s] && !this.isFocusableElement(this.elements[s]); )
      s = (t + s + e) % t, n -= 1;
    this.currentIndex = s;
  }
  hostContainsFocus() {
    this.host.addEventListener("focusout", this.handleFocusout), this.host.addEventListener("keydown", this.handleKeydown), this.focused = true;
  }
  hostNoLongerContainsFocus() {
    this.host.addEventListener("focusin", this.handleFocusin), this.host.removeEventListener("focusout", this.handleFocusout), this.host.removeEventListener("keydown", this.handleKeydown), this.focused = false;
  }
  isRelatedTargetOrContainAnElement(e) {
    const t = e.relatedTarget, n = this.elements.includes(t), s = this.elements.some((r) => r.contains(t));
    return !(n || s);
  }
  acceptsEventCode(e) {
    if (e === "End" || e === "Home")
      return true;
    switch (this.direction) {
      case "horizontal":
        return e === "ArrowLeft" || e === "ArrowRight";
      case "vertical":
        return e === "ArrowUp" || e === "ArrowDown";
      case "both":
      case "grid":
        return e.startsWith("Arrow");
    }
  }
  manage() {
    this.addEventListeners();
  }
  unmanage() {
    this.removeEventListeners();
  }
  addEventListeners() {
    this.host.addEventListener("focusin", this.handleFocusin);
  }
  removeEventListeners() {
    this.host.removeEventListener("focusin", this.handleFocusin), this.host.removeEventListener("focusout", this.handleFocusout), this.host.removeEventListener("keydown", this.handleKeydown);
  }
  hostConnected() {
    this.recentlyConnected = true, this.addEventListeners();
  }
  hostDisconnected() {
    this.mutationObserver.disconnect(), this.removeEventListeners();
  }
  hostUpdated() {
    this.recentlyConnected && (this.recentlyConnected = false, this.elements.forEach((e) => {
      this.mutationObserver.observe(e, { attributes: true });
    }));
  }
};

// node_modules/@spectrum-web-components/reactive-controllers/src/RovingTabindex.js
var RovingTabindexController = class extends FocusGroupController {
  constructor() {
    super(...arguments);
    this.managed = true;
    this.manageIndexesAnimationFrame = 0;
  }
  set focused(e) {
    e !== this.focused && (super.focused = e, this.manageTabindexes());
  }
  get focused() {
    return super.focused;
  }
  clearElementCache(e = 0) {
    cancelAnimationFrame(this.manageIndexesAnimationFrame), super.clearElementCache(e), this.managed && (this.manageIndexesAnimationFrame = requestAnimationFrame(() => this.manageTabindexes()));
  }
  manageTabindexes() {
    this.focused ? this.updateTabindexes(() => ({ tabIndex: -1 })) : this.updateTabindexes((e) => ({ removeTabIndex: e.contains(this.focusInElement) && e !== this.focusInElement, tabIndex: e === this.focusInElement ? 0 : -1 }));
  }
  updateTabindexes(e) {
    this.elements.forEach((a) => {
      const { tabIndex: t, removeTabIndex: s } = e(a);
      if (!s) {
        a.tabIndex = t;
        return;
      }
      a.removeAttribute("tabindex");
      const n = a;
      n.requestUpdate && n.requestUpdate();
    });
  }
  manage() {
    this.managed = true, this.manageTabindexes(), super.manage();
  }
  unmanage() {
    this.managed = false, this.updateTabindexes(() => ({ tabIndex: 0 })), super.unmanage();
  }
  hostUpdated() {
    super.hostUpdated(), this.host.hasUpdated || this.manageTabindexes();
  }
};

// node_modules/@spectrum-web-components/reactive-controllers/src/ElementResolution.js
var elementResolverUpdatedSymbol = Symbol("element resolver updated");
var ElementResolutionController = class {
  constructor(e, { selector: t } = { selector: "" }) {
    this._element = null;
    this._selector = "";
    this.mutationCallback = (e2) => {
      let t2 = false;
      e2.forEach((s) => {
        if (!t2) {
          if (s.type === "childList") {
            const r = this.element && [...s.removedNodes].includes(this.element), l = !!this.selector && [...s.addedNodes].some(this.elementIsSelected);
            t2 = t2 || r || l;
          }
          if (s.type === "attributes") {
            const r = s.target === this.element, l = !!this.selector && this.elementIsSelected(s.target);
            t2 = t2 || r || l;
          }
        }
      }), t2 && this.resolveElement();
    };
    this.elementIsSelected = (e2) => {
      var t2;
      return this.selectorIsId ? (e2 == null ? void 0 : e2.id) === this.selectorAsId : (t2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : t2.call(e2, this.selector);
    };
    this.host = e, this.selector = t, this.observer = new MutationObserver(this.mutationCallback), this.host.addController(this);
  }
  get element() {
    return this._element;
  }
  set element(e) {
    if (e === this.element)
      return;
    const t = this.element;
    this._element = e, this.host.requestUpdate(elementResolverUpdatedSymbol, t);
  }
  get selector() {
    return this._selector;
  }
  set selector(e) {
    e !== this.selector && (this.releaseElement(), this._selector = e, this.resolveElement());
  }
  get selectorAsId() {
    return this.selector.slice(1);
  }
  get selectorIsId() {
    return !!this.selector && this.selector.startsWith("#");
  }
  hostConnected() {
    this.resolveElement(), this.observer.observe(this.host.getRootNode(), { subtree: true, childList: true, attributes: true });
  }
  hostDisconnected() {
    this.releaseElement(), this.observer.disconnect();
  }
  resolveElement() {
    if (!this.selector) {
      this.releaseElement();
      return;
    }
    const e = this.host.getRootNode();
    this.element = this.selectorIsId ? e.getElementById(this.selectorAsId) : e.querySelector(this.selector);
  }
  releaseElement() {
    this.element = null;
  }
};

// node_modules/@spectrum-web-components/reactive-controllers/src/DependencyManger.js
var dependencyManagerLoadedSymbol = Symbol("dependency manager loaded");
var DependencyManagerController = class {
  constructor(e) {
    this.dependencies = {};
    this._loaded = false;
    this.host = e;
  }
  get loaded() {
    return this._loaded;
  }
  set loaded(e) {
    e !== this.loaded && (this._loaded = e, this.host.requestUpdate(dependencyManagerLoadedSymbol, !this.loaded));
  }
  add(e, o2) {
    const t = !!o2 || !!customElements.get(e) || this.dependencies[e];
    t || customElements.whenDefined(e).then(() => {
      this.add(e, true);
    }), this.dependencies = { ...this.dependencies, [e]: t }, this.loaded = Object.values(this.dependencies).every((d) => d);
  }
};
export {
  DARK_MODE,
  DependencyManagerController,
  ElementResolutionController,
  IS_MOBILE,
  MatchMediaController,
  RovingTabindexController,
  dependencyManagerLoadedSymbol,
  elementResolverUpdatedSymbol
};
//# sourceMappingURL=reactive-controllers.js.map
