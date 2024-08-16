var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/@spectrum-web-components/overlay/src/overlay-timer.js
var OverlayTimer;
var init_overlay_timer = __esm({
  "node_modules/@spectrum-web-components/overlay/src/overlay-timer.js"() {
    "use strict";
    OverlayTimer = class {
      constructor(e4 = {}) {
        this.warmUpDelay = 1e3;
        this.coolDownDelay = 1e3;
        this.isWarm = false;
        this.timeout = 0;
        Object.assign(this, e4);
      }
      async openTimer(e4) {
        if (this.cancelCooldownTimer(), !this.component || e4 !== this.component)
          return this.component && (this.close(this.component), this.cancelCooldownTimer()), this.component = e4, this.isWarm ? false : (this.promise = new Promise((o3) => {
            this.resolve = o3, this.timeout = window.setTimeout(() => {
              this.resolve && (this.resolve(false), this.isWarm = true);
            }, this.warmUpDelay);
          }), this.promise);
        if (this.promise)
          return this.promise;
        throw new Error("Inconsistent state");
      }
      close(e4) {
        this.component && this.component === e4 && (this.resetCooldownTimer(), this.timeout > 0 && (clearTimeout(this.timeout), this.timeout = 0), this.resolve && (this.resolve(true), delete this.resolve), delete this.promise, delete this.component);
      }
      resetCooldownTimer() {
        this.isWarm && (this.cooldownTimeout && window.clearTimeout(this.cooldownTimeout), this.cooldownTimeout = window.setTimeout(() => {
          this.isWarm = false, delete this.cooldownTimeout;
        }, this.coolDownDelay));
      }
      cancelCooldownTimer() {
        this.cooldownTimeout && window.clearTimeout(this.cooldownTimeout), delete this.cooldownTimeout;
      }
    };
  }
});

// node_modules/@spectrum-web-components/overlay/src/AbstractOverlay.js
import { SpectrumElement as g } from "/libs/features/spectrum-web-components/dist/base.js";
import { reparentChildren as b } from "/libs/features/spectrum-web-components/dist/shared.js";
function nextFrame() {
  return new Promise((i3) => requestAnimationFrame(() => i3()));
}
var overlayTimer, noop, guaranteedAllTransitionend, AbstractOverlay;
var init_AbstractOverlay = __esm({
  "node_modules/@spectrum-web-components/overlay/src/AbstractOverlay.js"() {
    "use strict";
    init_overlay_timer();
    overlayTimer = new OverlayTimer();
    noop = () => {
    };
    guaranteedAllTransitionend = (i3, v2, e4) => {
      const r3 = new AbortController(), n3 = /* @__PURE__ */ new Map(), a4 = () => {
        r3.abort(), e4();
      };
      let m, l2;
      const t = requestAnimationFrame(() => {
        m = requestAnimationFrame(() => {
          l2 = requestAnimationFrame(() => {
            a4();
          });
        });
      }), p5 = (o3) => {
        o3.target === i3 && (n3.set(o3.propertyName, n3.get(o3.propertyName) - 1), n3.get(o3.propertyName) || n3.delete(o3.propertyName), n3.size === 0 && a4());
      }, d5 = (o3) => {
        o3.target === i3 && (n3.has(o3.propertyName) || n3.set(o3.propertyName, 0), n3.set(o3.propertyName, n3.get(o3.propertyName) + 1), cancelAnimationFrame(t), cancelAnimationFrame(m), cancelAnimationFrame(l2));
      };
      i3.addEventListener("transitionrun", d5, { signal: r3.signal }), i3.addEventListener("transitionend", p5, { signal: r3.signal }), i3.addEventListener("transitioncancel", p5, { signal: r3.signal }), v2();
    };
    AbstractOverlay = class _AbstractOverlay extends g {
      constructor() {
        super(...arguments);
        this.dispose = noop;
        this.offset = 0;
        this.willPreventClose = false;
      }
      async applyFocus(e4, r3) {
      }
      get delayed() {
        return false;
      }
      set delayed(e4) {
      }
      get disabled() {
        return false;
      }
      set disabled(e4) {
      }
      get elementResolver() {
        return this._elementResolver;
      }
      set elementResolver(e4) {
        this._elementResolver = e4;
      }
      async ensureOnDOM(e4) {
      }
      async makeTransition(e4) {
        return null;
      }
      async manageDelay(e4) {
      }
      async manageDialogOpen() {
      }
      async managePopoverOpen() {
      }
      managePosition() {
      }
      get open() {
        return false;
      }
      set open(e4) {
      }
      get placementController() {
        return this._placementController;
      }
      set placementController(e4) {
        this._placementController = e4;
      }
      requestSlottable() {
      }
      returnFocus() {
      }
      get state() {
        return "closed";
      }
      set state(e4) {
      }
      manuallyKeepOpen() {
      }
      static update() {
        const e4 = new CustomEvent("sp-update-overlays", { bubbles: true, composed: true, cancelable: true });
        document.dispatchEvent(e4);
      }
      static async open(e4, r3, n3, a4) {
        await Promise.resolve().then(() => (init_sp_overlay(), sp_overlay_exports));
        const m = arguments.length === 2, l2 = n3 || e4, t = new this();
        let p5 = false;
        t.dispose = () => {
          t.addEventListener("sp-closed", () => {
            p5 || (d5(), p5 = true), requestAnimationFrame(() => {
              t.remove();
            });
          }), t.open = false, t.dispose = noop;
        };
        const d5 = b([l2], t, { position: "beforeend", prepareCallback: (s3) => {
          const c5 = s3.slot;
          return s3.removeAttribute("slot"), () => {
            s3.slot = c5;
          };
        } });
        if (!m && l2 && a4) {
          const s3 = e4, c5 = r3, u3 = a4;
          return _AbstractOverlay.applyOptions(t, { ...u3, delayed: u3.delayed || l2.hasAttribute("delayed"), trigger: u3.virtualTrigger || s3, type: c5 === "modal" ? "modal" : c5 === "hover" ? "hint" : "auto" }), s3.insertAdjacentElement("afterend", t), await t.updateComplete, t.open = true, t.dispose;
        }
        const y3 = r3;
        return t.append(l2), _AbstractOverlay.applyOptions(t, { ...y3, delayed: y3.delayed || l2.hasAttribute("delayed") }), t.updateComplete.then(() => {
          t.open = true;
        }), t;
      }
      static applyOptions(e4, r3) {
        var n3, a4;
        e4.delayed = !!r3.delayed, e4.receivesFocus = (n3 = r3.receivesFocus) != null ? n3 : "auto", e4.triggerElement = r3.trigger || null, e4.type = r3.type || "modal", e4.offset = (a4 = r3.offset) != null ? a4 : 0, e4.placement = r3.placement, e4.willPreventClose = !!r3.notImmediatelyClosable;
      }
    };
  }
});

// node_modules/@spectrum-web-components/overlay/src/VirtualTrigger.js
var VirtualTrigger;
var init_VirtualTrigger = __esm({
  "node_modules/@spectrum-web-components/overlay/src/VirtualTrigger.js"() {
    "use strict";
    init_AbstractOverlay();
    VirtualTrigger = class {
      constructor(t, i3) {
        this.x = 0;
        this.y = 0;
        this.x = t, this.y = i3;
      }
      updateBoundingClientRect(t, i3) {
        this.x = t, this.y = i3, AbstractOverlay.update();
      }
      getBoundingClientRect() {
        return { width: 0, height: 0, top: this.y, right: this.x, y: this.y, x: this.x, bottom: this.y, left: this.x, toJSON() {
        } };
      }
    };
  }
});

// node_modules/@spectrum-web-components/overlay/src/events.js
var BeforetoggleClosedEvent, BeforetoggleOpenEvent, OverlayStateEvent;
var init_events = __esm({
  "node_modules/@spectrum-web-components/overlay/src/events.js"() {
    "use strict";
    BeforetoggleClosedEvent = class extends Event {
      constructor() {
        super("beforetoggle", { bubbles: false, composed: false });
        this.currentState = "open";
        this.newState = "closed";
      }
    };
    BeforetoggleOpenEvent = class extends Event {
      constructor() {
        super("beforetoggle", { bubbles: false, composed: false });
        this.currentState = "closed";
        this.newState = "open";
      }
    };
    OverlayStateEvent = class extends Event {
      constructor(r3, l2, { publish: o3, interaction: s3, reason: n3 }) {
        super(r3, { bubbles: o3, composed: o3 });
        this.overlay = l2;
        this.detail = { interaction: s3, reason: n3 };
      }
    };
  }
});

