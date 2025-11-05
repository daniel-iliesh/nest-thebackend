"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllLevels = exports.CustomColor = exports.Level4 = exports.Level3 = exports.Level2 = exports.Level1 = void 0;
var react_1 = require("react");
/**
 * Heading Stories
 */
var Heading_1 = require("./Heading");
var meta = {
    title: 'Resume Core/Typography/Heading',
    component: Heading_1.Heading,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        level: { control: { type: 'range', min: 1, max: 4, step: 1 } },
        weight: { control: 'text' },
        color: { control: 'color' },
    },
};
exports.default = meta;
exports.Level1 = {
    args: { level: 1, children: 'John Doe - Level 1 Heading' },
};
exports.Level2 = {
    args: { level: 2, children: 'Work Experience - Level 2 Heading' },
};
exports.Level3 = {
    args: { level: 3, children: 'Senior Software Engineer - Level 3' },
};
exports.Level4 = {
    args: { level: 4, children: 'Additional Details - Level 4' },
};
exports.CustomColor = {
    args: { level: 2, color: '#007bff', children: 'Colored Heading' },
};
exports.AllLevels = {
    render: function () { return (<div>
      <Heading_1.Heading level={1}>Level 1: John Doe</Heading_1.Heading>
      <Heading_1.Heading level={2}>Level 2: Work Experience</Heading_1.Heading>
      <Heading_1.Heading level={3}>Level 3: Senior Software Engineer</Heading_1.Heading>
      <Heading_1.Heading level={4}>Level 4: Project Details</Heading_1.Heading>
    </div>); },
};
