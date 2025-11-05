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
var import_react2 = __toESM(require("react"), 1);
var import_server = require("react-dom/server");
var import_styled_components2 = require("styled-components");

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-academic-cv-lite_react-dom@19.2.0_react@19.2.0/node_modules/jsonresume-theme-academic-cv-lite/src/Resume.jsx
var import_react = __toESM(require("react"), 1);
var import_styled_components = __toESM(require("styled-components"), 1);
var import_core = require("@resume/core");
var import_jsx_runtime = require("react/jsx-runtime");
var Layout = import_styled_components.default.div`
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
var Header = import_styled_components.default.header`
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #6b7280;
  text-align: center;
`;
var Name = import_styled_components.default.h1`
  font-size: 28pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
  letter-spacing: 0.5px;
`;
var Label = import_styled_components.default.div`
  font-size: 14pt;
  color: #1f2937;
  margin-bottom: 16px;
  font-weight: 400;
  font-style: italic;
`;
var StyledContactInfo = (0, import_styled_components.default)(import_core.ContactInfo)`
  font-size: 11pt;
  color: #1f2937;
  justify-content: center;

  a {
    font-size: 11pt;
    color: #1f2937;
    text-decoration: underline;
  }
`;
var Summary = import_styled_components.default.p`
  font-size: 12pt;
  line-height: 1.6;
  color: #1f2937;
  margin: 20px 0 0 0;
  text-align: left;
`;
var StyledSectionTitle = (0, import_styled_components.default)(import_core.SectionTitle)`
  font-size: 16pt;
  font-weight: 700;
  color: #111827;
  margin: 32px 0 16px 0;
  padding-bottom: 6px;
  border-bottom: 2px solid #111827;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
var PublicationItem = import_styled_components.default.div`
  margin-bottom: 20px;
  padding-left: 24px;
  text-indent: -24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var PublicationTitle = import_styled_components.default.span`
  font-weight: 700;
  color: #111827;
`;
var PublicationMeta = import_styled_components.default.span`
  color: #1f2937;
  font-style: italic;
`;
var PublicationDate = import_styled_components.default.span`
  color: #6b7280;
`;
var AwardItem = import_styled_components.default.div`
  margin-bottom: 16px;
  padding-left: 20px;
  border-left: 3px solid #9ca3af;

  &:last-child {
    margin-bottom: 0;
  }
`;
var AwardTitle = import_styled_components.default.h3`
  font-size: 13pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
`;
var AwardAwarder = import_styled_components.default.div`
  font-size: 11pt;
  color: #1f2937;
  font-style: italic;
  margin-bottom: 4px;
`;
var AwardDate = import_styled_components.default.div`
  font-size: 11pt;
  color: #6b7280;
  margin-bottom: 8px;
`;
var AwardSummary = import_styled_components.default.p`
  margin: 0;
  font-size: 11pt;
  color: #1f2937;
  line-height: 1.5;
`;
var WorkItem = import_styled_components.default.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var WorkHeader = import_styled_components.default.div`
  margin-bottom: 8px;
`;
var Position = import_styled_components.default.h3`
  font-size: 13pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
`;
var Company = import_styled_components.default.div`
  font-size: 12pt;
  color: #1f2937;
  font-style: italic;
  margin-bottom: 4px;
`;
var DateText = import_styled_components.default.div`
  font-size: 11pt;
  color: #6b7280;
  margin-bottom: 8px;
`;
var WorkSummary = import_styled_components.default.p`
  margin: 8px 0;
  color: #1f2937;
  line-height: 1.5;
  font-size: 11pt;
