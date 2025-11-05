var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-academic-cv-lite_react-dom@19.2.0_react@19.2.0/node_modules/jsonresume-theme-academic-cv-lite/src/index.js
var index_exports = {};
__export(index_exports, {
  render: () => render
});
module.exports = __toCommonJS(index_exports);
var import_react137 = __toESM(require("react"), 1);
var import_server = require("react-dom/server");
var import_styled_components121 = require("styled-components");

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-academic-cv-lite_react-dom@19.2.0_react@19.2.0/node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx
var import_react136 = __toESM(require("react"), 1);
var import_styled_components120 = __toESM(require("styled-components"), 1);

// packages/resume-core/src/providers/ThemeProvider.jsx
var import_react = __toESM(require("react"));
var import_styled_components = require("styled-components");
var import_jsx_runtime = require("react/jsx-runtime");
var ThemeContext = (0, import_react.createContext)({
  theme: "professional",
  setTheme: () => {
  }
});
var GlobalStyles = import_styled_components.createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--resume-font-sans);
    font-size: var(--resume-size-body);
    line-height: var(--resume-line-height-normal);
    color: var(--resume-color-primary);
    background: var(--resume-color-background);
  }
`;

// packages/resume-core/src/primitives/index.jsx
var import_react10 = __toESM(require("react"));

// packages/resume-core/src/primitives/Section.jsx
var import_react2 = __toESM(require("react"));
var import_styled_components2 = __toESM(require("styled-components"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var StyledSection = import_styled_components2.default.section`
  margin-bottom: ${(props) => props.theme?.spacing?.section || "var(--resume-space-section, 2rem)"};

  @media print {
    page-break-inside: avoid;
  }
`;
function Section({ children, className, id, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    StyledSection,
    {
      id,
      className: `resume-section ${className || ""}`.trim(),
      ...rest,
      children
    }
  );
}

// packages/resume-core/src/primitives/SectionTitle.jsx
var import_react3 = __toESM(require("react"));
var import_styled_components3 = __toESM(require("styled-components"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var StyledTitle = import_styled_components3.default.h2`
  font-size: ${(props) => props.theme?.typography?.heading || "var(--resume-size-heading, 16pt)"};
  font-weight: 600;
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};
  margin: 0 0
    ${(props) => props.theme?.spacing?.item || "var(--resume-space-item, 1rem)"}
    0;
  padding-bottom: 4px;
  border-bottom: 2px solid
    ${(props) => props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)"};

  @media print {
    page-break-after: avoid;
  }
`;
var Icon = import_styled_components3.default.span`
  margin-right: 8px;
  font-size: 1.2em;
`;
function SectionTitle({
  children,
  icon,
  level = 2,
  className,
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    StyledTitle,
    {
      as: `h${level}`,
      className: `resume-section-title ${className || ""}`.trim(),
      ...rest,
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { "aria-hidden": "true", className: "resume-icon", children: icon }),
        children
      ]
    }
  );
}

// packages/resume-core/src/primitives/ListItem.jsx
var import_react4 = __toESM(require("react"));
var import_styled_components4 = __toESM(require("styled-components"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var ItemContainer = import_styled_components4.default.div`
  margin-bottom: ${(props) => props.theme?.spacing?.item || "var(--resume-space-item, 1rem)"};

  @media print {
    page-break-inside: avoid;
  }
`;
var ItemHeader = import_styled_components4.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
`;
var ItemTitle = import_styled_components4.default.div`
  font-weight: 600;
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};
  font-size: ${(props) => props.theme?.typography?.body || "var(--resume-size-body, 11pt)"};
`;
var ItemSubtitle = import_styled_components4.default.div`
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #333)"};
  margin-bottom: 4px;
`;
var ItemMeta = import_styled_components4.default.div`
  display: flex;
  gap: 12px;
  font-size: ${(props) => props.theme?.typography?.small || "var(--resume-size-small, 10pt)"};
  color: ${(props) => props.theme?.colors?.tertiary || "var(--resume-color-tertiary, #666)"};
  margin-bottom: 8px;
`;
var Description = import_styled_components4.default.p`
  margin: 8px 0;
  line-height: 1.6;
`;
var Highlights = import_styled_components4.default.ul`
  margin: 8px 0;
  padding-left: 20px;
  list-style-type: disc;

  li {
    margin: 4px 0;
    line-height: 1.5;
  }
`;

// packages/resume-core/src/primitives/DateRange.jsx
var import_react5 = __toESM(require("react"));
var import_styled_components5 = __toESM(require("styled-components"));
var import_jsx_runtime5 = require("react/jsx-runtime");
function formatDateRange({
  startDate,
  endDate,
  format = "short",
  locale = "en-US",
  numberingSystem,
  presentLabel
}) {
  if (!startDate) return "";
  const getPresentLabel = () => {
    if (presentLabel) return presentLabel;
    const labels = {
      en: "Present",
      "en-US": "Present",
      "en-GB": "Present",
      fr: "Pr\xE9sent",
      "fr-FR": "Pr\xE9sent",
      es: "Presente",
      "es-ES": "Presente",
      de: "Heute",
      "de-DE": "Heute",
      it: "Presente",
      "it-IT": "Presente",
      pt: "Presente",
      "pt-BR": "Presente",
      ja: "\u73FE\u5728",
      "ja-JP": "\u73FE\u5728",
      zh: "\u81F3\u4ECA",
      "zh-CN": "\u81F3\u4ECA",
      "zh-TW": "\u81F3\u4ECA",
      ko: "\uD604\uC7AC",
      "ko-KR": "\uD604\uC7AC",
      ar: "\u062D\u0627\u0636\u0631",
      "ar-SA": "\u062D\u0627\u0636\u0631"
    };
    return labels[locale] || labels[locale.split("-")[0]] || "Present";
  };
  const formatDate = (dateStr) => {
    if (!dateStr) return getPresentLabel();
    const date = typeof dateStr === "string" ? new Date(dateStr) : dateStr;
    if (isNaN(date.getTime())) return dateStr;
    const monthFormats = {
      short: { month: "short" },
      long: { month: "long" },
      numeric: { month: "2-digit" }
    };
    const options = {
      ...monthFormats[format],
      year: "numeric"
    };
    if (numberingSystem) {
      options.numberingSystem = numberingSystem;
    }
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
  };
  const start = formatDate(startDate);
  const end = formatDate(endDate);
  return `${start} - ${end}`;
}
var StyledDateRange = import_styled_components5.default.span`
  font-size: ${(props) => props.theme?.typography?.small || "var(--resume-size-small, 10pt)"};
  color: ${(props) => props.theme?.colors?.tertiary || "var(--resume-color-tertiary, #666)"};
  white-space: nowrap;
`;
function DateRange({
  startDate,
  endDate,
  format = "short",
  locale = "en-US",
  numberingSystem,
  presentLabel,
  className,
  ...rest
}) {
  const formatted = formatDateRange({
    startDate,
    endDate,
    format,
    locale,
    numberingSystem,
    presentLabel
  });
  if (!formatted) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    StyledDateRange,
    {
      className: `resume-date-range ${className || ""}`.trim(),
      ...rest,
      children: formatted
    }
  );
}

// packages/resume-core/src/primitives/Badge.jsx
var import_react6 = __toESM(require("react"));
var import_styled_components6 = __toESM(require("styled-components"));
var import_jsx_runtime6 = require("react/jsx-runtime");
var StyledBadge = import_styled_components6.default.span`
  display: inline-block;
  padding: ${(props) => {
  if (props.$size === "sm") return "2px 8px";
  if (props.$size === "lg") return "6px 16px";
  return "4px 12px";
}};
  border-radius: ${(props) => props.theme?.radius?.sm || "var(--resume-radius-sm, 4px)"};
  font-size: ${(props) => {
  if (props.$size === "sm") return "9pt";
  if (props.$size === "lg") return "11pt";
  return "10pt";
}};
  font-weight: 500;
  background: ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accentLight || "var(--resume-color-accent-light, #e6f2ff)";
  }
  if (props.$variant === "secondary") {
    return props.theme?.colors?.muted || "var(--resume-color-muted, #f5f5f5)";
  }
  return props.theme?.colors?.muted || "var(--resume-color-muted, #f5f5f5)";
}};
  color: ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)";
  }
  return props.theme?.colors?.primary || "var(--resume-color-primary, #000)";
}};

  @media print {
    background: ${(props) => props.$variant === "accent" ? "#e6f2ff" : "#f5f5f5"};
    color: ${(props) => props.$variant === "accent" ? "#0066cc" : "#000"};
  }
`;
var BadgeContainer = import_styled_components6.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
`;

// packages/resume-core/src/primitives/ContactInfo.jsx
var import_react7 = __toESM(require("react"));
var import_styled_components7 = __toESM(require("styled-components"));

// packages/resume-core/src/utils/security.js
function safeUrl(url) {
  if (!url || typeof url !== "string") {
    return null;
  }
  const trimmed = url.trim();
  const dangerousProtocols = /^(javascript|data|vbscript|file|about):/i;
  if (dangerousProtocols.test(trimmed)) {
    console.warn(`[Security] Blocked dangerous URL: ${trimmed.slice(0, 50)}`);
    return null;
  }
  const safeProtocols = /^(https?|mailto|tel|sms|ftp):/i;
  if (safeProtocols.test(trimmed)) {
    return trimmed;
  }
  if (trimmed.startsWith("/") || trimmed.startsWith(".")) {
    return trimmed;
  }
  if (/^www\./i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  if (/^[a-z0-9][a-z0-9.-]+\.[a-z]{2,}$/i.test(trimmed)) {
    return `https://${trimmed}`;
  }
  console.warn(`[Security] Uncertain URL safety: ${trimmed.slice(0, 50)}`);
  return trimmed;
}

// packages/resume-core/src/primitives/ContactInfo.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var ContactContainer = import_styled_components7.default.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme?.spacing?.small || "var(--resume-space-small, 12px)"};
  flex-wrap: wrap;
  font-size: ${(props) => props.theme?.typography?.small || "var(--resume-size-small, 10pt)"};
  color: ${(props) => props.theme?.colors?.text || "var(--resume-color-text, #333)"};

  a {
    color: ${(props) => props.theme?.colors?.link || "var(--resume-color-link, #0066cc)"};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
var ContactItem = import_styled_components7.default.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;
var Separator = import_styled_components7.default.span`
  color: ${(props) => props.theme?.colors?.muted || "var(--resume-color-muted, #999)"};
`;
function ContactInfo({ basics = {}, separator = "\u2022", className }) {
  const { email, phone, url, location, profiles = [] } = basics;
  const items = [];
  if (email) {
    items.push(
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { href: safeUrl(`mailto:${email}`), "aria-label": "Email", children: email }) }, "email")
    );
  }
  if (phone) {
    items.push(
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { href: safeUrl(`tel:${phone}`), "aria-label": "Phone", children: phone }) }, "phone")
    );
  }
  if (location) {
    const locationStr = [location.city, location.region, location.countryCode].filter(Boolean).join(", ");
    if (locationStr) {
      items.push(
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ContactItem, { "aria-label": "Location", children: locationStr }, "location")
      );
    }
  }
  if (url) {
    const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    items.push(
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "a",
        {
          href: safeUrl(url),
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Website",
          children: displayUrl
        }
      ) }, "url")
    );
  }
  profiles.forEach((profile, index) => {
    if (profile.url) {
      items.push(
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "a",
          {
            href: safeUrl(profile.url),
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": profile.network,
            children: profile.network || profile.username
          }
        ) }, `profile-${index}`)
      );
    }
  });
  if (items.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ContactContainer, { className: `resume-contact ${className || ""}`.trim(), children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react7.default.Fragment, { children: [
    index > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Separator, { "aria-hidden": "true", children: separator }),
    item
  ] }, index)) });
}

// packages/resume-core/src/primitives/Link.jsx
var import_react8 = __toESM(require("react"));
var import_styled_components8 = __toESM(require("styled-components"));
var import_jsx_runtime8 = require("react/jsx-runtime");
var StyledLink = import_styled_components8.default.a`
  color: ${(props) => props.theme?.colors?.link || "var(--resume-color-link, #0066cc)"};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${(props) => props.theme?.colors?.linkVisited || "var(--resume-color-link-visited, #551a8b)"};
  }

  @media print {
    color: inherit;
    text-decoration: underline;
  }
`;

