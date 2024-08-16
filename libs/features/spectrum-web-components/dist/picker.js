// node_modules/@spectrum-web-components/picker/src/Picker.js
import { html as o2, nothing as v, render as g, SizedMixin as w } from "/libs/features/spectrum-web-components/dist/base.js";
import { classMap as I, ifDefined as p, styleMap as m, when as M } from "/libs/features/spectrum-web-components/dist/base.js";
import { property as r2, query as u, state as c } from "/libs/features/spectrum-web-components/dist/base.js";

// node_modules/@spectrum-web-components/picker/src/picker.css.js
import { css as r } from "/libs/features/spectrum-web-components/dist/base.js";
var o = r`
    #button{cursor:pointer;-webkit-user-select:none;user-select:none;font-family:var(--mod-button-font-family,var(--mod-sans-font-family-stack,var(--spectrum-sans-font-family-stack)));line-height:var(--mod-button-line-height,var(--mod-line-height-100,var(--spectrum-line-height-100)));text-transform:none;vertical-align:top;-webkit-appearance:button;transition:background var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,border-color var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,color var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out,box-shadow var(--mod-button-animation-duration,var(--mod-animation-duration-100,var(--spectrum-animation-duration-100)))ease-out;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;justify-content:center;align-items:center;margin:0;-webkit-text-decoration:none;text-decoration:none;display:inline-flex;position:relative;overflow:visible}#button::-moz-focus-inner{border:0;margin-block:-2px;padding:0}#button:focus{outline:none}:host{--spectrum-picker-font-size:var(--spectrum-font-size-100);--spectrum-picker-font-weight:var(--spectrum-regular-font-weight);--spectrum-picker-placeholder-font-style:var(--spectrum-default-font-style);--spectrum-picker-line-height:var(--spectrum-line-height-100);--spectrum-picker-block-size:var(--spectrum-component-height-100);--spectrum-picker-inline-size:var(--spectrum-field-width);--spectrum-picker-border-radius:var(--spectrum-corner-radius-100);--spectrum-picker-spacing-top-to-text:var(--spectrum-component-top-to-text-100);--spectrum-picker-spacing-bottom-to-text:var(--spectrum-component-bottom-to-text-100);--spectrum-picker-spacing-edge-to-text:var(--spectrum-component-edge-to-text-100);--spectrum-picker-spacing-edge-to-text-quiet:var(--spectrum-field-edge-to-text-quiet);--spectrum-picker-spacing-top-to-text-side-label-quiet:var(--spectrum-component-top-to-text-100);--spectrum-picker-spacing-label-to-picker:var(--spectrum-field-label-to-component);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-100);--spectrum-picker-spacing-text-to-icon-inline-end:var(--spectrum-field-text-to-alert-icon-medium);--spectrum-picker-spacing-icon-to-disclosure-icon:var(--spectrum-picker-visual-to-disclosure-icon-medium);--spectrum-picker-spacing-label-to-picker-quiet:var(--spectrum-field-label-to-component-quiet-medium);--spectrum-picker-spacing-top-to-alert-icon:var(--spectrum-field-top-to-alert-icon-medium);--spectrum-picker-spacing-top-to-progress-circle:var(--spectrum-field-top-to-progress-circle-medium);--spectrum-picker-spacing-top-to-disclosure-icon:var(--spectrum-field-top-to-disclosure-icon-100);--spectrum-picker-spacing-edge-to-disclosure-icon:var(--spectrum-field-end-edge-to-disclosure-icon-100);--spectrum-picker-spacing-edge-to-disclosure-icon-quiet:var(--spectrum-picker-end-edge-to-disclousure-icon-quiet);--spectrum-picker-animation-duration:var(--spectrum-animation-duration-100);--spectrum-picker-font-color-default:var(--spectrum-neutral-content-color-default);--spectrum-picker-font-color-default-open:var(--spectrum-neutral-content-color-focus);--spectrum-picker-font-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-picker-font-color-hover-open:var(--spectrum-neutral-content-color-focus-hover);--spectrum-picker-font-color-active:var(--spectrum-neutral-content-color-down);--spectrum-picker-font-color-key-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-picker-icon-color-default:var(--spectrum-neutral-content-color-default);--spectrum-picker-icon-color-default-open:var(--spectrum-neutral-content-color-focus);--spectrum-picker-icon-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-picker-icon-color-hover-open:var(--spectrum-neutral-content-color-focus-hover);--spectrum-picker-icon-color-active:var(--spectrum-neutral-content-color-down);--spectrum-picker-icon-color-key-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-picker-border-color-error-default:var(--spectrum-negative-border-color-default);--spectrum-picker-border-color-error-default-open:var(--spectrum-negative-border-color-focus);--spectrum-picker-border-color-error-hover:var(--spectrum-negative-border-color-hover);--spectrum-picker-border-color-error-hover-open:var(--spectrum-negative-border-color-focus-hover);--spectrum-picker-border-color-error-active:var(--spectrum-negative-border-color-down);--spectrum-picker-border-color-error-key-focus:var(--spectrum-negative-border-color-key-focus);--spectrum-picker-icon-color-error:var(--spectrum-negative-visual-color);--spectrum-picker-background-color-disabled:var(--spectrum-disabled-background-color);--spectrum-picker-font-color-disabled:var(--spectrum-disabled-content-color);--spectrum-picker-icon-color-disabled:var(--spectrum-disabled-content-color);--spectrum-picker-focus-indicator-gap:var(--spectrum-focus-indicator-gap);--spectrum-picker-focus-indicator-thickness:var(--spectrum-focus-indicator-thickness);--spectrum-picker-focus-indicator-color:var(--spectrum-focus-indicator-color)}:host([size=s]){--spectrum-picker-font-size:var(--spectrum-font-size-75);--spectrum-picker-block-size:var(--spectrum-component-height-75);--spectrum-picker-spacing-top-to-text-side-label-quiet:var(--spectrum-component-top-to-text-75);--spectrum-picker-spacing-top-to-text:var(--spectrum-component-top-to-text-75);--spectrum-picker-spacing-bottom-to-text:var(--spectrum-component-bottom-to-text-75);--spectrum-picker-spacing-edge-to-text:var(--spectrum-component-edge-to-text-75);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-75);--spectrum-picker-spacing-text-to-icon-inline-end:var(--spectrum-field-text-to-alert-icon-small);--spectrum-picker-spacing-icon-to-disclosure-icon:var(--spectrum-picker-visual-to-disclosure-icon-small);--spectrum-picker-spacing-label-to-picker-quiet:var(--spectrum-field-label-to-component-quiet-small);--spectrum-picker-spacing-top-to-alert-icon:var(--spectrum-field-top-to-alert-icon-small);--spectrum-picker-spacing-top-to-progress-circle:var(--spectrum-field-top-to-progress-circle-small);--spectrum-picker-spacing-top-to-disclosure-icon:var(--spectrum-field-top-to-disclosure-icon-75);--spectrum-picker-spacing-edge-to-disclosure-icon:var(--spectrum-field-end-edge-to-disclosure-icon-75)}:host([size=l]){--spectrum-picker-font-size:var(--spectrum-font-size-200);--spectrum-picker-block-size:var(--spectrum-component-height-200);--spectrum-picker-spacing-top-to-text-side-label-quiet:var(--spectrum-component-top-to-text-200);--spectrum-picker-spacing-top-to-text:var(--spectrum-component-top-to-text-200);--spectrum-picker-spacing-bottom-to-text:var(--spectrum-component-bottom-to-text-200);--spectrum-picker-spacing-edge-to-text:var(--spectrum-component-edge-to-text-200);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-200);--spectrum-picker-spacing-text-to-icon-inline-end:var(--spectrum-field-text-to-alert-icon-large);--spectrum-picker-spacing-icon-to-disclosure-icon:var(--spectrum-picker-visual-to-disclosure-icon-large);--spectrum-picker-spacing-label-to-picker-quiet:var(--spectrum-field-label-to-component-quiet-large);--spectrum-picker-spacing-top-to-alert-icon:var(--spectrum-field-top-to-alert-icon-large);--spectrum-picker-spacing-top-to-progress-circle:var(--spectrum-field-top-to-progress-circle-large);--spectrum-picker-spacing-top-to-disclosure-icon:var(--spectrum-field-top-to-disclosure-icon-200);--spectrum-picker-spacing-edge-to-disclosure-icon:var(--spectrum-field-end-edge-to-disclosure-icon-200)}:host([size=xl]){--spectrum-picker-font-size:var(--spectrum-font-size-300);--spectrum-picker-block-size:var(--spectrum-component-height-300);--spectrum-picker-spacing-top-to-text-side-label-quiet:var(--spectrum-component-top-to-text-300);--spectrum-picker-spacing-top-to-text:var(--spectrum-component-top-to-text-300);--spectrum-picker-spacing-bottom-to-text:var(--spectrum-component-bottom-to-text-300);--spectrum-picker-spacing-edge-to-text:var(--spectrum-component-edge-to-text-300);--spectrum-picker-spacing-text-to-icon:var(--spectrum-text-to-visual-300);--spectrum-picker-spacing-text-to-icon-inline-end:var(--spectrum-field-text-to-alert-icon-extra-large);--spectrum-picker-spacing-icon-to-disclosure-icon:var(--spectrum-picker-visual-to-disclosure-icon-extra-large);--spectrum-picker-spacing-label-to-picker-quiet:var(--spectrum-field-label-to-component-quiet-extra-large);--spectrum-picker-spacing-top-to-alert-icon:var(--spectrum-field-top-to-alert-icon-extra-large);--spectrum-picker-spacing-top-to-progress-circle:var(--spectrum-field-top-to-progress-circle-extra-large);--spectrum-picker-spacing-top-to-disclosure-icon:var(--spectrum-field-top-to-disclosure-icon-300);--spectrum-picker-spacing-edge-to-disclosure-icon:var(--spectrum-field-end-edge-to-disclosure-icon-300)}@media (forced-colors:active){:host{--highcontrast-picker-focus-indicator-color:Highlight;--highcontrast-picker-border-color-default:ButtonBorder;--highcontrast-picker-border-color-hover:Highlight;--highcontrast-picker-border-color-disabled:GrayText;--highcontrast-picker-content-color-default:ButtonText;--highcontrast-picker-content-color-disabled:GrayText;--highcontrast-picker-background-color:ButtonFace}#button.is-keyboardFocused,#button:focus-visible{--highcontrast-picker-border-color-hover:ButtonText}#button .label,#button:after{forced-color-adjust:none}}#button{box-sizing:border-box;max-inline-size:100%;min-inline-size:calc(var(--spectrum-picker-minimum-width-multiplier)*var(--mod-picker-block-size,var(--spectrum-picker-block-size)));inline-size:var(--mod-picker-inline-size,var(--spectrum-picker-inline-size));block-size:var(--mod-picker-block-size,var(--spectrum-picker-block-size));border-width:var(--mod-picker-border-width,var(--spectrum-picker-border-width));border-radius:var(--mod-picker-border-radius,var(--spectrum-picker-border-radius));transition:background-color var(--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)),box-shadow var(--mod-picker-animation-duration,var(--spectrum-picker-animation-duration)),border-color var(--mod-picker-animation-duration,var(--spectrum-picker-animation-duration))ease-in-out;color:var(--highcontrast-picker-content-color-default,var(--mod-picker-font-color-default,var(--spectrum-picker-font-color-default)));background-color:var(--highcontrast-picker-background-color,var(--mod-picker-background-color-default,var(--spectrum-picker-background-color-default)));border-style:solid;border-color:var(--highcontrast-picker-border-color-default,var(--mod-picker-border-color-default,var(--spectrum-picker-border-color-default)));margin-block-start:var(--mod-picker-spacing-label-to-picker,var(--spectrum-picker-spacing-label-to-picker));padding-block:0;padding-inline-start:var(--mod-picker-spacing-edge-to-text,var(--spectrum-picker-spacing-edge-to-text));padding-inline-end:var(--mod-picker-spacing-edge-to-disclosure-icon,var(--spectrum-picker-spacing-edge-to-disclosure-icon));display:flex}#button:after{pointer-events:none;content:"";block-size:calc(100% + var(--mod-picker-focus-indicator-gap,var(--spectrum-picker-focus-indicator-gap))*2 + var(--mod-picker-border-width,var(--spectrum-picker-border-width))*2);inline-size:calc(100% + var(--mod-picker-focus-indicator-gap,var(--spectrum-picker-focus-indicator-gap))*2 + var(--mod-picker-border-width,var(--spectrum-picker-border-width))*2);border-style:solid;border-width:var(--mod-picker-focus-indicator-thickness,var(--spectrum-picker-focus-indicator-thickness));border-radius:calc(var(--mod-picker-border-radius,var(--spectrum-picker-border-radius)) + var(--mod-picker-focus-indicator-gap,var(--spectrum-picker-focus-indicator-gap)) + var(--mod-picker-border-width,var(--spectrum-picker-border-width)));border-color:#0000;margin-block-start:calc(( var(--mod-picker-focus-indicator-gap,var(--spectrum-picker-focus-indicator-gap)) + var(--mod-picker-focus-indicator-thickness,var(--spectrum-picker-focus-indicator-thickness)) + var(--mod-picker-border-width,var(--spectrum-picker-border-width)))*-1);margin-inline-start:calc(( var(--mod-picker-focus-indicator-gap,var(--spectrum-picker-focus-indicator-gap)) + var(--mod-picker-focus-indicator-thickness,var(--spectrum-picker-focus-indicator-thickness)) + var(--mod-picker-border-width,var(--spectrum-picker-border-width)))*-1);position:absolute;inset-block:0;inset-inline:0}#button:active{background-color:var(--highcontrast-picker-background-color,var(--mod-picker-background-color-active,var(--spectrum-picker-background-color-active)));border-color:var(--highcontrast-picker-border-color-default,var(--mod-picker-border-active,var(--spectrum-picker-border-color-active)))}#button:active:after{border-color:#0000}#button.placeholder:active .label{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-font-color-active,var(--spectrum-picker-font-color-active)))}#button.is-keyboardFocused,#button:focus-visible{background-color:var(--highcontrast-picker-background-color,var(--mod-picker-background-color-key-focus,var(--spectrum-picker-background-color-key-focus)));border-color:var(--highcontrast-picker-border-color-default,var(--mod-picker-border-color-key-focus,var(--spectrum-picker-border-color-key-focus)));color:var(--highcontrast-picker-content-color-default,var(--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)));outline:none}#button.is-keyboardFocused:after,#button:focus-visible:after{border-color:var(--highcontrast-picker-focus-indicator-color,var(--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)))}#button.is-keyboardFocused.placeholder,#button.placeholder:focus-visible{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-font-color-key-focus,var(--spectrum-picker-font-color-key-focus)))}#button.is-keyboardFocused .picker,#button:focus-visible .picker{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-icon-color-key-focus,var(--spectrum-picker-icon-color-key-focus)))}:host([invalid]) #button:not(:disabled):not(.is-disabled){border-color:var(--highcontrast-picker-border-color-default,var(--mod-picker-border-color-error-default,var(--spectrum-picker-border-color-error-default)))}:host([invalid]) #button:not(:disabled):not(.is-disabled) .validation-icon{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-icon-color-error,var(--spectrum-picker-icon-color-error)))}:host([invalid]) #button:not(:disabled):not(.is-disabled):active{border-color:var(--highcontrast-picker-border-color-default,var(--mod-picker-border-color-error-active,var(--spectrum-picker-border-color-error-active)))}:host([invalid][open]) #button:not(:disabled):not(.is-disabled){border-color:var(--highcontrast-picker-border-color-default,var(--mod-picker-border-color-error-default-open,var(--spectrum-picker-border-color-error-default-open)))}:host([invalid]) #button.is-keyboardFocused:not(:disabled):not(.is-disabled),:host([invalid]) #button:not(:disabled):not(.is-disabled):focus-visible{border-color:var(--highcontrast-picker-border-color-default,var(--mod-picker-border-color-error-key-focus,var(--spectrum-picker-border-color-error-key-focus)))}:host([pending]) #button .picker{color:var(--highcontrast-picker-content-color-disabled,var(--mod-picker-icon-color-disabled,var(--spectrum-picker-icon-color-disabled)))}:host([invalid]) #button .label,:host([pending]) #button .label{margin-inline-end:var(--mod-picker-spacing-text-to-icon-inline-end,var(--mod-picker-spacing-text-to-alert-icon-inline-start,var(--spectrum-picker-spacing-text-to-icon-inline-end)))}:host([disabled]) #button,#button:disabled{cursor:default;background-color:var(--highcontrast-picker-background-color,var(--mod-picker-background-color-disabled,var(--spectrum-picker-background-color-disabled)));border-color:var(--highcontrast-picker-border-color-disabled,transparent);color:var(--highcontrast-picker-content-color-disabled,var(--mod-picker-font-color-disabled,var(--spectrum-picker-font-color-disabled)))}:host([disabled]) #button .icon,:host([disabled]) #button .picker,:host([disabled]) #button .validation-icon,#button:disabled .icon,#button:disabled .picker,#button:disabled .validation-icon{color:var(--highcontrast-picker-content-color-disabled,var(--mod-picker-icon-color-disabled,var(--spectrum-picker-icon-color-disabled)))}:host([disabled]) #button .label.placeholder,#button:disabled .label.placeholder{color:var(--highcontrast-picker-content-color-disabled,var(--mod-picker-font-color-disabled,var(--spectrum-picker-font-color-disabled)))}.icon{flex-shrink:0;margin-inline-end:var(--mod-picker-spacing-text-to-icon,var(--spectrum-picker-spacing-text-to-icon))}:host([open]:not([quiet])) #button{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-font-color-default-open,var(--spectrum-picker-font-color-default-open)));background-color:var(--highcontrast-picker-background-color,var(--mod-picker-background-color-default-open,var(--spectrum-picker-background-color-default-open)));border-color:var(--highcontrast-picker-border-color-default,var(--mod-picker-border-default-open,var(--spectrum-picker-border-color-default-open)))}:host([open]:not([quiet])) #button .picker{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-icon-color-default-open,var(--spectrum-picker-icon-color-default-open)))}.label{white-space:nowrap;font-size:var(--mod-picker-font-size,var(--spectrum-picker-font-size));line-height:var(--mod-picker-line-height,var(--spectrum-picker-line-height));font-weight:var(--mod-picker-font-weight,var(--spectrum-picker-font-weight));text-overflow:ellipsis;text-align:start;flex:auto;margin-block-start:var(--mod-picker-spacing-top-to-text,var(--spectrum-picker-spacing-top-to-text));margin-block-end:calc(var(--mod-picker-spacing-bottom-to-text,var(--spectrum-picker-spacing-bottom-to-text)) - var(--mod-picker-border-width,var(--spectrum-picker-border-width)));overflow:hidden}.label.placeholder{font-weight:var(--mod-picker-placeholder-font-weight,var(--spectrum-picker-font-weight));font-style:var(--mod-picker-placeholder-font-style,var(--spectrum-picker-placeholder-font-style));transition:color var(--mod-picker-animation-duration,var(--spectrum-picker-animation-duration))ease-in-out;color:var(--highcontrast-picker-content-color-default,var(--mod-picker-font-color-default,var(--spectrum-picker-font-color-default)))}.label.placeholder:active{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-font-color-active,var(--spectrum-picker-font-color-active)))}.picker{vertical-align:top;transition:color var(--mod-picker-animation-duration,var(--spectrum-picker-animation-duration))ease-out;margin-inline-start:var(--mod-picker-spacing-icon-to-disclosure-icon,var(--spectrum-picker-spacing-icon-to-disclosure-icon));margin-block:var(--mod-picker-spacing-top-to-disclosure-icon,var(--spectrum-picker-spacing-top-to-disclosure-icon));color:var(--highcontrast-picker-content-color-default,var(--mod-picker-icon-color-default,var(--spectrum-picker-icon-color-default)));flex-shrink:0;display:inline-block;position:relative}.picker:active{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-icon-color-active,var(--spectrum-picker-icon-color-active)))}.validation-icon{margin-block-start:calc(var(--mod-picker-spacing-top-to-alert-icon,var(--spectrum-picker-spacing-top-to-alert-icon)) - var(--mod-picker-border-width,var(--spectrum-picker-border-width)));margin-block-end:calc(var(--mod-picker-spacing-top-to-alert-icon,var(--spectrum-picker-spacing-top-to-alert-icon)) - var(--mod-picker-border-width,var(--spectrum-picker-border-width)))}#button .progress-circle{margin-block-start:calc(var(--mod-picker-spacing-top-to-progress-circle,var(--spectrum-picker-spacing-top-to-progress-circle)) - var(--mod-picker-border-width,var(--spectrum-picker-border-width)));margin-block-end:calc(var(--mod-picker-spacing-top-to-progress-circle,var(--spectrum-picker-spacing-top-to-progress-circle)) - var(--mod-picker-border-width,var(--spectrum-picker-border-width)))}.label~.picker{margin-inline-start:var(--mod-picker-spacing-text-to-icon,var(--spectrum-picker-spacing-text-to-icon))}:host([quiet]) #button{inline-size:auto;min-inline-size:0;padding-inline:var(--mod-picker-spacing-edge-to-text-quiet,var(--spectrum-picker-spacing-edge-to-text-quiet));color:var(--highcontrast-picker-content-color-default,var(--mod-picker-font-color-default,var(--spectrum-picker-font-color-default)));background-color:var(--highcontrast-picker-background-color,transparent);border:none;border-radius:0;margin-block-start:calc(var(--mod-picker-spacing-label-to-picker-quiet,var(--spectrum-picker-spacing-label-to-picker-quiet)) + 1px)}:host([quiet]) #button.label-inline{margin-block-start:0}:host([quiet]) #button .picker{margin-inline-end:var(--mod-picker-spacing-edge-to-disclosure-icon-quiet,var(--spectrum-picker-spacing-edge-to-disclosure-icon-quiet))}:host([quiet]) #button:after{block-size:auto;inline-size:auto;border:none}@media (hover:hover){#button:hover{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-font-color-hover,var(--spectrum-picker-font-color-hover)));background-color:var(--highcontrast-picker-background-color,var(--mod-picker-background-color-hover,var(--spectrum-picker-background-color-hover)));border-color:var(--highcontrast-picker-border-color-hover,var(--mod-picker-border-color-hover,var(--spectrum-picker-border-color-hover)))}#button:hover .picker{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-icon-color-hover,var(--spectrum-picker-icon-color-hover)))}:host([invalid]) #button:not(:disabled):not(.is-disabled):hover{border-color:var(--highcontrast-picker-border-color-hover,var(--mod-picker-border-color-error-hover,var(--spectrum-picker-border-color-error-hover)))}:host([invalid][open]) #button:not(:disabled):not(.is-disabled):hover{border-color:var(--highcontrast-picker-border-color-hover,var(--mod-picker-border-color-error-hover-open,var(--spectrum-picker-border-color-error-hover-open)))}:host([open]:not([quiet])) #button:hover{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-font-color-hover-open,var(--spectrum-picker-font-color-hover-open)));background-color:var(--highcontrast-picker-background-color,var(--mod-picker-background-color-hover-open,var(--spectrum-picker-background-color-hover-open)));border-color:var(--highcontrast-picker-border-color-hover,var(--mod-picker-border-color-hover-open,var(--spectrum-picker-border-color-hover-open)))}:host([open]:not([quiet])) #button:hover .picker{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-icon-color-hover-open,var(--spectrum-picker-icon-color-hover-open)))}.label.placeholder:hover{color:var(--highcontrast-picker-content-color-default,var(--mod-picker-font-color-hover,var(--spectrum-picker-font-color-hover)))}:host([quiet]) #button:hover{background-color:var(--highcontrast-picker-background-color,transparent)}}:host([quiet]) #button.is-keyboardFocused,:host([quiet]) #button:focus-visible{background-color:var(--highcontrast-picker-background-color,transparent)}:host([quiet]) #button.is-keyboardFocused:after,:host([quiet]) #button:focus-visible:after{box-shadow:0 var(--mod-picker-focus-indicator-thickness,var(--spectrum-picker-focus-indicator-thickness))0 0 var(--highcontrast-picker-focus-indicator-color,var(--mod-picker-focus-indicator-color,var(--spectrum-picker-focus-indicator-color)));margin:calc(( var(--mod-picker-focus-indicator-gap,var(--spectrum-picker-focus-indicator-gap)) + var(--mod-picker-border-width,var(--spectrum-picker-border-width)))*-1)0;border:none;border-radius:0}:host([quiet][disabled]) #button,:host([quiet][open]) #button,:host([quiet]) #button:active,:host([quiet]) #button:disabled{background-color:var(--highcontrast-picker-background-color,transparent)}.label-inline{vertical-align:top;display:inline-flex}:host{--spectrum-picker-background-color-default:var(--system-spectrum-picker-background-color-default);--spectrum-picker-background-color-default-open:var(--system-spectrum-picker-background-color-default-open);--spectrum-picker-background-color-active:var(--system-spectrum-picker-background-color-active);--spectrum-picker-background-color-hover:var(--system-spectrum-picker-background-color-hover);--spectrum-picker-background-color-hover-open:var(--system-spectrum-picker-background-color-hover-open);--spectrum-picker-background-color-key-focus:var(--system-spectrum-picker-background-color-key-focus);--spectrum-picker-border-color-default:var(--system-spectrum-picker-border-color-default);--spectrum-picker-border-color-default-open:var(--system-spectrum-picker-border-color-default-open);--spectrum-picker-border-color-hover:var(--system-spectrum-picker-border-color-hover);--spectrum-picker-border-color-hover-open:var(--system-spectrum-picker-border-color-hover-open);--spectrum-picker-border-color-active:var(--system-spectrum-picker-border-color-active);--spectrum-picker-border-color-key-focus:var(--system-spectrum-picker-border-color-key-focus);--spectrum-picker-border-width:var(--system-spectrum-picker-border-width)}:host{vertical-align:top;max-inline-size:100%;inline-size:var(--mod-picker-inline-size,var(--spectrum-picker-inline-size));min-inline-size:calc(var(--spectrum-picker-minimum-width-multiplier)*var(--mod-picker-block-size,var(--spectrum-picker-block-size)));display:inline-flex}:host([quiet]){width:auto;min-width:0}:host([disabled]){pointer-events:none}#button{width:100%;min-width:100%;max-width:100%}#icon:not([hidden]){display:inline-flex}:host([readonly]) #button{user-select:inherit}.picker,.validation-icon{flex-shrink:0}sp-overlay{pointer-events:none}sp-menu{pointer-events:initial}:host>sp-menu{display:none}:host([focused]:not([quiet])) #button #label.placeholder{color:var(--spectrum-picker-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover))}#label.visually-hidden~.picker{margin-inline-start:auto}:host([focused]:not([quiet],[pending])) #button .picker{color:var(--spectrum-picker-icon-color-key-focus,var(--spectrum-alias-icon-color-focus))}.visually-hidden{clip:rect(0,0,0,0);clip-path:inset(50%);height:1px;width:1px;white-space:nowrap;border:0;margin:0 -1px -1px 0;padding:0;position:absolute;overflow:hidden}sp-overlay:not(:defined){display:none}
`;
var picker_css_default = o;

