"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicalStack = exports.StringSkills = exports.LargeSkillSet = exports.MixedProficiency = exports.HighProficiency = exports.VariedLevels = exports.Default = void 0;
var react_1 = require("react");
/**
 * SkillCloud Stories
 * Tag cloud style skill display with weighted sizing
 */
var SkillCloud_1 = require("./SkillCloud");
var meta = {
    title: 'Resume Core/Skills/SkillCloud',
    component: SkillCloud_1.SkillCloud,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        skills: {
            control: 'object',
            description: 'Array of skills with levels',
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        skills: [
            { name: 'JavaScript', level: 90 },
            { name: 'React', level: 85 },
            { name: 'TypeScript', level: 75 },
            { name: 'Node.js', level: 70 },
            { name: 'CSS', level: 65 },
        ],
    },
};
exports.VariedLevels = {
    args: {
        skills: [
            { name: 'JavaScript', level: 100 },
            { name: 'React', level: 90 },
            { name: 'TypeScript', level: 80 },
            { name: 'Node.js', level: 70 },
            { name: 'GraphQL', level: 60 },
            { name: 'Docker', level: 50 },
            { name: 'Python', level: 40 },
            { name: 'AWS', level: 30 },
        ],
    },
};
exports.HighProficiency = {
    args: {
        skills: [
            { name: 'JavaScript', level: 95 },
            { name: 'React', level: 92 },
            { name: 'TypeScript', level: 90 },
            { name: 'Next.js', level: 88 },
            { name: 'Node.js', level: 85 },
        ],
    },
};
exports.MixedProficiency = {
    args: {
        skills: [
            { name: 'Expert: React', level: 95 },
            { name: 'Advanced: TypeScript', level: 80 },
            { name: 'Advanced: Node.js', level: 75 },
            { name: 'Intermediate: Python', level: 50 },
            { name: 'Beginner: Rust', level: 25 },
        ],
    },
};
exports.LargeSkillSet = {
    args: {
        skills: [
            { name: 'JavaScript', level: 95 },
            { name: 'React', level: 92 },
            { name: 'TypeScript', level: 88 },
            { name: 'Next.js', level: 85 },
            { name: 'Node.js', level: 82 },
            { name: 'Express', level: 78 },
            { name: 'PostgreSQL', level: 75 },
            { name: 'MongoDB', level: 70 },
            { name: 'GraphQL', level: 68 },
            { name: 'Docker', level: 65 },
            { name: 'AWS', level: 60 },
            { name: 'Python', level: 55 },
            { name: 'Django', level: 50 },
            { name: 'Redis', level: 45 },
            { name: 'Kubernetes', level: 40 },
        ],
    },
};
exports.StringSkills = {
    args: {
        skills: ['JavaScript', 'React', 'TypeScript', 'Node.js', 'GraphQL'],
    },
};
exports.TechnicalStack = {
    render: function () { return (<div style={{ maxWidth: '700px' }}>
      <h3 style={{ marginBottom: '1rem' }}>Technical Expertise</h3>
      <SkillCloud_1.SkillCloud skills={[
            { name: 'JavaScript', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'React', level: 92 },
            { name: 'Next.js', level: 85 },
            { name: 'Node.js', level: 88 },
            { name: 'Express', level: 80 },
            { name: 'NestJS', level: 75 },
            { name: 'PostgreSQL', level: 82 },
            { name: 'MongoDB', level: 78 },
            { name: 'GraphQL', level: 80 },
            { name: 'REST APIs', level: 90 },
            { name: 'Docker', level: 70 },
            { name: 'Kubernetes', level: 55 },
            { name: 'AWS', level: 65 },
            { name: 'CI/CD', level: 68 },
            { name: 'Git', level: 95 },
            { name: 'Testing', level: 85 },
            { name: 'Agile', level: 88 },
        ]}/>
    </div>); },
};