`;
var Highlights = import_styled_components.default.ul`
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
var EducationItem = import_styled_components.default.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;
var Institution = import_styled_components.default.h3`
  font-size: 13pt;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
`;
var Degree = import_styled_components.default.div`
  font-size: 12pt;
  color: #1f2937;
  margin-bottom: 4px;
`;
var EducationDate = import_styled_components.default.div`
  font-size: 11pt;
  color: #6b7280;
`;
var SkillsList = import_styled_components.default.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
var SkillItem = import_styled_components.default.div`
  display: flex;
  gap: 8px;
`;
var SkillName = import_styled_components.default.span`
  font-weight: 700;
  color: #111827;
  font-size: 12pt;
  min-width: 120px;
`;
var SkillKeywords = import_styled_components.default.span`
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Header, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Name, { children: basics.name }),
      basics.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: basics.label }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledContactInfo, { basics }),
      basics.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Summary, { children: basics.summary })
    ] }),
    education?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSectionTitle, { children: "Education" }),
      education.map((edu, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EducationItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Institution, { children: edu.institution }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Degree, { children: [
          edu.studyType,
          " in ",
          edu.area,
          edu.score && ` \u2022 ${edu.score}`
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationDate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.DateRange, { startDate: edu.startDate, endDate: edu.endDate }) })
      ] }, index))
    ] }),
    publications?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSectionTitle, { children: "Publications" }),
      publications.map((pub, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicationItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicationTitle, { children: [
          pub.name,
          ". "
        ] }),
        pub.publisher && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicationMeta, { children: [
          pub.publisher,
          ". "
        ] }),
        pub.releaseDate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PublicationDate, { children: [
          "(",
          pub.releaseDate,
          ")"
        ] }),
        pub.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSummary, { children: pub.summary })
      ] }, index))
    ] }),
    awards?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSectionTitle, { children: "Awards & Honors" }),
      awards.map((award, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AwardItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardTitle, { children: award.title }),
        award.awarder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardAwarder, { children: award.awarder }),
        award.date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardDate, { children: award.date }),
        award.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardSummary, { children: award.summary })
      ] }, index))
    ] }),
    work?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSectionTitle, { children: "Professional Experience" }),
      work.map((job, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Position, { children: job.position }),
          job.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Company, { children: job.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateText, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.DateRange, { startDate: job.startDate, endDate: job.endDate }) })
        ] }),
        job.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSummary, { children: job.summary }),
        job.highlights?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlights, { children: job.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: highlight }, i)) })
      ] }, index))
    ] }),
    projects?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSectionTitle, { children: "Research Projects" }),
      projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Position, { children: project.name }),
        project.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSummary, { children: project.description }),
        project.highlights?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlights, { children: project.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: highlight }, i)) })
      ] }, index))
    ] }),
    skills?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSectionTitle, { children: "Skills" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsList, { children: skills.map((skill, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkillItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkillName, { children: [
          skill.name,
          ":"
        ] }),
        skill.keywords?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillKeywords, { children: skill.keywords.join(", ") })
      ] }, index)) })
    ] }),
    volunteer?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSectionTitle, { children: "Service & Leadership" }),
      volunteer.map((vol, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WorkItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WorkHeader, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Position, { children: vol.position }),
          vol.organization && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Company, { children: vol.organization }),
          (vol.startDate || vol.endDate) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateText, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_core.DateRange,
            {
              startDate: vol.startDate,
              endDate: vol.endDate
            }
          ) })
        ] }),
        vol.summary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSummary, { children: vol.summary }),
        vol.highlights?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlights, { children: vol.highlights.map((highlight, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: highlight }, i)) })
      ] }, index))
    ] }),
    languages?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSectionTitle, { children: "Languages" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsList, { children: languages.map((lang, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkillItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkillName, { children: [
          lang.language,
          ":"
        ] }),
        lang.fluency && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillKeywords, { children: lang.fluency })
      ] }, index)) })
    ] }),
    interests?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSectionTitle, { children: "Research Interests" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsList, { children: interests.map((interest, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkillItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillName, { children: interest.name }),
        interest.keywords?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillKeywords, { children: interest.keywords.join(", ") })
      ] }, index)) })
    ] }),
    references?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledSectionTitle, { children: "References" }),
      references.map((ref, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EducationItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Institution, { children: ref.name }),
        ref.reference && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSummary, { children: ref.reference })
      ] }, index))
    ] })
  ] });
}
var Resume_default = Resume;

// node_modules/.pnpm/file+packages+themes+jsonresume-theme-academic-cv-lite_react-dom@19.2.0_react@19.2.0/node_modules/jsonresume-theme-academic-cv-lite/src/index.js
var import_jsx_runtime2 = require("react/jsx-runtime");
function render(resume) {
  const sheet = new import_styled_components2.ServerStyleSheet();
  try {
    const html = (0, import_server.renderToString)(
      sheet.collectStyles(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Resume_default, { resume }))
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
