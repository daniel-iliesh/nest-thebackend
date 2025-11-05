function __ensureStyledComponentsDefault(mod) {
  if (!mod) {
    return mod;
  }
  const base = mod.default && typeof mod.default === "function"
    ? mod.default
    : mod.default && mod.default.default && typeof mod.default.default === "function"
      ? mod.default.default
      : null;
  if (base) {
    mod.default = base;
    return Object.assign(base, mod);
  }
  const scoped = __ensureStyledComponentsDefault(require("styled-components"));
  const scopedDefault = scoped && typeof scoped.default === "function" ? scoped.default : scoped;
  if (typeof scopedDefault === "function") {
    mod.default = scopedDefault;
    return Object.assign(scopedDefault, mod);
  }
  return mod;
}
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

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/index.js
var index_exports = {};
__export(index_exports, {
  Resume: () => Resume_default,
  render: () => render
});
module.exports = __toCommonJS(index_exports);
var import_server = require("react-dom/server");
var import_styled_components16 = __ensureStyledComponentsDefault(require("styled-components"));

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Resume.js
var import_styled_components15 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Hero.js
var import_styled_components = __toESM(__ensureStyledComponentsDefault(require("styled-components")));
var import_jsx_runtime = require("react/jsx-runtime");
var Header = import_styled_components.default.header`
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #0b1f3a;
`;
var Name = import_styled_components.default.h1`
  font-size: 2.5rem;
  color: #0b1f3a;
  margin-bottom: 0.5rem;
`;
var Label = import_styled_components.default.p`
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;
var ContactInfo = import_styled_components.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 0.95rem;
  color: #666;
`;
var ContactItem = import_styled_components.default.div`
  a {
    color: #0b1f3a;
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid #0b1f3a;
    }
  }
`;
var Hero = ({ basics }) => {
  if (!basics) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Header, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Name, { children: basics.name }),
    basics.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: basics.label }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactInfo, { children: [
      basics.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: `mailto:${basics.email}`, children: basics.email }) }),
      basics.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, { children: basics.phone }),
      basics.location?.city && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactItem, { children: [
        basics.location.city,
        basics.location.region && `, ${basics.location.region}`
      ] }),
      basics.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: basics.url, target: "_blank", rel: "noopener noreferrer", children: basics.url.replace(/^https?:\/\//, "") }) }),
      basics.profiles?.map((profile, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: profile.url, target: "_blank", rel: "noopener noreferrer", children: profile.network }) }, i))
    ] })
  ] });
};
var Hero_default = Hero;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Summary.js
var import_styled_components3 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Section.js
var import_styled_components2 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));
var import_jsx_runtime2 = require("react/jsx-runtime");
var SectionContainer = import_styled_components2.default.section`
  margin-bottom: 2.5rem;
`;
var SectionTitle = import_styled_components2.default.h2`
  font-size: 1.5rem;
  color: #0b1f3a;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
`;
var Section = ({ title, children }) => {
  if (!children) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(SectionContainer, { children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SectionTitle, { children: title }),
    children
  ] });
};
var Section_default = Section;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Summary.js
var import_jsx_runtime3 = require("react/jsx-runtime");
var SummaryText = import_styled_components3.default.p`
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #333;
  margin: 0;
`;
var Summary = ({ basics }) => {
  if (!basics?.summary) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Section_default, { title: "Profile", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SummaryText, { children: basics.summary }) });
};
var Summary_default = Summary;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Work.js
var import_styled_components4 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));