// node_modules/@spectrum-web-components/picker/src/Picker.js
import C from "/libs/features/spectrum-web-components/dist/icons/chevron.js";
import { Focusable as $ } from "/libs/features/spectrum-web-components/dist/shared.js";
import "/libs/features/spectrum-web-components/dist/icons-ui.js";
import "/libs/features/spectrum-web-components/dist/icons-workflow.js";
import "/libs/features/spectrum-web-components/dist/menu.js";
import { IS_MOBILE as E, MatchMediaController as R } from "/libs/features/spectrum-web-components/dist/reactive-controllers.js";
import { DependencyManagerController as D } from "/libs/features/spectrum-web-components/dist/reactive-controllers.js";

// node_modules/@spectrum-web-components/picker/src/InteractionController.js
var InteractionTypes = ((t) => (t[t.desktop = 0] = "desktop", t[t.mobile = 1] = "mobile", t))(InteractionTypes || {});
var InteractionController = class {
  constructor(e, t) {
    this.target = e;
    this.host = t;
    this.preventNextToggle = "no";
    this.pointerdownState = false;
    this.enterKeydownOn = null;
    this._open = false;
    this.target = e, this.host = t, this.host.addController(this), this.init();
  }
  get activelyOpening() {
    return false;
  }
  get open() {
    return this._open;
  }
  set open(e) {
    if (this._open !== e) {
      if (this._open = e, this.overlay) {
        this.host.open = e;
        return;
      }
      customElements.whenDefined("sp-overlay").then(async () => {
        const { Overlay: t } = await import("/libs/features/spectrum-web-components/dist/overlay.js");
        this.overlay = new t(), this.host.open = true, this.host.requestUpdate();
      }), import("/libs/features/spectrum-web-components/dist/overlay.js");
    }
  }
  get overlay() {
    return this._overlay;
  }
  set overlay(e) {
    e && this.overlay !== e && (this._overlay = e, this.initOverlay());
  }
  releaseDescription() {
  }
  handleBeforetoggle(e) {
    var t;
    e.composedPath()[0] === e.target && (e.newState === "closed" && (this.preventNextToggle === "no" ? this.open = false : this.pointerdownState || (t = this.overlay) == null || t.manuallyKeepOpen()), this.open || (this.host.optionsMenu.updateSelectedItemIndex(), this.host.optionsMenu.closeDescendentOverlays()));
  }
  initOverlay() {
    this.overlay && (this.overlay.addEventListener("beforetoggle", (e) => {
      this.handleBeforetoggle(e);
    }), this.overlay.triggerElement = this.host, this.overlay.placement = this.host.isMobile.matches ? void 0 : this.host.placement, this.overlay.receivesFocus = "true", this.overlay.willPreventClose = this.preventNextToggle !== "no" && this.open, this.overlay.addEventListener("slottable-request", this.host.handleSlottableRequest));
  }
  handlePointerdown(e) {
  }
  handleButtonFocus(e) {
    this.preventNextToggle === "maybe" && e.relatedTarget === this.host.optionsMenu && (this.preventNextToggle = "yes");
  }
  handleActivate(e) {
  }
  init() {
  }
  abort() {
    var e;
    this.releaseDescription(), (e = this.abortController) == null || e.abort();
  }
  hostConnected() {
    this.init();
  }
  hostDisconnected() {
    var e;
    (e = this.abortController) == null || e.abort();
  }
  hostUpdated() {
    this.overlay && this.host.dependencyManager.loaded && this.host.open !== this.overlay.open && (this.overlay.willPreventClose = this.preventNextToggle !== "no", this.overlay.open = this.host.open);
  }
};

