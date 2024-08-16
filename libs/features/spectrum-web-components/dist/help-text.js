// node_modules/@spectrum-web-components/help-text/src/HelpText.js
import { html as o, nothing as m, SizedMixin as d, SpectrumElement as v } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as p } from "/libs/features/spectrum-web-components/dist/base.js";
import "/libs/features/spectrum-web-components/dist/icons-workflow.js";

// node_modules/@spectrum-web-components/help-text/src/help-text.css.js
import { css as t } from "/libs/features/spectrum-web-components/dist/base.js";
var e = t`
    :host{--spectrum-helptext-line-height:var(--spectrum-line-height-100);--spectrum-helptext-content-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-helptext-icon-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-helptext-disabled-content-color:var(--spectrum-disabled-content-color)}:host([variant=neutral]){--spectrum-helptext-content-color-default:var(--spectrum-neutral-subdued-content-color-default);--spectrum-helptext-icon-color-default:var(--spectrum-neutral-subdued-content-color-default)}:host([variant=negative]){--spectrum-helptext-content-color-default:var(--spectrum-negative-color-900);--spectrum-helptext-icon-color-default:var(--spectrum-negative-color-900)}:host([disabled]){--spectrum-helptext-content-color-default:var(--spectrum-helptext-disabled-content-color);--spectrum-helptext-icon-color-default:var(--spectrum-helptext-disabled-content-color)}:host(:lang(ja)),:host(:lang(ko)),:host(:lang(zh)){--spectrum-helptext-line-height-cjk:var(--spectrum-cjk-line-height-100)}:host([size=s]){--spectrum-helptext-min-height:var(--spectrum-component-height-75);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-helptext-font-size:var(--spectrum-font-size-75);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-helptext-top-to-workflow-icon:var(--spectrum-help-text-top-to-workflow-icon-small);--spectrum-helptext-bottom-to-workflow-icon:var(--spectrum-helptext-top-to-workflow-icon);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-helptext-bottom-to-text:var(--spectrum-component-bottom-to-text-75)}:host{--spectrum-helptext-min-height:var(--spectrum-component-height-75);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-helptext-font-size:var(--spectrum-font-size-75);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-75);--spectrum-helptext-top-to-workflow-icon:var(--spectrum-help-text-top-to-workflow-icon-medium);--spectrum-helptext-bottom-to-workflow-icon:var(--spectrum-helptext-top-to-workflow-icon);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-helptext-bottom-to-text:var(--spectrum-component-bottom-to-text-75)}:host([size=l]){--spectrum-helptext-min-height:var(--spectrum-component-height-100);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-helptext-font-size:var(--spectrum-font-size-100);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-100);--spectrum-helptext-top-to-workflow-icon:var(--spectrum-help-text-top-to-workflow-icon-large);--spectrum-helptext-bottom-to-workflow-icon:var(--spectrum-helptext-top-to-workflow-icon);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-helptext-bottom-to-text:var(--spectrum-component-bottom-to-text-100)}:host([size=xl]){--spectrum-helptext-min-height:var(--spectrum-component-height-200);--spectrum-helptext-icon-size:var(--spectrum-workflow-icon-size-300);--spectrum-helptext-font-size:var(--spectrum-font-size-200);--spectrum-helptext-text-to-visual:var(--spectrum-text-to-visual-200);--spectrum-helptext-top-to-workflow-icon:var(--spectrum-help-text-top-to-workflow-icon-extra-large);--spectrum-helptext-bottom-to-workflow-icon:var(--spectrum-helptext-top-to-workflow-icon);--spectrum-helptext-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-helptext-bottom-to-text:var(--spectrum-component-bottom-to-text-200)}@media (forced-colors:active){:host{--highcontrast-helptext-content-color-default:CanvasText;--highcontrast-helptext-icon-color-default:CanvasText}:host,.text,.icon{forced-color-adjust:none}}:host{color:var(--highcontrast-helptext-content-color-default,var(--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)));font-size:var(--mod-helptext-font-size,var(--spectrum-helptext-font-size));min-block-size:var(--mod-helptext-min-height,var(--spectrum-helptext-min-height));display:flex}.icon{block-size:var(--mod-helptext-icon-size,var(--spectrum-helptext-icon-size));inline-size:var(--mod-helptext-icon-size,var(--spectrum-helptext-icon-size));flex-shrink:0;margin-inline-end:var(--mod-helptext-text-to-visual,var(--spectrum-helptext-text-to-visual));padding-block-start:var(--mod-helptext-top-to-workflow-icon,var(--spectrum-helptext-top-to-workflow-icon));padding-block-end:var(--mod-helptext-bottom-to-workflow-icon,var(--spectrum-helptext-bottom-to-workflow-icon))}.text{line-height:var(--mod-helptext-line-height,var(--spectrum-helptext-line-height));padding-block-start:var(--mod-helptext-top-to-text,var(--spectrum-helptext-top-to-text));padding-block-end:var(--mod-helptext-bottom-to-text,var(--spectrum-helptext-bottom-to-text))}:host(:lang(ja)) .text,:host(:lang(ko)) .text,:host(:lang(zh)) .text{line-height:var(--mod-helptext-line-height-cjk,var(--spectrum-helptext-line-height-cjk))}:host([variant=neutral]) .text{color:var(--highcontrast-helptext-content-color-default,var(--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)))}:host([variant=neutral]) .icon{color:var(--highcontrast-helptext-icon-color-default,var(--mod-helptext-icon-color-default,var(--spectrum-helptext-icon-color-default)))}:host([variant=negative]) .text{color:var(--highcontrast-helptext-content-color-default,var(--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)))}:host([variant=negative]) .icon{color:var(--highcontrast-helptext-icon-color-default,var(--mod-helptext-icon-color-default,var(--spectrum-helptext-icon-color-default)))}:host([disabled]) .text{color:var(--highcontrast-helptext-content-color-default,var(--mod-helptext-content-color-default,var(--spectrum-helptext-content-color-default)))}:host([disabled]) .icon{color:var(--highcontrast-helptext-icon-color-default,var(--mod-helptext-icon-color-default,var(--spectrum-helptext-icon-color-default)))}
`;
var help_text_css_default = e;