// node_modules/.pnpm/marked@16.4.1/node_modules/marked/lib/marked.esm.js
function L() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var T = L();
function G(u3) {
  T = u3;
}
var I = { exec: () => null };
function h(u3, e = "") {
  let t = typeof u3 == "string" ? u3 : u3.source, n = { replace: (r, i) => {
    let s = typeof i == "string" ? i : i.source;
    return s = s.replace(m.caret, "$1"), t = t.replace(r, s), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var m = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (u3) => new RegExp(`^( {0,3}${u3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}#`), htmlBeginRegex: (u3) => new RegExp(`^ {0,${Math.min(3, u3 - 1)}}<(?:[a-z].*>|!--)`, "i") };
var be = /^(?:[ \t]*(?:\n|$))+/;
var Re = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var Te = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var E = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Oe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var F = /(?:[*+-]|\d{1,9}[.)])/;
var ie = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var oe = h(ie).replace(/bull/g, F).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var we = h(ie).replace(/bull/g, F).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var j = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var ye = /^[^\n]+/;
var Q = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var Pe = h(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Q).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var Se = h(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, F).getRegex();
var v = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var U = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var $e = h("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", U).replace("tag", v).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var ae = h(j).replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
var _e = h(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ae).getRegex();
var K = { blockquote: _e, code: Re, def: Pe, fences: Te, heading: Oe, hr: E, html: $e, lheading: oe, list: Se, newline: be, paragraph: ae, table: I, text: ye };
var re = h("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
var Le = { ...K, lheading: we, table: re, paragraph: h(j).replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", re).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex() };
var Me = { ...K, html: h(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", U).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: I, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: h(j).replace("hr", E).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", oe).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var ze = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var Ae = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var le = /^( {2,}|\\)\n(?!\s*$)/;
var Ie = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var D = /[\p{P}\p{S}]/u;
var W = /[\s\p{P}\p{S}]/u;
var ue = /[^\s\p{P}\p{S}]/u;
var Ee = h(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, W).getRegex();
var pe = /(?!~)[\p{P}\p{S}]/u;
var Ce = /(?!~)[\s\p{P}\p{S}]/u;
var Be = /(?:[^\s\p{P}\p{S}]|~)/u;
var qe = h(/link|code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<!`)(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("code", /(?<!`)(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var ce = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var ve = h(ce, "u").replace(/punct/g, D).getRegex();
var De = h(ce, "u").replace(/punct/g, pe).getRegex();
var he = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var He = h(he, "gu").replace(/notPunctSpace/g, ue).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex();
var Ze = h(he, "gu").replace(/notPunctSpace/g, Be).replace(/punctSpace/g, Ce).replace(/punct/g, pe).getRegex();
var Ge = h("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ue).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex();
var Ne = h(/\\(punct)/, "gu").replace(/punct/g, D).getRegex();
var Fe = h(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var je = h(U).replace("(?:-->|$)", "-->").getRegex();
var Qe = h("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", je).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var q = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/;
var Ue = h(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var de = h(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", Q).getRegex();
var ke = h(/^!?\[(ref)\](?:\[\])?/).replace("ref", Q).getRegex();
var Ke = h("reflink|nolink(?!\\()", "g").replace("reflink", de).replace("nolink", ke).getRegex();
var se = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var X = { _backpedal: I, anyPunctuation: Ne, autolink: Fe, blockSkip: qe, br: le, code: Ae, del: I, emStrongLDelim: ve, emStrongRDelimAst: He, emStrongRDelimUnd: Ge, escape: ze, link: Ue, nolink: ke, punctuation: Ee, reflink: de, reflinkSearch: Ke, tag: Qe, text: Ie, url: I };
var We = { ...X, link: h(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(), reflink: h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex() };
var N = { ...X, emStrongRDelimAst: Ze, emStrongLDelim: De, url: h(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", se).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: h(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", se).getRegex() };
var Xe = { ...N, br: h(le).replace("{2,}", "*").getRegex(), text: h(N.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var C = { normal: K, gfm: Le, pedantic: Me };
var M = { normal: X, gfm: N, breaks: Xe, pedantic: We };
var Je = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var ge = (u3) => Je[u3];
function w(u3, e) {
  if (e) {
    if (m.escapeTest.test(u3)) return u3.replace(m.escapeReplace, ge);
  } else if (m.escapeTestNoEncode.test(u3)) return u3.replace(m.escapeReplaceNoEncode, ge);
  return u3;
}
function J(u3) {
  try {
    u3 = encodeURI(u3).replace(m.percentDecode, "%");
  } catch {
    return null;
  }
  return u3;
}
function V(u3, e) {
  let t = u3.replace(m.findPipe, (i, s, o) => {
    let a = false, l = s;
    for (; --l >= 0 && o[l] === "\\"; ) a = !a;
    return a ? "|" : " |";
  }), n = t.split(m.splitPipe), r = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; r < n.length; r++) n[r] = n[r].trim().replace(m.slashPipe, "|");
  return n;
}
function z(u3, e, t) {
  let n = u3.length;
  if (n === 0) return "";
  let r = 0;
  for (; r < n; ) {
    let i = u3.charAt(n - r - 1);
    if (i === e && !t) r++;
    else if (i !== e && t) r++;
    else break;
  }
  return u3.slice(0, n - r);
}
function fe(u3, e) {
  if (u3.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < u3.length; n++) if (u3[n] === "\\") n++;
  else if (u3[n] === e[0]) t++;
  else if (u3[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function me(u3, e, t, n, r) {
  let i = e.href, s = e.title || null, o = u3[1].replace(r.other.outputLinkReplace, "$1");
  n.state.inLink = true;
  let a = { type: u3[0].charAt(0) === "!" ? "image" : "link", raw: t, href: i, title: s, text: o, tokens: n.inlineTokens(o) };
  return n.state.inLink = false, a;
}
function Ve(u3, e, t) {
  let n = u3.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let r = n[1];
  return e.split(`
`).map((i) => {
    let s = i.match(t.other.beginningSpace);
    if (s === null) return i;
    let [o] = s;
    return o.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
var y = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || T;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : z(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Ve(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = z(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: z(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = z(t[0], `
`).split(`
`), r = "", i = "", s = [];
      for (; n.length > 0; ) {
        let o = false, a = [], l;
        for (l = 0; l < n.length; l++) if (this.rules.other.blockquoteStart.test(n[l])) a.push(n[l]), o = true;
        else if (!o) a.push(n[l]);
        else break;
        n = n.slice(l);
        let c = a.join(`
`), p = c.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${c}` : c, i = i ? `${i}
${p}` : p;
        let g = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(p, s, true), this.lexer.state.top = g, n.length === 0) break;
        let d = s.at(-1);
        if (d?.type === "code") break;
        if (d?.type === "blockquote") {
          let R = d, f = R.raw + `
` + n.join(`
`), O = this.blockquote(f);
          s[s.length - 1] = O, r = r.substring(0, r.length - R.raw.length) + O.raw, i = i.substring(0, i.length - R.text.length) + O.text;
          break;
        } else if (d?.type === "list") {
          let R = d, f = R.raw + `
` + n.join(`
`), O = this.list(f);
          s[s.length - 1] = O, r = r.substring(0, r.length - d.raw.length) + O.raw, i = i.substring(0, i.length - R.raw.length) + O.raw, n = f.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: r, tokens: s, text: i };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), r = n.length > 1, i = { type: "list", raw: "", ordered: r, start: r ? +n.slice(0, -1) : "", loose: false, items: [] };
      n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
      let s = this.rules.other.listItemRegex(n), o = false;
      for (; e; ) {
        let l = false, c = "", p = "";
        if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
        c = t[0], e = e.substring(c.length);
        let g = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (H) => " ".repeat(3 * H.length)), d = e.split(`
`, 1)[0], R = !g.trim(), f = 0;
        if (this.options.pedantic ? (f = 2, p = g.trimStart()) : R ? f = t[1].length + 1 : (f = t[2].search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, p = g.slice(f), f += t[1].length), R && this.rules.other.blankLine.test(d) && (c += d + `
`, e = e.substring(d.length + 1), l = true), !l) {
          let H = this.rules.other.nextBulletRegex(f), ee = this.rules.other.hrRegex(f), te = this.rules.other.fencesBeginRegex(f), ne = this.rules.other.headingBeginRegex(f), xe = this.rules.other.htmlBeginRegex(f);
          for (; e; ) {
            let Z = e.split(`
`, 1)[0], A;
            if (d = Z, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), A = d) : A = d.replace(this.rules.other.tabCharGlobal, "    "), te.test(d) || ne.test(d) || xe.test(d) || H.test(d) || ee.test(d)) break;
            if (A.search(this.rules.other.nonSpaceChar) >= f || !d.trim()) p += `
` + A.slice(f);
            else {
              if (R || g.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || te.test(g) || ne.test(g) || ee.test(g)) break;
              p += `
` + d;
            }
            !R && !d.trim() && (R = true), c += Z + `
`, e = e.substring(Z.length + 1), g = A.slice(f);
          }
        }
        i.loose || (o ? i.loose = true : this.rules.other.doubleBlankLine.test(c) && (o = true));
        let O = null, Y;
        this.options.gfm && (O = this.rules.other.listIsTask.exec(p), O && (Y = O[0] !== "[ ] ", p = p.replace(this.rules.other.listReplaceTask, ""))), i.items.push({ type: "list_item", raw: c, task: !!O, checked: Y, loose: false, text: p, tokens: [] }), i.raw += c;
      }
      let a = i.items.at(-1);
      if (a) a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let l = 0; l < i.items.length; l++) if (this.lexer.state.top = false, i.items[l].tokens = this.lexer.blockTokens(i.items[l].text, []), !i.loose) {
        let c = i.items[l].tokens.filter((g) => g.type === "space"), p = c.length > 0 && c.some((g) => this.rules.other.anyLine.test(g.raw));
        i.loose = p;
      }
      if (i.loose) for (let l = 0; l < i.items.length; l++) i.items[l].loose = true;
      return i;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) return { type: "html", block: true, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: t[0], href: r, title: i };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = V(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let o of r) this.rules.other.tableAlignRight.test(o) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? s.align.push("left") : s.align.push(null);
      for (let o = 0; o < n.length; o++) s.header.push({ text: n[o], tokens: this.lexer.inline(n[o]), header: true, align: s.align[o] });
      for (let o of i) s.rows.push(V(o, s.header.length).map((a, l) => ({ text: a, tokens: this.lexer.inline(a), header: false, align: s.align[l] })));
      return s;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        let s = z(n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0) return;
      } else {
        let s = fe(t[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
          t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let r = t[2], i = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(r);
        s && (r = s[1], i = s[3]);
      } else i = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), me(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[r.toLowerCase()];
      if (!i) {
        let s = n[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return me(n, i, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let s = [...r[0]].length - 1, o, a, l = s, c = 0, p = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (p.lastIndex = 0, t = t.slice(-1 * e.length + s); (r = p.exec(t)) != null; ) {
        if (o = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !o) continue;
        if (a = [...o].length, r[3] || r[4]) {
          l += a;
          continue;
        } else if ((r[5] || r[6]) && s % 3 && !((s + a) % 3)) {
          c += a;
          continue;
        }
        if (l -= a, l > 0) continue;
        a = Math.min(a, a + l + c);
        let g = [...r[0]][0].length, d = e.slice(0, s + r.index + g + a);
        if (Math.min(s, a) % 2) {
          let f = d.slice(1, -1);
          return { type: "em", raw: d, text: f, tokens: this.lexer.inlineTokens(f) };
        }
        let R = d.slice(2, -2);
        return { type: "strong", raw: d, text: R, tokens: this.lexer.inlineTokens(R) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return r && i && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e) {
    let t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, r;
      return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, r;
      if (t[2] === "@") n = t[0], r = "mailto:" + n;
      else {
        let i;
        do
          i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (i !== t[0]);
        n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: n };
    }
  }
};
var x = class u {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || T, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t = { other: m, block: C.normal, inline: M.normal };
    this.options.pedantic ? (t.block = C.pedantic, t.inline = M.pedantic) : this.options.gfm && (t.block = C.gfm, this.options.breaks ? t.inline = M.breaks : t.inline = M.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: C, inline: M };
  }
  static lex(e, t) {
    return new u(t).lex(e);
  }
  static lexInline(e, t) {
    return new u(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = false) {
    for (this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, "")); e; ) {
      let r;
      if (this.options.extensions?.block?.some((s) => (r = s.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false)) continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        r.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, t.push(r));
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      let i = e;
      if (this.options.extensions?.startBlock) {
        let s = 1 / 0, o = e.slice(1), a;
        this.options.extensions.startBlock.forEach((l) => {
          a = l.call({ lexer: this }, o), typeof a == "number" && a >= 0 && (s = Math.min(s, a));
        }), s < 1 / 0 && s >= 0 && (i = e.substring(0, s + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(i))) {
        let s = t.at(-1);
        n && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (e) {
        let s = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(s);
          break;
        } else throw new Error(s);
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let n = e, r = null;
    if (this.tokens.links) {
      let o = Object.keys(this.tokens.links);
      if (o.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; ) o.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; ) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; ) n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
    let i = false, s = "";
    for (; e; ) {
      i || (s = ""), i = false;
      let o;
      if (this.options.extensions?.inline?.some((l) => (o = l.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), true) : false)) continue;
      if (o = this.tokenizer.escape(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.link(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(o.raw.length);
        let l = t.at(-1);
        o.type === "text" && l?.type === "text" ? (l.raw += o.raw, l.text += o.text) : t.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(e, n, s)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.br(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.del(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(e))) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      let a = e;
      if (this.options.extensions?.startInline) {
        let l = 1 / 0, c = e.slice(1), p;
        this.options.extensions.startInline.forEach((g) => {
          p = g.call({ lexer: this }, c), typeof p == "number" && p >= 0 && (l = Math.min(l, p));
        }), l < 1 / 0 && l >= 0 && (a = e.substring(0, l + 1));
      }
      if (o = this.tokenizer.inlineText(a)) {
        e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (s = o.raw.slice(-1)), i = true;
        let l = t.at(-1);
        l?.type === "text" ? (l.raw += o.raw, l.text += o.text) : t.push(o);
        continue;
      }
      if (e) {
        let l = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(l);
          break;
        } else throw new Error(l);
      }
    }
    return t;
  }
};
var P = class {
  options;
  parser;
  constructor(e) {
    this.options = e || T;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let r = (t || "").match(m.notSpaceStart)?.[0], i = e.replace(m.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + w(r) + '">' + (n ? i : w(i, true)) + `</code></pre>
` : "<pre><code>" + (n ? i : w(i, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t = e.ordered, n = e.start, r = "";
    for (let o = 0; o < e.items.length; o++) {
      let a = e.items[o];
      r += this.listitem(a);
    }
    let i = t ? "ol" : "ul", s = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + s + `>
` + r + "</" + i + `>
`;
  }
  listitem(e) {
    let t = "";
    if (e.task) {
      let n = this.checkbox({ checked: !!e.checked });
      e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = n + " " + w(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = true)) : e.tokens.unshift({ type: "text", raw: n + " ", text: n + " ", escaped: true }) : t += n + " ";
    }
    return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let i = 0; i < e.header.length; i++) n += this.tablecell(e.header[i]);
    t += this.tablerow({ text: n });
    let r = "";
    for (let i = 0; i < e.rows.length; i++) {
      let s = e.rows[i];
      n = "";
      for (let o = 0; o < s.length; o++) n += this.tablecell(s[o]);
      r += this.tablerow({ text: n });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${w(e, true)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    let r = this.parser.parseInline(n), i = J(e);
    if (i === null) return r;
    e = i;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + w(t) + '"'), s += ">" + r + "</a>", s;
  }
  image({ href: e, title: t, text: n, tokens: r }) {
    r && (n = this.parser.parseInline(r, this.parser.textRenderer));
    let i = J(e);
    if (i === null) return w(n);
    e = i;
    let s = `<img src="${e}" alt="${n}"`;
    return t && (s += ` title="${w(t)}"`), s += ">", s;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : w(e.text);
  }
};
var $ = class {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
};
var b = class u2 {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || T, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new $();
  }
  static parse(e, t) {
    return new u2(t).parse(e);
  }
  static parseInline(e, t) {
    return new u2(t).parseInline(e);
  }
  parse(e, t = true) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.options.extensions?.renderers?.[i.type]) {
        let o = i, a = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (a !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(o.type)) {
          n += a || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "space": {
          n += this.renderer.space(s);
          continue;
        }
        case "hr": {
          n += this.renderer.hr(s);
          continue;
        }
        case "heading": {
          n += this.renderer.heading(s);
          continue;
        }
        case "code": {
          n += this.renderer.code(s);
          continue;
        }
        case "table": {
          n += this.renderer.table(s);
          continue;
        }
        case "blockquote": {
          n += this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          n += this.renderer.list(s);
          continue;
        }
        case "html": {
          n += this.renderer.html(s);
          continue;
        }
        case "def": {
          n += this.renderer.def(s);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(s);
          continue;
        }
        case "text": {
          let o = s, a = this.renderer.text(o);
          for (; r + 1 < e.length && e[r + 1].type === "text"; ) o = e[++r], a += `
` + this.renderer.text(o);
          t ? n += this.renderer.paragraph({ type: "paragraph", raw: a, text: a, tokens: [{ type: "text", raw: a, text: a, escaped: true }] }) : n += a;
          continue;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
  parseInline(e, t = this.renderer) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.options.extensions?.renderers?.[i.type]) {
        let o = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (o !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n += o || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "escape": {
          n += t.text(s);
          break;
        }
        case "html": {
          n += t.html(s);
          break;
        }
        case "link": {
          n += t.link(s);
          break;
        }
        case "image": {
          n += t.image(s);
          break;
        }
        case "strong": {
          n += t.strong(s);
          break;
        }
        case "em": {
          n += t.em(s);
          break;
        }
        case "codespan": {
          n += t.codespan(s);
          break;
        }
        case "br": {
          n += t.br(s);
          break;
        }
        case "del": {
          n += t.del(s);
          break;
        }
        case "text": {
          n += t.text(s);
          break;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
};
var S = class {
  options;
  block;
  constructor(e) {
    this.options = e || T;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer() {
    return this.block ? x.lex : x.lexInline;
  }
  provideParser() {
    return this.block ? b.parse : b.parseInline;
  }
};
var B = class {
  defaults = L();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = b;
  Renderer = P;
  TextRenderer = $;
  Lexer = x;
  Tokenizer = y;
  Hooks = S;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
      case "table": {
        let i = r;
        for (let s of i.header) n = n.concat(this.walkTokens(s.tokens, t));
        for (let s of i.rows) for (let o of s) n = n.concat(this.walkTokens(o.tokens, t));
        break;
      }
      case "list": {
        let i = r;
        n = n.concat(this.walkTokens(i.items, t));
        break;
      }
      default: {
        let i = r;
        this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
          let o = i[s].flat(1 / 0);
          n = n.concat(this.walkTokens(o, t));
        }) : i.tokens && (n = n.concat(this.walkTokens(i.tokens, t)));
      }
    }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let r = { ...n };
      if (r.async = this.defaults.async || r.async || false, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let s = t.renderers[i.name];
          s ? t.renderers[i.name] = function(...o) {
            let a = i.renderer.apply(this, o);
            return a === false && (a = s.apply(this, o)), a;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = t[i.level];
          s ? s.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), r.extensions = t), n.renderer) {
        let i = this.defaults.renderer || new P(this.defaults);
        for (let s in n.renderer) {
          if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let o = s, a = n.renderer[o], l = i[o];
          i[o] = (...c) => {
            let p = a.apply(i, c);
            return p === false && (p = l.apply(i, c)), p || "";
          };
        }
        r.renderer = i;
      }
      if (n.tokenizer) {
        let i = this.defaults.tokenizer || new y(this.defaults);
        for (let s in n.tokenizer) {
          if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let o = s, a = n.tokenizer[o], l = i[o];
          i[o] = (...c) => {
            let p = a.apply(i, c);
            return p === false && (p = l.apply(i, c)), p;
          };
        }
        r.tokenizer = i;
      }
      if (n.hooks) {
        let i = this.defaults.hooks || new S();
        for (let s in n.hooks) {
          if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let o = s, a = n.hooks[o], l = i[o];
          S.passThroughHooks.has(s) ? i[o] = (c) => {
            if (this.defaults.async && S.passThroughHooksRespectAsync.has(s)) return (async () => {
              let g = await a.call(i, c);
              return l.call(i, g);
            })();
            let p = a.call(i, c);
            return l.call(i, p);
          } : i[o] = (...c) => {
            if (this.defaults.async) return (async () => {
              let g = await a.apply(i, c);
              return g === false && (g = await l.apply(i, c)), g;
            })();
            let p = a.apply(i, c);
            return p === false && (p = l.apply(i, c)), p;
          };
        }
        r.hooks = i;
      }
      if (n.walkTokens) {
        let i = this.defaults.walkTokens, s = n.walkTokens;
        r.walkTokens = function(o) {
          let a = [];
          return a.push(s.call(this, o)), i && (a = a.concat(i.call(this, o))), a;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return x.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return b.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, r) => {
      let i = { ...r }, s = { ...this.defaults, ...i }, o = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === true && i.async === false) return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (s.hooks && (s.hooks.options = s, s.hooks.block = e), s.async) return (async () => {
        let a = s.hooks ? await s.hooks.preprocess(n) : n, c = await (s.hooks ? await s.hooks.provideLexer() : e ? x.lex : x.lexInline)(a, s), p = s.hooks ? await s.hooks.processAllTokens(c) : c;
        s.walkTokens && await Promise.all(this.walkTokens(p, s.walkTokens));
        let d = await (s.hooks ? await s.hooks.provideParser() : e ? b.parse : b.parseInline)(p, s);
        return s.hooks ? await s.hooks.postprocess(d) : d;
      })().catch(o);
      try {
        s.hooks && (n = s.hooks.preprocess(n));
        let l = (s.hooks ? s.hooks.provideLexer() : e ? x.lex : x.lexInline)(n, s);
        s.hooks && (l = s.hooks.processAllTokens(l)), s.walkTokens && this.walkTokens(l, s.walkTokens);
        let p = (s.hooks ? s.hooks.provideParser() : e ? b.parse : b.parseInline)(l, s);
        return s.hooks && (p = s.hooks.postprocess(p)), p;
      } catch (a) {
        return o(a);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let r = "<p>An error occurred:</p><pre>" + w(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(r) : r;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
};
var _ = new B();
function k(u3, e) {
  return _.parse(u3, e);
}
k.options = k.setOptions = function(u3) {
  return _.setOptions(u3), k.defaults = _.defaults, G(k.defaults), k;
};
k.getDefaults = L;
k.defaults = T;
k.use = function(...u3) {
  return _.use(...u3), k.defaults = _.defaults, G(k.defaults), k;
};
k.walkTokens = function(u3, e) {
  return _.walkTokens(u3, e);
};
k.parseInline = _.parseInline;
k.Parser = b;
k.parser = b.parse;
k.Renderer = P;
k.TextRenderer = $;
k.Lexer = x;
k.lexer = x.lex;
k.Tokenizer = y;
k.Hooks = S;
k.parse = k;
var Ht = k.options;
var Zt = k.setOptions;
var Gt = k.use;
var Nt = k.walkTokens;
var Ft = k.parseInline;
var Qt = b.parse;
var Ut = x.lex;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Work.js
var import_jsx_runtime4 = require("react/jsx-runtime");
var WorkItem = import_styled_components4.default.div`
  margin-bottom: 2rem;
`;
var WorkHeader = import_styled_components4.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var Position = import_styled_components4.default.h3`
  font-size: 1.125rem;
  color: #0b1f3a;
  margin: 0;
`;
var DateRange = import_styled_components4.default.div`
  font-size: 0.9rem;
  color: #666;
  font-weight: 400;
`;
var Company = import_styled_components4.default.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.75rem;
`;
var Description = import_styled_components4.default.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0.5rem;

  p {
    margin-bottom: 0.5rem;
  }
`;
var Highlights = import_styled_components4.default.ul`
  margin-top: 0.75rem;
  padding-left: 1.5rem;
  list-style: disc;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    color: #444;
  }
`;
var formatDate = (date) => {
  if (!date) return "Present";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};
var Work = ({ work }) => {
  if (!work || work.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Section_default, { title: "Experience", children: work.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(WorkItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(WorkHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Position, { children: item.position }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DateRange, { children: [
        formatDate(item.startDate),
        " - ",
        formatDate(item.endDate)
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Company, { children: [
      item.name,
      item.location && ` \u2022 ${item.location}`
    ] }),
    item.summary && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Description,
      {
        dangerouslySetInnerHTML: { __html: k(item.summary) }
      }
    ),
    item.highlights && item.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Highlights, { children: item.highlights.map((highlight, j2) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { children: highlight }, j2)) })
  ] }, i)) });
};
var Work_default = Work;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Projects.js
var import_styled_components5 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));
var import_jsx_runtime5 = require("react/jsx-runtime");
var ProjectItem = import_styled_components5.default.div`
  margin-bottom: 1.75rem;
`;
var Header2 = import_styled_components5.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var ProjectName = import_styled_components5.default.h3`
  font-size: 1.0625rem;
  color: #0b1f3a;
  margin: 0;
`;
var DateRange2 = import_styled_components5.default.div`
  font-size: 0.9rem;
  color: #666;
`;
var Entity = import_styled_components5.default.div`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0.5rem;
`;
var Description2 = import_styled_components5.default.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0.5rem;

  p {
    margin-bottom: 0.5rem;
  }
`;
var Highlights2 = import_styled_components5.default.ul`
  margin-top: 0.5rem;
  padding-left: 1.5rem;
  list-style: disc;

  li {
    margin-bottom: 0.4rem;
    line-height: 1.6;
    color: #444;
  }
`;
var formatDate2 = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};
var Projects = ({ projects }) => {
  if (!projects || projects.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Section_default, { title: "Projects", children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(ProjectItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Header2, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ProjectName, { children: project.url ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: project.url, target: "_blank", rel: "noopener noreferrer", children: project.name }) : project.name }),
      (project.startDate || project.endDate) && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(DateRange2, { children: [
        formatDate2(project.startDate),
        project.endDate && ` - ${formatDate2(project.endDate)}`
      ] })
    ] }),
    project.entity && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Entity, { children: project.entity }),
    project.description && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      Description2,
      {
        dangerouslySetInnerHTML: { __html: k(project.description) }
      }
    ),
    project.highlights && project.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Highlights2, { children: project.highlights.map((highlight, j2) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: highlight }, j2)) })
  ] }, i)) });
};
var Projects_default = Projects;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Education.js
var import_styled_components6 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));
var import_jsx_runtime6 = require("react/jsx-runtime");
var EducationItem = import_styled_components6.default.div`
  margin-bottom: 1.5rem;
`;
var Header3 = import_styled_components6.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var Degree = import_styled_components6.default.h3`
  font-size: 1.0625rem;
  color: #0b1f3a;
  margin: 0;
`;
var DateRange3 = import_styled_components6.default.div`
  font-size: 0.9rem;
  color: #666;
`;
var Institution = import_styled_components6.default.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;
var Details = import_styled_components6.default.div`
  font-size: 0.95rem;
  color: #666;
`;
var formatDate3 = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { year: "numeric" });
};
var Education = ({ education }) => {
  if (!education || education.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Section_default, { title: "Education", children: education.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(EducationItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Header3, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Degree, { children: [
        item.studyType,
        " ",
        item.area && `in ${item.area}`
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(DateRange3, { children: [
        item.startDate && formatDate3(item.startDate),
        item.endDate && ` - ${formatDate3(item.endDate)}`
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Institution, { children: item.institution }),
    (item.score || item.courses) && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Details, { children: [
      item.score && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
        "GPA: ",
        item.score
      ] }),
      item.courses && item.courses.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
        "Relevant Coursework: ",
        item.courses.join(", ")
      ] })
    ] })
  ] }, i)) });
};
var Education_default = Education;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Certificates.js
var import_styled_components7 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));
var import_jsx_runtime7 = require("react/jsx-runtime");
var CertificateItem = import_styled_components7.default.div`
  margin-bottom: 1.25rem;
`;
var Header4 = import_styled_components7.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var Name2 = import_styled_components7.default.h3`
  font-size: 1rem;
  color: #0b1f3a;
  margin: 0;
`;
var Date2 = import_styled_components7.default.div`
  font-size: 0.9rem;
  color: #666;
`;
var Issuer = import_styled_components7.default.div`
  font-size: 0.95rem;
  color: #555;
`;
var formatDate4 = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};
var Certificates = ({ certificates }) => {
  if (!certificates || certificates.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Section_default, { title: "Certifications", children: certificates.map((cert, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(CertificateItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Header4, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Name2, { children: cert.url ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { href: cert.url, target: "_blank", rel: "noopener noreferrer", children: cert.name }) : cert.name }),
      cert.date && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Date2, { children: formatDate4(cert.date) })
    ] }),
    cert.issuer && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Issuer, { children: cert.issuer })
  ] }, i)) });
};
var Certificates_default = Certificates;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Publications.js
var import_styled_components8 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));
var import_jsx_runtime8 = require("react/jsx-runtime");
var PublicationItem = import_styled_components8.default.div`
  margin-bottom: 1.25rem;
`;
var Header5 = import_styled_components8.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var Name3 = import_styled_components8.default.h3`
  font-size: 1rem;
  color: #0b1f3a;
  margin: 0;
  font-style: italic;
`;
var Date3 = import_styled_components8.default.div`
  font-size: 0.9rem;
  color: #666;
`;
var Publisher = import_styled_components8.default.div`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0.25rem;
`;
var Summary2 = import_styled_components8.default.div`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
`;
var formatDate5 = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};
var Publications = ({ publications }) => {
  if (!publications || publications.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Section_default, { title: "Publications", children: publications.map((pub, i) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(PublicationItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Header5, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Name3, { children: pub.url ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { href: pub.url, target: "_blank", rel: "noopener noreferrer", children: pub.name }) : pub.name }),
      pub.releaseDate && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Date3, { children: formatDate5(pub.releaseDate) })
    ] }),
    pub.publisher && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Publisher, { children: pub.publisher }),
    pub.summary && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Summary2, { children: pub.summary })
  ] }, i)) });
};
var Publications_default = Publications;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Awards.js
var import_styled_components9 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));
var import_jsx_runtime9 = require("react/jsx-runtime");
var AwardItem = import_styled_components9.default.div`
  margin-bottom: 1.25rem;
`;
var Header6 = import_styled_components9.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var Title = import_styled_components9.default.h3`
  font-size: 1rem;
  color: #0b1f3a;
  margin: 0;
`;
var DateText = import_styled_components9.default.div`
  font-size: 0.9rem;
  color: #666;
`;
var Awarder = import_styled_components9.default.div`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0.25rem;
`;
var Summary3 = import_styled_components9.default.div`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
`;
var formatDate6 = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};
var Awards = ({ awards }) => {
  if (!awards || awards.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Section_default, { title: "Awards & Honors", children: awards.map((award, i) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(AwardItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Header6, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Title, { children: award.title }),
      award.date && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DateText, { children: formatDate6(award.date) })
    ] }),
    award.awarder && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Awarder, { children: award.awarder }),
    award.summary && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Summary3, { children: award.summary })
  ] }, i)) });
};
var Awards_default = Awards;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Skills.js
var import_styled_components10 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));
var import_jsx_runtime10 = require("react/jsx-runtime");
var SkillsGrid = import_styled_components10.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;
var SkillCategory = import_styled_components10.default.div`
  margin-bottom: 1rem;
`;
var CategoryName = import_styled_components10.default.h3`
  font-size: 1rem;
  color: #0b1f3a;
  margin-bottom: 0.5rem;
`;
var KeywordList = import_styled_components10.default.div`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
`;
var Skills = ({ skills }) => {
  if (!skills || skills.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Section_default, { title: "Skills", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SkillsGrid, { children: skills.map((skill, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(SkillCategory, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CategoryName, { children: skill.name }),
    skill.keywords && skill.keywords.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(KeywordList, { children: skill.keywords.join(" \u2022 ") })
  ] }, i)) }) });
};
var Skills_default = Skills;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Interests.js
var import_styled_components11 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));
var import_jsx_runtime11 = require("react/jsx-runtime");
var InterestList = import_styled_components11.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;
var InterestItem = import_styled_components11.default.div`
  margin-bottom: 0.75rem;
`;
var InterestName = import_styled_components11.default.h3`
  font-size: 1rem;
  color: #0b1f3a;
  margin-bottom: 0.25rem;
`;
var Keywords = import_styled_components11.default.div`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
`;
var Interests = ({ interests }) => {
  if (!interests || interests.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Section_default, { title: "Interests", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(InterestList, { children: interests.map((interest, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(InterestItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(InterestName, { children: interest.name }),
    interest.keywords && interest.keywords.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Keywords, { children: interest.keywords.join(", ") })
  ] }, i)) }) });
};
var Interests_default = Interests;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Languages.js
var import_styled_components12 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));
var import_jsx_runtime12 = require("react/jsx-runtime");
var LanguageList = import_styled_components12.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;
var LanguageItem = import_styled_components12.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
var LanguageName = import_styled_components12.default.span`
  font-size: 1rem;
  color: #333;
`;
var Fluency = import_styled_components12.default.span`
  font-size: 0.9rem;
  color: #666;
`;
var Languages = ({ languages }) => {
  if (!languages || languages.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Section_default, { title: "Languages", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(LanguageList, { children: languages.map((lang, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(LanguageItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(LanguageName, { children: lang.language }),
    lang.fluency && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Fluency, { children: lang.fluency })
  ] }, i)) }) });
};
var Languages_default = Languages;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/References.js
var import_styled_components13 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));
var import_jsx_runtime13 = require("react/jsx-runtime");
var ReferenceItem = import_styled_components13.default.div`
  margin-bottom: 1.25rem;
`;
var Name4 = import_styled_components13.default.h3`
  font-size: 1rem;
  color: #0b1f3a;
  margin-bottom: 0.25rem;
`;
var Reference = import_styled_components13.default.div`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  font-style: italic;
`;
var References = ({ references }) => {
  if (!references || references.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Section_default, { title: "References", children: references.map((ref, i) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(ReferenceItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Name4, { children: ref.name }),
    ref.reference && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Reference, { children: [
      '"',
      ref.reference,
      '"'
    ] })
  ] }, i)) });
};
var References_default = References;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Volunteer.js
var import_styled_components14 = __toESM(__ensureStyledComponentsDefault(require("styled-components")));
var import_jsx_runtime14 = require("react/jsx-runtime");
var VolunteerItem = import_styled_components14.default.div`
  margin-bottom: 1.75rem;
`;
var Header7 = import_styled_components14.default.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
var Position2 = import_styled_components14.default.h3`
  font-size: 1.0625rem;
  color: #0b1f3a;
  margin: 0;
`;
var DateRange4 = import_styled_components14.default.div`
  font-size: 0.9rem;
  color: #666;
`;
var Organization = import_styled_components14.default.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
`;
var Description3 = import_styled_components14.default.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 0.5rem;

  p {
    margin-bottom: 0.5rem;
  }
`;
var Highlights3 = import_styled_components14.default.ul`
  margin-top: 0.5rem;
  padding-left: 1.5rem;
  list-style: disc;

  li {
    margin-bottom: 0.4rem;
    line-height: 1.6;
    color: #444;
  }
`;
var formatDate7 = (date) => {
  if (!date) return "Present";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};