// node_modules/@spectrum-web-components/picker/src/DesktopController.js
var DesktopController = class extends InteractionController {
  constructor() {
    super(...arguments);
    this.type = InteractionTypes.desktop;
  }
  handlePointerdown(e) {
    if (e.button !== 0)
      return;
    this.pointerdownState = this.open, this.preventNextToggle = "maybe";
    let n = 0;
    const t = () => {
      cancelAnimationFrame(n), n = requestAnimationFrame(async () => {
        document.removeEventListener("pointerup", t), document.removeEventListener("pointercancel", t), this.target.removeEventListener("click", t), requestAnimationFrame(() => {
          this.preventNextToggle = "no";
        });
      });
    };
    document.addEventListener("pointerup", t), document.addEventListener("pointercancel", t), this.target.addEventListener("click", t), this.handleActivate();
  }
  handleActivate(e) {
    this.enterKeydownOn && this.enterKeydownOn !== this.target || this.preventNextToggle !== "yes" && ((e == null ? void 0 : e.type) === "click" && this.open !== this.pointerdownState || this.host.toggle());
  }
  init() {
    var n;
    (n = this.abortController) == null || n.abort(), this.abortController = new AbortController();
    const { signal: e } = this.abortController;
    this.target.addEventListener("click", (t) => this.handleActivate(t), { signal: e }), this.target.addEventListener("pointerdown", (t) => this.handlePointerdown(t), { signal: e }), this.target.addEventListener("focus", (t) => this.handleButtonFocus(t), { signal: e });
  }
};

