var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/base.js
var base_exports = {};
__export(base_exports, {
  ElementSizes: () => ElementSizes,
  SizedMixin: () => SizedMixin,
  SpectrumElement: () => SpectrumElement,
  SpectrumMixin: () => SpectrumMixin,
  conditionAttributeWithId: () => conditionAttributeWithId,
  conditionAttributeWithoutId: () => conditionAttributeWithoutId,
  defineElement: () => defineElement,
  streamingListener: () => streamingListener,
  version: () => version
});

// src/polyfills/array.prototype.at.js
function at(n) {
  n = Math.trunc(n) || 0;
  if (n < 0)
    n += this.length;
  if (n < 0 || n >= this.length)
    return void 0;
  return this[n];
}
var TypedArray = Reflect.getPrototypeOf(Int8Array);
for (const C of [Array, String, TypedArray]) {
  Object.defineProperty(
    C.prototype,
    "at",
    {
      value: at,
      writable: true,
      enumerable: false,
      configurable: true
    }
  );
}

// node_modules/@spectrum-web-components/base/src/condition-attribute-with-id.js
function conditionAttributeWithoutId(t, i2, n) {
  const e = t.getAttribute(i2);
  let r = e ? e.split(/\s+/) : [];
  r = r.filter((s) => !n.find((o2) => s === o2)), r.length ? t.setAttribute(i2, r.join(" ")) : t.removeAttribute(i2);
}
function conditionAttributeWithId(t, i2, n) {
  const e = Array.isArray(n) ? n : [n], r = t.getAttribute(i2), s = r ? r.split(/\s+/) : [];
  return e.every((d) => s.indexOf(d) > -1) ? () => {
  } : (s.push(...e), t.setAttribute(i2, s.join(" ")), () => conditionAttributeWithoutId(t, i2, e));
}

// node_modules/@spectrum-web-components/base/src/define-element.js
function defineElement(e, n) {
  window.__swc, customElements.define(e, n);
}

// node_modules/@spectrum-web-components/base/src/sizedMixin.js
import { property as S } from "/libs/deps/lit-all.min.js";
var a = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var m = (r, i2, s, t) => {
  for (var e = t > 1 ? void 0 : t ? u(i2, s) : i2, l = r.length - 1, o2; l >= 0; l--)
    (o2 = r[l]) && (e = (t ? o2(i2, s, e) : o2(e)) || e);
  return t && e && a(i2, s, e), e;
};
var ElementSizes = { xxs: "xxs", xs: "xs", s: "s", m: "m", l: "l", xl: "xl", xxl: "xxl" };
function SizedMixin(r, { validSizes: i2 = ["s", "m", "l", "xl"], noDefaultSize: s, defaultSize: t = "m" } = {}) {
  class e extends r {
    constructor() {
      super(...arguments);
      this._size = t;
    }
    get size() {
      return this._size || t;
    }
    set size(n) {
      const p2 = s ? null : t, z = n && n.toLocaleLowerCase(), x = i2.includes(z) ? z : p2;
      if (x && this.setAttribute("size", x), this._size === x)
        return;
      const c2 = this._size;
      this._size = x, this.requestUpdate("size", c2);
    }
    update(n) {
      !this.hasAttribute("size") && !s && this.setAttribute("size", this.size), super.update(n);
    }
  }
  return m([S({ type: String })], e.prototype, "size", 1), e;
}