var Volunteer = ({ volunteer }) => {
  if (!volunteer || volunteer.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Section_default, { title: "Volunteer Work", children: volunteer.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(VolunteerItem, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Header7, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Position2, { children: item.position }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(DateRange4, { children: [
        formatDate7(item.startDate),
        " - ",
        formatDate7(item.endDate)
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Organization, { children: item.organization }),
    item.summary && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      Description3,
      {
        dangerouslySetInnerHTML: { __html: k(item.summary) }
      }
    ),
    item.highlights && item.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Highlights3, { children: item.highlights.map((highlight, j2) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("li", { children: highlight }, j2)) })
  ] }, i)) });
};
var Volunteer_default = Volunteer;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/ui/Resume.js
var import_jsx_runtime15 = require("react/jsx-runtime");
var Layout = import_styled_components15.default.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;

  @media print {
    padding: 0;
  }
`;
var Resume = ({ resume }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Hero_default, { basics: resume.basics }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Summary_default, { basics: resume.basics }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Work_default, { work: resume.work }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Projects_default, { projects: resume.projects }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Education_default, { education: resume.education }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Certificates_default, { certificates: resume.certificates }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Publications_default, { publications: resume.publications }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Awards_default, { awards: resume.awards }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Volunteer_default, { volunteer: resume.volunteer }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Skills_default, { skills: resume.skills }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Languages_default, { languages: resume.languages }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Interests_default, { interests: resume.interests }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(References_default, { references: resume.references })
  ] });
};
var Resume_default = Resume;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-consultant-polished_react@19.2.0_styled-components@6.1.19/node_modules/@jsonresume/jsonresume-theme-consultant-polished/src/index.js
var import_jsx_runtime16 = require("react/jsx-runtime");
var render = (resume) => {
  const sheet = new import_styled_components16.ServerStyleSheet();
  const html = (0, import_server.renderToString)(sheet.collectStyles(/* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Resume_default, { resume })));
  const styles = sheet.getStyleTags();
  return `<!DOCTYPE html><head>
  <title>${resume.basics.name} - Resume</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <style>
    html {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
      background: #fff;
      font-size: 16px;
      line-height: 1.6;
      color: #1a1a1a;
    }

    body {
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: Georgia, 'Times New Roman', serif;
      font-weight: 600;
      color: #0b1f3a;
      margin: 0;
      line-height: 1.3;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      letter-spacing: 0.01em;
    }

    h3 {
      font-size: 1.125rem;
      margin-bottom: 0.5rem;
    }

    p {
      padding: 0;
      margin: 0 0 0.75rem 0;
      font-size: 1rem;
    }

    a {
      color: #0b1f3a;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-color 0.2s ease;
    }

    a:hover {
      border-bottom-color: #0b1f3a;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  </style>
  ${styles}</head><body>${html}</body></html>`;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Resume,
  render
});