// node_modules/@spectrum-web-components/overlay/src/OverlayDialog.js
import { firstFocusableIn as u, firstFocusableSlottedIn as d } from "/libs/features/spectrum-web-components/dist/shared.js";
import { userFocusableSelector as y } from "/libs/features/spectrum-web-components/dist/shared.js";
function OverlayDialog(h3) {
  class p5 extends h3 {
    async manageDialogOpen() {
      const e4 = this.open;
      if (await this.managePosition(), this.open !== e4)
        return;
      const i3 = await this.dialogMakeTransition(e4);
      this.open === e4 && await this.dialogApplyFocus(e4, i3);
    }
    async dialogMakeTransition(e4) {
      let i3 = null;
      const m = (t, s3) => async () => {
        if (t.open = e4, !e4) {
          const n3 = () => {
            t.removeEventListener("close", n3), a4(t, s3);
          };
          t.addEventListener("close", n3);
        }
        if (s3 > 0)
          return;
        const o3 = e4 ? BeforetoggleOpenEvent : BeforetoggleClosedEvent;
        this.dispatchEvent(new o3()), e4 && (t.matches(y) && (i3 = t), i3 = i3 || u(t), i3 || t.querySelectorAll("slot").forEach((r3) => {
          i3 || (i3 = d(r3));
        }), !(!this.isConnected || this.dialogEl.open) && this.dialogEl.showModal());
      }, a4 = (t, s3) => () => {
        if (this.open !== e4)
          return;
        const o3 = e4 ? "sp-opened" : "sp-closed";
        if (s3 > 0) {
          t.dispatchEvent(new OverlayStateEvent(o3, this, { interaction: this.type, publish: false }));
          return;
        }
        if (!this.isConnected || e4 !== this.open)
          return;
        const n3 = async () => {
          const r3 = this.triggerElement instanceof VirtualTrigger;
          this.dispatchEvent(new OverlayStateEvent(o3, this, { interaction: this.type, publish: r3 })), t.dispatchEvent(new OverlayStateEvent(o3, this, { interaction: this.type, publish: false })), this.triggerElement && !r3 && this.triggerElement.dispatchEvent(new OverlayStateEvent(o3, this, { interaction: this.type, publish: true })), this.state = e4 ? "opened" : "closed", this.returnFocus(), await nextFrame(), await nextFrame(), e4 === this.open && e4 === false && this.requestSlottable();
        };
        !e4 && this.dialogEl.open ? (this.dialogEl.addEventListener("close", () => {
          n3();
        }, { once: true }), this.dialogEl.close()) : n3();
      };
      return this.elements.forEach((t, s3) => {
        guaranteedAllTransitionend(t, m(t, s3), a4(t, s3));
      }), i3;
    }
    async dialogApplyFocus(e4, i3) {
      this.applyFocus(e4, i3);
    }
  }
  return p5;
}
var init_OverlayDialog = __esm({
  "node_modules/@spectrum-web-components/overlay/src/OverlayDialog.js"() {
    "use strict";
    init_VirtualTrigger();
    init_AbstractOverlay();
    init_events();
  }
});

// node_modules/@spectrum-web-components/overlay/src/OverlayPopover.js
import { firstFocusableIn as E, firstFocusableSlottedIn as y2 } from "/libs/features/spectrum-web-components/dist/shared.js";
import { userFocusableSelector as T } from "/libs/features/spectrum-web-components/dist/shared.js";
function f(a4) {
  let c5 = false;
  try {
    c5 = a4.matches(":popover-open");
  } catch (e4) {
  }
  let p5 = false;
  try {
    p5 = a4.matches(":open");
  } catch (e4) {
  }
  return c5 || p5;
}
function OverlayPopover(a4) {
  class c5 extends a4 {
    async manageDelay(e4) {
      if (e4 === false || e4 !== this.open) {
        overlayTimer.close(this);
        return;
      }
      this.delayed && await overlayTimer.openTimer(this) && (this.open = !e4);
    }
    async shouldHidePopover(e4) {
      if (e4 && this.open !== e4)
        return;
      const o3 = async ({ newState: i3 } = {}) => {
        i3 !== "open" && await this.placementController.resetOverlayPosition();
      };
      if (!f(this.dialogEl)) {
        o3();
        return;
      }
      this.dialogEl.addEventListener("toggle", o3, { once: true });
    }
    async shouldShowPopover(e4) {
      let o3 = false;
      try {
        o3 = this.dialogEl.matches(":popover-open");
      } catch (u3) {
      }
      let i3 = false;
      try {
        i3 = this.dialogEl.matches(":open");
      } catch (u3) {
      }
      e4 && this.open === e4 && !o3 && !i3 && this.isConnected && (this.dialogEl.showPopover(), await this.managePosition());
    }
    async ensureOnDOM(e4) {
      await nextFrame(), C || await this.shouldHidePopover(e4), await this.shouldShowPopover(e4), await nextFrame();
    }
    async makeTransition(e4) {
      if (this.open !== e4)
        return null;
      let o3 = null;
      const i3 = (t, s3) => () => {
        if (t.open = e4, s3 === 0) {
          const r3 = e4 ? BeforetoggleOpenEvent : BeforetoggleClosedEvent;
          this.dispatchEvent(new r3());
        }
        if (!e4 || (t.matches(T) && (o3 = t), o3 = o3 || E(t), o3))
          return;
        t.querySelectorAll("slot").forEach((r3) => {
          o3 || (o3 = y2(r3));
        });
      }, u3 = (t, s3) => async () => {
        if (this.open !== e4)
          return;
        const n3 = e4 ? "sp-opened" : "sp-closed";
        if (s3 > 0) {
          t.dispatchEvent(new OverlayStateEvent(n3, this, { interaction: this.type, publish: false }));
          return;
        }
        const r3 = async () => {
          if (this.open !== e4)
            return;
          await nextFrame();
          const d5 = this.triggerElement instanceof VirtualTrigger;
          this.dispatchEvent(new OverlayStateEvent(n3, this, { interaction: this.type, publish: d5 })), t.dispatchEvent(new OverlayStateEvent(n3, this, { interaction: this.type, publish: false })), this.triggerElement && !d5 && this.triggerElement.dispatchEvent(new OverlayStateEvent(n3, this, { interaction: this.type, publish: true })), this.state = e4 ? "opened" : "closed", this.returnFocus(), await nextFrame(), await nextFrame(), e4 === this.open && e4 === false && this.requestSlottable();
        };
        if (this.open !== e4)
          return;
        const v2 = f(this.dialogEl);
        e4 !== true && v2 && this.isConnected ? (this.dialogEl.addEventListener("beforetoggle", () => {
          r3();
        }, { once: true }), this.dialogEl.hidePopover()) : r3();
      };
      return this.elements.forEach((t, s3) => {
        guaranteedAllTransitionend(t, i3(t, s3), u3(t, s3));
      }), o3;
    }
  }
  return c5;
}
var C;
var init_OverlayPopover = __esm({
  "node_modules/@spectrum-web-components/overlay/src/OverlayPopover.js"() {
    "use strict";
    init_VirtualTrigger();
    init_AbstractOverlay();
    init_events();
    C = CSS.supports("(overlay: auto)");
  }
});

// node_modules/@spectrum-web-components/overlay/src/OverlayNoPopover.js
import { firstFocusableIn as p, firstFocusableSlottedIn as f2 } from "/libs/features/spectrum-web-components/dist/shared.js";
import { userFocusableSelector as b2 } from "/libs/features/spectrum-web-components/dist/shared.js";
function OverlayNoPopover(a4) {
  class m extends a4 {
    async managePopoverOpen() {
      await this.managePosition();
    }
    async manageDelay(e4) {
      if (e4 === false || e4 !== this.open) {
        overlayTimer.close(this);
        return;
      }
      this.delayed && await overlayTimer.openTimer(this) && (this.open = !e4);
    }
    async ensureOnDOM(e4) {
      document.body.offsetHeight;
    }
    async makeTransition(e4) {
      if (this.open !== e4)
        return null;
      let o3 = null;
      const h3 = (t, r3) => () => {
        if (e4 !== this.open)
          return;
        if (t.open = e4, r3 === 0) {
          const i3 = e4 ? BeforetoggleOpenEvent : BeforetoggleClosedEvent;
          this.dispatchEvent(new i3());
        }
        if (e4 !== true || (t.matches(b2) && (o3 = t), o3 = o3 || p(t), o3))
          return;
        t.querySelectorAll("slot").forEach((i3) => {
          o3 || (o3 = f2(i3));
        });
      }, u3 = (t, r3) => async () => {
        if (this.open !== e4)
          return;
        const n3 = e4 ? "sp-opened" : "sp-closed";
        if (t.dispatchEvent(new OverlayStateEvent(n3, this, { interaction: this.type })), r3 > 0)
          return;
        const i3 = this.triggerElement instanceof VirtualTrigger;
        this.dispatchEvent(new OverlayStateEvent(n3, this, { interaction: this.type, publish: i3 })), this.triggerElement && !i3 && this.triggerElement.dispatchEvent(new OverlayStateEvent(n3, this, { interaction: this.type, publish: true })), this.state = e4 ? "opened" : "closed", this.returnFocus(), await nextFrame(), await nextFrame(), e4 === this.open && e4 === false && this.requestSlottable();
      };
      return this.elements.forEach((t, r3) => {
        guaranteedAllTransitionend(t, h3(t, r3), u3(t, r3));
      }), o3;
    }
  }
  return m;
}
var init_OverlayNoPopover = __esm({
  "node_modules/@spectrum-web-components/overlay/src/OverlayNoPopover.js"() {
    "use strict";
    init_VirtualTrigger();
    init_AbstractOverlay();
    init_events();
  }
});