// packages/resume-core/src/primitives/InlineSeparatorPipe.jsx
var import_react9 = __toESM(require("react"));
var import_styled_components9 = __toESM(require("styled-components"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var StyledPipe = import_styled_components9.default.span`
  /* Thin space (U+2009) + pipe + thin space for balanced spacing */
  &::before {
    content: '\u2009|\u2009';
    opacity: 0.5;
    color: ${(props) => props.$color || "currentColor"};
    font-weight: normal;
  }

  /* Ensure consistent spacing across browsers */
  display: inline;
  white-space: pre;

  @media print {
    &::before {
      content: '\u2009|\u2009';
      opacity: 0.6;
    }
  }
`;

// packages/resume-core/src/primitives/KeylineDivider.tsx
var import_styled_components10 = __toESM(require("styled-components"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var StyledHr = import_styled_components10.default.hr`
  border: none;
  border-top: 0.5pt solid
    ${(props) => props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"};
  margin-left: ${(props) => props.inset || "0"};
  margin-right: ${(props) => props.inset || "0"};
  margin-top: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};

  @media print {
    /* Ensure minimum stroke weight for print visibility */
    border-top-width: 0.3pt;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Ensure border renders in all print modes */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// packages/resume-core/src/primitives/DottedDivider.tsx
var import_styled_components11 = __toESM(require("styled-components"));
var import_jsx_runtime11 = require("react/jsx-runtime");
var StyledHr2 = import_styled_components11.default.hr`
  border: none;
  border-top: ${(props) => props.dotSize || "2px"} dotted
    ${(props) => props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"};
  margin-top: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};

  /* Override default border-top-width to use fixed spacing */
  ${(props) => props.spacing && `
    background-image: radial-gradient(
      circle,
      ${props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"} ${props.dotSize || "2px"},
      transparent ${props.dotSize || "2px"}
    );
    background-size: ${props.spacing} 1px;
    background-repeat: repeat-x;
    background-position: center;
    border: none;
    height: 1px;
  `}

  @media print {
    /* Ensure dots render in all print modes */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Fixed dot rendering for PDF generation */
    border-top-width: ${(props) => props.dotSize || "2px"};
  }
`;

// packages/resume-core/src/primitives/AccentSidebarStripe.tsx
var import_styled_components12 = __toESM(require("styled-components"));
var import_jsx_runtime12 = require("react/jsx-runtime");
var StyledStripe = import_styled_components12.default.div`
  position: absolute;
  ${(props) => props.position === "right" ? "right: 0;" : "left: 0;"}
  top: ${(props) => props.top || "0"};
  width: ${(props) => props.width || "4mm"};
  max-width: 6mm; /* ATS-safe maximum */
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.color || props.theme?.colors?.accent || "var(--resume-color-accent, #2563eb)"};
  pointer-events: none; /* Prevent interaction */

  @media print {
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks inside stripe */
    page-break-inside: avoid;
  }

  @media screen and (max-width: 768px) {
    /* Reduce width on mobile */
    width: ${(props) => props.width ? `calc(${props.width} * 0.75)` : "3mm"};
  }
`;

// packages/resume-core/src/primitives/AccentTopRule.tsx
var import_styled_components13 = __toESM(require("styled-components"));
var import_jsx_runtime13 = require("react/jsx-runtime");
var StyledRule = import_styled_components13.default.div`
  width: ${(props) => props.width || "30%"};
  max-width: 40%; /* Design constraint: max 40% */
  min-width: 25%; /* Design constraint: min 25% */
  height: ${(props) => props.thickness || "2.5pt"};
  background-color: ${(props) => props.color || props.theme?.colors?.accent || "var(--resume-color-accent, #2563eb)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-left: ${(props) => {
  if (props.align === "center") return "auto";
  if (props.align === "right") return "auto";
  return "0";
}};
  margin-right: ${(props) => {
  if (props.align === "center") return "auto";
  if (props.align === "right") return "0";
  return "auto";
}};

  @media print {
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    /* Prevent page breaks */
    page-break-inside: avoid;
    /* Ensure minimum thickness for print visibility */
    min-height: 2pt;
  }

  @media screen and (max-width: 768px) {
    /* Increase width slightly on mobile for better visibility */
    width: ${(props) => props.width ? `calc(${props.width} * 1.2)` : "36%"};
  }
`;

// packages/resume-core/src/primitives/RulesetStack.tsx
var import_styled_components14 = __toESM(require("styled-components"));
var import_jsx_runtime14 = require("react/jsx-runtime");
var StyledStack = import_styled_components14.default.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};
  margin-bottom: ${(props) => props.theme?.spacing?.tight || "var(--resume-space-tight, 0.5rem)"};

  @media print {
    page-break-inside: avoid;
  }
`;
var StyledRule2 = import_styled_components14.default.div`
  width: 100%;
  height: ${(props) => props.thickness || "0.4pt"};
  background-color: ${(props) => props.color || props.theme?.colors?.border || "var(--resume-color-border, #e5e7eb)"};
  margin-bottom: ${(props) => props.gapSize};

  &:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Ensure minimum stroke weight for print visibility */
    min-height: 0.3pt;
    /* Ensure color renders in print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// packages/resume-core/src/layouts/index.jsx
var import_react17 = __toESM(require("react"));

// packages/resume-core/src/layouts/GridLayout.jsx
var import_react11 = __toESM(require("react"));
var import_styled_components15 = __toESM(require("styled-components"));
var import_jsx_runtime15 = require("react/jsx-runtime");
var Grid = import_styled_components15.default.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns === 1 ? "1fr" : `repeat(${props.$columns}, 1fr)`};
  gap: ${(props) => props.$gap || "var(--resume-column-gap)"};
  margin-bottom: ${(props) => props.$spacing || "var(--resume-space-section)"};

  @media print {
    gap: ${(props) => props.$gap || "16px"};
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// packages/resume-core/src/layouts/SidebarLayout.jsx
var import_react12 = __toESM(require("react"));
var import_styled_components16 = __toESM(require("styled-components"));
var import_jsx_runtime16 = require("react/jsx-runtime");
var Container = import_styled_components16.default.div`
  display: grid;
  grid-template-columns: ${(props) => props.$sidebarPosition === "right" ? `1fr ${props.$sidebarWidth || "30%"}` : `${props.$sidebarWidth || "30%"} 1fr`};
  gap: ${(props) => props.$gap || "var(--resume-column-gap)"};

  @media print {
    gap: ${(props) => props.$gap || "16px"};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
var Sidebar = import_styled_components16.default.aside`
  grid-area: ${(props) => props.$position === "right" ? "1 / 2" : "1 / 1"};

  @media (max-width: 768px) {
    grid-area: auto;
  }
`;
var Main = import_styled_components16.default.main`
  grid-area: ${(props) => props.$sidebarPosition === "right" ? "1 / 1" : "1 / 2"};

  @media (max-width: 768px) {
    grid-area: auto;
  }
`;

// packages/resume-core/src/layouts/StackLayout.jsx
var import_react13 = __toESM(require("react"));
var import_styled_components17 = __toESM(require("styled-components"));
var import_jsx_runtime17 = require("react/jsx-runtime");
var Stack = import_styled_components17.default.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$spacing || "var(--resume-space-item)"};

  @media print {
    gap: ${(props) => props.$spacing || "12px"};
  }
`;

// packages/resume-core/src/layouts/CardLayout.jsx
var import_react14 = __toESM(require("react"));
var import_styled_components18 = __toESM(require("styled-components"));
var import_jsx_runtime18 = require("react/jsx-runtime");
var CardGrid = import_styled_components18.default.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.$minCardWidth || "250px"}, 1fr)
  );
  gap: ${(props) => props.$gap || "var(--resume-space-item)"};
  margin-bottom: ${(props) => props.$spacing || "var(--resume-space-section)"};

  @media print {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${(props) => props.$gap || "12px"};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// packages/resume-core/src/layouts/FlexLayout.jsx
var import_react15 = __toESM(require("react"));
var import_styled_components19 = __toESM(require("styled-components"));
var import_jsx_runtime19 = require("react/jsx-runtime");
var Flex = import_styled_components19.default.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || "row"};
  justify-content: ${(props) => props.$justify || "flex-start"};
  align-items: ${(props) => props.$align || "stretch"};
  flex-wrap: ${(props) => props.$wrap ? "wrap" : "nowrap"};
  gap: ${(props) => props.$gap || "var(--resume-space-tight)"};

  @media print {
    gap: ${(props) => props.$gap || "8px"};
  }

  @media (max-width: 768px) {
    flex-direction: ${(props) => props.$responsiveDirection || props.$direction === "row" ? "column" : props.$direction};
  }
`;

// packages/resume-core/src/layouts/TwoColumnMicroGrid.jsx
var import_react16 = __toESM(require("react"));
var import_styled_components20 = __toESM(require("styled-components"));
var import_jsx_runtime20 = require("react/jsx-runtime");
var StyledTwoColumnGrid = import_styled_components20.default.div`
  /* Use CSS columns for visual two-column layout */
  column-count: 2;
  column-gap: ${(props) => props.$columnGap || "16px"};

  /* Prevent column breaks inside items */
  & > * {
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: ${(props) => props.$gap || "8px"};
    display: block;
  }

  /* Last item in each column shouldn't have bottom margin */
  & > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    column-count: 2;
    column-gap: 12pt;

    & > * {
      margin-bottom: 6pt;
      break-inside: avoid;
      page-break-inside: avoid;
    }
  }

  /* Collapse to single column on small screens */
  @media (max-width: 768px) {
    column-count: 1;
    column-gap: 0;

    & > * {
      margin-bottom: ${(props) => props.$gap || "8px"};
    }
  }
`;

// packages/resume-core/src/skills/index.jsx
var import_react24 = __toESM(require("react"));

// packages/resume-core/src/skills/SkillBar.jsx
var import_react18 = __toESM(require("react"));
var import_styled_components21 = __toESM(require("styled-components"));
var import_jsx_runtime21 = require("react/jsx-runtime");
var Container2 = import_styled_components21.default.div`
  margin-bottom: var(--resume-space-tight);
`;
var Label = import_styled_components21.default.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
var BarContainer = import_styled_components21.default.div`
  width: 100%;
  height: ${(props) => props.$height || "8px"};
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var BarFill = import_styled_components21.default.div`
  width: ${(props) => props.$level}%;
  height: 100%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// packages/resume-core/src/skills/SkillPill.jsx
var import_react19 = __toESM(require("react"));
var import_styled_components22 = __toESM(require("styled-components"));
var import_jsx_runtime22 = require("react/jsx-runtime");
var Pill = import_styled_components22.default.span`
  display: inline-block;
  padding: ${(props) => props.$size === "small" ? "4px 8px" : "6px 12px"};
  margin: 4px;
  background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(props) => props.$variant === "filled" ? "#ffffff" : "var(--resume-color-primary)"};
  border: ${(props) => props.$variant === "outlined" ? "1px solid var(--resume-color-border)" : "none"};
  border-radius: ${(props) => props.$rounded ? "999px" : "var(--resume-radius-sm)"};
  font-size: ${(props) => props.$size === "small" ? "var(--resume-size-small)" : "var(--resume-size-body)"};
  font-weight: var(--resume-weight-medium);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    margin: 2px;
  }
`;

// packages/resume-core/src/skills/SkillRating.jsx
var import_react20 = __toESM(require("react"));
var import_styled_components23 = __toESM(require("styled-components"));
var import_jsx_runtime23 = require("react/jsx-runtime");
var Container3 = import_styled_components23.default.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-tight);
`;
var SkillName = import_styled_components23.default.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
var RatingContainer = import_styled_components23.default.div`
  display: flex;
  gap: 4px;
`;
var Dot = import_styled_components23.default.span`
  width: ${(props) => props.$size || "10px"};
  height: ${(props) => props.$size || "10px"};
  border-radius: 50%;
  background-color: ${(props) => props.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// packages/resume-core/src/skills/SkillGroup.jsx
var import_react21 = __toESM(require("react"));
var import_styled_components24 = __toESM(require("styled-components"));
var import_jsx_runtime24 = require("react/jsx-runtime");
var Container4 = import_styled_components24.default.div`
  margin-bottom: var(--resume-space-item);
`;
var Category = import_styled_components24.default.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin-bottom: var(--resume-space-tight);
`;
var Skills = import_styled_components24.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
var Skill = import_styled_components24.default.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);

  &:not(:last-child)::after {
    content: '${(props) => props.$separator || "\u2022"}';
    margin-left: 6px;
    color: var(--resume-color-border);
  }
`;

// packages/resume-core/src/skills/SkillCloud.jsx
var import_react22 = __toESM(require("react"));
var import_styled_components25 = __toESM(require("styled-components"));
var import_jsx_runtime25 = require("react/jsx-runtime");
var Container5 = import_styled_components25.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;
var SkillTag = import_styled_components25.default.span`
  display: inline-block;
  padding: 4px 12px;
  font-size: ${(props) => {
  if (props.$weight >= 80) return "var(--resume-size-subheading)";
  if (props.$weight >= 50) return "var(--resume-size-body)";
  return "var(--resume-size-small)";
}};
  font-weight: ${(props) => props.$weight >= 70 ? "var(--resume-weight-semibold)" : "var(--resume-weight-normal)"};
  color: var(--resume-color-primary);
  background-color: ${(props) => `color-mix(in srgb, var(--resume-color-accent) ${props.$weight}%, transparent)`};
  border-radius: var(--resume-radius-sm);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// packages/resume-core/src/skills/SkillCategory.jsx
var import_react23 = __toESM(require("react"));
var import_styled_components26 = __toESM(require("styled-components"));
var import_jsx_runtime26 = require("react/jsx-runtime");
var Container6 = import_styled_components26.default.div`
  margin-bottom: var(--resume-space-item);
`;
var CategoryTitle = import_styled_components26.default.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin-bottom: var(--resume-space-tight);
  border-bottom: 1px solid var(--resume-color-border);
  padding-bottom: 4px;
`;
var SkillList = import_styled_components26.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
var SkillItem = import_styled_components26.default.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
var SkillName2 = import_styled_components26.default.span`
  flex: 1;
`;
var SkillLevel = import_styled_components26.default.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-medium);
`;

// packages/resume-core/src/timeline/index.jsx
var import_react27 = __toESM(require("react"));

// packages/resume-core/src/timeline/TimelineSection.jsx
var import_react25 = __toESM(require("react"));
var import_styled_components27 = __toESM(require("styled-components"));
var import_jsx_runtime27 = require("react/jsx-runtime");
var Container7 = import_styled_components27.default.div`
  position: relative;
  margin-bottom: var(--resume-space-section);

  @media print {
    page-break-inside: avoid;
  }
`;

// packages/resume-core/src/timeline/TimelineItem.jsx
var import_react26 = __toESM(require("react"));
var import_styled_components28 = __toESM(require("styled-components"));
var import_jsx_runtime28 = require("react/jsx-runtime");
var Item = import_styled_components28.default.div`
  position: relative;
  padding-left: ${(props) => props.$showLine ? "32px" : "0"};
  margin-bottom: var(--resume-space-item);

  ${(props) => props.$showLine && `
    &::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      bottom: -16px;
      width: 2px;
      background-color: var(--resume-color-border);
    }

    &:last-child::before {
      display: none;
    }
  `}

  @media print {
    break-inside: avoid;
  }
`;
var Marker = import_styled_components28.default.div`
  position: absolute;
  left: 0;
  top: 6px;
  width: ${(props) => props.$size || "16px"};
  height: ${(props) => props.$size || "16px"};
  border-radius: 50%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  border: 2px solid var(--resume-color-background);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Content = import_styled_components28.default.div`
  display: flex;
  flex-direction: column;
`;
var Header = import_styled_components28.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
  flex-wrap: wrap;
`;
var Title = import_styled_components28.default.h3`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0;
`;
var Meta = import_styled_components28.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var Description2 = import_styled_components28.default.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// packages/resume-core/src/timeline/TimelineRuleMinimal.tsx
var import_styled_components29 = __toESM(require("styled-components"));
var import_jsx_runtime29 = require("react/jsx-runtime");
var Container8 = import_styled_components29.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--resume-space-item, 12pt);

  @media print {
    break-inside: avoid;
  }
`;
var Rule = import_styled_components29.default.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: ${(props) => props.$lineColor || "var(--resume-color-border, #ddd)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Item2 = import_styled_components29.default.div`
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-left: 20px;
`;
var Tick = import_styled_components29.default.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: ${(props) => props.$width || "8px"};
  height: ${(props) => {
  const height = props.$height || "2pt";
  const value = parseFloat(height);
  const unit = height.replace(/[\d.]/g, "");
  return value < 2 && unit === "pt" ? "2pt" : height;
}};
  background-color: ${(props) => props.$color || "var(--resume-color-border, #ddd)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    min-height: 2pt; /* Ensure visibility in print */
  }
`;
var Date2 = import_styled_components29.default.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-secondary, #666);
  font-weight: var(--resume-weight-normal, 400);
  white-space: nowrap;
  flex-shrink: 0;
`;
var Content2 = import_styled_components29.default.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;
var Label2 = import_styled_components29.default.span`
  font-size: var(--resume-size-body, 11pt);
  color: var(--resume-color-primary, #000);
  font-weight: var(--resume-weight-medium, 500);
`;
var Meta2 = import_styled_components29.default.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-tertiary, #999);
`;

// packages/resume-core/src/timeline/TimelineInline.tsx
var import_styled_components30 = __toESM(require("styled-components"));
var import_jsx_runtime30 = require("react/jsx-runtime");
var InlineContainer = import_styled_components30.default.span`
  font-size: var(--resume-size-small, 10pt);
  color: var(--resume-color-secondary, #666);
  white-space: nowrap;
  font-variant-numeric: tabular-nums; /* Consistent number width */

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var DateText = import_styled_components30.default.span`
  font-weight: var(--resume-weight-normal, 400);
`;
var Separator2 = import_styled_components30.default.span`
  /* En dash with narrow no-break spaces for proper typography */
  margin: 0;
  padding: 0;
`;

// packages/resume-core/src/profile/index.jsx
var import_react32 = __toESM(require("react"));

// packages/resume-core/src/profile/Avatar.jsx
var import_react28 = __toESM(require("react"));
var import_styled_components31 = __toESM(require("styled-components"));
var import_jsx_runtime31 = require("react/jsx-runtime");
var Image = import_styled_components31.default.img`
  width: ${(props) => props.$size || "80px"};
  height: ${(props) => props.$size || "80px"};
  border-radius: ${(props) => props.$rounded ? "50%" : "var(--resume-radius-md)"};
  object-fit: cover;
  border: ${(props) => props.$border ? `2px solid var(--resume-color-border)` : "none"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Placeholder = import_styled_components31.default.div`
  width: ${(props) => props.$size || "80px"};
  height: ${(props) => props.$size || "80px"};
  border-radius: ${(props) => props.$rounded ? "50%" : "var(--resume-radius-md)"};
  background-color: var(--resume-color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${(props) => props.$size || "80px"} / 2);
  color: var(--resume-color-secondary);
  font-weight: var(--resume-weight-semibold);
`;

// packages/resume-core/src/profile/ProfileCard.jsx
var import_react29 = __toESM(require("react"));
var import_styled_components32 = __toESM(require("styled-components"));
var import_jsx_runtime32 = require("react/jsx-runtime");
var Card = import_styled_components32.default.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || "column"};
  align-items: ${(props) => props.$direction === "row" ? "center" : "flex-start"};
  gap: var(--resume-space-item);
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-section);

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
var Info = import_styled_components32.default.div`
  flex: 1;
`;
var Name = import_styled_components32.default.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
var Title2 = import_styled_components32.default.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0 0 var(--resume-space-tight) 0;
`;
var Summary = import_styled_components32.default.p`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  margin: 0;
`;

// packages/resume-core/src/profile/ContactGrid.jsx
var import_react30 = __toESM(require("react"));
var import_styled_components33 = __toESM(require("styled-components"));
var import_jsx_runtime33 = require("react/jsx-runtime");
var Grid2 = import_styled_components33.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-section);

  @media print {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;
var Item3 = import_styled_components33.default.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
var Icon2 = import_styled_components33.default.span`
  color: var(--resume-color-accent);
`;
var Link2 = import_styled_components33.default.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--resume-color-accent);
  }

  @media print {
    color: var(--resume-color-secondary);
  }
`;

// packages/resume-core/src/profile/SocialLinks.jsx
var import_react31 = __toESM(require("react"));
var import_styled_components34 = __toESM(require("styled-components"));
var import_jsx_runtime34 = require("react/jsx-runtime");
var Container9 = import_styled_components34.default.div`
  display: flex;
  gap: var(--resume-space-tight);
  flex-wrap: wrap;
`;
var Link3 = import_styled_components34.default.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  text-decoration: none;
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--resume-color-accent);
    color: #ffffff;
    border-color: var(--resume-color-accent);
  }

  @media print {
    border: 1px solid var(--resume-color-border);
    color: var(--resume-color-primary);
  }
`;
var Icon3 = import_styled_components34.default.span`
  display: inline-flex;
`;

// packages/resume-core/src/typography/index.jsx
var import_react39 = __toESM(require("react"));

// packages/resume-core/src/typography/Heading.jsx
var import_react33 = __toESM(require("react"));
var import_styled_components35 = __toESM(require("styled-components"));
var import_jsx_runtime35 = require("react/jsx-runtime");
var StyledHeading = import_styled_components35.default.h1`
  font-size: ${(props) => {
  const sizes = {
    1: "var(--resume-size-name)",
    2: "var(--resume-size-heading)",
    3: "var(--resume-size-subheading)",
    4: "var(--resume-size-body)"
  };
  return sizes[props.$level] || sizes[2];
}};
  font-weight: ${(props) => props.$weight || "var(--resume-weight-semibold)"};
  color: ${(props) => props.$color || "var(--resume-color-primary)"};
  margin: 0 0 ${(props) => props.$spacing || "var(--resume-space-tight)"} 0;
  line-height: var(--resume-line-height-tight);