// node_modules/@spectrum-web-components/help-text/src/HelpText.js
var c = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var n = (i, t3, l2, r) => {
  for (var e2 = r > 1 ? void 0 : r ? u(t3, l2) : t3, a = i.length - 1, s2; a >= 0; a--)
    (s2 = i[a]) && (e2 = (r ? s2(t3, l2, e2) : s2(e2)) || e2);
  return r && e2 && c(t3, l2, e2), e2;
};
var HelpText = class extends d(v, { noDefaultSize: true }) {
  constructor() {
    super(...arguments);
    this.icon = false;
    this.variant = "neutral";
  }
  static get styles() {
    return [help_text_css_default];
  }
  render() {
    return o`
            ${this.variant === "negative" && this.icon ? o`
                      <sp-icon-alert class="icon"></sp-icon-alert>
                  ` : m}
            <div class="text"><slot></slot></div>
        `;
  }
};
n([p({ type: Boolean, reflect: true })], HelpText.prototype, "icon", 2), n([p({ reflect: true })], HelpText.prototype, "variant", 2);

// node_modules/@spectrum-web-components/help-text/sp-help-text.js
import { defineElement as t2 } from "/libs/features/spectrum-web-components/dist/base.js";
t2("sp-help-text", HelpText);

// node_modules/@spectrum-web-components/help-text/src/HelpTextManager.js
import { html as s } from "/libs/features/spectrum-web-components/dist/base.js";
import { ifDefined as l } from "/libs/features/spectrum-web-components/dist/base.js";
import { conditionAttributeWithId as d2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { randomID as n2 } from "/libs/features/spectrum-web-components/dist/shared.js";
var HelpTextManager = class {
  constructor(e2, { mode: i } = { mode: "internal" }) {
    this.mode = "internal";
    this.handleSlotchange = ({ target: e3 }) => {
      this.handleHelpText(e3), this.handleNegativeHelpText(e3);
    };
    this.host = e2, this.id = `sp-help-text-${n2()}`, this.mode = i;
  }
  get isInternal() {
    return this.mode === "internal";
  }
  render(e2) {
    return s`
            <div id=${l(this.isInternal ? this.id : void 0)}>
                <slot
                    name=${e2 ? "negative-help-text" : `pass-through-help-text-${n2()}`}
                    @slotchange=${this.handleSlotchange}
                >
                    <slot name="help-text"></slot>
                </slot>
            </div>
        `;
  }
  addId() {
    const e2 = this.helpTextElement ? this.helpTextElement.id : this.id;
    this.conditionId = d2(this.host, "aria-describedby", e2), this.host.hasAttribute("tabindex") && (this.previousTabindex = parseFloat(this.host.getAttribute("tabindex"))), this.host.tabIndex = 0;
  }
  removeId() {
    this.conditionId && (this.conditionId(), delete this.conditionId), !this.helpTextElement && (this.previousTabindex ? this.host.tabIndex = this.previousTabindex : this.host.removeAttribute("tabindex"));
  }
  handleHelpText(e2) {
    if (this.isInternal)
      return;
    this.helpTextElement && this.helpTextElement.id === this.id && this.helpTextElement.removeAttribute("id"), this.removeId();
    const t3 = e2.assignedElements()[0];
    this.helpTextElement = t3, t3 && (t3.id || (t3.id = this.id), this.addId());
  }
  handleNegativeHelpText(e2) {
    if (e2.name !== "negative-help-text")
      return;
    e2.assignedElements().forEach((t3) => t3.variant = "negative");
  }
};

// node_modules/@spectrum-web-components/help-text/src/manage-help-text.js
function ManageHelpText(e2, { mode: t3 } = { mode: "internal" }) {
  class n3 extends e2 {
    constructor() {
      super(...arguments);
      this.helpTextManager = new HelpTextManager(this, { mode: t3 });
    }
    get helpTextId() {
      return this.helpTextManager.id;
    }
    renderHelpText(r) {
      return this.helpTextManager.render(r);
    }
  }
  return n3;
}
export {
  ManageHelpText
};
//# sourceMappingURL=help-text.js.map