// node_modules/@spectrum-web-components/overlay/src/OverlayStack.js
var h, c, overlayStack;
var init_OverlayStack = __esm({
  "node_modules/@spectrum-web-components/overlay/src/OverlayStack.js"() {
    "use strict";
    h = "showPopover" in document.createElement("div");
    c = class {
      constructor() {
        this.root = document.body;
        this.stack = [];
        this.handlePointerdown = (t) => {
          this.pointerdownPath = t.composedPath(), this.lastOverlay = this.stack[this.stack.length - 1];
        };
        this.handlePointerup = () => {
          const t = this.pointerdownPath;
          if (this.pointerdownPath = void 0, !this.stack.length || !(t != null && t.length))
            return;
          const e4 = this.stack.length - 1, s3 = this.stack.filter((n3, i3) => !t.find((a4) => a4 === n3 || a4 === (n3 == null ? void 0 : n3.triggerElement) && (n3 == null ? void 0 : n3.type) === "hint" || i3 === e4 && n3 !== this.lastOverlay && n3.triggerInteraction === "longpress") && !n3.shouldPreventClose() && n3.type !== "manual");
          s3.reverse(), s3.forEach((n3) => {
            this.closeOverlay(n3);
            let i3 = n3.parentOverlayToForceClose;
            for (; i3; )
              this.closeOverlay(i3), i3 = i3.parentOverlayToForceClose;
          });
        };
        this.handleBeforetoggle = (t) => {
          const { target: e4, newState: s3 } = t;
          s3 !== "open" && this.closeOverlay(e4);
        };
        this.handleKeydown = (t) => {
          if (t.code !== "Escape" || !this.stack.length)
            return;
          const e4 = this.stack[this.stack.length - 1];
          if ((e4 == null ? void 0 : e4.type) === "page") {
            t.preventDefault();
            return;
          }
          h || (e4 == null ? void 0 : e4.type) !== "manual" && e4 && this.closeOverlay(e4);
        };
        this.bindEvents();
      }
      get document() {
        return this.root.ownerDocument || document;
      }
      bindEvents() {
        this.document.addEventListener("pointerdown", this.handlePointerdown), this.document.addEventListener("pointerup", this.handlePointerup), this.document.addEventListener("keydown", this.handleKeydown);
      }
      closeOverlay(t) {
        const e4 = this.stack.indexOf(t);
        e4 > -1 && this.stack.splice(e4, 1), t.open = false;
      }
      overlaysByTriggerElement(t) {
        return this.stack.filter((e4) => e4.triggerElement === t);
      }
      add(t) {
        if (this.stack.includes(t)) {
          const e4 = this.stack.indexOf(t);
          e4 > -1 && (this.stack.splice(e4, 1), this.stack.push(t));
          return;
        }
        if (t.type === "auto" || t.type === "modal" || t.type === "page") {
          const e4 = "sp-overlay-query-path", s3 = new Event(e4, { composed: true, bubbles: true });
          t.addEventListener(e4, (n3) => {
            const i3 = n3.composedPath();
            this.stack.forEach((r3) => {
              !i3.find((o3) => o3 === r3) && r3.type !== "manual" && this.closeOverlay(r3);
            });
          }, { once: true }), t.dispatchEvent(s3);
        } else if (t.type === "hint") {
          if (this.stack.some((s3) => s3.type !== "manual" && s3.triggerElement && s3.triggerElement === t.triggerElement)) {
            t.open = false;
            return;
          }
          this.stack.forEach((s3) => {
            s3.type === "hint" && this.closeOverlay(s3);
          });
        }
        requestAnimationFrame(() => {
          this.stack.push(t), t.addEventListener("beforetoggle", this.handleBeforetoggle, { once: true });
        });
      }
      remove(t) {
        this.closeOverlay(t);
      }
    };
    overlayStack = new c();
  }
});

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y: y3,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y3,
    left: x,
    right: x + width,
    bottom: y3 + height,
    x,
    y: y3
  };
}
var min, max, round, floor, createCoords, oppositeSideMap, oppositeAlignmentMap;
var init_floating_ui_utils = __esm({
  "node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs"() {
    min = Math.min;
    max = Math.max;
    round = Math.round;
    floor = Math.floor;
    createCoords = (v2) => ({
      x: v2,
      y: v2
    });
    oppositeSideMap = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    oppositeAlignmentMap = {
      start: "end",
      end: "start"
    };
  }
});

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y: y3,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y: y3,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var computePosition, arrow, flip, offset, shift, size;
var init_floating_ui_core = __esm({
  "node_modules/@floating-ui/core/dist/floating-ui.core.mjs"() {
    init_floating_ui_utils();
    init_floating_ui_utils();
    computePosition = async (reference, floating, config) => {
      const {
        placement = "bottom",
        strategy = "absolute",
        middleware = [],
        platform: platform2
      } = config;
      const validMiddleware = middleware.filter(Boolean);
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
      let rects = await platform2.getElementRects({
        reference,
        floating,
        strategy
      });
      let {
        x,
        y: y3
      } = computeCoordsFromPlacement(rects, placement, rtl);
      let statefulPlacement = placement;
      let middlewareData = {};
      let resetCount = 0;
      for (let i3 = 0; i3 < validMiddleware.length; i3++) {
        const {
          name,
          fn
        } = validMiddleware[i3];
        const {
          x: nextX,
          y: nextY,
          data,
          reset
        } = await fn({
          x,
          y: y3,
          initialPlacement: placement,
          placement: statefulPlacement,
          strategy,
          middlewareData,
          rects,
          platform: platform2,
          elements: {
            reference,
            floating
          }
        });
        x = nextX != null ? nextX : x;
        y3 = nextY != null ? nextY : y3;
        middlewareData = {
          ...middlewareData,
          [name]: {
            ...middlewareData[name],
            ...data
          }
        };
        if (reset && resetCount <= 50) {
          resetCount++;
          if (typeof reset === "object") {
            if (reset.placement) {
              statefulPlacement = reset.placement;
            }
            if (reset.rects) {
              rects = reset.rects === true ? await platform2.getElementRects({
                reference,
                floating,
                strategy
              }) : reset.rects;
            }
            ({
              x,
              y: y3
            } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
          }
          i3 = -1;
        }
      }
      return {
        x,
        y: y3,
        placement: statefulPlacement,
        strategy,
        middlewareData
      };
    };
    arrow = (options) => ({
      name: "arrow",
      options,
      async fn(state) {
        const {
          x,
          y: y3,
          placement,
          rects,
          platform: platform2,
          elements,
          middlewareData
        } = state;
        const {
          element,
          padding = 0
        } = evaluate(options, state) || {};
        if (element == null) {
          return {};
        }
        const paddingObject = getPaddingObject(padding);
        const coords = {
          x,
          y: y3
        };
        const axis = getAlignmentAxis(placement);
        const length = getAxisLength(axis);
        const arrowDimensions = await platform2.getDimensions(element);
        const isYAxis = axis === "y";
        const minProp = isYAxis ? "top" : "left";
        const maxProp = isYAxis ? "bottom" : "right";
        const clientProp = isYAxis ? "clientHeight" : "clientWidth";
        const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
        const startDiff = coords[axis] - rects.reference[axis];
        const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
        let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
        if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
          clientSize = elements.floating[clientProp] || rects.floating[length];
        }
        const centerToReference = endDiff / 2 - startDiff / 2;
        const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
        const minPadding = min(paddingObject[minProp], largestPossiblePadding);
        const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
        const min$1 = minPadding;
        const max2 = clientSize - arrowDimensions[length] - maxPadding;
        const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
        const offset3 = clamp(min$1, center, max2);
        const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset3 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
        const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
        return {
          [axis]: coords[axis] + alignmentOffset,
          data: {
            [axis]: offset3,
            centerOffset: center - offset3 - alignmentOffset,
            ...shouldAddOffset && {
              alignmentOffset
            }
          },
          reset: shouldAddOffset
        };
      }
    });
    flip = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "flip",
        options,
        async fn(state) {
          var _middlewareData$arrow, _middlewareData$flip;
          const {
            placement,
            middlewareData,
            rects,
            initialPlacement,
            platform: platform2,
            elements
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true,
            fallbackPlacements: specifiedFallbackPlacements,
            fallbackStrategy = "bestFit",
            fallbackAxisSideDirection = "none",
            flipAlignment = true,
            ...detectOverflowOptions
          } = evaluate(options, state);
          if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          const side = getSide(placement);
          const initialSideAxis = getSideAxis(initialPlacement);
          const isBasePlacement = getSide(initialPlacement) === initialPlacement;
          const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
          const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
          const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
          if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
            fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
          }
          const placements2 = [initialPlacement, ...fallbackPlacements];
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const overflows = [];
          let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
          if (checkMainAxis) {
            overflows.push(overflow[side]);
          }
          if (checkCrossAxis) {
            const sides2 = getAlignmentSides(placement, rects, rtl);
            overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
          }
          overflowsData = [...overflowsData, {
            placement,
            overflows
          }];
          if (!overflows.every((side2) => side2 <= 0)) {
            var _middlewareData$flip2, _overflowsData$filter;
            const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
            const nextPlacement = placements2[nextIndex];
            if (nextPlacement) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
            let resetPlacement = (_overflowsData$filter = overflowsData.filter((d5) => d5.overflows[0] <= 0).sort((a4, b4) => a4.overflows[1] - b4.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
            if (!resetPlacement) {
              switch (fallbackStrategy) {
                case "bestFit": {
                  var _overflowsData$filter2;
                  const placement2 = (_overflowsData$filter2 = overflowsData.filter((d5) => {
                    if (hasFallbackAxisSideDirection) {
                      const currentSideAxis = getSideAxis(d5.placement);
                      return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                      // reading directions favoring greater width.
                      currentSideAxis === "y";
                    }
                    return true;
                  }).map((d5) => [d5.placement, d5.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a4, b4) => a4[1] - b4[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                  if (placement2) {
                    resetPlacement = placement2;
                  }
                  break;
                }
                case "initialPlacement":
                  resetPlacement = initialPlacement;
                  break;
              }
            }
            if (placement !== resetPlacement) {
              return {
                reset: {
                  placement: resetPlacement
                }
              };
            }
          }
          return {};
        }
      };
    };
    offset = function(options) {
      if (options === void 0) {
        options = 0;
      }
      return {
        name: "offset",
        options,
        async fn(state) {
          var _middlewareData$offse, _middlewareData$arrow;
          const {
            x,
            y: y3,
            placement,
            middlewareData
          } = state;
          const diffCoords = await convertValueToCoords(state, options);
          if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          return {
            x: x + diffCoords.x,
            y: y3 + diffCoords.y,
            data: {
              ...diffCoords,
              placement
            }
          };
        }
      };
    };
    shift = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "shift",
        options,
        async fn(state) {
          const {
            x,
            y: y3,
            placement
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = false,
            limiter = {
              fn: (_ref) => {
                let {
                  x: x2,
                  y: y4
                } = _ref;
                return {
                  x: x2,
                  y: y4
                };
              }
            },
            ...detectOverflowOptions
          } = evaluate(options, state);
          const coords = {
            x,
            y: y3
          };
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const crossAxis = getSideAxis(getSide(placement));
          const mainAxis = getOppositeAxis(crossAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          if (checkMainAxis) {
            const minSide = mainAxis === "y" ? "top" : "left";
            const maxSide = mainAxis === "y" ? "bottom" : "right";
            const min2 = mainAxisCoord + overflow[minSide];
            const max2 = mainAxisCoord - overflow[maxSide];
            mainAxisCoord = clamp(min2, mainAxisCoord, max2);
          }
          if (checkCrossAxis) {
            const minSide = crossAxis === "y" ? "top" : "left";
            const maxSide = crossAxis === "y" ? "bottom" : "right";
            const min2 = crossAxisCoord + overflow[minSide];
            const max2 = crossAxisCoord - overflow[maxSide];
            crossAxisCoord = clamp(min2, crossAxisCoord, max2);
          }
          const limitedCoords = limiter.fn({
            ...state,
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          });
          return {
            ...limitedCoords,
            data: {
              x: limitedCoords.x - x,
              y: limitedCoords.y - y3
            }
          };
        }
      };
    };
    size = function(options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: "size",
        options,
        async fn(state) {
          const {
            placement,
            rects,
            platform: platform2,
            elements
          } = state;
          const {
            apply = () => {
            },
            ...detectOverflowOptions
          } = evaluate(options, state);
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const side = getSide(placement);
          const alignment = getAlignment(placement);
          const isYAxis = getSideAxis(placement) === "y";
          const {
            width,
            height
          } = rects.floating;
          let heightSide;
          let widthSide;
          if (side === "top" || side === "bottom") {
            heightSide = side;
            widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
          } else {
            widthSide = side;
            heightSide = alignment === "end" ? "top" : "bottom";
          }
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          const maximumClippingWidth = width - overflow.left - overflow.right;
          const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
          const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
          const noShift = !state.middlewareData.shift;
          let availableHeight = overflowAvailableHeight;
          let availableWidth = overflowAvailableWidth;
          if (isYAxis) {
            availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
          } else {
            availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
          }
          if (noShift && !alignment) {
            const xMin = max(overflow.left, 0);
            const xMax = max(overflow.right, 0);
            const yMin = max(overflow.top, 0);
            const yMax = max(overflow.bottom, 0);
            if (isYAxis) {
              availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
            } else {
              availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
            }
          }
          await apply({
            ...state,
            availableWidth,
            availableHeight
          });
          const nextDimensions = await platform2.getDimensions(elements.floating);
          if (width !== nextDimensions.width || height !== nextDimensions.height) {
            return {
              reset: {
                rects: true
              }
            };
          }
          return {};
        }
      };
    };
  }
});

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e4) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
var init_floating_ui_utils_dom = __esm({
  "node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs"() {
  }
});

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y3 = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y3 || !Number.isFinite(y3)) {
    y3 = 1;
  }
  return {
    x,
    y: y3
  };
}
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y3 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y3 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y3 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y: y3
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y3 = -scroll.scrollTop;
  if (getComputedStyle(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y: y3
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y3 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y3 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y: y3
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y3 = top * scale.y;
  return {
    width,
    height,
    x,
    y: y3
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y3 = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y: y3,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e4) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var noOffsets, getElementRects, platform, offset2, shift2, flip2, size2, arrow2, computePosition2;
var init_floating_ui_dom = __esm({
  "node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"() {
    init_floating_ui_core();
    init_floating_ui_utils();
    init_floating_ui_utils_dom();
    noOffsets = /* @__PURE__ */ createCoords(0);
    getElementRects = async function(data) {
      const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
      const getDimensionsFn = this.getDimensions;
      const floatingDimensions = await getDimensionsFn(data.floating);
      return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
          x: 0,
          y: 0,
          width: floatingDimensions.width,
          height: floatingDimensions.height
        }
      };
    };
    platform = {
      convertOffsetParentRelativeRectToViewportRelativeRect,
      getDocumentElement,
      getClippingRect,
      getOffsetParent,
      getElementRects,
      getClientRects,
      getDimensions,
      getScale,
      isElement,
      isRTL
    };
    offset2 = offset;
    shift2 = shift;
    flip2 = flip;
    size2 = size;
    arrow2 = arrow;
    computePosition2 = (reference, floating, options) => {
      const cache = /* @__PURE__ */ new Map();
      const mergedOptions = {
        platform,
        ...options
      };
      const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
      };
      return computePosition(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
      });
    };
  }
});