`;

// packages/resume-core/src/typography/Text.jsx
var import_react34 = __toESM(require("react"));
var import_styled_components36 = __toESM(require("styled-components"));
var import_jsx_runtime36 = require("react/jsx-runtime");
var StyledText = import_styled_components36.default.p`
  font-size: ${(props) => props.$size || "var(--resume-size-body)"};
  font-weight: ${(props) => props.$weight || "var(--resume-weight-normal)"};
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  line-height: ${(props) => props.$lineHeight || "var(--resume-line-height-normal)"};
  margin: 0 0 ${(props) => props.$spacing || "0"} 0;
`;

// packages/resume-core/src/typography/Label.jsx
var import_react35 = __toESM(require("react"));
var import_styled_components37 = __toESM(require("styled-components"));
var import_jsx_runtime37 = require("react/jsx-runtime");
var StyledLabel = import_styled_components37.default.span`
  display: inline-block;
  font-size: var(--resume-size-small);
  font-weight: ${(props) => props.$weight || "var(--resume-weight-medium)"};
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  text-transform: ${(props) => props.$uppercase ? "uppercase" : "none"};
  letter-spacing: ${(props) => props.$uppercase ? "0.05em" : "normal"};
`;

// packages/resume-core/src/typography/SectionIntroParagraph.jsx
var import_react36 = __toESM(require("react"));
var import_styled_components38 = __toESM(require("styled-components"));
var import_jsx_runtime38 = require("react/jsx-runtime");
var StyledIntroParagraph = import_styled_components38.default.p`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-normal);
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  line-height: var(--resume-line-height-relaxed);
  margin: 0 0 var(--resume-space-item) 0;
  max-width: ${(props) => props.$maxWidth || "100%"};

  /* Softer appearance for intro text */
  opacity: 0.95;

  /* Print optimization - maintain readability */
  @media print {
    line-height: var(--resume-line-height-normal);
    opacity: 1;
    page-break-inside: avoid;
  }
`;

// packages/resume-core/src/typography/QuoteStripe.jsx
var import_react37 = __toESM(require("react"));
var import_styled_components39 = __toESM(require("styled-components"));
var import_jsx_runtime39 = require("react/jsx-runtime");
var StyledQuoteStripe = import_styled_components39.default.blockquote`
  margin: 0 0 var(--resume-space-item) 0;
  padding: 2px 0 2px ${(props) => props.$paddingLeft || "16px"};
  border-left: ${(props) => props.$borderWidth || "3px"} solid
    ${(props) => props.$accentColor || "var(--resume-color-accent)"};

  font-size: var(--resume-size-body);
  font-style: ${(props) => props.$fontStyle || "italic"};
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-primary);
  line-height: var(--resume-line-height-normal);

  /* Prevent quote clipping with subtle padding */
  padding-right: 2px;

  /* Single-line constraint */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Print optimization */
  @media print {
    page-break-inside: avoid;
    color: #000;
    border-left-color: ${(props) => props.$accentColor || "#000"};
  }
`;

// packages/resume-core/src/typography/HyphenationSafeParagraph.jsx
var import_react38 = __toESM(require("react"));
var import_styled_components40 = __toESM(require("styled-components"));
var import_jsx_runtime40 = require("react/jsx-runtime");
var StyledHyphenatedParagraph = import_styled_components40.default.p`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-normal);
  color: ${(props) => props.$color || "var(--resume-color-secondary)"};
  line-height: var(--resume-line-height-normal);
  text-align: ${(props) => props.$textAlign || "left"};
  margin: 0 0 var(--resume-space-tight) 0;

  /* Enable hyphenation for better text flow */
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;

  /* Prevent orphans and widows */
  orphans: 2;
  widows: 2;

  /* Balanced text wrapping */
  text-wrap: balance;

  /* Optional line clamping */
  ${(props) => props.$maxLines && `
    display: -webkit-box;
    -webkit-line-clamp: ${props.$maxLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  /* Print optimization - disable hyphenation for cleaner output */
  @media print {
    hyphens: none;
    -webkit-hyphens: none;
    page-break-inside: avoid;
    text-wrap: pretty;
  }
`;

// packages/resume-core/src/data/index.jsx
var import_react47 = __toESM(require("react"));

// packages/resume-core/src/data/ProgressCircle.jsx
var import_react40 = __toESM(require("react"));
var import_styled_components41 = __toESM(require("styled-components"));
var import_jsx_runtime41 = require("react/jsx-runtime");
var Container10 = import_styled_components41.default.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
var Circle = import_styled_components41.default.svg`
  transform: rotate(-90deg);
`;
var Label4 = import_styled_components41.default.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  font-weight: var(--resume-weight-medium);
`;

// packages/resume-core/src/data/StatCard.jsx
var import_react41 = __toESM(require("react"));
var import_styled_components42 = __toESM(require("styled-components"));
var import_jsx_runtime42 = require("react/jsx-runtime");
var Card2 = import_styled_components42.default.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  text-align: ${(props) => props.$align || "left"};

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
var Value = import_styled_components42.default.div`
  font-size: ${(props) => props.$size || "var(--resume-size-name)"};
  font-weight: var(--resume-weight-bold);
  color: ${(props) => props.$color || "var(--resume-color-accent)"};
  line-height: 1;
  margin-bottom: 4px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Label5 = import_styled_components42.default.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;
var Description3 = import_styled_components42.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-top: 4px;
`;

// packages/resume-core/src/data/MetricBar.jsx
var import_react42 = __toESM(require("react"));
var import_styled_components43 = __toESM(require("styled-components"));
var import_jsx_runtime43 = require("react/jsx-runtime");
var Container11 = import_styled_components43.default.div`
  margin-bottom: var(--resume-space-tight);
`;
var Header2 = import_styled_components43.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
`;
var Label6 = import_styled_components43.default.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  font-weight: var(--resume-weight-medium);
`;
var Value2 = import_styled_components43.default.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-semibold);
`;
var Bar = import_styled_components43.default.div`
  width: 100%;
  height: ${(props) => props.$height || "24px"};
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;
  position: relative;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Fill = import_styled_components43.default.div`
  width: ${(props) => props.$percentage}%;
  height: 100%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  display: flex;
  align-items: center;
  padding: 0 8px;
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var InnerLabel = import_styled_components43.default.span`
  font-size: var(--resume-size-small);
  color: #ffffff;
  font-weight: var(--resume-weight-medium);
  white-space: nowrap;
`;

// packages/resume-core/src/data/MetricInline.jsx
var import_react43 = __toESM(require("react"));
var import_styled_components44 = __toESM(require("styled-components"));
var import_jsx_runtime44 = require("react/jsx-runtime");
var StyledMetric = import_styled_components44.default.strong`
  font-weight: ${(props) => {
  if (props.$size === "sm") return "var(--resume-weight-semibold, 600)";
  if (props.$size === "lg") return "var(--resume-weight-extrabold, 800)";
  return "var(--resume-weight-bold, 700)";
}};
  font-size: ${(props) => {
  if (props.$size === "sm") return "0.95em";
  if (props.$size === "lg") return "1.1em";
  return "1em";
}};
  color: inherit;
  white-space: nowrap;

  @media print {
    font-weight: ${(props) => {
  if (props.$size === "sm") return "600";
  if (props.$size === "lg") return "800";
  return "700";
}};
    color: inherit;
  }
`;

// packages/resume-core/src/data/MetricBullet.jsx
var import_react44 = __toESM(require("react"));
var import_styled_components45 = __toESM(require("styled-components"));
var import_jsx_runtime45 = require("react/jsx-runtime");
var BulletContainer = import_styled_components45.default.li`
  display: flex;
  align-items: baseline;
  margin-bottom: ${(props) => props.$spacing === "tight" ? "4px" : "8px"};
  line-height: 1.5;
  list-style: none;

  @media print {
    page-break-inside: avoid;
  }
`;
var Metric = import_styled_components45.default.span`
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #000);
  min-width: ${(props) => props.$align === "right" ? "auto" : "60px"};
  max-width: ${(props) => props.$align === "right" ? "80px" : "auto"};
  margin-right: ${(props) => props.$align === "right" ? "12px" : "0"};
  margin-left: ${(props) => props.$align === "right" ? "0" : "12px"};
  text-align: ${(props) => props.$align === "right" ? "right" : "left"};
  flex-shrink: 0;
  white-space: nowrap;

  ${(props) => props.$align === "right" ? `
    order: -1;
  ` : ""}

  @media print {
    font-weight: 700;
    color: #000;
  }
`;
var Content3 = import_styled_components45.default.span`
  flex: 1;
  color: var(--resume-color-primary, #000);
`;
var Bullet = import_styled_components45.default.span`
  margin-right: 8px;
  color: var(--resume-color-accent, #0066cc);
  font-weight: var(--resume-weight-bold, 700);

  @media print {
    color: #333;
  }
`;
var ListContainer = import_styled_components45.default.ul`
  margin: 8px 0;
  padding-left: 0;
  list-style: none;
`;

// packages/resume-core/src/data/KPIChipLine.jsx
var import_react45 = __toESM(require("react"));
var import_styled_components46 = __toESM(require("styled-components"));
var import_jsx_runtime46 = require("react/jsx-runtime");
var ChipContainer = import_styled_components46.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.$gap || "8px"};
  align-items: center;
  margin: ${(props) => props.$margin || "8px 0"};

  @media print {
    gap: 6px;
  }
`;
var Chip = import_styled_components46.default.span`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => {
  if (props.$size === "xs") return "2px 8px";
  if (props.$size === "md") return "4px 12px";
  return "3px 10px";
}};
  border-radius: ${(props) => props.theme?.radius?.full || "var(--resume-radius-full, 999px)"};
  border: 1px solid
    ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #ddd)"};
  background: transparent;
  font-size: ${(props) => {
  if (props.$size === "xs") return "8pt";
  if (props.$size === "md") return "10pt";
  return "9pt";
}};
  font-weight: ${(props) => props.theme?.typography?.weightMedium || "var(--resume-weight-medium, 500)"};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #333)"};
  white-space: nowrap;
  line-height: 1.2;

  @media print {
    border: 1px solid #ccc;
    background: transparent;
    color: #000;
    padding: ${(props) => {
  if (props.$size === "xs") return "2px 6px";
  if (props.$size === "md") return "3px 10px";
  return "2px 8px";
}};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Divider = import_styled_components46.default.span`
  color: ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #ddd)"};
  font-size: ${(props) => {
  if (props.$size === "xs") return "8pt";
  if (props.$size === "md") return "10pt";
  return "9pt";
}};
  user-select: none;

  @media print {
    color: #ccc;
  }
`;

// packages/resume-core/src/data/KeyValueInline.jsx
var import_react46 = __toESM(require("react"));
var import_styled_components47 = __toESM(require("styled-components"));
var import_jsx_runtime47 = require("react/jsx-runtime");
var Container12 = import_styled_components47.default.span`
  display: inline;
  font-size: ${(props) => {
  if (props.$size === "xs") return "9pt";
  if (props.$size === "md") return "11pt";
  return "10pt";
}};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #333)"};
  line-height: 1.5;

  @media print {
    color: #333;
  }
`;
var KeyValuePair = import_styled_components47.default.span`
  display: inline;
  white-space: normal;
`;
var Key = import_styled_components47.default.span`
  font-weight: ${(props) => props.theme?.typography?.weightMedium || "var(--resume-weight-medium, 500)"};
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  @media print {
    font-weight: 500;
    color: #000;
  }
`;
var Colon = import_styled_components47.default.span`
  /* Prevent wrap between key and colon */
  white-space: nowrap;

  &::after {
    content: ':';
    margin-right: 0.25em;
  }
`;
var Value3 = import_styled_components47.default.span`
  /* Prevent wrap immediately after colon */
  display: inline-block;
  color: inherit;
`;
var Separator3 = import_styled_components47.default.span`
  &::before {
    content: ', ';
    white-space: pre;
  }
`;

// packages/resume-core/src/utils/index.jsx
var import_react52 = __toESM(require("react"));

// packages/resume-core/src/utils/Divider.jsx
var import_react48 = __toESM(require("react"));
var import_styled_components48 = __toESM(require("styled-components"));
var import_jsx_runtime48 = require("react/jsx-runtime");
var StyledDivider = import_styled_components48.default.hr`
  width: 100%;
  height: ${(props) => props.$thickness || "1px"};
  background-color: ${(props) => props.$color || "var(--resume-color-border)"};
  border: none;
  margin: ${(props) => props.$spacing || "var(--resume-space-item)"} 0;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// packages/resume-core/src/utils/Spacer.jsx
var import_react49 = __toESM(require("react"));
var import_styled_components49 = __toESM(require("styled-components"));
var import_jsx_runtime49 = require("react/jsx-runtime");
var StyledSpacer = import_styled_components49.default.div`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "var(--resume-space-item)"};
  flex-shrink: 0;
`;

// packages/resume-core/src/utils/Flex.jsx
var import_react50 = __toESM(require("react"));

// packages/resume-core/src/utils/Grid.jsx
var import_react51 = __toESM(require("react"));

// packages/resume-core/src/experience/index.jsx
var import_react57 = __toESM(require("react"));

// packages/resume-core/src/experience/ExperienceCard.jsx
var import_react53 = __toESM(require("react"));
var import_styled_components50 = __toESM(require("styled-components"));
var import_jsx_runtime50 = require("react/jsx-runtime");
var Card3 = import_styled_components50.default.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-item);

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
  }
`;
var Header3 = import_styled_components50.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--resume-space-tight);
  flex-wrap: wrap;
  gap: 8px;
`;
var Title3 = import_styled_components50.default.h3`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0;
`;
var Company = import_styled_components50.default.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-accent);
  font-weight: var(--resume-weight-medium);
`;
var Meta3 = import_styled_components50.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-bottom: var(--resume-space-tight);
`;
var Summary2 = import_styled_components50.default.p`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  margin: 0;
`;

// packages/resume-core/src/experience/ExperienceTimeline.jsx
var import_react54 = __toESM(require("react"));
var import_jsx_runtime51 = require("react/jsx-runtime");

// packages/resume-core/src/experience/ExperienceGrid.jsx
var import_react55 = __toESM(require("react"));
var import_styled_components51 = __toESM(require("styled-components"));
var import_jsx_runtime52 = require("react/jsx-runtime");
var Grid3 = import_styled_components51.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--resume-space-item);
  margin-bottom: var(--resume-space-section);

  @media print {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
var Item4 = import_styled_components51.default.div`
  padding: var(--resume-space-item);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);

  @media print {
    break-inside: avoid;
  }
`;
var Title4 = import_styled_components51.default.h4`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
var Company2 = import_styled_components51.default.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-accent);
  margin-bottom: 4px;
`;
var Date3 = import_styled_components51.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;

// packages/resume-core/src/experience/ExperienceCompact.jsx
var import_react56 = __toESM(require("react"));
var import_styled_components52 = __toESM(require("styled-components"));
var import_jsx_runtime53 = require("react/jsx-runtime");
var List = import_styled_components52.default.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
var Item5 = import_styled_components52.default.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 0;
  border-bottom: 1px solid var(--resume-color-border);
  gap: var(--resume-space-tight);

  &:last-child {
    border-bottom: none;
  }

  @media print {
    break-inside: avoid;
  }
`;
var Main2 = import_styled_components52.default.div`
  flex: 1;
`;
var Title5 = import_styled_components52.default.span`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Company3 = import_styled_components52.default.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);

  &::before {
    content: ' at ';
  }
`;
var Date4 = import_styled_components52.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  white-space: nowrap;
`;

// packages/resume-core/src/header/index.jsx
var import_react69 = __toESM(require("react"));

// packages/resume-core/src/header/HeaderCentered.jsx
var import_react58 = __toESM(require("react"));
var import_styled_components53 = __toESM(require("styled-components"));
var import_jsx_runtime54 = require("react/jsx-runtime");
var Header4 = import_styled_components53.default.header`
  text-align: center;
  margin-bottom: var(--resume-space-section);

  @media print {
    break-after: avoid;
  }
`;
var Name2 = import_styled_components53.default.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
var Title6 = import_styled_components53.default.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0 0 var(--resume-space-item) 0;
`;
var Contacts = import_styled_components53.default.div`
  display: flex;
  justify-content: center;
  gap: var(--resume-space-tight);
  flex-wrap: wrap;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
`;

