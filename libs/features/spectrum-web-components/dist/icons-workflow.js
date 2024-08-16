// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconAlert.js
import { html as e } from "/libs/features/spectrum-web-components/dist/base.js";
import { IconBase as t2 } from "/libs/features/spectrum-web-components/dist/icon.js";

// node_modules/@spectrum-web-components/icons-workflow/src/custom-tag.js
var t;
var tag = function(e13, ...a) {
  return t ? t(e13, ...a) : a.reduce((r4, p, l2) => r4 + p + e13[l2 + 1], e13[0]);
};
var setCustomTemplateLiteralTag = (e13) => {
  t = e13;
};

// node_modules/@spectrum-web-components/icons-workflow/src/icons/Alert.js
var AlertIcon = ({ width: a = 24, height: t12 = 24, hidden: e13 = false, title: r4 = "Alert" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${t12}
    viewBox="0 0 36 36"
    width=${a}
    aria-hidden=${e13 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${r4}
  >
    <path
      d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
    />
  </svg>`;

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconAlert.js
var IconAlert = class extends t2 {
  render() {
    return setCustomTemplateLiteralTag(e), AlertIcon({ hidden: !this.label, title: this.label });
  }
};

// node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js
import { defineElement as r } from "/libs/features/spectrum-web-components/dist/base.js";
r("sp-icon-alert", IconAlert);

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconHelp.js
import { html as e2 } from "/libs/features/spectrum-web-components/dist/base.js";
import { IconBase as t3 } from "/libs/features/spectrum-web-components/dist/icon.js";

// node_modules/@spectrum-web-components/icons-workflow/src/icons/Help.js
var HelpIcon = ({ width: e13 = 24, height: a = 24, hidden: t12 = false, title: l2 = "Help" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${a}
    viewBox="0 0 36 36"
    width=${e13}
    aria-hidden=${t12 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${l2}
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm.047 26.876a2.69 2.69 0 1 1 0-5.375 2.62 2.62 0 0 1 2.8 2.67 2.581 2.581 0 0 1-2.8 2.705Zm3.566-12.818-.2.21c-.789.829-1.684 1.768-1.684 2.351a2.771 2.771 0 0 0 .359 1.348l.145.277-.113.429a.617.617 0 0 1-.567.378h-2.682a.867.867 0 0 1-.65-.235 4.111 4.111 0 0 1-.845-2.525c0-1.677.934-2.714 2.225-4.15.2-.219.39-.42.575-.609.629-.651 1.013-1.071 1.013-1.515 0-.308 0-1.245-1.786-1.245a5.918 5.918 0 0 0-3.159.919.592.592 0 0 1-.653-.02l-.237-.169-.055-.443v-2.9a.879.879 0 0 1 .393-.819 8.275 8.275 0 0 1 4.3-1.1c3.291 0 5.5 2.117 5.5 5.272a6.131 6.131 0 0 1-1.879 4.546Z"
    />
  </svg>`;

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconHelp.js
var IconHelp = class extends t3 {
  render() {
    return setCustomTemplateLiteralTag(e2), HelpIcon({ hidden: !this.label, title: this.label });
  }
};

// node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-help.js
import { defineElement as l } from "/libs/features/spectrum-web-components/dist/base.js";
l("sp-icon-help", IconHelp);

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconLinkOutLight.js
import { html as e3 } from "/libs/features/spectrum-web-components/dist/base.js";
import { IconBase as t4 } from "/libs/features/spectrum-web-components/dist/icon.js";

// node_modules/@spectrum-web-components/icons-workflow/src/icons/LinkOutLight.js
var LinkOutLightIcon = ({ width: t12 = 24, height: a = 24, hidden: e13 = false, title: l2 = "Link Out Light" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${a}
    viewBox="0 0 36 36"
    width=${t12}
    aria-hidden=${e13 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${l2}
  >
    <path
      d="M32 17.5V30H4V4h14.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H3a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V17.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Z"
    />
    <path
      d="m23.54 2.853 3.389 3.39-9.546 9.546a.5.5 0 0 0 0 .707l2.117 2.121a.5.5 0 0 0 .707 0l9.546-9.546 3.389 3.389a.5.5 0 0 0 .858-.353V2H23.893a.5.5 0 0 0-.353.853Z"
    />
  </svg>`;

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconLinkOutLight.js
var IconLinkOutLight = class extends t4 {
  render() {
    return setCustomTemplateLiteralTag(e3), LinkOutLightIcon({ hidden: !this.label, title: this.label });
  }
};

// node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-link-out-light.js
import { defineElement as t5 } from "/libs/features/spectrum-web-components/dist/base.js";
t5("sp-icon-link-out-light", IconLinkOutLight);

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconMagnify.js
import { html as e4 } from "/libs/features/spectrum-web-components/dist/base.js";
import { IconBase as t6 } from "/libs/features/spectrum-web-components/dist/icon.js";

// node_modules/@spectrum-web-components/icons-workflow/src/icons/Magnify.js
var MagnifyIcon = ({ width: t12 = 24, height: e13 = 24, hidden: a = false, title: l2 = "Magnify" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e13}
    viewBox="0 0 36 36"
    width=${t12}
    aria-hidden=${a ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${l2}
  >
    <path
      d="M33.173 30.215 25.4 22.443a12.826 12.826 0 1 0-2.957 2.957l7.772 7.772a2.1 2.1 0 0 0 2.958-2.958ZM6 15a9 9 0 1 1 9 9 9 9 0 0 1-9-9Z"
    />
  </svg>`;

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconMagnify.js
var IconMagnify = class extends t6 {
  render() {
    return setCustomTemplateLiteralTag(e4), MagnifyIcon({ hidden: !this.label, title: this.label });
  }
};

// node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-magnify.js
import { defineElement as e5 } from "/libs/features/spectrum-web-components/dist/base.js";
e5("sp-icon-magnify", IconMagnify);

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconUser.js
import { html as e6 } from "/libs/features/spectrum-web-components/dist/base.js";
import { IconBase as t7 } from "/libs/features/spectrum-web-components/dist/icon.js";

// node_modules/@spectrum-web-components/icons-workflow/src/icons/User.js
var UserIcon = ({ width: e13 = 24, height: t12 = 24, hidden: r4 = false, title: a = "User" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${t12}
    viewBox="0 0 36 36"
    width=${e13}
    aria-hidden=${r4 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${a}
  >
    <path
      d="M32.949 34a.993.993 0 0 0 1-1.053c-.661-7.184-8.027-9.631-10.278-9.827C22.026 22.977 22 21.652 22 20c0 0 3.532-3.943 3.532-8.958C25.532 5.617 22.445 2 18 2s-7.532 3.617-7.532 9.042C10.468 16.057 14 20 14 20c0 1.652-.026 2.977-1.674 3.12-2.251.2-9.617 2.643-10.278 9.827a.993.993 0 0 0 1 1.053Z"
    />
  </svg>`;

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconUser.js
var IconUser = class extends t7 {
  render() {
    return setCustomTemplateLiteralTag(e6), UserIcon({ hidden: !this.label, title: this.label });
  }
};

// node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-user.js
import { defineElement as r2 } from "/libs/features/spectrum-web-components/dist/base.js";
r2("sp-icon-user", IconUser);

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconUserGroup.js
import { html as e7 } from "/libs/features/spectrum-web-components/dist/base.js";
import { IconBase as t8 } from "/libs/features/spectrum-web-components/dist/icon.js";

// node_modules/@spectrum-web-components/icons-workflow/src/icons/UserGroup.js
var UserGroupIcon = ({ width: e13 = 24, height: t12 = 24, hidden: a = false, title: r4 = "User Group" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${t12}
    viewBox="0 0 36 36"
    width=${e13}
    aria-hidden=${a ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${r4}
  >
    <path
      d="M26.922 20.476c-1.441-.125-1.464-1.284-1.464-2.729a13.151 13.151 0 0 0 3.09-7.837c0-4.746-2.7-7.91-6.589-7.91a6.3 6.3 0 0 0-2.679.574c3.206 1.69 5.24 5.28 5.24 9.9a15.6 15.6 0 0 1-2.42 7.949.861.861 0 0 0 .474 1.288A13.488 13.488 0 0 1 31.779 30h3.257a.871.871 0 0 0 .879-.922c-.579-6.289-7.023-8.43-8.993-8.602Z"
    />
    <path
      d="M28.973 34a.931.931 0 0 0 .941-.988c-.62-6.734-7.525-9.028-9.636-9.212-1.544-.134-1.569-1.377-1.569-2.925a14.093 14.093 0 0 0 3.311-8.4C22.02 7.391 19.126 4 14.959 4S7.9 7.391 7.9 12.477a14.093 14.093 0 0 0 3.311 8.4c0 1.548-.025 2.791-1.569 2.925-2.113.182-9.018 2.476-9.642 9.21A.931.931 0 0 0 .945 34Z"
    />
  </svg>`;

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconUserGroup.js
var IconUserGroup = class extends t8 {
  render() {
    return setCustomTemplateLiteralTag(e7), UserGroupIcon({ hidden: !this.label, title: this.label });
  }
};

// node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-user-group.js
import { defineElement as r3 } from "/libs/features/spectrum-web-components/dist/base.js";
r3("sp-icon-user-group", IconUserGroup);

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconBook.js
import { html as e8 } from "/libs/features/spectrum-web-components/dist/base.js";
import { IconBase as t9 } from "/libs/features/spectrum-web-components/dist/icon.js";

// node_modules/@spectrum-web-components/icons-workflow/src/icons/Book.js
var BookIcon = ({ width: t12 = 24, height: e13 = 24, hidden: a = false, title: l2 = "Book" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e13}
    viewBox="0 0 36 36"
    width=${t12}
    aria-hidden=${a ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${l2}
  >
    <path
      d="M19.782 28H9.995a4 4 0 0 1 0-8h10.523a1 1 0 0 0 .8-.4l11.1-14.8a.5.5 0 0 0-.4-.8H16.025a1 1 0 0 0-.8.4L3.522 19.328A7.981 7.981 0 0 0 9.969 32h10.549a1 1 0 0 0 .8-.4l11.1-14.8a.5.5 0 0 0-.4-.8h-3.236Z"
    />
  </svg>`;

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconBook.js
var IconBook = class extends t9 {
  render() {
    return setCustomTemplateLiteralTag(e8), BookIcon({ hidden: !this.label, title: this.label });
  }
};

// node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-book.js
import { defineElement as e9 } from "/libs/features/spectrum-web-components/dist/base.js";
e9("sp-icon-book", IconBook);

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconDownload.js
import { html as e10 } from "/libs/features/spectrum-web-components/dist/base.js";
import { IconBase as t10 } from "/libs/features/spectrum-web-components/dist/icon.js";

// node_modules/@spectrum-web-components/icons-workflow/src/icons/Download.js
var DownloadIcon = ({ width: a = 24, height: t12 = 24, hidden: e13 = false, title: l2 = "Download" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    width=${a}
    height=${t12}
    viewBox="0 0 36 36"
    aria-hidden=${e13 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${l2}
  >
    <path
      d="M33 24h-2a1 1 0 0 0-1 1v5H6v-5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"
    />
    <path
      d="M17.65 26.856a.5.5 0 0 0 .7 0l7.446-7.525a.785.785 0 0 0 .204-.526.8.8 0 0 0-.802-.805H20V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v15h-5.198a.8.8 0 0 0-.802.805.785.785 0 0 0 .204.526Z"
    />
  </svg>`;

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconDownload.js
var IconDownload = class extends t10 {
  render() {
    return setCustomTemplateLiteralTag(e10), DownloadIcon({ hidden: !this.label, title: this.label });
  }
};

// node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-download.js
import { defineElement as n } from "/libs/features/spectrum-web-components/dist/base.js";
n("sp-icon-download", IconDownload);

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconOpenIn.js
import { html as e11 } from "/libs/features/spectrum-web-components/dist/base.js";
import { IconBase as t11 } from "/libs/features/spectrum-web-components/dist/icon.js";

// node_modules/@spectrum-web-components/icons-workflow/src/icons/OpenIn.js
var OpenInIcon = ({ width: a = 24, height: e13 = 24, hidden: t12 = false, title: l2 = "Open In" } = {}) => tag`<svg
    xmlns="http://www.w3.org/2000/svg"
    width=${a}
    height=${e13}
    viewBox="0 0 36 36"
    aria-hidden=${t12 ? "true" : "false"}
    role="img"
    fill="currentColor"
    aria-label=${l2}
  >
    <path
      d="M33 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6h24v24H19a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
    />
    <path
      d="M18.636 27.764a.784.784 0 0 0 .56.236.803.803 0 0 0 .804-.754v-10.75a.497.497 0 0 0-.496-.496H8.754a.803.803 0 0 0-.754.804.785.785 0 0 0 .235.56l3.786 3.786-9.042 9.042a1 1 0 0 0 0 1.415l1.414 1.414a1 1 0 0 0 1.414 0l9.043-9.042Z"
    />
  </svg>`;

// node_modules/@spectrum-web-components/icons-workflow/src/elements/IconOpenIn.js
var IconOpenIn = class extends t11 {
  render() {
    return setCustomTemplateLiteralTag(e11), OpenInIcon({ hidden: !this.label, title: this.label });
  }
};

// node_modules/@spectrum-web-components/icons-workflow/icons/sp-icon-open-in.js
import { defineElement as e12 } from "/libs/features/spectrum-web-components/dist/base.js";
e12("sp-icon-open-in", IconOpenIn);
//# sourceMappingURL=icons-workflow.js.map
