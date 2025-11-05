"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedSizes = exports.OutlinedCollection = exports.SkillCollection = exports.NotRounded = exports.SmallFilled = exports.Small = exports.Outlined = exports.Filled = exports.Default = void 0;
var react_1 = require("react");
/**
 * SkillPill Stories
 * Badge-style skill displays with various styles
 */
var SkillPill_1 = require("./SkillPill");
var meta = {
    title: 'Resume Core/Skills/SkillPill',
    component: SkillPill_1.SkillPill,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            description: 'Skill name',
        },
        variant: {
            control: 'select',
            options: ['filled', 'outlined'],
            description: 'Visual style variant',
        },
        size: {
            control: 'select',
            options: ['small', 'medium'],
            description: 'Pill size',
        },
        rounded: {
            control: 'boolean',
            description: 'Fully rounded corners',
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        skill: 'React',
    },
};
exports.Filled = {
    args: {
        children: 'React',
        variant: 'filled',
        size: 'medium',
        rounded: true,
    },
};
exports.Outlined = {
    args: {
        children: 'TypeScript',
        variant: 'outlined',
        size: 'medium',
        rounded: true,
    },
};
exports.Small = {
    args: {
        children: 'Node.js',
        variant: 'outlined',
        size: 'small',
        rounded: true,
    },
};
exports.SmallFilled = {
    args: {
        children: 'GraphQL',
        variant: 'filled',
        size: 'small',
        rounded: true,
    },
};
exports.NotRounded = {
    args: {
        children: 'Docker',
        variant: 'outlined',
        size: 'medium',
        rounded: false,
    },
};
exports.SkillCollection = {
    render: function () { return (<div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <SkillPill_1.SkillPill variant="filled">JavaScript</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="filled">React</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="filled">TypeScript</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="filled">Node.js</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="filled">GraphQL</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="filled">Docker</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="filled">AWS</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="filled">PostgreSQL</SkillPill_1.SkillPill>
    </div>); },
};
exports.OutlinedCollection = {
    render: function () { return (<div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <SkillPill_1.SkillPill variant="outlined">HTML5</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined">CSS3</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined">Sass</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined">Tailwind</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined">Jest</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined">Cypress</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined">Git</SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined">CI/CD</SkillPill_1.SkillPill>
    </div>); },
};
exports.MixedSizes = {
    render: function () { return (<div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            alignItems: 'center',
        }}>
      <SkillPill_1.SkillPill variant="filled" size="medium">
        Expert
      </SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined" size="small">
        JavaScript
      </SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined" size="small">
        React
      </SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined" size="small">
        TypeScript
      </SkillPill_1.SkillPill>
      <br />
      <SkillPill_1.SkillPill variant="filled" size="medium">
        Advanced
      </SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined" size="small">
        Node.js
      </SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined" size="small">
        Python
      </SkillPill_1.SkillPill>
      <SkillPill_1.SkillPill variant="outlined" size="small">
        Docker
      </SkillPill_1.SkillPill>
    </div>); },
};