// packages/resume-core/src/header/HeaderSplit.jsx
var import_react59 = __toESM(require("react"));
var import_styled_components54 = __toESM(require("styled-components"));
var import_jsx_runtime55 = require("react/jsx-runtime");
var Header5 = import_styled_components54.default.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--resume-space-section);
  gap: var(--resume-space-item);

  @media print {
    break-after: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
var Left = import_styled_components54.default.div`
  flex: 1;
`;
var Name3 = import_styled_components54.default.h1`
  font-size: var(--resume-size-name);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0 0 4px 0;
`;
var Title7 = import_styled_components54.default.h2`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-normal);
  color: var(--resume-color-secondary);
  margin: 0;
`;
var Right = import_styled_components54.default.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

// packages/resume-core/src/header/HeaderMinimal.jsx
var import_react60 = __toESM(require("react"));
var import_styled_components55 = __toESM(require("styled-components"));
var import_jsx_runtime56 = require("react/jsx-runtime");
var Header6 = import_styled_components55.default.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: var(--resume-space-item);
  border-bottom: 2px solid var(--resume-color-border);
  margin-bottom: var(--resume-space-section);
  gap: var(--resume-space-item);

  @media print {
    border-bottom: 2px solid var(--resume-color-border);
    break-after: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
var Name4 = import_styled_components55.default.h1`
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-bold);
  color: var(--resume-color-primary);
  margin: 0;
`;
var Contact = import_styled_components55.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;

// packages/resume-core/src/header/CornerInitials.jsx
var import_react61 = __toESM(require("react"));
var import_styled_components56 = __toESM(require("styled-components"));
var import_jsx_runtime57 = require("react/jsx-runtime");
var Container13 = import_styled_components56.default.div`
  position: ${(props) => props.$position === "absolute" ? "absolute" : "relative"};
  ${(props) => props.$corner === "top-left" && "top: 0; left: 0;"}
  ${(props) => props.$corner === "top-right" && "top: 0; right: 0;"}
  ${(props) => props.$corner === "bottom-left" && "bottom: 0; left: 0;"}
  ${(props) => props.$corner === "bottom-right" && "bottom: 0; right: 0;"}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$size || "48px"};
  height: ${(props) => props.$size || "48px"};

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Initials = import_styled_components56.default.div`
  font-family: ${(props) => props.$serif ? 'Georgia, "Times New Roman", serif' : "inherit"};
  font-size: ${(props) => props.$fontSize || "calc(var(--resume-size-heading) * 0.8)"};
  font-weight: ${(props) => props.$outline ? "var(--resume-weight-normal)" : "var(--resume-weight-bold)"};
  color: ${(props) => props.$color || "var(--resume-color-primary)"};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: ${(props) => props.$outline ? "1px" : "0"};

  ${(props) => props.$outline && `
    -webkit-text-stroke: 1px ${props.$color || "var(--resume-color-primary)"};
    -webkit-text-fill-color: transparent;
    text-stroke: 1px ${props.$color || "var(--resume-color-primary)"};
    text-fill-color: transparent;
  `}

  ${(props) => props.$bordered && `
    border: 2px solid ${props.$color || "var(--resume-color-primary)"};
    border-radius: ${props.$rounded ? "50%" : "var(--resume-radius-sm)"};
    padding: ${props.$padding || "8px"};
    width: ${props.$size || "48px"};
    height: ${props.$size || "48px"};
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  @media print {
    ${(props) => props.$outline && `
      color: ${props.$color || "var(--resume-color-primary)"};
      -webkit-text-stroke: none;
      -webkit-text-fill-color: ${props.$color || "var(--resume-color-primary)"};
      font-weight: var(--resume-weight-normal);
    `}
  }
`;

// packages/resume-core/src/header/Footer.jsx
var import_react62 = __toESM(require("react"));
var import_styled_components57 = __toESM(require("styled-components"));
var import_jsx_runtime58 = require("react/jsx-runtime");
var StyledFooter = import_styled_components57.default.footer`
  margin-top: var(--resume-space-section);
  padding-top: var(--resume-space-item);
  border-top: 1px solid var(--resume-color-border);
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  text-align: ${(props) => props.$align || "center"};

  @media print {
    border-top: 1px solid var(--resume-color-border);
    position: running(footer);
  }
`;
var PageNumber = import_styled_components57.default.span`
  @media print {
    &::after {
      content: counter(page);
    }
  }
`;

// packages/resume-core/src/header/PageBreak.jsx
var import_react63 = __toESM(require("react"));
var import_styled_components58 = __toESM(require("styled-components"));
var import_jsx_runtime59 = require("react/jsx-runtime");
var Break = import_styled_components58.default.div`
  @media print {
    page-break-before: ${(props) => props.$before ? "always" : "auto"};
    page-break-after: ${(props) => props.$after ? "always" : "auto"};
    break-before: ${(props) => props.$before ? "page" : "auto"};
    break-after: ${(props) => props.$after ? "page" : "auto"};
  }

  @media screen {
    display: none;
  }
`;

// packages/resume-core/src/header/HeroNameBlock.jsx
var import_react64 = __toESM(require("react"));
var import_styled_components59 = __toESM(require("styled-components"));
var import_jsx_runtime60 = require("react/jsx-runtime");
var Container14 = import_styled_components59.default.header`
  text-align: center;
  margin-bottom: var(--resume-space-section, 24px);

  @media print {
    break-after: avoid;
  }
`;
var Label7 = import_styled_components59.default.div`
  font-size: var(--resume-size-small, 10px);
  font-weight: var(--resume-weight-medium, 500);
  color: var(--resume-color-secondary, #4a4a4a);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--resume-space-tight, 8px);

  @media print {
    color: #4a4a4a; /* Ensure print visibility */
  }
`;
var Name5 = import_styled_components59.default.h1`
  font-size: var(--resume-size-name, 36px);
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #1a1a1a);
  letter-spacing: -0.02em; /* Subtle negative tracking, avoid excessive spacing */
  margin: 0 auto;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--resume-color-border, #e5e7eb);
  max-width: fit-content;
  line-height: var(--resume-line-height-tight, 1.2);

  /* Ensure 4.5:1 contrast ratio */
  @media print {
    color: #000000;
    border-bottom-color: #999999;
  }
`;

// packages/resume-core/src/header/ContactRowLine.jsx
var import_react65 = __toESM(require("react"));
var import_styled_components60 = __toESM(require("styled-components"));
var import_jsx_runtime61 = require("react/jsx-runtime");
var Container15 = import_styled_components60.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: var(--resume-size-body, 11px);
  color: var(--resume-color-secondary, #4a4a4a);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Prevent wrapping to maintain single-line layout */
  flex-wrap: nowrap;

  @media print {
    color: #333333; /* Ensure 4.5:1 contrast for print */
  }

  /* Handle overflow gracefully on very narrow screens */
  @media (max-width: 480px) {
    font-size: 10px;
    gap: 8px;
  }
`;
var ContactItem2 = import_styled_components60.default.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
`;
var ContactLink = import_styled_components60.default.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: var(--resume-color-accent, #2563eb);
    text-decoration: underline;
  }

  @media print {
    color: #333333;
    text-decoration: none;
  }
`;
var Separator4 = import_styled_components60.default.span`
  color: var(--resume-color-border, #e5e7eb);
  user-select: none;
  font-weight: var(--resume-weight-normal, 400);

  @media print {
    color: #999999;
  }
`;

// packages/resume-core/src/header/SectionRuleTitle.jsx
var import_react66 = __toESM(require("react"));
var import_styled_components61 = __toESM(require("styled-components"));
var import_jsx_runtime62 = require("react/jsx-runtime");
var Container16 = import_styled_components61.default.div`
  margin-bottom: var(--resume-space-item, 16px);

  @media print {
    page-break-after: avoid;
  }
`;
var Title8 = import_styled_components61.default.h2`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-semibold, 600);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0 0 8px 0;
  line-height: var(--resume-line-height-tight, 1.2);

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;
var Rule2 = import_styled_components61.default.hr`
  width: ${(props) => props.$width || "100%"};
  height: 0;
  border: none;
  border-top: 0.5px solid
    ${(props) => props.$color || "var(--resume-color-border, #e5e7eb)"};
  margin: 0;

  /* Ensure visibility in print */
  @media print {
    border-top-width: 1px;
    border-top-color: ${(props) => props.$color || "#cccccc"};
  }
`;

// packages/resume-core/src/header/SectionFlagTitle.jsx
var import_react67 = __toESM(require("react"));
var import_styled_components62 = __toESM(require("styled-components"));
var import_jsx_runtime63 = require("react/jsx-runtime");
var Container17 = import_styled_components62.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: var(--resume-space-item, 16px);

  @media print {
    page-break-after: avoid;
  }
`;
var Flag = import_styled_components62.default.div`
  width: ${(props) => props.$width || "4px"};
  height: 0.7em; /* Match x-height of text, not full line-height */
  background-color: ${(props) => props.$color || "var(--resume-color-accent, #2563eb)"};
  border-radius: 2px;
  flex-shrink: 0;

  /* Ensure visibility in print */
  @media print {
    background-color: ${(props) => props.$color || "#000000"};
  }
`;
var Title9 = import_styled_components62.default.h2`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-semibold, 600);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0;
  line-height: var(--resume-line-height-tight, 1.2);

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;

// packages/resume-core/src/header/NameStackElegant.jsx
var import_react68 = __toESM(require("react"));
var import_styled_components63 = __toESM(require("styled-components"));
var import_jsx_runtime64 = require("react/jsx-runtime");
var Container18 = import_styled_components63.default.header`
  text-align: ${(props) => props.$align || "center"};
  margin-bottom: var(--resume-space-section, 24px);

  @media print {
    break-after: avoid;
  }
`;
var Name6 = import_styled_components63.default.h1`
  font-size: var(--resume-size-name, 36px);
  font-weight: var(--resume-weight-bold, 700);
  color: var(--resume-color-primary, #1a1a1a);
  margin: 0 0 4px 0;
  line-height: var(--resume-line-height-tight, 1.2);
  letter-spacing: -0.02em;

  @media print {
    color: #000000; /* Ensure 4.5:1 contrast */
  }
`;
var Role = import_styled_components63.default.div`
  font-size: var(--resume-size-heading, 16px);
  font-weight: var(--resume-weight-medium, 500); /* Avoid thin weights */
  color: var(--resume-color-secondary, #4a4a4a);
  margin: 0 0 8px 0;
  line-height: var(--resume-line-height-normal, 1.5);

  @media print {
    color: #333333; /* Ensure 4.5:1 contrast */
  }
`;
var Tagline = import_styled_components63.default.div`
  font-size: var(--resume-size-body, 11px);
  font-weight: var(--resume-weight-normal, 400);
  color: var(--resume-color-secondary, #4a4a4a);
  margin: 0;
  line-height: var(--resume-line-height-relaxed, 1.75);
  max-width: 600px;
  margin-left: ${(props) => props.$align === "center" ? "auto" : "0"};
  margin-right: ${(props) => props.$align === "center" ? "auto" : props.$align === "right" ? "0" : "auto"};

  @media print {
    color: #4a4a4a;
  }
`;

// packages/resume-core/src/quotes/index.jsx
var import_react73 = __toESM(require("react"));

// packages/resume-core/src/quotes/PullQuote.jsx
var import_react70 = __toESM(require("react"));
var import_styled_components64 = __toESM(require("styled-components"));
var import_jsx_runtime65 = require("react/jsx-runtime");
var Container19 = import_styled_components64.default.blockquote`
  margin: var(--resume-space-section) 0;
  padding: var(--resume-space-item);
  border-left: 4px solid var(--resume-color-accent);
  background-color: var(--resume-color-muted);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border-left: 4px solid var(--resume-color-accent);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var QuoteText = import_styled_components64.default.p`
  font-size: var(--resume-size-subheading);
  font-style: italic;
  color: var(--resume-color-primary);
  line-height: var(--resume-line-height-relaxed);
  margin: 0 0 var(--resume-space-tight) 0;
`;
var Attribution = import_styled_components64.default.footer`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  text-align: right;
`;
var Author = import_styled_components64.default.cite`
  font-style: normal;
  font-weight: var(--resume-weight-medium);
`;
var Context = import_styled_components64.default.span`
  display: block;
  font-size: var(--resume-size-tiny);
  margin-top: 2px;
`;

// packages/resume-core/src/quotes/Testimonial.jsx
var import_react71 = __toESM(require("react"));
var import_styled_components65 = __toESM(require("styled-components"));
var import_jsx_runtime66 = require("react/jsx-runtime");
var Card4 = import_styled_components65.default.div`
  display: flex;
  flex-direction: column;
  gap: var(--resume-space-tight);
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    padding: var(--resume-space-tight);
  }
`;
var Header7 = import_styled_components65.default.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
`;
var Photo = import_styled_components65.default.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;
var AuthorInfo = import_styled_components65.default.div`
  flex: 1;
`;
var Author2 = import_styled_components65.default.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Position = import_styled_components65.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var Quote = import_styled_components65.default.blockquote`
  margin: 0;
  font-size: var(--resume-size-body);
  font-style: italic;
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// packages/resume-core/src/quotes/BlockQuote.jsx
var import_react72 = __toESM(require("react"));
var import_styled_components66 = __toESM(require("styled-components"));
var import_jsx_runtime67 = require("react/jsx-runtime");
var Quote2 = import_styled_components66.default.blockquote`
  margin: var(--resume-space-item) 0;
  padding: var(--resume-space-tight) var(--resume-space-item);
  border-left: 3px solid var(--resume-color-border);
  font-style: italic;
  color: var(--resume-color-secondary);
  background-color: ${(props) => props.$highlight ? "var(--resume-color-muted)" : "transparent"};
  break-inside: avoid;

  @media print {
    border-left: 3px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Text2 = import_styled_components66.default.p`
  margin: 0;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
`;
var Cite = import_styled_components66.default.cite`
  display: block;
  margin-top: var(--resume-space-tight);
  font-size: var(--resume-size-small);
  font-style: normal;
  color: var(--resume-color-tertiary);
`;

// packages/resume-core/src/certifications/index.jsx
var import_react78 = __toESM(require("react"));

// packages/resume-core/src/certifications/CertificationBadge.jsx
var import_react74 = __toESM(require("react"));
var import_styled_components67 = __toESM(require("styled-components"));
var import_jsx_runtime68 = require("react/jsx-runtime");
var Badge2 = import_styled_components67.default.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(props) => props.$variant === "filled" ? "white" : "var(--resume-color-primary)"};
  border: 1px solid
    ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  font-weight: var(--resume-weight-medium);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
    background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "transparent"};
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-tiny);
    padding: 6px 12px;
  }
`;
var Icon4 = import_styled_components67.default.span`
  display: flex;
  align-items: center;
  font-size: 16px;
`;
var Text3 = import_styled_components67.default.span`
  white-space: nowrap;
`;
var Date5 = import_styled_components67.default.span`
  opacity: 0.8;
  font-size: var(--resume-size-tiny);
  font-weight: var(--resume-weight-normal);
`;

// packages/resume-core/src/certifications/CertificationRow.jsx
var import_react75 = __toESM(require("react"));
var import_styled_components68 = __toESM(require("styled-components"));
var import_jsx_runtime69 = require("react/jsx-runtime");
var Container20 = import_styled_components68.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5em;
  margin-bottom: 0.5em;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
var Issuer = import_styled_components68.default.span`
  font-weight: var(--resume-weight-semibold);
  color: var(--resume-color-primary);
`;
var Name7 = import_styled_components68.default.span`
  color: var(--resume-color-primary);
`;
var Credential = import_styled_components68.default.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  background-color: var(--resume-color-background);
  padding: 2px 6px;
  border-radius: var(--resume-radius-sm);
  border: 1px solid var(--resume-color-border);

  @media print {
    background-color: transparent;
    border: 1px solid var(--resume-color-border);
    padding: 1px 4px;
  }
`;
var Date6 = import_styled_components68.default.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  font-style: italic;
`;
var Link4 = import_styled_components68.default.a`
  color: var(--resume-color-accent);
  text-decoration: none;
  font-size: var(--resume-size-small);

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' [' attr(href) ']';
      font-size: var(--resume-size-tiny);
    }
  }
`;
var Separator5 = import_styled_components68.default.span`
  color: var(--resume-color-tertiary);

  &::before {
    content: '·';
  }
`;

// packages/resume-core/src/certifications/AwardCard.jsx
var import_react76 = __toESM(require("react"));
var import_styled_components69 = __toESM(require("styled-components"));
var import_jsx_runtime70 = require("react/jsx-runtime");
var Card5 = import_styled_components69.default.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-tight);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Header8 = import_styled_components69.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
var Title10 = import_styled_components69.default.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Date7 = import_styled_components69.default.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
var Awarder = import_styled_components69.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  margin-bottom: 8px;
`;
var Summary3 = import_styled_components69.default.p`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// packages/resume-core/src/certifications/HonorsList.jsx
var import_react77 = __toESM(require("react"));
var import_styled_components70 = __toESM(require("styled-components"));
var import_jsx_runtime71 = require("react/jsx-runtime");
var List2 = import_styled_components70.default.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
var Item6 = import_styled_components70.default.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--resume-space-tight);
  padding: 8px 0;
  border-bottom: 1px solid var(--resume-color-border);
  break-inside: avoid;

  &:last-child {
    border-bottom: none;
  }

  @media print {
    border-bottom: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
var Info2 = import_styled_components70.default.div`
  flex: 1;
`;
var Title11 = import_styled_components70.default.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 2px;
`;
var Awarder2 = import_styled_components70.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var Date8 = import_styled_components70.default.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;

// packages/resume-core/src/languages/index.jsx
var import_react83 = __toESM(require("react"));

