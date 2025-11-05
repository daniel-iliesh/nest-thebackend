"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManyItems = exports.CustomGap = exports.CertificationsList = exports.SkillsList = exports.Default = void 0;
var react_1 = require("react");
var TwoColumnMicroGrid_1 = require("./TwoColumnMicroGrid");
var meta = {
    title: 'Layouts/TwoColumnMicroGrid',
    component: TwoColumnMicroGrid_1.TwoColumnMicroGrid,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Text-only two-column micro grid with semantic single-column DOM order. Uses CSS column flow for visual presentation while maintaining linear semantic order, making it perfect for ATS-friendly resumes.',
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        children: (<>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
        <span>Item 4</span>
        <span>Item 5</span>
        <span>Item 6</span>
      </>),
    },
};
exports.SkillsList = {
    args: {
        children: (<>
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>Python</span>
        <span>SQL</span>
        <span>Docker</span>
        <span>AWS</span>
        <span>Git</span>
        <span>CI/CD</span>
      </>),
    },
};
exports.CertificationsList = {
    args: {
        children: (<>
        <span>AWS Solutions Architect</span>
        <span>Certified Kubernetes Admin</span>
        <span>PMP Certified</span>
        <span>Scrum Master</span>
        <span>CISSP</span>
        <span>CompTIA Security+</span>
      </>),
    },
};
exports.CustomGap = {
    args: {
        gap: '16px',
        columnGap: '32px',
        children: (<>
        <span>Wide spacing</span>
        <span>Between items</span>
        <span>And columns</span>
        <span>For better readability</span>
      </>),
    },
};
exports.ManyItems = {
    args: {
        children: (<>
        {Array.from({ length: 20 }, function (_, i) { return (<span key={i}>Skill {i + 1}</span>); })}
      </>),
    },
};
