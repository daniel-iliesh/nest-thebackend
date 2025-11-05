"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariedScales = exports.SkillRatings = exports.SmallDots = exports.LargeDots = exports.TenPointScale = exports.LowRating = exports.FullRating = exports.Default = void 0;
var react_1 = require("react");
/**
 * SkillRating Stories
 * Visual rating system for skills using dots
 */
var SkillRating_1 = require("./SkillRating");
var meta = {
    title: 'Resume Core/Skills/SkillRating',
    component: SkillRating_1.SkillRating,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        skill: {
            control: 'text',
            description: 'Skill name',
        },
        rating: {
            control: { type: 'range', min: 0, max: 5, step: 1 },
            description: 'Skill rating value',
        },
        max: {
            control: { type: 'range', min: 3, max: 10, step: 1 },
            description: 'Maximum rating value',
        },
        size: {
            control: 'text',
            description: 'Dot size (CSS value)',
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        skill: 'JavaScript',
        rating: 5,
        max: 5,
    },
};
exports.FullRating = {
    args: {
        skill: 'React',
        rating: 5,
        max: 5,
    },
};
exports.LowRating = {
    args: {
        skill: 'Python',
        rating: 2,
        max: 5,
    },
};
exports.TenPointScale = {
    args: {
        skill: 'TypeScript',
        rating: 7,
        max: 10,
    },
};
exports.LargeDots = {
    args: {
        skill: 'Node.js',
        rating: 4,
        max: 5,
        size: '16px',
    },
};
exports.SmallDots = {
    args: {
        skill: 'GraphQL',
        rating: 3,
        max: 5,
        size: '8px',
    },
};
exports.SkillRatings = {
    render: function () { return (<div style={{ maxWidth: '400px' }}>
      <SkillRating_1.SkillRating skill="JavaScript" rating={5} max={5}/>
      <SkillRating_1.SkillRating skill="React" rating={5} max={5}/>
      <SkillRating_1.SkillRating skill="TypeScript" rating={4} max={5}/>
      <SkillRating_1.SkillRating skill="Node.js" rating={4} max={5}/>
      <SkillRating_1.SkillRating skill="GraphQL" rating={3} max={5}/>
      <SkillRating_1.SkillRating skill="Docker" rating={3} max={5}/>
      <SkillRating_1.SkillRating skill="Python" rating={2} max={5}/>
    </div>); },
};
exports.VariedScales = {
    render: function () { return (<div style={{ maxWidth: '400px' }}>
      <h4 style={{ marginBottom: '1rem' }}>5-Point Scale</h4>
      <SkillRating_1.SkillRating skill="Frontend Development" rating={5} max={5}/>
      <SkillRating_1.SkillRating skill="Backend Development" rating={4} max={5}/>

      <h4 style={{ marginTop: '2rem', marginBottom: '1rem' }}>
        10-Point Scale
      </h4>
      <SkillRating_1.SkillRating skill="Software Architecture" rating={8} max={10}/>
      <SkillRating_1.SkillRating skill="Team Leadership" rating={7} max={10}/>
    </div>); },
};