// packages/resume-core/src/languages/LanguageBar.jsx
var import_react79 = __toESM(require("react"));
var import_styled_components71 = __toESM(require("styled-components"));
var import_jsx_runtime72 = require("react/jsx-runtime");
var Container21 = import_styled_components71.default.div`
  margin-bottom: var(--resume-space-tight);
`;
var Label8 = import_styled_components71.default.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
var Language = import_styled_components71.default.span`
  font-weight: var(--resume-weight-medium);
`;
var Fluency = import_styled_components71.default.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var BarContainer2 = import_styled_components71.default.div`
  width: 100%;
  height: 10px;
  background-color: var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  overflow: hidden;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var BarFill2 = import_styled_components71.default.div`
  width: ${(props) => props.$level}%;
  height: 100%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  transition: width 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// packages/resume-core/src/languages/LanguageLevelBarLite.jsx
var import_react80 = __toESM(require("react"));
var import_styled_components72 = __toESM(require("styled-components"));
var import_jsx_runtime73 = require("react/jsx-runtime");
var Container22 = import_styled_components72.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  margin-bottom: 0.5em;
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
    gap: 0.5em;
  }
`;
var Label9 = import_styled_components72.default.div`
  display: flex;
  align-items: baseline;
  gap: 0.5em;
  flex: 1;
`;
var Language2 = import_styled_components72.default.span`
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Fluency2 = import_styled_components72.default.span`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var BarText = import_styled_components72.default.span`
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
  letter-spacing: 2px;
  white-space: nowrap;

  @media print {
    letter-spacing: 3px;
  }
`;

// packages/resume-core/src/languages/LanguageGrid.jsx
var import_react81 = __toESM(require("react"));
var import_styled_components73 = __toESM(require("styled-components"));
var import_jsx_runtime74 = require("react/jsx-runtime");
var Grid4 = import_styled_components73.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--resume-space-tight);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media print {
    break-inside: avoid;
  }
`;
var LanguageCard = import_styled_components73.default.div`
  padding: var(--resume-space-tight);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-sm);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Language3 = import_styled_components73.default.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 8px;
`;
var Fluency3 = import_styled_components73.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
`;
var Dots = import_styled_components73.default.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;
var Dot2 = import_styled_components73.default.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid
      ${(props) => props.$filled ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;

// packages/resume-core/src/languages/ProficiencyScale.jsx
var import_react82 = __toESM(require("react"));
var import_styled_components74 = __toESM(require("styled-components"));
var import_jsx_runtime75 = require("react/jsx-runtime");
var Container23 = import_styled_components74.default.div`
  display: flex;
  align-items: center;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;
`;
var Label10 = import_styled_components74.default.span`
  min-width: 120px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);

  @media (max-width: 768px) {
    min-width: 100px;
    font-size: var(--resume-size-small);
  }
`;
var Scale = import_styled_components74.default.div`
  display: flex;
  gap: 4px;
  flex: 1;
`;
var Segment = import_styled_components74.default.div`
  flex: 1;
  height: ${(props) => props.$size || "12px"};
  background-color: ${(props) => props.$filled ? props.$color || "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-xs);
  transition: background-color 0.3s ease;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid
      ${(props) => props.$filled ? props.$color || "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;
var LevelText = import_styled_components74.default.span`
  min-width: 80px;
  text-align: right;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);

  @media (max-width: 768px) {
    display: none;
  }
`;

// packages/resume-core/src/publications/index.jsx
var import_react88 = __toESM(require("react"));

// packages/resume-core/src/publications/PublicationItem.jsx
var import_react84 = __toESM(require("react"));
var import_styled_components75 = __toESM(require("styled-components"));
var import_jsx_runtime76 = require("react/jsx-runtime");
var Container24 = import_styled_components75.default.div`
  padding: var(--resume-space-tight) 0;
  border-bottom: 1px solid var(--resume-color-border);
  break-inside: avoid;

  &:last-child {
    border-bottom: none;
  }

  @media print {
    border-bottom: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Header9 = import_styled_components75.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--resume-space-tight);
  margin-bottom: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;
var Title12 = import_styled_components75.default.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Date9 = import_styled_components75.default.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
var Publisher = import_styled_components75.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  font-style: italic;
  margin-bottom: 8px;
`;
var Summary4 = import_styled_components75.default.p`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
var Link5 = import_styled_components75.default.a`
  display: inline-block;
  margin-top: 8px;
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' (' attr(href) ')';
      font-size: var(--resume-size-tiny);
    }
  }
`;

// packages/resume-core/src/publications/PublicationEntryPlain.jsx
var import_react85 = __toESM(require("react"));
var import_styled_components76 = __toESM(require("styled-components"));
var import_jsx_runtime77 = require("react/jsx-runtime");
var Container25 = import_styled_components76.default.div`
  margin-bottom: var(--resume-space-tight);
  padding-left: 1.5em;
  text-indent: -1.5em;
  break-inside: avoid;
  line-height: var(--resume-line-height-relaxed);

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Text4 = import_styled_components76.default.span`
  font-size: var(--resume-size-body);
  color: var(--resume-color-primary);
`;
var Author3 = (0, import_styled_components76.default)(Text4)`
  font-weight: var(--resume-weight-medium);
`;
var Year = (0, import_styled_components76.default)(Text4)`
  color: var(--resume-color-secondary);
`;
var Title13 = (0, import_styled_components76.default)(Text4)`
  font-style: italic;
`;
var Venue = (0, import_styled_components76.default)(Text4)`
  color: var(--resume-color-secondary);
`;
var Separator6 = import_styled_components76.default.span`
  margin: 0 0.5em;
  color: var(--resume-color-tertiary);
`;
var Link6 = import_styled_components76.default.a`
  color: var(--resume-color-accent);
  text-decoration: none;
  margin-left: 0.5em;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' [' attr(href) ']';
      font-size: var(--resume-size-tiny);
    }
  }
`;

// packages/resume-core/src/publications/PortfolioGrid.jsx
var import_react86 = __toESM(require("react"));
var import_styled_components77 = __toESM(require("styled-components"));
var import_jsx_runtime78 = require("react/jsx-runtime");
var Grid5 = import_styled_components77.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--resume-space-item);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media print {
    break-inside: avoid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--resume-space-tight);
  }
`;
var Item7 = import_styled_components77.default.div`
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  overflow: hidden;
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Thumbnail = import_styled_components77.default.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;

  @media print {
    height: 100px;
  }
`;
var Content4 = import_styled_components77.default.div`
  padding: var(--resume-space-tight);
`;
var Title14 = import_styled_components77.default.h3`
  margin: 0 0 4px 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Description4 = import_styled_components77.default.p`
  margin: 0 0 8px 0;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
var Tags = import_styled_components77.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
var Tag = import_styled_components77.default.span`
  padding: 2px 8px;
  font-size: var(--resume-size-tiny);
  background-color: var(--resume-color-muted);
  color: var(--resume-color-secondary);
  border-radius: var(--resume-radius-sm);

  @media print {
    border: 1px solid var(--resume-color-border);
    background-color: transparent;
  }
`;

// packages/resume-core/src/publications/ProjectCard.jsx
var import_react87 = __toESM(require("react"));
var import_styled_components78 = __toESM(require("styled-components"));
var import_jsx_runtime79 = require("react/jsx-runtime");
var Card6 = import_styled_components78.default.div`
  padding: var(--resume-space-item);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin-bottom: var(--resume-space-tight);
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Header10 = import_styled_components78.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: 8px;
`;
var Title15 = import_styled_components78.default.h3`
  margin: 0;
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
`;
var Date10 = import_styled_components78.default.time`
  font-size: var(--resume-size-small);
  color: var(--resume-color-tertiary);
  white-space: nowrap;
`;
var Description5 = import_styled_components78.default.p`
  margin: 0 0 var(--resume-space-tight) 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;
var Technologies = import_styled_components78.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: var(--resume-space-tight);
`;
var Tech = import_styled_components78.default.span`
  padding: 4px 10px;
  font-size: var(--resume-size-small);
  background-color: var(--resume-color-muted);
  color: var(--resume-color-secondary);
  border-radius: var(--resume-radius-sm);

  @media print {
    border: 1px solid var(--resume-color-border);
    background-color: transparent;
  }
`;
var Links = import_styled_components78.default.div`
  display: flex;
  gap: var(--resume-space-tight);
`;
var Link7 = import_styled_components78.default.a`
  font-size: var(--resume-size-small);
  color: var(--resume-color-accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media print {
    color: var(--resume-color-primary);
    text-decoration: none;

    &::after {
      content: ' (' attr(href) ')';
      font-size: var(--resume-size-tiny);
    }
  }
`;

// packages/resume-core/src/tables/index.jsx
var import_react92 = __toESM(require("react"));

// packages/resume-core/src/tables/SkillMatrix.jsx
var import_react89 = __toESM(require("react"));
var import_styled_components79 = __toESM(require("styled-components"));
var import_jsx_runtime80 = require("react/jsx-runtime");
var Table = import_styled_components79.default.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
var Thead = import_styled_components79.default.thead`
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Th = import_styled_components79.default.th`
  padding: 10px;
  text-align: left;
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  border: 1px solid var(--resume-color-border);

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Tbody = import_styled_components79.default.tbody``;
var Tr = import_styled_components79.default.tr`
  &:nth-child(even) {
    background-color: var(--resume-color-background);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Td = import_styled_components79.default.td`
  padding: 10px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Cell = import_styled_components79.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
var Indicator = import_styled_components79.default.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => {
  if (props.$level === "expert") return "var(--resume-color-accent)";
  if (props.$level === "advanced") return "var(--resume-color-success)";
  if (props.$level === "intermediate") return "var(--resume-color-warning)";
  return "var(--resume-color-border)";
}};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid
      ${(props) => {
  if (props.$level === "expert") return "var(--resume-color-accent)";
  if (props.$level === "advanced") return "var(--resume-color-success)";
  if (props.$level === "intermediate")
    return "var(--resume-color-warning)";
  return "var(--resume-color-border)";
}};
  }
`;

// packages/resume-core/src/tables/ComparisonTable.jsx
var import_react90 = __toESM(require("react"));
var import_styled_components80 = __toESM(require("styled-components"));
var import_jsx_runtime81 = require("react/jsx-runtime");
var Table2 = import_styled_components80.default.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
  }
`;
var Thead2 = import_styled_components80.default.thead``;
var Th2 = import_styled_components80.default.th`
  padding: 12px;
  text-align: ${(props) => props.$align || "left"};
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  background-color: var(--resume-color-muted);
  border: 1px solid var(--resume-color-border);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
  }
`;
var Tbody2 = import_styled_components80.default.tbody``;
var Tr2 = import_styled_components80.default.tr`
  &:nth-child(even) {
    background-color: var(--resume-color-background);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Td2 = import_styled_components80.default.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);
  text-align: ${(props) => props.$align || "left"};
  vertical-align: top;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Label11 = import_styled_components80.default.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-primary);
  font-weight: var(--resume-weight-medium);
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
  }
`;

// packages/resume-core/src/tables/DataTable.jsx
var import_react91 = __toESM(require("react"));
var import_styled_components81 = __toESM(require("styled-components"));
var import_jsx_runtime82 = require("react/jsx-runtime");
var Table3 = import_styled_components81.default.table`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--resume-size-body);
  margin: var(--resume-space-item) 0;

  @media print {
    break-inside: avoid;
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-small);
    display: block;
    overflow-x: auto;
  }
`;
var Thead3 = import_styled_components81.default.thead`
  background-color: var(--resume-color-muted);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Th3 = import_styled_components81.default.th`
  padding: 12px;
  text-align: ${(props) => props.$align || "left"};
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  border: 1px solid var(--resume-color-border);
  white-space: nowrap;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Tbody3 = import_styled_components81.default.tbody``;
var Tr3 = import_styled_components81.default.tr`
  &:nth-child(even) {
    background-color: ${(props) => props.$striped ? "var(--resume-color-background)" : "transparent"};
  }

  &:hover {
    background-color: var(--resume-color-muted);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &:hover {
      background-color: transparent;
    }
  }
`;
var Td3 = import_styled_components81.default.td`
  padding: 10px 12px;
  border: 1px solid var(--resume-color-border);
  color: var(--resume-color-secondary);
  text-align: ${(props) => props.$align || "left"};
  vertical-align: top;

  @media print {
    border: 1px solid var(--resume-color-border);
  }
`;
var Tfoot = import_styled_components81.default.tfoot`
  background-color: var(--resume-color-muted);
  font-weight: var(--resume-weight-medium);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// packages/resume-core/src/callouts/index.jsx
var import_react96 = __toESM(require("react"));

// packages/resume-core/src/callouts/Callout.jsx
var import_react93 = __toESM(require("react"));
var import_styled_components82 = __toESM(require("styled-components"));
var import_jsx_runtime83 = require("react/jsx-runtime");
var Container26 = import_styled_components82.default.div`
  padding: var(--resume-space-item);
  margin: var(--resume-space-item) 0;
  background-color: ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success-bg, #d4edda)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning-bg, #fff3cd)";
  if (props.$variant === "error")
    return "var(--resume-color-error-bg, #f8d7da)";
  return "var(--resume-color-muted)";
}};
  border-left: 4px solid
    ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success, #28a745)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning, #ffc107)";
  if (props.$variant === "error")
    return "var(--resume-color-error, #dc3545)";
  return "var(--resume-color-accent)";
}};
  border-radius: var(--resume-radius-sm);
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border-left: 4px solid
      ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success, #28a745)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning, #ffc107)";
  if (props.$variant === "error")
    return "var(--resume-color-error, #dc3545)";
  return "var(--resume-color-accent)";
}};
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Title16 = import_styled_components82.default.div`
  font-size: var(--resume-size-subheading);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 8px;
`;
var Content5 = import_styled_components82.default.div`
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// packages/resume-core/src/callouts/InfoBox.jsx
var import_react94 = __toESM(require("react"));
var import_styled_components83 = __toESM(require("styled-components"));
var import_jsx_runtime84 = require("react/jsx-runtime");
var Box = import_styled_components83.default.div`
  display: flex;
  gap: var(--resume-space-tight);
  padding: var(--resume-space-tight);
  background-color: var(--resume-color-background);
  border: 1px solid var(--resume-color-border);
  border-radius: var(--resume-radius-md);
  margin: var(--resume-space-tight) 0;
  break-inside: avoid;

  @media print {
    border: 1px solid var(--resume-color-border);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Icon5 = import_styled_components83.default.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  color: white;
  font-size: 14px;
  font-weight: var(--resume-weight-bold);

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid ${(props) => props.$color || "var(--resume-color-accent)"};
  }
`;
var Content6 = import_styled_components83.default.div`
  flex: 1;
`;
var Title17 = import_styled_components83.default.div`
  font-size: var(--resume-size-body);
  font-weight: var(--resume-weight-medium);
  color: var(--resume-color-primary);
  margin-bottom: 4px;
`;
var Text5 = import_styled_components83.default.div`
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// packages/resume-core/src/callouts/HighlightCard.jsx
var import_react95 = __toESM(require("react"));
var import_styled_components84 = __toESM(require("styled-components"));
var import_jsx_runtime85 = require("react/jsx-runtime");
var Card7 = import_styled_components84.default.div`
  padding: var(--resume-space-item);
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  color: white;
  border-radius: var(--resume-radius-md);
  margin: var(--resume-space-item) 0;
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid ${(props) => props.$color || "var(--resume-color-accent)"};
    background-color: transparent;
    color: var(--resume-color-primary);
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Header11 = import_styled_components84.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--resume-space-tight);
  margin-bottom: var(--resume-space-tight);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;
var Title18 = import_styled_components84.default.h3`
  margin: 0;
  font-size: var(--resume-size-heading);
  font-weight: var(--resume-weight-bold);
  color: inherit;

  @media print {
    color: var(--resume-color-primary);
  }
`;
var Badge3 = import_styled_components84.default.div`
  padding: 4px 12px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  white-space: nowrap;

  @media print {
    background-color: transparent;
    border: 1px solid currentColor;
  }
`;
var Content7 = import_styled_components84.default.div`
  font-size: var(--resume-size-body);
  line-height: var(--resume-line-height-normal);

  @media print {
    color: var(--resume-color-secondary);
  }
`;
var Footer2 = import_styled_components84.default.div`
  margin-top: var(--resume-space-tight);
  padding-top: var(--resume-space-tight);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: var(--resume-size-small);

  @media print {
    border-top: 1px solid var(--resume-color-border);
    color: var(--resume-color-tertiary);
  }
`;

// packages/resume-core/src/lists/index.jsx
var import_react108 = __toESM(require("react"));

// packages/resume-core/src/lists/CheckList.jsx
var import_react97 = __toESM(require("react"));
var import_styled_components85 = __toESM(require("styled-components"));
var import_jsx_runtime86 = require("react/jsx-runtime");
var List3 = import_styled_components85.default.ul`
  margin: var(--resume-space-tight) 0;
  padding: 0;
  list-style: none;
`;
var Item8 = import_styled_components85.default.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 0;
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Check = import_styled_components85.default.span`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.$checked ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  color: white;
  font-size: 12px;
  margin-top: 2px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 2px solid
      ${(props) => props.$checked ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  }
`;
var Text6 = import_styled_components85.default.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  text-decoration: ${(props) => props.$checked && props.$strikethrough ? "line-through" : "none"};
  opacity: ${(props) => props.$checked && props.$strikethrough ? 0.7 : 1};