// node_modules/@spectrum-web-components/overlay/src/PlacementController.js
function c2(o3) {
  if (typeof o3 == "undefined")
    return 0;
  const t = window.devicePixelRatio || 1;
  return Math.round(o3 * t) / t;
}
var p2, C2, T2, placementUpdatedSymbol, PlacementController;
var init_PlacementController = __esm({
  "node_modules/@spectrum-web-components/overlay/src/PlacementController.js"() {
    "use strict";
    init_floating_ui_dom();
    p2 = 8;
    C2 = 100;
    T2 = (o3) => {
      var e4;
      return (e4 = { left: ["right", "bottom", "top"], "left-start": ["right-start", "bottom", "top"], "left-end": ["right-end", "bottom", "top"], right: ["left", "bottom", "top"], "right-start": ["left-start", "bottom", "top"], "right-end": ["left-end", "bottom", "top"], top: ["bottom", "left", "right"], "top-start": ["bottom-start", "left", "right"], "top-end": ["bottom-end", "left", "right"], bottom: ["top", "left", "right"], "bottom-start": ["top-start", "left", "right"], "bottom-end": ["top-end", "left", "right"] }[o3]) != null ? e4 : [o3];
    };
    placementUpdatedSymbol = Symbol("placement updated");
    PlacementController = class {
      constructor(t) {
        this.originalPlacements = /* @__PURE__ */ new WeakMap();
        this.allowPlacementUpdate = false;
        this.closeForAncestorUpdate = () => {
          !this.allowPlacementUpdate && this.options.type !== "modal" && this.cleanup && this.target.dispatchEvent(new Event("close", { bubbles: true })), this.allowPlacementUpdate = false;
        };
        this.updatePlacement = () => {
          this.computePlacement();
        };
        this.resetOverlayPosition = () => {
          !this.target || !this.options || (this.clearOverlayPosition(), this.host.offsetHeight, this.computePlacement());
        };
        this.host = t, this.host.addController(this);
      }
      async placeOverlay(t = this.target, e4 = this.options) {
        if (this.target = t, this.options = e4, !t || !e4)
          return;
        const m = autoUpdate(e4.trigger, t, this.closeForAncestorUpdate, { ancestorResize: false, elementResize: false, layoutShift: false }), h3 = autoUpdate(e4.trigger, t, this.updatePlacement, { ancestorScroll: false });
        this.cleanup = () => {
          var n3;
          (n3 = this.host.elements) == null || n3.forEach((a4) => {
            a4.addEventListener("sp-closed", () => {
              const r3 = this.originalPlacements.get(a4);
              r3 && a4.setAttribute("placement", r3), this.originalPlacements.delete(a4);
            }, { once: true });
          }), m(), h3();
        };
      }
      async computePlacement() {
        var g5, u3;
        const { options: t, target: e4 } = this;
        await (document.fonts ? document.fonts.ready : Promise.resolve());
        const m = t.trigger instanceof HTMLElement ? flip2() : flip2({ padding: p2, fallbackPlacements: T2(t.placement) }), [h3 = 0, n3 = 0] = Array.isArray(t == null ? void 0 : t.offset) ? t.offset : [t.offset, 0], a4 = (g5 = this.host.elements.find((i3) => i3.tipElement)) == null ? void 0 : g5.tipElement, r3 = [offset2({ mainAxis: h3, crossAxis: n3 }), shift2({ padding: p2 }), m, size2({ padding: p2, apply: ({ availableWidth: i3, availableHeight: d5, rects: { floating: x } }) => {
          const b4 = Math.max(C2, Math.floor(d5)), l2 = x.height;
          this.initialHeight = this.isConstrained && this.initialHeight || l2, this.isConstrained = l2 < this.initialHeight || b4 <= l2;
          const O = this.isConstrained ? `${b4}px` : "";
          Object.assign(e4.style, { maxWidth: `${Math.floor(i3)}px`, maxHeight: O });
        } }), ...a4 ? [arrow2({ element: a4, padding: t.tipPadding || p2 })] : []], { x: P2, y: E3, placement: s3, middlewareData: f4 } = await computePosition2(t.trigger, e4, { placement: t.placement, middleware: r3, strategy: "fixed" });
        if (Object.assign(e4.style, { top: "0px", left: "0px", translate: `${c2(P2)}px ${c2(E3)}px` }), e4.setAttribute("actual-placement", s3), (u3 = this.host.elements) == null || u3.forEach((i3) => {
          this.originalPlacements.has(i3) || this.originalPlacements.set(i3, i3.getAttribute("placement")), i3.setAttribute("placement", s3);
        }), a4 && f4.arrow) {
          const { x: i3, y: d5 } = f4.arrow;
          Object.assign(a4.style, { top: s3.startsWith("right") || s3.startsWith("left") ? "0px" : "", left: s3.startsWith("bottom") || s3.startsWith("top") ? "0px" : "", translate: `${c2(i3)}px ${c2(d5)}px` });
        }
      }
      clearOverlayPosition() {
        this.target && (this.target.style.removeProperty("max-height"), this.target.style.removeProperty("max-width"), this.initialHeight = void 0, this.isConstrained = false);
      }
      hostConnected() {
        document.addEventListener("sp-update-overlays", this.resetOverlayPosition);
      }
      hostUpdated() {
        var t;
        this.host.open || ((t = this.cleanup) == null || t.call(this), this.cleanup = void 0);
      }
      hostDisconnected() {
        var t;
        (t = this.cleanup) == null || t.call(this), this.cleanup = void 0, document.removeEventListener("sp-update-overlays", this.resetOverlayPosition);
      }
    };
  }
});

