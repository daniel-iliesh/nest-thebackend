"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompactLayout = exports.MultipleGroups = exports.ObjectSkills = exports.NoCategory = exports.CommaSeparator = exports.CustomSeparator = exports.Default = void 0;
var react_1 = require("react");
/**
 * SkillGroup Stories
 * Categorized skills with separator-based display
 */
var SkillGroup_1 = require("./SkillGroup");
var meta = {
    title: 'Resume Core/Skills/SkillGroup',
    component: SkillGroup_1.SkillGroup,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        category: {
            control: 'text',
            description: 'Category name',
        },
        skills: {
            control: 'object',
            description: 'Array of skill names or objects',
        },
        separator: {
            control: 'text',
            description: 'Separator character between skills',
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        title: 'Programming Languages',
        skills: [
            { name: 'JavaScript', level: 'Expert' },
            { name: 'TypeScript', level: 'Expert' },
            { name: 'Python', level: 'Advanced' },
        ],
    },
};
exports.CustomSeparator = {
    args: {
        category: 'Backend',
        skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'],
        separator: '|',
    },
};
exports.CommaSeparator = {
    args: {
        category: 'Tools',
        skills: ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'AWS'],
        separator: ',',
    },
};
exports.NoCategory = {
    args: {
        skills: [
            'Problem Solving',
            'Team Leadership',
            'Communication',
            'Mentoring',
        ],
        separator: '•',
    },
};
exports.ObjectSkills = {
    args: {
        category: 'Programming Languages',
        skills: [
            { name: 'JavaScript' },
            { name: 'TypeScript' },
            { name: 'Python' },
            { name: 'Java' },
        ],
        separator: '•',
    },
};
exports.MultipleGroups = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <SkillGroup_1.SkillGroup category="Frontend Development" skills={[
            'React',
            'Vue.js',
            'Angular',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'HTML5',
            'CSS3',
        ]} separator="•"/>
      <SkillGroup_1.SkillGroup category="Backend Development" skills={[
            'Node.js',
            'Express',
            'NestJS',
            'Django',
            'FastAPI',
            'PostgreSQL',
            'MongoDB',
        ]} separator="•"/>
      <SkillGroup_1.SkillGroup category="DevOps & Tools" skills={[
            'Docker',
            'Kubernetes',
            'AWS',
            'GitHub Actions',
            'Terraform',
            'Jenkins',
        ]} separator="•"/>
      <SkillGroup_1.SkillGroup category="Soft Skills" skills={[
            'Leadership',
            'Communication',
            'Problem Solving',
            'Mentoring',
            'Agile/Scrum',
        ]} separator="•"/>
    </div>); },
};
exports.CompactLayout = {
    render: function () { return (<div style={{ maxWidth: '500px' }}>
      <SkillGroup_1.SkillGroup category="Languages" skills={['JavaScript', 'TypeScript', 'Python', 'Go', 'Rust']} separator="|"/>
      <SkillGroup_1.SkillGroup category="Frameworks" skills={['React', 'Next.js', 'Express', 'NestJS', 'Django']} separator="|"/>
      <SkillGroup_1.SkillGroup category="Databases" skills={['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']} separator="|"/>
    </div>); },
};