`;

// packages/resume-core/src/lists/IconList.jsx
var import_react98 = __toESM(require("react"));
var import_styled_components86 = __toESM(require("styled-components"));
var import_jsx_runtime87 = require("react/jsx-runtime");
var List4 = import_styled_components86.default.ul`
  margin: var(--resume-space-tight) 0;
  padding: 0;
  list-style: none;
`;
var Item9 = import_styled_components86.default.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
  break-inside: avoid;

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var IconWrapper = import_styled_components86.default.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${(props) => props.$color || "var(--resume-color-accent)"};
  margin-top: 2px;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;
var Text7 = import_styled_components86.default.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// packages/resume-core/src/lists/NumberedList.jsx
var import_react99 = __toESM(require("react"));
var import_styled_components87 = __toESM(require("styled-components"));
var import_jsx_runtime88 = require("react/jsx-runtime");
var List5 = import_styled_components87.default.ol`
  margin: var(--resume-space-tight) 0;
  padding-left: 28px;
  counter-reset: list-counter;
  list-style: none;
`;
var Item10 = import_styled_components87.default.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
  counter-increment: list-counter;
  break-inside: avoid;

  &::before {
    content: counter(list-counter) '.';
    flex-shrink: 0;
    width: 24px;
    font-weight: var(--resume-weight-medium);
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
var Text8 = import_styled_components87.default.span`
  flex: 1;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
`;

// packages/resume-core/src/lists/BulletList.jsx
var import_react100 = __toESM(require("react"));
var import_styled_components88 = __toESM(require("styled-components"));
var import_jsx_runtime89 = require("react/jsx-runtime");
var List6 = import_styled_components88.default.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 24px;
  list-style: none;
`;
var Item11 = import_styled_components88.default.li`
  position: relative;
  padding: 4px 0 4px 16px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  &::before {
    content: '${(props) => props.$bullet || "\u2022"}';
    position: absolute;
    left: 0;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-bold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// packages/resume-core/src/lists/CompactList.jsx
var import_react101 = __toESM(require("react"));
var import_styled_components89 = __toESM(require("styled-components"));
var import_jsx_runtime90 = require("react/jsx-runtime");
var List7 = import_styled_components89.default.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
var Item12 = import_styled_components89.default.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0;
  font-size: var(--resume-size-small);
  color: var(--resume-color-secondary);
  break-inside: avoid;

  &:not(:last-child) {
    border-bottom: ${(props) => props.$divider ? "1px solid var(--resume-color-border)" : "none"};
    padding-bottom: ${(props) => props.$divider ? "6px" : "2px"};
    margin-bottom: ${(props) => props.$divider ? "6px" : "0"};
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    border-bottom: ${(props) => props.$divider ? "1px solid var(--resume-color-border)" : "none"};
  }
`;
var Bullet2 = import_styled_components89.default.span`
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.$color || "var(--resume-color-accent)"};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid ${(props) => props.$color || "var(--resume-color-accent)"};
  }
`;
var Text9 = import_styled_components89.default.span`
  flex: 1;
  line-height: 1.4;
`;

// packages/resume-core/src/lists/AchievementListTight.jsx
var import_react102 = __toESM(require("react"));
var import_styled_components90 = __toESM(require("styled-components"));
var import_jsx_runtime91 = require("react/jsx-runtime");
var List8 = import_styled_components90.default.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 20px;
  list-style: none;
`;
var Item13 = import_styled_components90.default.li`
  position: relative;
  padding: 2px 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.4;
  break-inside: avoid;
  orphans: 2;
  widows: 2;
  max-height: 4.2em; /* Enforce 2-3 line max (1.4 line-height × 3 lines) */
  overflow: hidden;
  text-overflow: ellipsis;

  &::before {
    content: '${(props) => props.$bullet || "\u2022"}';
    position: absolute;
    left: -16px;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// packages/resume-core/src/lists/AchievementListSpacious.jsx
var import_react103 = __toESM(require("react"));
var import_styled_components91 = __toESM(require("styled-components"));
var import_jsx_runtime92 = require("react/jsx-runtime");
var List9 = import_styled_components91.default.ul`
  margin: var(--resume-space-comfortable) 0;
  padding-left: 24px;
  list-style: none;
`;
var Item14 = import_styled_components91.default.li`
  position: relative;
  padding: 6px 0; /* 6pt baseline grid */
  margin-bottom: 8px; /* 8pt baseline grid */
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.6; /* 1.6 × 16px = 25.6px ≈ 26px (multiple of 6pt baseline) */
  break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '${(props) => props.$bullet || "\u2022"}';
    position: absolute;
    left: -20px;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
    line-height: inherit;
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// packages/resume-core/src/lists/HangingBulletList.jsx
var import_react104 = __toESM(require("react"));
var import_styled_components92 = __toESM(require("styled-components"));
var import_jsx_runtime93 = require("react/jsx-runtime");
var List10 = import_styled_components92.default.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
`;
var Item15 = import_styled_components92.default.li`
  position: relative;
  padding: 4px 0 4px 20px; /* Left padding for bullet space */
  text-indent: -20px; /* Negative indent to hang bullet outside */
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);
  break-inside: avoid;

  &::before {
    content: '${(props) => props.$bullet || "\u2022"}';
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
    display: inline-block;
    width: 20px;
    text-indent: 0; /* Reset indent for bullet */
  }

  /* Reset text-indent for child elements */
  > * {
    text-indent: 0;
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// packages/resume-core/src/lists/ListDashCompact.jsx
var import_react105 = __toESM(require("react"));
var import_styled_components93 = __toESM(require("styled-components"));
var import_jsx_runtime94 = require("react/jsx-runtime");
var List11 = import_styled_components93.default.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
`;
var Item16 = import_styled_components93.default.li`
  position: relative;
  padding: 2px 0 2px 16px;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: 1.5;
  break-inside: avoid;

  &::before {
    content: '–'; /* En-dash (U+2013), not hyphen */
    position: absolute;
    left: 0;
    color: ${(props) => props.$color || "var(--resume-color-text)"};
    font-weight: var(--resume-weight-normal);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    orphans: 2;
    widows: 2;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// packages/resume-core/src/lists/MiniDotLeaderList.jsx
var import_react106 = __toESM(require("react"));
var import_styled_components94 = __toESM(require("styled-components"));
var import_jsx_runtime95 = require("react/jsx-runtime");
var List12 = import_styled_components94.default.ul`
  margin: var(--resume-space-tight) 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;
var Item17 = import_styled_components94.default.li`
  display: inline-flex;
  align-items: center;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);

  &:not(:last-child)::after {
    content: '·'; /* Midline dot (U+00B7) */
    margin-left: 8px;
    color: ${(props) => props.$color || "var(--resume-color-accent)"};
    font-weight: var(--resume-weight-semibold);
  }

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &:not(:last-child)::after {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// packages/resume-core/src/lists/DefinitionKeyline.jsx
var import_react107 = __toESM(require("react"));
var import_styled_components95 = __toESM(require("styled-components"));
var import_jsx_runtime96 = require("react/jsx-runtime");
var List13 = import_styled_components95.default.dl`
  margin: var(--resume-space-tight) 0;
  display: grid;
  grid-template-columns: ${(props) => props.$layout === "inline" ? "auto 1fr" : "1fr"};
  gap: ${(props) => props.$layout === "inline" ? "8px 16px" : "4px"};
`;
var Term = import_styled_components95.default.dt`
  font-size: var(--resume-size-body);
  color: var(--resume-color-text);
  font-weight: var(--resume-weight-semibold);
  line-height: var(--resume-line-height-normal);

  ${(props) => props.$layout === "stacked" && `
    margin-top: 8px;
    &:first-child {
      margin-top: 0;
    }
  `}

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Description6 = import_styled_components95.default.dd`
  margin: 0;
  font-size: var(--resume-size-body);
  color: var(--resume-color-secondary);
  line-height: var(--resume-line-height-normal);

  ${(props) => props.$layout === "inline" && `
    display: flex;
    align-items: baseline;
  `}

  ${(props) => props.$layout === "stacked" && `
    margin-left: 16px;
    &::before {
      content: '\u2014'; /* Em-dash (U+2014) */
      margin-right: 8px;
      color: ${props.$color || "var(--resume-color-accent)"};
    }
  `}

  ${(props) => props.$layout === "inline" && `
    &::before {
      content: '\u2014'; /* Em-dash (U+2014) */
      margin: 0 8px;
      color: ${props.$color || "var(--resume-color-accent)"};
      flex-shrink: 0;
    }
  `}

  @media print {
    break-inside: avoid;
    page-break-inside: avoid;

    &::before {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;

// packages/resume-core/src/dates/index.jsx
var import_react111 = __toESM(require("react"));

// packages/resume-core/src/dates/DateBadge.jsx
var import_react109 = __toESM(require("react"));
var import_styled_components96 = __toESM(require("styled-components"));
var import_jsx_runtime97 = require("react/jsx-runtime");
var Badge4 = import_styled_components96.default.time`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-background)"};
  color: ${(props) => props.$variant === "filled" ? "white" : "var(--resume-color-secondary)"};
  border: 1px solid
    ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "var(--resume-color-border)"};
  border-radius: var(--resume-radius-full);
  font-size: var(--resume-size-small);
  white-space: nowrap;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 1px solid var(--resume-color-border);
    background-color: ${(props) => props.$variant === "filled" ? "var(--resume-color-accent)" : "transparent"};
  }

  @media (max-width: 768px) {
    font-size: var(--resume-size-tiny);
    padding: 3px 10px;
  }
`;
var Icon6 = import_styled_components96.default.span`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

// packages/resume-core/src/dates/RelativeDate.jsx
var import_react110 = __toESM(require("react"));
var import_styled_components97 = __toESM(require("styled-components"));
var import_jsx_runtime98 = require("react/jsx-runtime");
var Container27 = import_styled_components97.default.time`
  font-size: ${(props) => props.$size || "var(--resume-size-small)"};
  color: ${(props) => props.$color || "var(--resume-color-tertiary)"};
  white-space: nowrap;
`;

// packages/resume-core/src/visuals/index.jsx
var import_react116 = __toESM(require("react"));

// packages/resume-core/src/visuals/BackgroundPattern.jsx
var import_react112 = __toESM(require("react"));
var import_styled_components98 = __toESM(require("styled-components"));
var import_jsx_runtime99 = require("react/jsx-runtime");
var Pattern = import_styled_components98.default.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: ${(props) => props.$opacity || 0.05};
  z-index: 0;
  background-image: ${(props) => {
  if (props.$pattern === "dots") {
    return `radial-gradient(circle, var(--resume-color-primary) 1px, transparent 1px)`;
  }
  if (props.$pattern === "grid") {
    return `
        linear-gradient(var(--resume-color-border) 1px, transparent 1px),
        linear-gradient(90deg, var(--resume-color-border) 1px, transparent 1px)
      `;
  }
  if (props.$pattern === "diagonal") {
    return `repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        var(--resume-color-border) 10px,
        var(--resume-color-border) 11px
      )`;
  }
  return "none";
}};
  background-size: ${(props) => {
  if (props.$pattern === "dots") return "20px 20px";
  if (props.$pattern === "grid") return "20px 20px";
  return "auto";
}};

  @media print {
    display: none;
  }
`;

// packages/resume-core/src/visuals/ColorBlock.jsx
var import_react113 = __toESM(require("react"));
var import_styled_components99 = __toESM(require("styled-components"));
var import_jsx_runtime100 = require("react/jsx-runtime");
var Block = import_styled_components99.default.div`
  padding: var(--resume-space-section);
  background-color: ${(props) => props.$color || "var(--resume-color-muted)"};
  border-radius: ${(props) => props.$rounded ? "var(--resume-radius-md)" : "0"};
  margin: ${(props) => props.$margin || "var(--resume-space-section) 0"};
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  @media (max-width: 768px) {
    padding: var(--resume-space-item);
  }
`;
var Content8 = import_styled_components99.default.div`
  position: relative;
  z-index: 1;
`;

// packages/resume-core/src/visuals/DividerVariants.jsx
var import_react114 = __toESM(require("react"));
var import_styled_components100 = __toESM(require("styled-components"));
var import_jsx_runtime101 = require("react/jsx-runtime");
var Divider3 = import_styled_components100.default.hr`
  border: none;
  margin: ${(props) => props.$spacing || "var(--resume-space-item) 0"};
  height: ${(props) => {
  if (props.$variant === "thick") return "3px";
  if (props.$variant === "gradient") return "2px";
  return "1px";
}};
  background: ${(props) => {
  if (props.$variant === "gradient") {
    return `linear-gradient(
        to right,
        transparent,
        ${props.$color || "var(--resume-color-border)"},
        transparent
      )`;
  }
  if (props.$variant === "dotted") {
    return `repeating-linear-gradient(
        to right,
        ${props.$color || "var(--resume-color-border)"} 0,
        ${props.$color || "var(--resume-color-border)"} 4px,
        transparent 4px,
        transparent 8px
      )`;
  }
  if (props.$variant === "dashed") {
    return `repeating-linear-gradient(
        to right,
        ${props.$color || "var(--resume-color-border)"} 0,
        ${props.$color || "var(--resume-color-border)"} 12px,
        transparent 12px,
        transparent 20px
      )`;
  }
  return props.$color || "var(--resume-color-border)";
}};

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background: ${(props) => props.$color || "var(--resume-color-border)"};
  }
`;
var DecorativeDivider = import_styled_components100.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.$spacing || "var(--resume-space-item) 0"};
  gap: var(--resume-space-tight);

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${(props) => props.$color || "var(--resume-color-border)"};
  }

  @media print {
    &::before,
    &::after {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`;
var Icon7 = import_styled_components100.default.span`
  color: ${(props) => props.$color || "var(--resume-color-accent)"};
  font-size: 16px;
`;

// packages/resume-core/src/visuals/BorderAccent.jsx
var import_react115 = __toESM(require("react"));
var import_styled_components101 = __toESM(require("styled-components"));
var import_jsx_runtime102 = require("react/jsx-runtime");
var Container28 = import_styled_components101.default.div`
  position: relative;
  padding: ${(props) => props.$padding || "var(--resume-space-item)"};
  border: ${(props) => {
  const color = props.$color || "var(--resume-color-accent)";
  if (props.$position === "all") return `2px solid ${color}`;
  return "none";
}};
  border-left: ${(props) => {
  if (props.$position === "left" || props.$position === "all") {
    return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
  }
  return "none";
}};
  border-right: ${(props) => {
  if (props.$position === "right") {
    return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
  }
  return "none";
}};
  border-top: ${(props) => {
  if (props.$position === "top" || props.$position === "all") {
    return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
  }
  return "none";
}};
  border-bottom: ${(props) => {
  if (props.$position === "bottom" || props.$position === "all") {
    return `4px solid ${props.$color || "var(--resume-color-accent)"}`;
  }
  return "none";
}};
  border-radius: ${(props) => props.$rounded ? "var(--resume-radius-md)" : "0"};
  break-inside: avoid;

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;
var Corner = import_styled_components101.default.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: ${(props) => props.$color || "var(--resume-color-accent)"};
  border-style: solid;
  border-width: 0;

  ${(props) => {
  if (props.$corner === "top-left") {
    return `
        top: -2px;
        left: -2px;
        border-top-width: 3px;
        border-left-width: 3px;
      `;
  }
  if (props.$corner === "top-right") {
    return `
        top: -2px;
        right: -2px;
        border-top-width: 3px;
        border-right-width: 3px;
      `;
  }
  if (props.$corner === "bottom-left") {
    return `
        bottom: -2px;
        left: -2px;
        border-bottom-width: 3px;
        border-left-width: 3px;
      `;
  }
  if (props.$corner === "bottom-right") {
    return `
        bottom: -2px;
        right: -2px;
        border-bottom-width: 3px;
        border-right-width: 3px;
      `;
  }
}}

  @media print {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// packages/resume-core/src/print/index.jsx
var import_react124 = __toESM(require("react"));

// packages/resume-core/src/print/KeepTogether.jsx
var import_react117 = __toESM(require("react"));
var import_styled_components102 = __toESM(require("styled-components"));
var import_jsx_runtime103 = require("react/jsx-runtime");
var Container29 = import_styled_components102.default.div`
  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
  }
`;

// packages/resume-core/src/print/ColumnBreak.jsx
var import_react118 = __toESM(require("react"));
var import_styled_components103 = __toESM(require("styled-components"));
var import_jsx_runtime104 = require("react/jsx-runtime");
var Break2 = import_styled_components103.default.div`
  @media print {
    ${(props) => {
  if (props.$type === "page") {
    return `
          page-break-after: always;
          break-after: page;
        `;
  }
  if (props.$type === "column") {
    return `
          column-break-after: always;
          break-after: column;
        `;
  }
  return `
        page-break-after: always;
        break-after: page;
      `;
}}
  }

  @media screen {
    display: none;
  }
`;

// packages/resume-core/src/print/PrintOnly.jsx
var import_react119 = __toESM(require("react"));
var import_styled_components104 = __toESM(require("styled-components"));
var import_jsx_runtime105 = require("react/jsx-runtime");
var Container30 = import_styled_components104.default.div`
  display: ${(props) => props.$hideScreen ? "none" : "block"};

  @media print {
    display: block !important;
  }

  @media screen {
    display: ${(props) => props.$hideScreen ? "none !important" : "block"};
  }