// node_modules/@spectrum-web-components/overlay/src/InteractionController.js
var InteractionTypes, InteractionController;
var init_InteractionController = __esm({
  "node_modules/@spectrum-web-components/overlay/src/InteractionController.js"() {
    "use strict";
    InteractionTypes = ((r3) => (r3[r3.click = 0] = "click", r3[r3.hover = 1] = "hover", r3[r3.longpress = 2] = "longpress", r3))(InteractionTypes || {});
    InteractionController = class {
      constructor(e4, { overlay: t, isPersistent: r3, handleOverlayReady: i3 }) {
        this.target = e4;
        this.isLazilyOpen = false;
        this.isPersistent = false;
        this.isPersistent = !!r3, this.handleOverlayReady = i3, this.isPersistent && this.init(), this.overlay = t;
      }
      get activelyOpening() {
        return false;
      }
      get open() {
        var e4, t;
        return (t = (e4 = this.overlay) == null ? void 0 : e4.open) != null ? t : this.isLazilyOpen;
      }
      set open(e4) {
        if (e4 !== this.open) {
          if (this.isLazilyOpen = e4, this.overlay) {
            this.overlay.open = e4;
            return;
          }
          e4 && (customElements.whenDefined("sp-overlay").then(async () => {
            const { Overlay: t } = await Promise.resolve().then(() => (init_Overlay(), Overlay_exports));
            this.overlay = new t(), this.overlay.open = true;
          }), Promise.resolve().then(() => (init_sp_overlay(), sp_overlay_exports)));
        }
      }
      get overlay() {
        return this._overlay;
      }
      set overlay(e4) {
        var t;
        e4 && this.overlay !== e4 && (this.overlay && this.overlay.removeController(this), this._overlay = e4, this.overlay.addController(this), this.initOverlay(), this.prepareDescription(this.target), (t = this.handleOverlayReady) == null || t.call(this, this.overlay));
      }
      prepareDescription(e4) {
      }
      releaseDescription() {
      }
      shouldCompleteOpen() {
      }
      init() {
      }
      initOverlay() {
      }
      abort() {
        var e4;
        this.releaseDescription(), (e4 = this.abortController) == null || e4.abort();
      }
      hostConnected() {
        this.init();
      }
      hostDisconnected() {
        this.isPersistent || this.abort();
      }
    };
  }
});

// node_modules/@spectrum-web-components/overlay/src/LongpressController.js
import { isAndroid as a, isIOS as d2 } from "/libs/features/spectrum-web-components/dist/shared.js";
import { conditionAttributeWithId as p3 } from "/libs/features/spectrum-web-components/dist/base.js";
import { randomID as l } from "/libs/features/spectrum-web-components/dist/shared.js";
var g2, LONGPRESS_INSTRUCTIONS, LongpressController;
var init_LongpressController = __esm({
  "node_modules/@spectrum-web-components/overlay/src/LongpressController.js"() {
    "use strict";
    init_AbstractOverlay();
    init_InteractionController();
    g2 = 300;
    LONGPRESS_INSTRUCTIONS = { touch: "Double tap and long press for additional options", keyboard: "Press Space or Alt+Down Arrow for additional options", mouse: "Click and hold for additional options" };
    LongpressController = class extends InteractionController {
      constructor() {
        super(...arguments);
        this.type = InteractionTypes.longpress;
        this.longpressState = null;
        this.releaseDescription = noop;
        this.handlePointerup = () => {
          var e4;
          clearTimeout(this.timeout), this.target && (this.longpressState = ((e4 = this.overlay) == null ? void 0 : e4.state) === "opening" ? "pressed" : null, document.removeEventListener("pointerup", this.handlePointerup), document.removeEventListener("pointercancel", this.handlePointerup));
        };
      }
      get activelyOpening() {
        return this.longpressState === "opening" || this.longpressState === "pressed";
      }
      handleLongpress() {
        this.open = true, this.longpressState = this.longpressState === "potential" ? "opening" : "pressed";
      }
      handlePointerdown(e4) {
        !this.target || e4.button !== 0 || (this.longpressState = "potential", document.addEventListener("pointerup", this.handlePointerup), document.addEventListener("pointercancel", this.handlePointerup), "holdAffordance" in this.target) || (this.timeout = setTimeout(() => {
          this.target && this.target.dispatchEvent(new CustomEvent("longpress", { bubbles: true, composed: true, detail: { source: "pointer" } }));
        }, g2));
      }
      handleKeydown(e4) {
        const { code: t, altKey: o3 } = e4;
        o3 && t === "ArrowDown" && (e4.stopPropagation(), e4.stopImmediatePropagation());
      }
      handleKeyup(e4) {
        const { code: t, altKey: o3 } = e4;
        if (t === "Space" || o3 && t === "ArrowDown") {
          if (!this.target)
            return;
          e4.stopPropagation(), this.target.dispatchEvent(new CustomEvent("longpress", { bubbles: true, composed: true, detail: { source: "keyboard" } })), setTimeout(() => {
            this.longpressState = null;
          });
        }
      }
      prepareDescription(e4) {
        if (this.releaseDescription !== noop || !this.overlay.elements.length)
          return;
        const t = document.createElement("div");
        t.id = `longpress-describedby-descriptor-${l()}`;
        const o3 = d2() || a() ? "touch" : "keyboard";
        t.textContent = LONGPRESS_INSTRUCTIONS[o3], t.slot = "longpress-describedby-descriptor";
        const n3 = e4.getRootNode(), s3 = this.overlay.getRootNode();
        n3 === s3 ? this.overlay.append(t) : (t.hidden = !("host" in n3), e4.insertAdjacentElement("afterend", t));
        const i3 = p3(e4, "aria-describedby", [t.id]);
        this.releaseDescription = () => {
          i3(), t.remove(), this.releaseDescription = noop;
        };
      }
      shouldCompleteOpen() {
        this.longpressState = this.longpressState === "pressed" ? null : this.longpressState;
      }
      init() {
        var t;
        (t = this.abortController) == null || t.abort(), this.abortController = new AbortController();
        const { signal: e4 } = this.abortController;
        this.target.addEventListener("longpress", () => this.handleLongpress(), { signal: e4 }), this.target.addEventListener("pointerdown", (o3) => this.handlePointerdown(o3), { signal: e4 }), this.prepareDescription(this.target), !this.target.holdAffordance && (this.target.addEventListener("keydown", (o3) => this.handleKeydown(o3), { signal: e4 }), this.target.addEventListener("keyup", (o3) => this.handleKeyup(o3), { signal: e4 }));
      }
    };
  }
});

// node_modules/@spectrum-web-components/overlay/src/ClickController.js
var ClickController;
var init_ClickController = __esm({
  "node_modules/@spectrum-web-components/overlay/src/ClickController.js"() {
    "use strict";
    init_InteractionController();
    ClickController = class extends InteractionController {
      constructor() {
        super(...arguments);
        this.type = InteractionTypes.click;
        this.preventNextToggle = false;
      }
      handleClick() {
        this.preventNextToggle || (this.open = !this.open), this.preventNextToggle = false;
      }
      handlePointerdown() {
        this.preventNextToggle = this.open;
      }
      init() {
        var t;
        (t = this.abortController) == null || t.abort(), this.abortController = new AbortController();
        const { signal: e4 } = this.abortController;
        this.target.addEventListener("click", () => this.handleClick(), { signal: e4 }), this.target.addEventListener("pointerdown", () => this.handlePointerdown(), { signal: e4 });
      }
    };
  }
});