// node_modules/@spectrum-web-components/picker/src/MobileController.js
var MobileController = class extends InteractionController {
  constructor() {
    super(...arguments);
    this.type = InteractionTypes.mobile;
  }
  handleClick() {
    this.preventNextToggle == "no" && (this.open = !this.open), this.preventNextToggle = "no";
  }
  handlePointerdown() {
    this.preventNextToggle = this.open ? "yes" : "no";
  }
  init() {
    var e;
    (e = this.abortController) == null || e.abort(), this.abortController = new AbortController();
    const { signal: t } = this.abortController;
    this.target.addEventListener("click", () => this.handleClick(), { signal: t }), this.target.addEventListener("pointerdown", () => this.handlePointerdown(), { signal: t }), this.target.addEventListener("focus", (o3) => this.handleButtonFocus(o3), { signal: t });
  }
};

// node_modules/@spectrum-web-components/picker/src/strategies.js
var strategies = { desktop: DesktopController, mobile: MobileController };

// node_modules/@spectrum-web-components/picker/src/Picker.js
var f = Object.defineProperty;
var y = Object.getOwnPropertyDescriptor;
var i = (d, a, e, t) => {
  for (var s = t > 1 ? void 0 : t ? y(a, e) : a, n = d.length - 1, l; n >= 0; n--)
    (l = d[n]) && (s = (t ? l(a, e, s) : l(s)) || s);
  return t && s && f(a, e, s), s;
};
var T = { s: "spectrum-UIIcon-ChevronDown75", m: "spectrum-UIIcon-ChevronDown100", l: "spectrum-UIIcon-ChevronDown200", xl: "spectrum-UIIcon-ChevronDown300" };
var DESCRIPTION_ID = "option-picker";
var PickerBase = class extends w($, { noDefaultSize: true }) {
  constructor() {
    super(...arguments);
    this.isMobile = new R(this, E);
    this.dependencyManager = new D(this);
    this.deprecatedMenu = null;
    this.disabled = false;
    this.focused = false;
    this.invalid = false;
    this.pending = false;
    this.pendingLabel = "Pending";
    this.open = false;
    this.readonly = false;
    this.selects = "single";
    this._selfManageFocusElement = false;
    this.placement = "bottom-start";
    this.quiet = false;
    this.value = "";
    this.listRole = "listbox";
    this.itemRole = "option";
    this.handleKeydown = (e) => {
      this.focused = true, !(e.code !== "ArrowDown" && e.code !== "ArrowUp") && (e.stopPropagation(), e.preventDefault(), this.toggle(true));
    };
    this.handleSlottableRequest = (e) => {
    };
    this.applyFocusElementLabel = (e, t) => {
      this.appliedLabel = e, this.labelAlignment = t.sideAligned ? "inline" : void 0;
    };
    this.hasRenderedOverlay = false;
    this.willManageSelection = false;
    this.selectionPromise = Promise.resolve();
    this.recentlyConnected = false;
    this.enterKeydownOn = null;
    this.handleEnterKeydown = (e) => {
      if (e.code === "Enter") {
        if (this.enterKeydownOn) {
          e.preventDefault();
          return;
        }
        this.enterKeydownOn = e.target, this.addEventListener("keyup", async (t) => {
          t.code === "Enter" && (this.enterKeydownOn = null);
        }, { once: true });
      }
    };
  }
  get menuItems() {
    return this.optionsMenu.childItems;
  }
  get selfManageFocusElement() {
    return this._selfManageFocusElement;
  }
  get selectedItem() {
    return this._selectedItem;
  }
  set selectedItem(e) {
    if (this.selectedItemContent = e ? e.itemChildren : void 0, e === this.selectedItem)
      return;
    const t = this.selectedItem;
    this._selectedItem = e, this.requestUpdate("selectedItem", t);
  }
  get focusElement() {
    return this.open ? this.optionsMenu : this.button;
  }
  forceFocusVisible() {
    this.disabled || (this.focused = true);
  }
  click() {
    this.disabled || this.toggle();
  }
  handleButtonBlur() {
    this.focused = false;
  }
  focus(e) {
    super.focus(e), !this.disabled && this.focusElement && (this.focused = this.hasVisibleFocusInTree());
  }
  handleHelperFocus() {
    this.focused = true, this.button.focus();
  }
  handleChange(e) {
    this.strategy && (this.strategy.preventNextToggle = "no");
    const t = e.target, [s] = t.selectedItems;
    e.stopPropagation(), e.cancelable ? this.setValueFromItem(s, e) : (this.open = false, this.strategy && (this.strategy.open = false));
  }
  handleButtonFocus(e) {
    var t;
    (t = this.strategy) == null || t.handleButtonFocus(e);
  }
  async setValueFromItem(e, t) {
    var h;
    this.open = false, this.strategy && (this.strategy.open = false);
    const s = this.selectedItem, n = this.value;
    if (this.selectedItem = e, this.value = (h = e == null ? void 0 : e.value) != null ? h : "", await this.updateComplete, !this.dispatchEvent(new Event("change", { bubbles: true, cancelable: true, composed: true })) && this.selects) {
      t && t.preventDefault(), this.setMenuItemSelected(this.selectedItem, false), s && this.setMenuItemSelected(s, true), this.selectedItem = s, this.value = n, this.open = true, this.strategy && (this.strategy.open = true);
      return;
    } else if (!this.selects) {
      this.selectedItem = s, this.value = n;
      return;
    }
    s && this.setMenuItemSelected(s, false), this.setMenuItemSelected(e, !!this.selects);
  }
  setMenuItemSelected(e, t) {
    this.selects != null && (e.selected = t);
  }
  toggle(e) {
    this.readonly || this.pending || (this.open = typeof e != "undefined" ? e : !this.open, this.strategy && (this.strategy.open = this.open), this.open ? this._selfManageFocusElement = true : this._selfManageFocusElement = false);
  }
  close() {
    this.readonly || this.strategy && (this.open = false, this.strategy.open = false);
  }
  get containerStyles() {
    return this.isMobile.matches ? { "--swc-menu-width": "100%" } : {};
  }
  get selectedItemContent() {
    return this._selectedItemContent || { icon: [], content: [] };
  }
  set selectedItemContent(e) {
    if (e === this.selectedItemContent)
      return;
    const t = this.selectedItemContent;
    this._selectedItemContent = e, this.requestUpdate("selectedItemContent", t);
  }
  handleTooltipSlotchange(e) {
    this.tooltipEl = e.target.assignedElements()[0];
  }
  renderLabelContent(e) {
    return this.value && this.selectedItem ? e : o2`
            <slot name="label" id="label">
                <span
                    aria-hidden=${p(this.appliedLabel ? void 0 : "true")}
                >
                    ${this.label}
                </span>
            </slot>
        `;
  }
  get buttonContent() {
    const e = { "visually-hidden": this.icons === "only" && !!this.value, placeholder: !this.value, label: true }, t = this.appliedLabel || this.label;
    return [o2`
                <span id="icon" ?hidden=${this.icons === "none"}>
                    ${this.selectedItemContent.icon}
                </span>
                <span
                    id=${p(this.value && this.selectedItem ? "label" : void 0)}
                    class=${I(e)}
                >
                    ${this.renderLabelContent(this.selectedItemContent.content)}
                </span>
                ${this.value && this.selectedItem ? o2`
                          <span
                              aria-hidden="true"
                              class="visually-hidden"
                              id="applied-label"
                          >
                              ${t}
                              <slot name="label"></slot>
                          </span>
                      ` : o2`
                          <span hidden id="applied-label">${t}</span>
                      `}
                ${this.invalid && !this.pending ? o2`
                          <sp-icon-alert
                              class="validation-icon"
                          ></sp-icon-alert>
                      ` : v}
                ${M(this.pending, () => (import("/libs/features/spectrum-web-components/dist/progress-circle.js"), o2`
                        <sp-progress-circle
                            id="loader"
                            size="s"
                            indeterminate
                            aria-valuetext=${this.pendingLabel}
                            class="progress-circle"
                        ></sp-progress-circle>
                    `))}
                <sp-icon-chevron100
                    class="picker ${T[this.size]}"
                ></sp-icon-chevron100>
                <slot
                    aria-hidden="true"
                    name="tooltip"
                    id="tooltip"
                    @slotchange=${this.handleTooltipSlotchange}
                ></slot>
            `];
  }
  renderOverlay(e) {
    var s, n, l;
    if (((s = this.strategy) == null ? void 0 : s.overlay) === void 0)
      return e;
    const t = this.renderContainer(e);
    return g(t, (n = this.strategy) == null ? void 0 : n.overlay, { host: this }), (l = this.strategy) == null ? void 0 : l.overlay;
  }
  get renderDescriptionSlot() {
    return o2`
            <div id=${DESCRIPTION_ID}>
                <slot name="description"></slot>
            </div>
        `;
  }
  render() {
    return this.tooltipEl && (this.tooltipEl.disabled = this.open), o2`
            <span
                id="focus-helper"
                tabindex="${this.focused || this.open ? "-1" : "0"}"
                @focus=${this.handleHelperFocus}
                aria-describedby=${DESCRIPTION_ID}
            ></span>
            <button
                aria-controls=${p(this.open ? "menu" : void 0)}
                aria-describedby="tooltip"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="true"
                aria-labelledby="loader icon label applied-label"
                id="button"
                class=${p(this.labelAlignment ? `label-${this.labelAlignment}` : void 0)}
                @blur=${this.handleButtonBlur}
                @keydown=${{ handleEvent: this.handleEnterKeydown, capture: true }}
                ?disabled=${this.disabled}
                tabindex="-1"
            >
                ${this.buttonContent}
            </button>
            ${this.renderMenu} ${this.renderDescriptionSlot}
        `;
  }
  update(e) {
    var t, s;
    this.selects && (this.selects = "single"), e.has("disabled") && this.disabled && this.strategy && (this.open = false, this.strategy.open = false), e.has("pending") && this.pending && this.strategy && (this.open = false, this.strategy.open = false), e.has("value") && this.shouldScheduleManageSelection(), this.hasUpdated || (this.deprecatedMenu = this.querySelector(":scope > sp-menu"), (t = this.deprecatedMenu) == null || t.toggleAttribute("ignore", true), (s = this.deprecatedMenu) == null || s.setAttribute("selects", "inherit")), super.update(e);
  }
  bindButtonKeydownListener() {
    this.button.addEventListener("keydown", this.handleKeydown);
  }
  updated(e) {
    super.updated(e), e.has("open") && (this.strategy.open = this.open);
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.bindButtonKeydownListener(), this.bindEvents();
  }
  get dismissHelper() {
    return o2`
            <div class="visually-hidden">
                <button
                    tabindex="-1"
                    aria-label="Dismiss"
                    @click=${this.close}
                ></button>
            </div>
        `;
  }
  renderContainer(e) {
    const t = o2`
            ${this.dismissHelper} ${e} ${this.dismissHelper}
        `;
    return this.isMobile.matches ? (this.dependencyManager.add("sp-tray"), import("/libs/features/spectrum-web-components/dist/tray.js"), o2`
                <sp-tray
                    id="popover"
                    role="presentation"
                    style=${m(this.containerStyles)}
                >
                    ${t}
                </sp-tray>
            `) : (this.dependencyManager.add("sp-popover"), import("/libs/features/spectrum-web-components/dist/popover.js"), o2`
            <sp-popover
                id="popover"
                role="presentation"
                style=${m(this.containerStyles)}
                placement=${this.placement}
            >
                ${t}
            </sp-popover>
        `);
  }
  get renderMenu() {
    const e = o2`
            <sp-menu
                aria-labelledby="applied-label"
                @change=${this.handleChange}
                id="menu"
                @keydown=${{ handleEvent: this.handleEnterKeydown, capture: true }}
                role=${this.listRole}
                .selects=${this.selects}
                .selected=${this.value ? [this.value] : []}
                size=${this.size}
                @sp-menu-item-added-or-updated=${this.shouldManageSelection}
            >
                <slot @slotchange=${this.shouldScheduleManageSelection}></slot>
            </sp-menu>
        `;
    return this.hasRenderedOverlay = this.hasRenderedOverlay || this.focused || this.open || !!this.deprecatedMenu, this.hasRenderedOverlay ? (this.dependencyManager.loaded && this.dependencyManager.add("sp-overlay"), this.renderOverlay(e)) : e;
  }
  shouldScheduleManageSelection(e) {
    !this.willManageSelection && (!e || e.target.getRootNode().host === this) && (this.willManageSelection = true, requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.manageSelection();
      });
    }));
  }
  shouldManageSelection() {
    this.willManageSelection || (this.willManageSelection = true, this.manageSelection());
  }
  async manageSelection() {
    if (this.selects == null)
      return;
    this.selectionPromise = new Promise((t) => this.selectionResolver = t);
    let e;
    await this.optionsMenu.updateComplete, this.recentlyConnected && (await new Promise((t) => requestAnimationFrame(() => t(true))), this.recentlyConnected = false), this.menuItems.forEach((t) => {
      this.value === t.value && !t.disabled ? e = t : t.selected = false;
    }), e ? (e.selected = !!this.selects, this.selectedItem = e) : (this.value = "", this.selectedItem = void 0), this.open && (await this.optionsMenu.updateComplete, this.optionsMenu.updateSelectedItemIndex()), this.selectionResolver(), this.willManageSelection = false;
  }
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.selectionPromise, e;
  }
  bindEvents() {
    var e;
    (e = this.strategy) == null || e.abort(), this.isMobile.matches ? this.strategy = new strategies.mobile(this.button, this) : this.strategy = new strategies.desktop(this.button, this);
  }
  connectedCallback() {
    super.connectedCallback(), this.recentlyConnected = this.hasUpdated;
  }
  disconnectedCallback() {
    var e;
    this.close(), (e = this.strategy) == null || e.releaseDescription(), super.disconnectedCallback();
  }
};
i([c()], PickerBase.prototype, "appliedLabel", 2), i([u("#button")], PickerBase.prototype, "button", 2), i([r2({ type: Boolean, reflect: true })], PickerBase.prototype, "disabled", 2), i([r2({ type: Boolean, reflect: true })], PickerBase.prototype, "focused", 2), i([r2({ type: String, reflect: true })], PickerBase.prototype, "icons", 2), i([r2({ type: Boolean, reflect: true })], PickerBase.prototype, "invalid", 2), i([r2({ type: Boolean, reflect: true })], PickerBase.prototype, "pending", 2), i([r2({ type: String, attribute: "pending-label" })], PickerBase.prototype, "pendingLabel", 2), i([r2()], PickerBase.prototype, "label", 2), i([r2({ type: Boolean, reflect: true })], PickerBase.prototype, "open", 2), i([r2({ type: Boolean, reflect: true })], PickerBase.prototype, "readonly", 2), i([c()], PickerBase.prototype, "labelAlignment", 2), i([u("sp-menu")], PickerBase.prototype, "optionsMenu", 2), i([u("sp-overlay")], PickerBase.prototype, "overlayElement", 2), i([r2()], PickerBase.prototype, "placement", 2), i([r2({ type: Boolean, reflect: true })], PickerBase.prototype, "quiet", 2), i([r2({ type: String })], PickerBase.prototype, "value", 2), i([r2({ attribute: false })], PickerBase.prototype, "selectedItem", 1), i([c()], PickerBase.prototype, "selectedItemContent", 1);
var Picker = class extends PickerBase {
  constructor() {
    super(...arguments);
    this.handleKeydown = (e) => {
      const { code: t } = e;
      if (this.focused = true, !t.startsWith("Arrow") || this.readonly || this.pending)
        return;
      if (t === "ArrowUp" || t === "ArrowDown") {
        this.toggle(true), e.preventDefault();
        return;
      }
      e.preventDefault();
      const s = this.selectedItem ? this.menuItems.indexOf(this.selectedItem) : -1, n = s < 0 || t === "ArrowRight" ? 1 : -1;
      let l = s + n;
      for (; this.menuItems[l] && this.menuItems[l].disabled; )
        l += n;
      !this.menuItems[l] || this.menuItems[l].disabled || (!this.value || l !== s) && this.setValueFromItem(this.menuItems[l]);
    };
  }
  static get styles() {
    return [picker_css_default, C];
  }
  get containerStyles() {
    const e = super.containerStyles;
    return this.quiet || (e["min-width"] = `${this.offsetWidth}px`), e;
  }
};

// node_modules/@spectrum-web-components/picker/sp-picker.js
import { defineElement as r3 } from "/libs/features/spectrum-web-components/dist/base.js";
r3("sp-picker", Picker);
export {
  DESCRIPTION_ID,
  PickerBase
};
//# sourceMappingURL=picker.js.map