`;
var ScreenContainer = import_styled_components104.default.div`
  @media print {
    display: none !important;
  }
`;

// packages/resume-core/src/print/PageHeaderLine.jsx
var import_react120 = __toESM(require("react"));
var import_styled_components105 = __toESM(require("styled-components"));
var import_jsx_runtime106 = require("react/jsx-runtime");
var HeaderContainer = import_styled_components105.default.div`
  display: none;

  @media print {
    display: block;
    position: running(header);
    padding-bottom: var(--resume-space-xs, 0.5rem);
    border-bottom: 1px solid var(--resume-color-border, #e5e7eb);
    font-size: var(--resume-size-small, 0.875rem);
    color: var(--resume-color-secondary, #6b7280);
  }
`;
var HeaderContent = import_styled_components105.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
var Name8 = import_styled_components105.default.span`
  font-weight: 600;
  color: var(--resume-color-primary, #111827);
`;

// packages/resume-core/src/print/PageFooterLine.jsx
var import_react121 = __toESM(require("react"));
var import_styled_components106 = __toESM(require("styled-components"));
var import_jsx_runtime107 = require("react/jsx-runtime");
var FooterContainer = import_styled_components106.default.div`
  display: none;

  @media print {
    display: block;
    position: running(footer);
    padding-top: var(--resume-space-xs, 0.5rem);
    border-top: 1px solid var(--resume-color-border, #e5e7eb);
    font-size: var(--resume-size-xs, 0.75rem);
    color: var(--resume-color-secondary, #6b7280);
  }
`;
var FooterContent = import_styled_components106.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
var PageNumber2 = import_styled_components106.default.span`
  @media print {
    &::before {
      content: 'Page ';
    }
    &::after {
      content: ' of ' counter(pages);
    }
  }
`;
var CurrentPage = import_styled_components106.default.span`
  @media print {
    &::before {
      content: counter(page);
    }
  }
`;
var Date11 = import_styled_components106.default.span`
  font-variant-numeric: tabular-nums;
`;

// packages/resume-core/src/print/LetterheadBar.jsx
var import_react122 = __toESM(require("react"));
var import_styled_components107 = __toESM(require("styled-components"));
var import_jsx_runtime108 = require("react/jsx-runtime");
var LetterheadContainer = import_styled_components107.default.div`
  @media print {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: var(--resume-space-xs, 0.5rem) var(--resume-space-base, 1rem);
    background: var(--resume-color-accent, #f3f4f6);
    border-bottom: 2px solid var(--resume-color-primary, #111827);
    z-index: 1000;

    /* Reserve space for unprintable area */
    margin-top: 0.25in;
  }

  @media screen {
    padding: var(--resume-space-xs, 0.5rem) var(--resume-space-base, 1rem);
    background: var(--resume-color-accent, #f3f4f6);
    border-bottom: 2px solid var(--resume-color-primary, #111827);
  }
`;
var LetterheadContent = import_styled_components107.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--resume-size-small, 0.875rem);
`;
var Name9 = import_styled_components107.default.div`
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--resume-color-primary, #111827);
  font-size: var(--resume-size-base, 1rem);
`;
var Tagline2 = import_styled_components107.default.div`
  color: var(--resume-color-secondary, #6b7280);
  font-size: var(--resume-size-small, 0.875rem);
`;
var Spacer2 = import_styled_components107.default.div`
  @media print {
    height: 0.75in;
  }

  @media screen {
    height: 3rem;
  }
`;

// packages/resume-core/src/print/SoftShadowEmulation.jsx
var import_react123 = __toESM(require("react"));
var import_styled_components108 = __toESM(require("styled-components"));
var import_jsx_runtime109 = require("react/jsx-runtime");
var ShadowContainer = import_styled_components108.default.div`
  position: relative;
  background: var(--resume-color-background, #ffffff);
`;
var ShadowBox = import_styled_components108.default.div`
  position: relative;
  padding: ${(props) => props.$padding || "var(--resume-space-base, 1rem)"};
  background: var(--resume-color-background, #ffffff);

  /* Primary border */
  border: 1px solid var(--resume-color-border, #e5e7eb);

  /* Shadow emulation using pseudo-element */
  &::after {
    content: '';
    position: absolute;
    top: ${(props) => props.$offset || "4px"};
    left: ${(props) => props.$offset || "4px"};
    right: -${(props) => props.$offset || "4px"};
    bottom: -${(props) => props.$offset || "4px"};
    border: 1px solid ${(props) => props.$shadowColor || "rgba(0, 0, 0, 0.08)"};
    border-radius: inherit;
    z-index: -1;

    @media print {
      /* Ensure shadow prints - use solid light gray */
      border-color: ${(props) => props.$printShadowColor || "#f0f0f0"};
    }
  }
`;

// packages/resume-core/src/metadata/InlineKicker.jsx
var import_react125 = __toESM(require("react"));
var import_styled_components109 = __toESM(require("styled-components"));
var import_jsx_runtime110 = require("react/jsx-runtime");
var StyledKicker = import_styled_components109.default.span`
  display: inline-block;
  font-size: ${(props) => props.theme?.typography?.sizes?.small || "var(--resume-size-small, 10px)"};
  font-weight: ${(props) => props.theme?.typography?.weights?.semibold || "var(--resume-weight-semibold, 600)"};
  color: ${(props) => props.$color || props.theme?.colors?.secondary || "var(--resume-color-secondary, #4a4a4a)"};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;

  @media print {
    font-size: 9pt;
    color: ${(props) => props.$color || "#4a4a4a"};
    letter-spacing: 0.08em;
  }
`;

// packages/resume-core/src/metadata/MetaRow.jsx
var import_react126 = __toESM(require("react"));
var import_styled_components110 = __toESM(require("styled-components"));
var import_jsx_runtime111 = require("react/jsx-runtime");
var StyledMetaRow = import_styled_components110.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: ${(props) => props.theme?.typography?.sizes?.small || "var(--resume-size-small, 10px)"};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #4a4a4a)"};
  line-height: 1.5;

  /* Ensure 4.5:1 contrast ratio minimum */
  @media screen {
    color: #4a4a4a; /* 9.29:1 contrast on white */
  }

  @media print {
    font-size: 9pt;
    color: #4a4a4a;
    gap: 6px;
  }
`;
var MetaItem = import_styled_components110.default.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;

  &:not(:last-child)::after {
    content: '${(props) => props.$separator}';
    margin-left: 8px;
    opacity: 0.6;

    @media print {
      margin-left: 6px;
    }
  }
`;

// packages/resume-core/src/metadata/SubsectionLabel.jsx
var import_react127 = __toESM(require("react"));
var import_styled_components111 = __toESM(require("styled-components"));
var import_jsx_runtime112 = require("react/jsx-runtime");
var StyledLabel2 = import_styled_components111.default.div`
  display: block;
  font-size: ${(props) => props.theme?.typography?.sizes?.small || "var(--resume-size-small, 10px)"};
  font-weight: ${(props) => props.theme?.typography?.weights?.semibold || "var(--resume-weight-semibold, 600)"};
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #4a4a4a)"};
  margin-bottom: 6px;
  line-height: 1.4;

  /* Tracked uppercase variant */
  ${(props) => props.$variant === "tracked" && `
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-variant: normal;
  `}

  /* Small caps variant */
  ${(props) => props.$variant === "caps" && `
    font-variant: small-caps;
    letter-spacing: 0.05em;
    text-transform: lowercase;
  `}

  @media print {
    font-size: 9pt;
    color: #4a4a4a;
    margin-bottom: 4px;

    ${(props) => props.$variant === "tracked" && `
      text-transform: uppercase;
      letter-spacing: 0.1em;
    `}

    ${(props) => props.$variant === "caps" && `
      font-variant: small-caps;
      letter-spacing: 0.05em;
    `}
  }
`;

// packages/resume-core/src/metadata/GreyLabelCaps.jsx
var import_react128 = __toESM(require("react"));
var import_styled_components112 = __toESM(require("styled-components"));
var import_jsx_runtime113 = require("react/jsx-runtime");
var StyledGreyLabel = import_styled_components112.default.span`
  display: inline-block;
  font-size: ${(props) => {
  if (props.$size === "xs") return "8pt";
  return "9pt";
}};
  font-weight: ${(props) => props.theme?.typography?.weights?.medium || "var(--resume-weight-medium, 500)"};
  /* Ensure 4.5:1 contrast minimum - #767676 provides 4.54:1 on white */
  color: #767676;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.3;

  @media print {
    font-size: ${(props) => {
  if (props.$size === "xs") return "8pt";
  return "9pt";
}};
    color: #767676;
    letter-spacing: 0.08em;
  }
`;

// packages/resume-core/src/metadata/SmallCapsHeading.jsx
var import_react129 = __toESM(require("react"));
var import_styled_components113 = __toESM(require("styled-components"));
var import_jsx_runtime114 = require("react/jsx-runtime");
var StyledHeading2 = import_styled_components113.default.h2`
  font-size: ${(props) => {
  if (props.$size === "sm") return "11pt";
  if (props.$size === "lg") return "13pt";
  return "12pt";
}};
  font-weight: ${(props) => props.theme?.typography?.weights?.semibold || "var(--resume-weight-semibold, 600)"};
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #1a1a1a)"};
  font-variant: small-caps;
  letter-spacing: 0.06em;
  line-height: 1.3;
  margin: 0 0 12px 0;
  text-transform: lowercase; /* Allows font-variant to work properly */

  @media print {
    font-size: ${(props) => {
  if (props.$size === "sm") return "11pt";
  if (props.$size === "lg") return "13pt";
  return "12pt";
}};
    color: #1a1a1a;
    letter-spacing: 0.06em;
    margin: 0 0 10px 0;
    font-variant: small-caps;
    page-break-after: avoid;
  }
`;

// packages/resume-core/src/containers/MutedPanel.jsx
var import_react130 = __toESM(require("react"));
var import_styled_components114 = __toESM(require("styled-components"));
var import_jsx_runtime115 = require("react/jsx-runtime");
var StyledMutedPanel = import_styled_components114.default.div`
  background: ${(props) => {
  if (props.$tint === "accent") {
    return props.theme?.colors?.accentMuted || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.06))";
  }
  if (props.$tint === "warm") {
    return "var(--resume-color-warm-muted, rgba(102, 51, 0, 0.05))";
  }
  if (props.$tint === "cool") {
    return "var(--resume-color-cool-muted, rgba(0, 51, 102, 0.05))";
  }
  return props.theme?.colors?.muted || "var(--resume-color-muted, #f5f5f5)";
}};

  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  padding: ${(props) => {
  if (props.$padding === "sm") return "12px";
  if (props.$padding === "lg") return "24px";
  return "16px";
}};

  border-radius: ${(props) => props.theme?.radius?.md || "var(--resume-radius-md, 6px)"};

  margin: ${(props) => {
  if (props.$margin === "sm") return "8px 0";
  if (props.$margin === "lg") return "24px 0";
  if (props.$margin === "none") return "0";
  return "16px 0";
}};

  /* High text contrast for readability */
  line-height: 1.6;
  font-size: 10pt;

  /* Ensure content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Use subtle backgrounds that print well */
    background: ${(props) => {
  if (props.$tint === "accent") return "rgba(0, 102, 204, 0.05)";
  if (props.$tint === "warm") return "rgba(102, 51, 0, 0.04)";
  if (props.$tint === "cool") return "rgba(0, 51, 102, 0.04)";
  return "#f8f8f8";
}};

    /* Ensure high contrast text for printing */
    color: #000;

    /* Remove border radius for cleaner print appearance */
    border-radius: 0;

    /* Adjust spacing for print density */
    padding: ${(props) => {
  if (props.$padding === "sm") return "10px";
  if (props.$padding === "lg") return "20px";
  return "14px";
}};

    /* Prevent orphaned panels */
    page-break-inside: avoid;
  }
`;

// packages/resume-core/src/containers/AccentCalloutPanel.jsx
var import_react131 = __toESM(require("react"));
var import_styled_components115 = __toESM(require("styled-components"));
var import_jsx_runtime116 = require("react/jsx-runtime");
var StyledCalloutPanel = import_styled_components115.default.div`
  border-left: 4px solid
    ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success, #22c55e)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning, #f59e0b)";
  if (props.$variant === "info") return "var(--resume-color-info, #3b82f6)";
  return props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)";
}};

  background: ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success-light, rgba(34, 197, 94, 0.08))";
  if (props.$variant === "warning")
    return "var(--resume-color-warning-light, rgba(245, 158, 11, 0.08))";
  if (props.$variant === "info")
    return "var(--resume-color-info-light, rgba(59, 130, 246, 0.08))";
  return props.theme?.colors?.accentLight || "var(--resume-color-accent-light, rgba(0, 102, 204, 0.08))";
}};

  padding: ${(props) => props.$size === "sm" ? "12px 16px" : "16px 20px"}; /* default md */

  margin: 16px 0;
  border-radius: ${(props) => props.theme?.radius?.md || "var(--resume-radius-md, 6px)"};

  /* Ensure high contrast text, no reversed text */
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  @media print {
    /* Solid border for print clarity */
    border-left: 3pt solid
      ${(props) => {
  if (props.$variant === "success") return "#22c55e";
  if (props.$variant === "warning") return "#f59e0b";
  if (props.$variant === "info") return "#3b82f6";
  return "#0066cc";
}};

    /* Lighter background for print */
    background: ${(props) => {
  if (props.$variant === "success") return "rgba(34, 197, 94, 0.05)";
  if (props.$variant === "warning") return "rgba(245, 158, 11, 0.05)";
  if (props.$variant === "info") return "rgba(59, 130, 246, 0.05)";
  return "rgba(0, 102, 204, 0.05)";
}};

    /* Remove border radius */
    border-radius: 0;

    /* Ensure black text for maximum contrast */
    color: #000;

    /* Prevent splitting across pages */
    page-break-inside: avoid;
  }
`;
var CalloutHeader = import_styled_components115.default.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  /* Icon styling */
  .callout-icon {
    font-size: 16pt;
    line-height: 1;
  }
`;
var CalloutTitle = import_styled_components115.default.div`
  /* Bold, larger title for emphasis (as per design constraints) */
  font-size: ${(props) => props.$size === "sm" ? "11pt" : "12pt"};
  font-weight: 700;
  color: ${(props) => {
  if (props.$variant === "success")
    return "var(--resume-color-success-dark, #16a34a)";
  if (props.$variant === "warning")
    return "var(--resume-color-warning-dark, #d97706)";
  if (props.$variant === "info")
    return "var(--resume-color-info-dark, #2563eb)";
  return props.theme?.colors?.accent || "var(--resume-color-accent, #0066cc)";
}};

  @media print {
    /* Maintain weight and bump size slightly for print */
    font-weight: 700;
    font-size: ${(props) => props.$size === "sm" ? "11pt" : "12pt"};
    color: #000;
  }
`;
var CalloutContent = import_styled_components115.default.div`
  font-size: 10pt;
  line-height: 1.6;

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    font-size: 10pt;
    line-height: 1.5;
  }
`;

// packages/resume-core/src/containers/SoftCardOutline.jsx
var import_react132 = __toESM(require("react"));
var import_styled_components116 = __toESM(require("styled-components"));
var import_jsx_runtime117 = require("react/jsx-runtime");
var StyledCardOutline = import_styled_components116.default.div`
  /* 1pt stroke as specified */
  border: 1px solid
    ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accentBorder || "var(--resume-color-accent-border, #cce5ff)";
  }
  if (props.$variant === "muted") {
    return props.theme?.colors?.border || "var(--resume-color-border, #e5e5e5)";
  }
  return props.theme?.colors?.borderLight || "var(--resume-color-border-light, #d4d4d4)";
}};

  /* Rounded corners for softness */
  border-radius: ${(props) => {
  if (props.$rounded === "sm") return "4px";
  if (props.$rounded === "lg") return "12px";
  return props.theme?.radius?.md || "var(--resume-radius-md, 8px)";
}};

  /* No shadows - clean outline only */
  box-shadow: none;

  /* Padding options */
  padding: ${(props) => {
  if (props.$padding === "sm") return "12px";
  if (props.$padding === "lg") return "24px";
  return "16px";
}};

  margin: ${(props) => {
  if (props.$margin === "sm") return "8px 0";
  if (props.$margin === "lg") return "24px 0";
  if (props.$margin === "none") return "0";
  return "16px 0";
}};

  /* Optional subtle background */
  background: ${(props) => {
  if (props.$background === "accent") {
    return props.theme?.colors?.accentMuted || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.03))";
  }
  if (props.$background === "muted") {
    return "var(--resume-color-background-muted, rgba(0, 0, 0, 0.02))";
  }
  return "transparent";
}};

  /* Text styling */
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  /* Content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  @media print {
    /* Ensure border prints clearly */
    border: 1pt solid
      ${(props) => {
  if (props.$variant === "accent") return "#b3d9ff";
  if (props.$variant === "muted") return "#d4d4d4";
  return "#c0c0c0";
}};

    /* Remove border radius for print (cleaner appearance) */
    border-radius: 0;

    /* Remove background fills for print */
    background: transparent;

    /* Ensure high contrast text */
    color: #000;

    /* Adjust padding for print density */
    padding: ${(props) => {
  if (props.$padding === "sm") return "10px";
  if (props.$padding === "lg") return "20px";
  return "14px";
}};

    /* Prevent splitting card across pages */
    page-break-inside: avoid;

    /* Ensure no page edge collision */
    margin-left: 0;
    margin-right: 0;
  }
`;

// packages/resume-core/src/containers/RoleBlockFramed.jsx
var import_react133 = __toESM(require("react"));
var import_styled_components117 = __toESM(require("styled-components"));
var import_jsx_runtime118 = require("react/jsx-runtime");
var StyledRoleBlock = import_styled_components117.default.div`
  /* Light frame - subtle border */
  border: 1px solid
    ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accentBorder || "var(--resume-color-accent-border, #e0e0e0)";
  }
  if (props.$variant === "minimal") {
    return "transparent";
  }
  return props.theme?.colors?.borderLight || "var(--resume-color-border-light, #e5e5e5)";
}};

  /* Optional background tint */
  background: ${(props) => {
  if (props.$variant === "accent") {
    return props.theme?.colors?.accentMuted || "var(--resume-color-accent-muted, rgba(0, 102, 204, 0.02))";
  }
  if (props.$variant === "tinted") {
    return "var(--resume-color-background-muted, rgba(0, 0, 0, 0.01))";
  }
  return "transparent";
}};

  /* Consistent padding to prevent edge collision */
  padding: ${(props) => {
  if (props.$padding === "sm") return "12px 16px";
  if (props.$padding === "lg") return "20px 24px";
  return "16px 20px";
}};

  /* Spacing between role blocks */
  margin: ${(props) => {
  if (props.$spacing === "sm") return "12px 0";
  if (props.$spacing === "lg") return "24px 0";
  if (props.$spacing === "none") return "0";
  return "16px 0";
}};

  /* Subtle rounding */
  border-radius: ${(props) => props.theme?.radius?.sm || "var(--resume-radius-sm, 4px)"};

  /* Text styling */
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000)"};

  /* Content spacing */
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  /* Ensure proper spacing for nested elements */
  h3,
  h4 {
    margin-bottom: 8px;
  }

  p {
    margin: 4px 0;
  }

  ul,
  ol {
    margin: 8px 0;
    padding-left: 20px;
  }

  li {
    margin: 4px 0;
  }

  @media print {
    /* Ensure border prints clearly */
    border: ${(props) => {
  if (props.$variant === "minimal") return "none";
  if (props.$variant === "accent") return "0.5pt solid #d0d0d0";
  return "0.5pt solid #e0e0e0";
}};

    /* Remove background for clean print */
    background: transparent;

    /* Remove border radius for print */
    border-radius: 0;

    /* Adjust padding for print density */
    padding: ${(props) => {
  if (props.$padding === "sm") return "10px 12px";
  if (props.$padding === "lg") return "16px 20px";
  return "12px 16px";
}};

    /* Prevent page edge collision - ensure margins */
    margin-left: 0;
    margin-right: 0;

    /* Prevent splitting role blocks across pages */
    page-break-inside: avoid;

    /* Add small gap after each block for readability */
    margin-bottom: ${(props) => {
  if (props.$spacing === "sm") return "10px";
  if (props.$spacing === "lg") return "20px";
  if (props.$spacing === "none") return "0";
  return "14px";
}};

    /* Ensure high contrast text */
    color: #000;

    /* Optimize nested element spacing for print */
    h3,
    h4 {
      margin-bottom: 6px;
    }

    ul,
    ol {
      margin: 6px 0;
    }

    li {
      margin: 3px 0;
    }
  }