// node_modules/@spectrum-web-components/overlay/src/HoverController.js
import { conditionAttributeWithId as o } from "/libs/features/spectrum-web-components/dist/base.js";
import { randomID as a2 } from "/libs/features/spectrum-web-components/dist/shared.js";
var d3, HoverController;
var init_HoverController = __esm({
  "node_modules/@spectrum-web-components/overlay/src/HoverController.js"() {
    "use strict";
    init_InteractionController();
    init_AbstractOverlay();
    d3 = 300;
    HoverController = class extends InteractionController {
      constructor() {
        super(...arguments);
        this.type = InteractionTypes.hover;
        this.elementIds = [];
        this.focusedin = false;
        this.pointerentered = false;
      }
      handleTargetFocusin() {
        this.target.matches(":focus-visible") && (this.open = true, this.focusedin = true);
      }
      handleTargetFocusout() {
        this.focusedin = false, !this.pointerentered && (this.open = false);
      }
      handleTargetPointerenter() {
        var e4;
        this.hoverTimeout && (clearTimeout(this.hoverTimeout), this.hoverTimeout = void 0), !((e4 = this.overlay) != null && e4.disabled) && (this.open = true, this.pointerentered = true);
      }
      handleTargetPointerleave() {
        this.doPointerleave();
      }
      handleHostPointerenter() {
        this.hoverTimeout && (clearTimeout(this.hoverTimeout), this.hoverTimeout = void 0);
      }
      handleHostPointerleave() {
        this.doPointerleave();
      }
      prepareDescription() {
        if (!this.overlay.elements.length)
          return;
        const e4 = this.target.getRootNode(), t = this.overlay.elements[0].getRootNode(), r3 = this.overlay.getRootNode();
        e4 === r3 ? this.prepareOverlayRelativeDescription() : e4 === t && this.prepareContentRelativeDescription();
      }
      prepareOverlayRelativeDescription() {
        const e4 = o(this.target, "aria-describedby", [this.overlay.id]);
        this.releaseDescription = () => {
          e4(), this.releaseDescription = noop;
        };
      }
      prepareContentRelativeDescription() {
        const e4 = [], t = this.overlay.elements.map((i3) => (e4.push(i3.id), i3.id || (i3.id = `${this.overlay.tagName.toLowerCase()}-helper-${a2()}`), i3.id));
        this.elementIds = e4;
        const r3 = o(this.target, "aria-describedby", t);
        this.releaseDescription = () => {
          r3(), this.overlay.elements.map((i3, n3) => {
            i3.id = this.elementIds[n3];
          }), this.releaseDescription = noop;
        };
      }
      doPointerleave() {
        this.pointerentered = false;
        const e4 = this.target;
        this.focusedin && e4.matches(":focus-visible") || (this.hoverTimeout = setTimeout(() => {
          this.open = false;
        }, d3));
      }
      init() {
        var t;
        (t = this.abortController) == null || t.abort(), this.abortController = new AbortController();
        const { signal: e4 } = this.abortController;
        this.target.addEventListener("focusin", () => this.handleTargetFocusin(), { signal: e4 }), this.target.addEventListener("focusout", () => this.handleTargetFocusout(), { signal: e4 }), this.target.addEventListener("pointerenter", () => this.handleTargetPointerenter(), { signal: e4 }), this.target.addEventListener("pointerleave", () => this.handleTargetPointerleave(), { signal: e4 }), this.overlay && this.initOverlay();
      }
      initOverlay() {
        if (!this.abortController)
          return;
        const { signal: e4 } = this.abortController;
        this.overlay.addEventListener("pointerenter", () => this.handleHostPointerenter(), { signal: e4 }), this.overlay.addEventListener("pointerleave", () => this.handleHostPointerleave(), { signal: e4 });
      }
    };
  }
});

// node_modules/@spectrum-web-components/overlay/src/strategies.js
var strategies;
var init_strategies = __esm({
  "node_modules/@spectrum-web-components/overlay/src/strategies.js"() {
    "use strict";
    init_ClickController();
    init_HoverController();
    init_LongpressController();
    strategies = { click: ClickController, longpress: LongpressController, hover: HoverController };
  }
});

// node_modules/@spectrum-web-components/overlay/src/slottable-request-event.js
var SlottableRequestEvent, removeSlottableRequest;
var init_slottable_request_event = __esm({
  "node_modules/@spectrum-web-components/overlay/src/slottable-request-event.js"() {
    "use strict";
    SlottableRequestEvent = class extends Event {
      constructor(e4, n3, t) {
        super("slottable-request", { bubbles: false, cancelable: true, composed: false }), this.name = e4, this.data = n3, this.slotName = t !== void 0 ? `${e4}.${t}` : e4;
      }
    };
    removeSlottableRequest = Symbol("remove-slottable-request");
  }
});

// node_modules/@spectrum-web-components/overlay/src/overlay.css.js
import { css as a3 } from "/libs/features/spectrum-web-components/dist/base.js";
var o2, overlay_css_default;
var init_overlay_css = __esm({
  "node_modules/@spectrum-web-components/overlay/src/overlay.css.js"() {
    "use strict";
    o2 = a3`
    :host{pointer-events:none;--swc-overlay-animation-distance:var(--spectrum-spacing-100);display:contents}:host(:has(>sp-tooltip)){--swc-overlay-animation-distance:var(--spectrum-tooltip-animation-distance)}.dialog{box-sizing:border-box;max-height:calc(100vh - 16px);max-height:calc(100dvh - 16px);max-width:calc(100vw - 16px);height:auto;--sp-overlay-open:true;background:0 0;border:0;margin:0;padding:0;display:flex;position:fixed;inset:0 auto auto 0;overflow:visible;opacity:1!important}.dialog:not([is-visible]){display:none}.dialog:focus{outline:none}dialog:modal{--mod-popover-filter:var(--spectrum-popover-filter)}:host(:not([open])) .dialog{--sp-overlay-open:false}.dialog::backdrop{display:none}.dialog:before{content:"";position:absolute;inset:-999em;pointer-events:auto!important}.dialog:not(.not-immediately-closable):before{display:none}.dialog>div{width:100%}::slotted(*){pointer-events:auto;visibility:visible!important}::slotted(sp-popover){position:static}.dialog:not([actual-placement])[placement*=top]{padding-block:var(--swc-overlay-animation-distance);margin-top:var(--swc-overlay-animation-distance)}.dialog:not([actual-placement])[placement*=right]{padding-inline:var(--swc-overlay-animation-distance);margin-left:calc(-1*var(--swc-overlay-animation-distance))}.dialog:not([actual-placement])[placement*=bottom]{padding-block:var(--swc-overlay-animation-distance);margin-top:calc(-1*var(--swc-overlay-animation-distance))}.dialog:not([actual-placement])[placement*=left]{padding-inline:var(--swc-overlay-animation-distance);margin-left:var(--swc-overlay-animation-distance)}.dialog[actual-placement*=top]{padding-block:var(--swc-overlay-animation-distance);margin-top:var(--swc-overlay-animation-distance)}.dialog[actual-placement*=right]{padding-inline:var(--swc-overlay-animation-distance);margin-left:calc(-1*var(--swc-overlay-animation-distance))}.dialog[actual-placement*=bottom]{padding-block:var(--swc-overlay-animation-distance);margin-top:calc(-1*var(--swc-overlay-animation-distance))}.dialog[actual-placement*=left]{padding-inline:var(--swc-overlay-animation-distance);margin-left:var(--swc-overlay-animation-distance)}slot[name=longpress-describedby-descriptor]{display:none}@supports selector(:open){.dialog{opacity:0}.dialog:open{opacity:1;--mod-popover-filter:var(--spectrum-popover-filter)}}@supports selector(:popover-open){.dialog{opacity:0}.dialog:popover-open{opacity:1;--mod-popover-filter:var(--spectrum-popover-filter)}}@supports (overlay:auto){.dialog{transition:all var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s)),translate 0s,display var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s));transition-behavior:allow-discrete;display:none}.dialog:popover-open,.dialog:modal{display:flex}}@supports (not selector(:open)) and (not selector(:popover-open)){:host:not([open]) .dialog{pointer-events:none}.dialog[actual-placement]{z-index:calc(var(--swc-overlay-z-index-base,1000) + var(--swc-overlay-open-count))}}
`;
    overlay_css_default = o2;
  }
});