// node_modules/@spectrum-web-components/base/src/streaming-listener.js
import { nothing as a2 } from "/libs/deps/lit-all.min.js";
import { AsyncDirective as o, directive as h } from "/libs/deps/lit-all.min.js";
var i = ["", () => {
}];
var m2 = class extends o {
  constructor() {
    super(...arguments);
    this.start = i;
    this.streamInside = i;
    this.end = i;
    this.streamOutside = i;
    this.state = "off";
    this.handleStart = (e) => {
      this.clearStream(), this.callHandler(this.start[1], e), !e.defaultPrevented && (this.removeListeners(), this.addListeners("on"));
    };
    this.handleInside = (e) => {
      this.handleStream(this.streamInside[1], e);
    };
    this.handleEnd = (e) => {
      this.clearStream(), this.callHandler(this.end[1], e), this.removeListeners(), this.addListeners("off");
    };
    this.handleOutside = (e) => {
      this.handleStream(this.streamOutside[1], e);
    };
  }
  render(e) {
    return a2;
  }
  update(e, [{ start: t, end: s, streamInside: r = i, streamOutside: d = i }]) {
    var n;
    this.element !== e.element && (this.element = e.element, this.removeListeners()), this.host = ((n = e.options) == null ? void 0 : n.host) || this.element, this.start = t, this.end = s, this.streamInside = r, this.streamOutside = d, this.addListeners();
  }
  addListeners(e) {
    this.state = e || this.state, this.state === "off" ? (this.addListener(this.streamOutside[0], this.handleOutside), this.addListener(this.start[0], this.handleStart)) : this.state === "on" && (this.addListener(this.streamInside[0], this.handleInside), this.addListener(this.end[0], this.handleEnd));
  }
  callHandler(e, t) {
    typeof e == "function" ? e.call(this.host, t) : e.handleEvent(t);
  }
  handleStream(e, t) {
    this.stream || (this.callHandler(e, t), this.stream = requestAnimationFrame(() => {
      this.stream = void 0;
    }));
  }
  clearStream() {
    this.stream != null && (cancelAnimationFrame(this.stream), this.stream = void 0);
  }
  addListener(e, t) {
    Array.isArray(e) ? e.map((s) => {
      this.element.addEventListener(s, t);
    }) : this.element.addEventListener(e, t);
  }
  removeListener(e, t) {
    Array.isArray(e) ? e.map((s) => {
      this.element.removeEventListener(s, t);
    }) : this.element.removeEventListener(e, t);
  }
  removeListeners() {
    this.removeListener(this.start[0], this.handleStart), this.removeListener(this.streamInside[0], this.handleInside), this.removeListener(this.end[0], this.handleEnd), this.removeListener(this.streamOutside[0], this.handleOutside);
  }
  disconnected() {
    this.removeListeners();
  }
  reconnected() {
    this.addListeners();
  }
};
var streamingListener = h(m2);

// node_modules/@spectrum-web-components/base/src/version.js
var version = "0.46.0";

// node_modules/@spectrum-web-components/base/src/index.js
var src_exports = {};
__export(src_exports, {
  ElementSizes: () => ElementSizes,
  SizedMixin: () => SizedMixin,
  SpectrumElement: () => SpectrumElement,
  SpectrumMixin: () => SpectrumMixin
});

// node_modules/@spectrum-web-components/base/src/Base.js
import { LitElement as m3 } from "/libs/deps/lit-all.min.js";
var c = /* @__PURE__ */ new Set();
var g = () => {
  const s = document.documentElement.dir === "rtl" ? document.documentElement.dir : "ltr";
  c.forEach((o2) => {
    o2.setAttribute("dir", s);
  });
};
var w = new MutationObserver(g);
w.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
var p = (s) => typeof s.startManagingContentDirection != "undefined" || s.tagName === "SP-THEME";
function SpectrumMixin(s) {
  class o2 extends s {
    get isLTR() {
      return this.dir === "ltr";
    }
    hasVisibleFocusInTree() {
      const n = ((r = document) => {
        var l;
        let t = r.activeElement;
        for (; t != null && t.shadowRoot && t.shadowRoot.activeElement; )
          t = t.shadowRoot.activeElement;
        const a3 = t ? [t] : [];
        for (; t; ) {
          const i2 = t.assignedSlot || t.parentElement || ((l = t.getRootNode()) == null ? void 0 : l.host);
          i2 && a3.push(i2), t = i2;
        }
        return a3;
      })(this.getRootNode())[0];
      if (!n)
        return false;
      try {
        return n.matches(":focus-visible") || n.matches(".focus-visible");
      } catch (r) {
        return n.matches(".focus-visible");
      }
    }
    connectedCallback() {
      if (!this.hasAttribute("dir")) {
        let e = this.assignedSlot || this.parentNode;
        for (; e !== document.documentElement && !p(e); )
          e = e.assignedSlot || e.parentNode || e.host;
        if (this.dir = e.dir === "rtl" ? e.dir : this.dir || "ltr", e === document.documentElement)
          c.add(this);
        else {
          const { localName: n } = e;
          n.search("-") > -1 && !customElements.get(n) ? customElements.whenDefined(n).then(() => {
            e.startManagingContentDirection(this);
          }) : e.startManagingContentDirection(this);
        }
        this._dirParent = e;
      }
      super.connectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._dirParent && (this._dirParent === document.documentElement ? c.delete(this) : this._dirParent.stopManagingContentDirection(this), this.removeAttribute("dir"));
    }
  }
  return o2;
}
var SpectrumElement = class extends SpectrumMixin(m3) {
};
SpectrumElement.VERSION = version;

// node_modules/@spectrum-web-components/base/src/index.js
__reExport(src_exports, lit_star);
import * as lit_star from "/libs/deps/lit-all.min.js";

// src/base.js
__reExport(base_exports, src_exports);
export * from "/libs/deps/lit-all.min.js";
export {
  ElementSizes,
  SizedMixin,
  SpectrumElement,
  SpectrumMixin,
  conditionAttributeWithId,
  conditionAttributeWithoutId,
  defineElement,
  streamingListener,
  version
};
//# sourceMappingURL=base.js.map