`;

// packages/resume-core/src/tags/ToolTagRibbon.jsx
var import_react134 = __toESM(require("react"));
var import_styled_components118 = __toESM(require("styled-components"));
var import_jsx_runtime119 = require("react/jsx-runtime");
var RibbonContainer = import_styled_components118.default.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${(props) => props.$size === "small" ? "6px" : "8px"};
  margin: ${(props) => props.$size === "small" ? "4px 0" : "6px 0"};
  line-height: ${(props) => props.theme?.typography?.lineHeight || "var(--resume-line-height, 1.5)"};

  @media print {
    gap: ${(props) => props.$size === "small" ? "4px" : "6px"};
    margin: 3pt 0;
  }
`;
var Tag2 = import_styled_components118.default.span`
  display: inline-block;
  font-size: ${(props) => {
  if (props.$size === "small") return "8.5pt";
  if (props.$size === "large") return "10.5pt";
  return "9.5pt";
}};
  font-weight: 500;
  color: ${(props) => props.theme?.colors?.secondary || "var(--resume-color-secondary, #444444)"};
  white-space: nowrap;

  /* Preserve baseline grid */
  vertical-align: baseline;

  @media print {
    color: #444444;
    font-size: ${(props) => {
  if (props.$size === "small") return "8pt";
  if (props.$size === "large") return "10pt";
  return "9pt";
}};
  }
`;
var Separator7 = import_styled_components118.default.span`
  display: inline-block;
  font-size: ${(props) => {
  if (props.$size === "small") return "8.5pt";
  if (props.$size === "large") return "10.5pt";
  return "9.5pt";
}};
  color: ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #cccccc)"};
  user-select: none;
  vertical-align: baseline;

  @media print {
    color: #cccccc;
  }
`;

// packages/resume-core/src/badges/BadgeRowOutline.jsx
var import_react135 = __toESM(require("react"));
var import_styled_components119 = __toESM(require("styled-components"));
var import_jsx_runtime120 = require("react/jsx-runtime");
var BadgeContainer2 = import_styled_components119.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.$size === "small" ? "6px" : "8px"};
  margin: ${(props) => props.$size === "small" ? "6px 0" : "8px 0"};

  @media print {
    gap: ${(props) => props.$size === "small" ? "4px" : "6px"};
    margin: 4pt 0;
  }
`;
var OutlineBadge = import_styled_components119.default.span`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => {
  if (props.$size === "small") return "3px 10px";
  if (props.$size === "large") return "7px 16px";
  return "5px 12px";
}};
  border: ${(props) => props.$strokeWidth || "0.5pt"} solid
    ${(props) => props.theme?.colors?.border || "var(--resume-color-border, #666666)"};
  border-radius: ${(props) => props.$rounded ? "999px" : props.theme?.radius?.sm || "var(--resume-radius-sm, 4px)"};
  font-size: ${(props) => {
  if (props.$size === "small") return "8.5pt";
  if (props.$size === "large") return "10.5pt";
  return "9.5pt";
}};
  font-weight: 500;
  color: ${(props) => props.theme?.colors?.primary || "var(--resume-color-primary, #000000)"};
  background: transparent;
  white-space: nowrap;
  line-height: 1.2;

  /* Prevent scalloping on low-DPI displays */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media print {
    /* Ensure minimum stroke width for print clarity */
    border-width: ${(props) => {
  const width = props.$strokeWidth || "0.5pt";
  return width;
}};
    border-color: #666666;
    color: #000000;
    padding: ${(props) => {
  if (props.$size === "small") return "2pt 8pt";
  if (props.$size === "large") return "5pt 12pt";
  return "3pt 10pt";
}};
    font-size: ${(props) => {
  if (props.$size === "small") return "8pt";
  if (props.$size === "large") return "10pt";
  return "9pt";
}};

    /* Force exact colors for print */
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
`;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-academic-cv-lite_react-dom@19.2.0_react@19.2.0/node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx
var import_jsx_runtime121 = require("react/jsx-runtime");
var Layout = import_styled_components120.default.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 40px;
  background: #ffffff;
  font-family: 'Merriweather', Georgia, serif;
  font-size: 12pt;
  color: #111827;
  line-height: 1.6;

  @media print {
    padding: 30px;
  }
`;
var Header12 = import_styled_components120.default.header`
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #6b7280;
  text-align: center;
`;
var Name10 = import_styled_components120.default.h1`
  font-size: 28pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
  letter-spacing: 0.5px;
`;
var Label12 = import_styled_components120.default.div`
  font-size: 14pt;
  color: #1f2937;
  margin-bottom: 16px;
  font-weight: 400;
  font-style: italic;
`;
var StyledContactInfo = (0, import_styled_components120.default)(ContactInfo)`
  font-size: 11pt;
  color: #1f2937;
  justify-content: center;

  a {
    font-size: 11pt;
    color: #1f2937;
    text-decoration: underline;
  }
`;
var Summary5 = import_styled_components120.default.p`
  font-size: 12pt;
  line-height: 1.6;
  color: #1f2937;
  margin: 20px 0 0 0;
  text-align: left;
`;
var StyledSectionTitle = (0, import_styled_components120.default)(SectionTitle)`
  font-size: 16pt;
  font-weight: 700;
  color: #111827;
  margin: 32px 0 16px 0;
  padding-bottom: 6px;
  border-bottom: 2px solid #111827;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
var PublicationItem2 = import_styled_components120.default.div`
  margin-bottom: 20px;
  padding-left: 24px;
  text-indent: -24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var PublicationTitle = import_styled_components120.default.span`
  font-weight: 700;
  color: #111827;
`;
var PublicationMeta = import_styled_components120.default.span`
  color: #1f2937;
  font-style: italic;
`;
var PublicationDate = import_styled_components120.default.span`
  color: #6b7280;
`;
var AwardItem = import_styled_components120.default.div`
  margin-bottom: 16px;
  padding-left: 20px;
  border-left: 3px solid #9ca3af;

  &:last-child {
    margin-bottom: 0;
  }
`;
var AwardTitle = import_styled_components120.default.h3`
  font-size: 13pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
`;
var AwardAwarder = import_styled_components120.default.div`
  font-size: 11pt;
  color: #1f2937;
  font-style: italic;
  margin-bottom: 4px;
`;
var AwardDate = import_styled_components120.default.div`
  font-size: 11pt;
  color: #6b7280;
  margin-bottom: 8px;
`;
var AwardSummary = import_styled_components120.default.p`
  margin: 0;
  font-size: 11pt;
  color: #1f2937;
  line-height: 1.5;
`;
var WorkItem = import_styled_components120.default.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var WorkHeader = import_styled_components120.default.div`
  margin-bottom: 8px;
`;
var Position2 = import_styled_components120.default.h3`
  font-size: 13pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
`;
var Company4 = import_styled_components120.default.div`
  font-size: 12pt;
  color: #1f2937;
  font-style: italic;
  margin-bottom: 4px;
`;
var DateText2 = import_styled_components120.default.div`
  font-size: 11pt;
  color: #6b7280;
  margin-bottom: 8px;
`;
var WorkSummary = import_styled_components120.default.p`
  margin: 8px 0;
  color: #1f2937;
  line-height: 1.5;
  font-size: 11pt;
`;
var Highlights2 = import_styled_components120.default.ul`
  margin: 8px 0 0 0;
  padding-left: 20px;
  list-style-type: disc;

  li {
    margin: 4px 0;
    color: #1f2937;
    line-height: 1.5;
    font-size: 11pt;
  }
`;
var EducationItem = import_styled_components120.default.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var Institution = import_styled_components120.default.h3`
  font-size: 13pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
`;
var Degree = import_styled_components120.default.div`
  font-size: 12pt;
  color: #1f2937;
  margin-bottom: 4px;
`;
var EducationDate = import_styled_components120.default.div`
  font-size: 11pt;
  color: #6b7280;
`;
var SkillsList = import_styled_components120.default.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
var SkillItem2 = import_styled_components120.default.div`
  display: flex;
  gap: 8px;
`;
var SkillName3 = import_styled_components120.default.span`
  font-weight: 700;
  color: #111827;
  font-size: 12pt;
  min-width: 120px;
`;
var SkillKeywords = import_styled_components120.default.span`
  color: #1f2937;
  font-size: 11pt;
`;
function Resume({ resume }) {
  const {
    basics = {},
    work = [],
    education = [],
    skills = [],
    projects = [],
    volunteer = [],
    awards = [],
    publications = [],
    languages = [],
    interests = [],
    references = []
  } = resume;
  return /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Header12, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Name10, { children: basics.name }),
      basics.label && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Label12, { children: basics.label }),
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(StyledContactInfo, { basics }),
      basics.summary && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Summary5, { children: basics.summary })
    ] }),
    education?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(StyledSectionTitle, { children: "Education" }),
      education.map((edu, index) => /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(EducationItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Institution, { children: edu.institution }),
        /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Degree, { children: [
          edu.studyType,
          " in ",
          edu.area,
          edu.score && ` \u2022 ${edu.score}`
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(EducationDate, { children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(DateRange, { startDate: edu.startDate, endDate: edu.endDate }) })
      ] }, index))
    ] }),
    publications?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(StyledSectionTitle, { children: "Publications" }),
      publications.map((pub, index) => /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(PublicationItem2, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(PublicationTitle, { children: [
          pub.name,
          ". "
        ] }),
        pub.publisher && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(PublicationMeta, { children: [
          pub.publisher,
          ". "
        ] }),
        pub.releaseDate && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(PublicationDate, { children: [
          "(",
          pub.releaseDate,
          ")"
        ] }),
        pub.summary && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(WorkSummary, { children: pub.summary })
      ] }, index))
    ] }),
    awards?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(StyledSectionTitle, { children: "Awards & Honors" }),
      awards.map((award, index) => /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(AwardItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(AwardTitle, { children: award.title }),
        award.awarder && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(AwardAwarder, { children: award.awarder }),
        award.date && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(AwardDate, { children: award.date }),
        award.summary && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(AwardSummary, { children: award.summary })
      ] }, index))
    ] }),
    work?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(StyledSectionTitle, { children: "Professional Experience" }),
      work.map((job, index) => /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Position2, { children: job.position }),
          job.name && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Company4, { children: job.name }),
          /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(DateText2, { children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(DateRange, { startDate: job.startDate, endDate: job.endDate }) })
        ] }),
        job.summary && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(WorkSummary, { children: job.summary }),
        job.highlights?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Highlights2, { children: job.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_runtime121.jsx)("li", { children: highlight }, i)) })
      ] }, index))
    ] }),
    projects?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(StyledSectionTitle, { children: "Research Projects" }),
      projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Position2, { children: project.name }),
        project.description && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(WorkSummary, { children: project.description }),
        project.highlights?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Highlights2, { children: project.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_runtime121.jsx)("li", { children: highlight }, i)) })
      ] }, index))
    ] }),
    skills?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(StyledSectionTitle, { children: "Skills" }),
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(SkillsList, { children: skills.map((skill, index) => /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(SkillItem2, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(SkillName3, { children: [
          skill.name,
          ":"
        ] }),
        skill.keywords?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(SkillKeywords, { children: skill.keywords.join(", ") })
      ] }, index)) })
    ] }),
    volunteer?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(StyledSectionTitle, { children: "Service & Leadership" }),
      volunteer.map((vol, index) => /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Position2, { children: vol.position }),
          vol.organization && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Company4, { children: vol.organization }),
          (vol.startDate || vol.endDate) && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(DateText2, { children: /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(
            DateRange,
            {
              startDate: vol.startDate,
              endDate: vol.endDate
            }
          ) })
        ] }),
        vol.summary && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(WorkSummary, { children: vol.summary }),
        vol.highlights?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Highlights2, { children: vol.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_runtime121.jsx)("li", { children: highlight }, i)) })
      ] }, index))
    ] }),
    languages?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(StyledSectionTitle, { children: "Languages" }),
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(SkillsList, { children: languages.map((lang, index) => /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(SkillItem2, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(SkillName3, { children: [
          lang.language,
          ":"
        ] }),
        lang.fluency && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(SkillKeywords, { children: lang.fluency })
      ] }, index)) })
    ] }),
    interests?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(StyledSectionTitle, { children: "Research Interests" }),
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(SkillsList, { children: interests.map((interest, index) => /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(SkillItem2, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(SkillName3, { children: interest.name }),
        interest.keywords?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(SkillKeywords, { children: interest.keywords.join(", ") })
      ] }, index)) })
    ] }),
    references?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(StyledSectionTitle, { children: "References" }),
      references.map((ref, index) => /* @__PURE__ */ (0, import_jsx_runtime121.jsxs)(EducationItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(Institution, { children: ref.name }),
        ref.reference && /* @__PURE__ */ (0, import_jsx_runtime121.jsx)(WorkSummary, { children: ref.reference })
      ] }, index))
    ] })
  ] });
}
var Resume_default = Resume;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-academic-cv-lite_react-dom@19.2.0_react@19.2.0/node_modules/jsonresume-theme-academic-cv-lite/src/index.js
var import_jsx_runtime122 = require("react/jsx-runtime");
function render(resume) {
  const sheet = new import_styled_components121.ServerStyleSheet();
  try {
    const html = (0, import_server.renderToString)(
      sheet.collectStyles(/* @__PURE__ */ (0, import_jsx_runtime122.jsx)(Resume_default, { resume }))
    );
    const styles = sheet.getStyleTags();
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${resume.basics?.name || "Resume"} - Curriculum Vitae</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
  ${styles}
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      margin: 0;
      padding: 0;
      background: #f5f5f5;
    }
    @media print {
      body {
        background: white;
      }
      @page {
        margin: 0.75in;
      }
    }
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
  } finally {
    sheet.seal();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  render
});