// node_modules/@spectrum-web-components/overlay/src/Overlay.js
var Overlay_exports = {};
__export(Overlay_exports, {
  LONGPRESS_INSTRUCTIONS: () => LONGPRESS_INSTRUCTIONS,
  Overlay: () => Overlay
});
import { html as d4 } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as n, query as g3, queryAssignedElements as C3, state as P } from "/libs/features/spectrum-web-components/dist/base.js";
import { ElementResolutionController as w, elementResolverUpdatedSymbol as T3 } from "/libs/features/spectrum-web-components/dist/reactive-controllers.js";
import { ifDefined as c3, styleMap as f3 } from "/libs/features/spectrum-web-components/dist/base.js";
import { randomID as S } from "/libs/features/spectrum-web-components/dist/shared.js";
var b3, E2, r, B, p4, i, Overlay;
var init_Overlay = __esm({
  "node_modules/@spectrum-web-components/overlay/src/Overlay.js"() {
    "use strict";
    init_AbstractOverlay();
    init_OverlayDialog();
    init_OverlayPopover();
    init_OverlayNoPopover();
    init_OverlayStack();
    init_VirtualTrigger();
    init_PlacementController();
    init_LongpressController();
    init_strategies();
    init_slottable_request_event();
    init_overlay_css();
    b3 = Object.defineProperty;
    E2 = Object.getOwnPropertyDescriptor;
    r = (u3, a4, e4, t) => {
      for (var o3 = t > 1 ? void 0 : t ? E2(a4, e4) : a4, s3 = u3.length - 1, l2; s3 >= 0; s3--)
        (l2 = u3[s3]) && (o3 = (t ? l2(a4, e4, o3) : l2(o3)) || o3);
      return t && o3 && b3(a4, e4, o3), o3;
    };
    B = "showPopover" in document.createElement("div");
    p4 = OverlayDialog(AbstractOverlay);
    B ? p4 = OverlayPopover(p4) : p4 = OverlayNoPopover(p4);
    i = class i2 extends p4 {
      constructor() {
        super(...arguments);
        this._delayed = false;
        this._disabled = false;
        this.offset = 0;
        this._open = false;
        this.lastRequestSlottableState = false;
        this.receivesFocus = "auto";
        this._state = "closed";
        this.triggerElement = null;
        this.type = "auto";
        this.wasOpen = false;
        this.closeOnFocusOut = (e4) => {
          if (!e4.relatedTarget)
            return;
          const t = new Event("overlay-relation-query", { bubbles: true, composed: true });
          e4.relatedTarget.addEventListener(t.type, (o3) => {
            o3.composedPath().includes(this) || (this.open = false);
          }), e4.relatedTarget.dispatchEvent(t);
        };
      }
      get delayed() {
        var e4;
        return ((e4 = this.elements.at(-1)) == null ? void 0 : e4.hasAttribute("delayed")) || this._delayed;
      }
      set delayed(e4) {
        this._delayed = e4;
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(e4) {
        var t;
        this._disabled = e4, e4 ? ((t = this.strategy) == null || t.abort(), this.wasOpen = this.open, this.open = false) : (this.bindEvents(), this.open = this.open || this.wasOpen, this.wasOpen = false);
      }
      get hasNonVirtualTrigger() {
        return !!this.triggerElement && !(this.triggerElement instanceof VirtualTrigger);
      }
      get placementController() {
        return this._placementController || (this._placementController = new PlacementController(this)), this._placementController;
      }
      get open() {
        return this._open;
      }
      set open(e4) {
        var t;
        e4 && this.disabled || e4 !== this.open && ((t = this.strategy) != null && t.activelyOpening && !e4 || (this._open = e4, this.open && (i2.openCount += 1), this.requestUpdate("open", !this.open), this.open && this.requestSlottable()));
      }
      get state() {
        return this._state;
      }
      set state(e4) {
        var o3;
        if (e4 === this.state)
          return;
        const t = this.state;
        this._state = e4, (this.state === "opened" || this.state === "closed") && ((o3 = this.strategy) == null || o3.shouldCompleteOpen()), this.requestUpdate("state", t);
      }
      get elementResolver() {
        return this._elementResolver || (this._elementResolver = new w(this)), this._elementResolver;
      }
      get usesDialog() {
        return this.type === "modal" || this.type === "page";
      }
      get popoverValue() {
        if ("popover" in this)
          switch (this.type) {
            case "modal":
            case "page":
              return;
            case "hint":
              return "manual";
            default:
              return this.type;
          }
      }
      get requiresPosition() {
        return !(this.type === "page" || !this.open || !this.triggerElement || !this.placement && this.type !== "hint");
      }
      managePosition() {
        if (!this.requiresPosition || !this.open)
          return;
        const e4 = this.offset || 0, t = this.triggerElement, o3 = this.placement || "right", s3 = this.tipPadding;
        this.placementController.placeOverlay(this.dialogEl, { offset: e4, placement: o3, tipPadding: s3, trigger: t, type: this.type });
      }
      async managePopoverOpen() {
        super.managePopoverOpen();
        const e4 = this.open;
        if (this.open !== e4 || (await this.manageDelay(e4), this.open !== e4) || (await this.ensureOnDOM(e4), this.open !== e4))
          return;
        const t = await this.makeTransition(e4);
        this.open === e4 && await this.applyFocus(e4, t);
      }
      async applyFocus(e4, t) {
        if (!(this.receivesFocus === "false" || this.type === "hint")) {
          if (await nextFrame(), await nextFrame(), e4 === this.open && !this.open) {
            this.hasNonVirtualTrigger && this.contains(this.getRootNode().activeElement) && this.triggerElement.focus();
            return;
          }
          t == null || t.focus();
        }
      }
      returnFocus() {
        var t;
        if (this.open || this.type === "hint")
          return;
        const e4 = () => {
          var l2, m;
          const o3 = [];
          let s3 = document.activeElement;
          for (; (l2 = s3 == null ? void 0 : s3.shadowRoot) != null && l2.activeElement; )
            s3 = s3.shadowRoot.activeElement;
          for (; s3; ) {
            const h3 = s3.assignedSlot || s3.parentElement || ((m = s3.getRootNode()) == null ? void 0 : m.host);
            h3 && o3.push(h3), s3 = h3;
          }
          return o3;
        };
        this.receivesFocus !== "false" && ((t = this.triggerElement) != null && t.focus) && (this.contains(this.getRootNode().activeElement) || e4().includes(this) || document.activeElement === document.body) && this.triggerElement.focus();
      }
      async manageOpen(e4) {
        if (!(!this.isConnected && this.open) && (this.hasUpdated || await this.updateComplete, this.open ? (overlayStack.add(this), this.willPreventClose && (document.addEventListener("pointerup", () => {
          this.dialogEl.classList.toggle("not-immediately-closable", false), this.willPreventClose = false;
        }, { once: true }), this.dialogEl.classList.toggle("not-immediately-closable", true))) : (e4 && this.dispose(), overlayStack.remove(this)), this.open && this.state !== "opened" ? this.state = "opening" : !this.open && this.state !== "closed" && (this.state = "closing"), this.usesDialog ? this.manageDialogOpen() : this.managePopoverOpen(), this.type === "auto")) {
          const t = this.getRootNode();
          this.open ? t.addEventListener("focusout", this.closeOnFocusOut, { capture: true }) : t.removeEventListener("focusout", this.closeOnFocusOut, { capture: true });
        }
      }
      bindEvents() {
        var e4;
        (e4 = this.strategy) == null || e4.abort(), this.strategy = void 0, this.hasNonVirtualTrigger && this.triggerInteraction && (this.strategy = new strategies[this.triggerInteraction](this.triggerElement, { overlay: this }));
      }
      handleBeforetoggle(e4) {
        e4.newState !== "open" && this.handleBrowserClose();
      }
      handleBrowserClose() {
        var e4;
        if (!((e4 = this.strategy) != null && e4.activelyOpening)) {
          this.open = false;
          return;
        }
        this.manuallyKeepOpen();
      }
      manuallyKeepOpen() {
        this.open = true, this.placementController.allowPlacementUpdate = true, this.manageOpen(false);
      }
      handleSlotchange() {
        var e4, t;
        this.elements.length ? this.hasNonVirtualTrigger && ((t = this.strategy) == null || t.prepareDescription(this.triggerElement)) : (e4 = this.strategy) == null || e4.releaseDescription();
      }
      shouldPreventClose() {
        const e4 = this.willPreventClose;
        return this.willPreventClose = false, e4;
      }
      requestSlottable() {
        this.lastRequestSlottableState !== this.open && (this.open || document.body.offsetHeight, this.dispatchEvent(new SlottableRequestEvent("overlay-content", this.open ? {} : removeSlottableRequest)), this.lastRequestSlottableState = this.open);
      }
      willUpdate(e4) {
        var o3;
        if (this.hasAttribute("id") || this.setAttribute("id", `${this.tagName.toLowerCase()}-${S()}`), e4.has("open") && (this.hasUpdated || this.open) && this.manageOpen(e4.get("open")), e4.has("trigger")) {
          const [s3, l2] = ((o3 = this.trigger) == null ? void 0 : o3.split("@")) || [];
          this.elementResolver.selector = s3 ? `#${s3}` : "", this.triggerInteraction = l2;
        }
        let t = false;
        e4.has(T3) && (t = this.triggerElement, this.triggerElement = this.elementResolver.element), e4.has("triggerElement") && (t = e4.get("triggerElement")), t !== false && this.bindEvents();
      }
      updated(e4) {
        super.updated(e4), e4.has("placement") && (this.placement ? this.dialogEl.setAttribute("actual-placement", this.placement) : this.dialogEl.removeAttribute("actual-placement"), this.open && typeof e4.get("placement") != "undefined" && this.placementController.resetOverlayPosition()), e4.has("state") && this.state === "closed" && typeof e4.get("state") != "undefined" && this.placementController.clearOverlayPosition();
      }
      renderContent() {
        return d4`
            <slot @slotchange=${this.handleSlotchange}></slot>
        `;
      }
      get dialogStyleMap() {
        return { "--swc-overlay-open-count": i2.openCount.toString() };
      }
      renderDialog() {
        return d4`
            <dialog
                class="dialog"
                part="dialog"
                placement=${c3(this.requiresPosition ? this.placement || "right" : void 0)}
                style=${f3(this.dialogStyleMap)}
                @close=${this.handleBrowserClose}
                @cancel=${this.handleBrowserClose}
                @beforetoggle=${this.handleBeforetoggle}
                ?is-visible=${this.state !== "closed"}
            >
                ${this.renderContent()}
            </dialog>
        `;
      }
      renderPopover() {
        return d4`
            <div
                class="dialog"
                part="dialog"
                placement=${c3(this.requiresPosition ? this.placement || "right" : void 0)}
                popover=${c3(this.popoverValue)}
                style=${f3(this.dialogStyleMap)}
                @beforetoggle=${this.handleBeforetoggle}
                @close=${this.handleBrowserClose}
                ?is-visible=${this.state !== "closed"}
            >
                ${this.renderContent()}
            </div>
        `;
      }
      render() {
        const e4 = this.type === "modal" || this.type === "page";
        return d4`
            ${e4 ? this.renderDialog() : this.renderPopover()}
            <slot name="longpress-describedby-descriptor"></slot>
        `;
      }
      connectedCallback() {
        super.connectedCallback(), this.addEventListener("close", () => {
          this.open = false;
        }), this.hasUpdated && this.bindEvents();
      }
      disconnectedCallback() {
        var e4;
        (e4 = this.strategy) == null || e4.releaseDescription(), this.open = false, super.disconnectedCallback();
      }
    };
    i.styles = [overlay_css_default], i.openCount = 1, r([n({ type: Boolean })], i.prototype, "delayed", 1), r([g3(".dialog")], i.prototype, "dialogEl", 2), r([n({ type: Boolean })], i.prototype, "disabled", 1), r([C3({ flatten: true, selector: ':not([slot="longpress-describedby-descriptor"], slot)' })], i.prototype, "elements", 2), r([n({ type: Number })], i.prototype, "offset", 2), r([n({ type: Boolean, reflect: true })], i.prototype, "open", 1), r([n()], i.prototype, "placement", 2), r([n({ attribute: "receives-focus" })], i.prototype, "receivesFocus", 2), r([g3("slot")], i.prototype, "slotEl", 2), r([P()], i.prototype, "state", 1), r([n({ type: Number, attribute: "tip-padding" })], i.prototype, "tipPadding", 2), r([n()], i.prototype, "trigger", 2), r([n({ attribute: false })], i.prototype, "triggerElement", 2), r([n({ attribute: false })], i.prototype, "triggerInteraction", 2), r([n()], i.prototype, "type", 2);
    Overlay = i;
  }
});

// node_modules/@spectrum-web-components/overlay/sp-overlay.js
var sp_overlay_exports = {};
import { defineElement as e } from "/libs/features/spectrum-web-components/dist/base.js";
var init_sp_overlay = __esm({
  "node_modules/@spectrum-web-components/overlay/sp-overlay.js"() {
    "use strict";
    init_Overlay();
    e("sp-overlay", Overlay);
  }
});

// src/overlay.js
init_sp_overlay();

// node_modules/@spectrum-web-components/overlay/overlay-trigger.js
import { defineElement as e3 } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@spectrum-web-components/overlay/src/OverlayTrigger.js
import { html as r2, SpectrumElement as u2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as s2, query as h2, state as c4 } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@spectrum-web-components/overlay/src/overlay-trigger.css.js
import { css as e2 } from "/libs/features/spectrum-web-components/dist/base.js";
var s = e2`
    :host([disabled]) ::slotted([slot=trigger]){pointer-events:none}slot[name=longpress-describedby-descriptor]{display:none}
`;
var overlay_trigger_css_default = s;

// node_modules/@spectrum-web-components/overlay/src/OverlayTrigger.js
var g4 = Object.defineProperty;
var v = Object.getOwnPropertyDescriptor;
var n2 = (p5, a4, e4, o3) => {
  for (var t = o3 > 1 ? void 0 : o3 ? v(a4, e4) : a4, l2 = p5.length - 1, i3; l2 >= 0; l2--)
    (i3 = p5[l2]) && (t = (o3 ? i3(a4, e4, t) : i3(t)) || t);
  return o3 && t && g4(a4, e4, t), t;
};
var OverlayTrigger = class extends u2 {
  constructor() {
    super(...arguments);
    this.content = "click hover longpress";
    this.offset = 6;
    this.disabled = false;
    this.receivesFocus = "auto";
    this.clickContent = [];
    this.longpressContent = [];
    this.hoverContent = [];
    this.targetContent = [];
  }
  static get styles() {
    return [overlay_trigger_css_default];
  }
  getAssignedElementsFromSlot(e4) {
    return e4.assignedElements({ flatten: true });
  }
  handleTriggerContent(e4) {
    this.targetContent = this.getAssignedElementsFromSlot(e4.target);
  }
  handleSlotContent(e4) {
    switch (e4.target.name) {
      case "click-content":
        this.clickContent = this.getAssignedElementsFromSlot(e4.target);
        break;
      case "longpress-content":
        this.longpressContent = this.getAssignedElementsFromSlot(e4.target);
        break;
      case "hover-content":
        this.hoverContent = this.getAssignedElementsFromSlot(e4.target);
        break;
    }
  }
  handleBeforetoggle(e4) {
    const { target: o3 } = e4;
    let t;
    if (o3 === this.clickOverlayElement)
      t = "click";
    else if (o3 === this.longpressOverlayElement)
      t = "longpress";
    else if (o3 === this.hoverOverlayElement)
      t = "hover";
    else
      return;
    e4.newState === "open" ? this.open = t : this.open === t && (this.open = void 0);
  }
  update(e4) {
    var o3, t, l2, i3, d5, m;
    e4.has("clickContent") && (this.clickPlacement = ((o3 = this.clickContent[0]) == null ? void 0 : o3.getAttribute("placement")) || ((t = this.clickContent[0]) == null ? void 0 : t.getAttribute("direction")) || void 0), e4.has("hoverContent") && (this.hoverPlacement = ((l2 = this.hoverContent[0]) == null ? void 0 : l2.getAttribute("placement")) || ((i3 = this.hoverContent[0]) == null ? void 0 : i3.getAttribute("direction")) || void 0), e4.has("longpressContent") && (this.longpressPlacement = ((d5 = this.longpressContent[0]) == null ? void 0 : d5.getAttribute("placement")) || ((m = this.longpressContent[0]) == null ? void 0 : m.getAttribute("direction")) || void 0), super.update(e4);
  }
  renderSlot(e4) {
    return r2`
            <slot name=${e4} @slotchange=${this.handleSlotContent}></slot>
        `;
  }
  renderClickOverlay() {
    Promise.resolve().then(() => init_sp_overlay());
    const e4 = this.renderSlot("click-content");
    return this.clickContent.length ? r2`
            <sp-overlay
                id="click-overlay"
                ?disabled=${this.disabled || !this.clickContent.length}
                ?open=${this.open === "click" && !!this.clickContent.length}
                .offset=${this.offset}
                .placement=${this.clickPlacement || this.placement}
                .triggerElement=${this.targetContent[0]}
                .triggerInteraction=${"click"}
                .type=${this.type !== "modal" ? "auto" : "modal"}
                @beforetoggle=${this.handleBeforetoggle}
                .receivesFocus=${this.receivesFocus}
            >
                ${e4}
            </sp-overlay>
        ` : e4;
  }
  renderHoverOverlay() {
    Promise.resolve().then(() => init_sp_overlay());
    const e4 = this.renderSlot("hover-content");
    return this.hoverContent.length ? r2`
            <sp-overlay
                id="hover-overlay"
                ?open=${this.open === "hover" && !!this.hoverContent.length}
                ?disabled=${this.disabled || !this.hoverContent.length || !!this.open && this.open !== "hover"}
                .offset=${this.offset}
                .placement=${this.hoverPlacement || this.placement}
                .triggerElement=${this.targetContent[0]}
                .triggerInteraction=${"hover"}
                .type=${"hint"}
                @beforetoggle=${this.handleBeforetoggle}
                .receivesFocus=${this.receivesFocus}
            >
                ${e4}
            </sp-overlay>
        ` : e4;
  }
  renderLongpressOverlay() {
    Promise.resolve().then(() => init_sp_overlay());
    const e4 = this.renderSlot("longpress-content");
    return this.longpressContent.length ? r2`
            <sp-overlay
                id="longpress-overlay"
                ?disabled=${this.disabled || !this.longpressContent.length}
                ?open=${this.open === "longpress" && !!this.longpressContent.length}
                .offset=${this.offset}
                .placement=${this.longpressPlacement || this.placement}
                .triggerElement=${this.targetContent[0]}
                .triggerInteraction=${"longpress"}
                .type=${"auto"}
                @beforetoggle=${this.handleBeforetoggle}
                .receivesFocus=${this.receivesFocus}
            >
                ${e4}
            </sp-overlay>
            <slot name="longpress-describedby-descriptor"></slot>
        ` : e4;
  }
  render() {
    const e4 = this.content.split(" ");
    return r2`
            <slot
                id="trigger"
                name="trigger"
                @slotchange=${this.handleTriggerContent}
            ></slot>
            ${[e4.includes("click") ? this.renderClickOverlay() : r2``, e4.includes("hover") ? this.renderHoverOverlay() : r2``, e4.includes("longpress") ? this.renderLongpressOverlay() : r2``]}
        `;
  }
  updated(e4) {
    if (super.updated(e4), this.disabled && e4.has("disabled")) {
      this.open = void 0;
      return;
    }
  }
  async getUpdateComplete() {
    return await super.getUpdateComplete();
  }
};
n2([s2()], OverlayTrigger.prototype, "content", 2), n2([s2({ reflect: true })], OverlayTrigger.prototype, "placement", 2), n2([s2()], OverlayTrigger.prototype, "type", 2), n2([s2({ type: Number })], OverlayTrigger.prototype, "offset", 2), n2([s2({ reflect: true })], OverlayTrigger.prototype, "open", 2), n2([s2({ type: Boolean, reflect: true })], OverlayTrigger.prototype, "disabled", 2), n2([s2({ attribute: "receives-focus" })], OverlayTrigger.prototype, "receivesFocus", 2), n2([c4()], OverlayTrigger.prototype, "clickContent", 2), n2([c4()], OverlayTrigger.prototype, "longpressContent", 2), n2([c4()], OverlayTrigger.prototype, "hoverContent", 2), n2([c4()], OverlayTrigger.prototype, "targetContent", 2), n2([h2("#click-overlay", true)], OverlayTrigger.prototype, "clickOverlayElement", 2), n2([h2("#longpress-overlay", true)], OverlayTrigger.prototype, "longpressOverlayElement", 2), n2([h2("#hover-overlay", true)], OverlayTrigger.prototype, "hoverOverlayElement", 2);

// node_modules/@spectrum-web-components/overlay/overlay-trigger.js
e3("overlay-trigger", OverlayTrigger);

// src/overlay.js
init_Overlay();
init_slottable_request_event();
window.__merch__spectrum_Overlay = Overlay;
export {
  Overlay,
  SlottableRequestEvent
};
//# sourceMappingURL=overlay.js.map
