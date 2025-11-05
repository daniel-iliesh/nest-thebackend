"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorVariants = exports.SkillSet = exports.FullMastery = exports.LowLevel = exports.CustomHeight = exports.CustomColor = exports.WithPercentage = exports.Default = void 0;
var react_1 = require("react");
/**
 * SkillBar Stories
 * Horizontal bars showing skill proficiency levels
 */
var SkillBar_1 = require("./SkillBar");
var meta = {
    title: 'Resume Core/Skills/SkillBar',
    component: SkillBar_1.SkillBar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        skill: {
            control: 'text',
            description: 'Skill name',
        },
        level: {
            control: { type: 'range', min: 0, max: 100, step: 5 },
            description: 'Skill proficiency level (0-100)',
        },
        showPercentage: {
            control: 'boolean',
            description: 'Show percentage value',
        },
        color: {
            control: 'color',
            description: 'Custom bar color',
        },
        height: {
            control: 'text',
            description: 'Bar height (CSS value)',
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        skill: 'JavaScript',
        level: 90,
    },
};
exports.WithPercentage = {
    args: {
        skill: 'React',
        level: 90,
        showPercentage: true,
    },
};
exports.CustomColor = {
    args: {
        skill: 'TypeScript',
        level: 75,
        showPercentage: true,
        color: '#007acc',
    },
};
exports.CustomHeight = {
    args: {
        skill: 'Node.js',
        level: 80,
        showPercentage: true,
        height: '12px',
    },
};
exports.LowLevel = {
    args: {
        skill: 'Python',
        level: 25,
        showPercentage: true,
    },
};
exports.FullMastery = {
    args: {
        skill: 'HTML/CSS',
        level: 100,
        showPercentage: true,
    },
};
exports.SkillSet = {
    render: function () { return (<div style={{ maxWidth: '500px' }}>
      <SkillBar_1.SkillBar skill="JavaScript" level={90} showPercentage/>
      <SkillBar_1.SkillBar skill="React" level={85} showPercentage/>
      <SkillBar_1.SkillBar skill="TypeScript" level={80} showPercentage/>
      <SkillBar_1.SkillBar skill="Node.js" level={75} showPercentage/>
      <SkillBar_1.SkillBar skill="GraphQL" level={70} showPercentage/>
      <SkillBar_1.SkillBar skill="Docker" level={65} showPercentage/>
    </div>); },
};
exports.ColorVariants = {
    render: function () { return (<div style={{ maxWidth: '500px' }}>
      <SkillBar_1.SkillBar skill="Frontend" level={90} color="#3b82f6" showPercentage/>
      <SkillBar_1.SkillBar skill="Backend" level={85} color="#10b981" showPercentage/>
      <SkillBar_1.SkillBar skill="DevOps" level={70} color="#f59e0b" showPercentage/>
      <SkillBar_1.SkillBar skill="Design" level={60} color="#ec4899" showPercentage/>
    </div>); },
};
