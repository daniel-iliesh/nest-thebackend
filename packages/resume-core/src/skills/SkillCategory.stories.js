"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YearsOfExperience = exports.SkillsResume = exports.MultipleCategories = exports.StringSkills = exports.NoCategory = exports.NumericLevels = exports.WithLevels = exports.Default = void 0;
var react_1 = require("react");
/**
 * SkillCategory Stories
 * Categorized skills with hierarchical list display
 */
var SkillCategory_1 = require("./SkillCategory");
var meta = {
    title: 'Resume Core/Skills/SkillCategory',
    component: SkillCategory_1.SkillCategory,
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
            description: 'Array of skills (strings or objects with name and level)',
        },
        showLevel: {
            control: 'boolean',
            description: 'Show skill levels',
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        category: 'Frontend Development',
        skills: ['React', 'TypeScript', 'CSS', 'HTML5'],
    },
};
exports.WithLevels = {
    args: {
        category: 'Programming Languages',
        skills: [
            { name: 'JavaScript', level: 'Expert' },
            { name: 'TypeScript', level: 'Advanced' },
            { name: 'Python', level: 'Intermediate' },
            { name: 'Go', level: 'Beginner' },
        ],
        showLevel: true,
    },
};
exports.NumericLevels = {
    args: {
        category: 'Frameworks',
        skills: [
            { name: 'React', level: '5 years' },
            { name: 'Next.js', level: '3 years' },
            { name: 'Express', level: '4 years' },
            { name: 'NestJS', level: '2 years' },
        ],
        showLevel: true,
    },
};
exports.NoCategory = {
    args: {
        skills: [
            'Responsive Design',
            'Accessibility',
            'Performance Optimization',
            'SEO',
        ],
        showLevel: false,
    },
};
exports.StringSkills = {
    args: {
        category: 'Tools & Technologies',
        skills: [
            'Git',
            'Docker',
            'Kubernetes',
            'Jenkins',
            'AWS',
            'Azure',
            'Terraform',
        ],
        showLevel: false,
    },
};
exports.MultipleCategories = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <SkillCategory_1.SkillCategory category="Frontend Development" skills={[
            { name: 'React', level: 'Expert' },
            { name: 'Vue.js', level: 'Advanced' },
            { name: 'Angular', level: 'Intermediate' },
            { name: 'Next.js', level: 'Advanced' },
        ]} showLevel={true}/>
      <SkillCategory_1.SkillCategory category="Backend Development" skills={[
            { name: 'Node.js', level: 'Expert' },
            { name: 'Python', level: 'Intermediate' },
            { name: 'Go', level: 'Beginner' },
        ]} showLevel={true}/>
      <SkillCategory_1.SkillCategory category="Databases" skills={[
            { name: 'PostgreSQL', level: 'Advanced' },
            { name: 'MongoDB', level: 'Advanced' },
            { name: 'Redis', level: 'Intermediate' },
        ]} showLevel={true}/>
    </div>); },
};
exports.SkillsResume = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <SkillCategory_1.SkillCategory category="Programming Languages" skills={['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL']}/>
      <SkillCategory_1.SkillCategory category="Frontend Frameworks" skills={['React', 'Next.js', 'Vue.js', 'Svelte']}/>
      <SkillCategory_1.SkillCategory category="Backend Frameworks" skills={['Node.js', 'Express', 'NestJS', 'Django', 'FastAPI']}/>
      <SkillCategory_1.SkillCategory category="Databases" skills={['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch']}/>
      <SkillCategory_1.SkillCategory category="DevOps & Cloud" skills={[
            'Docker',
            'Kubernetes',
            'AWS',
            'Azure',
            'GitHub Actions',
            'Terraform',
        ]}/>
      <SkillCategory_1.SkillCategory category="Soft Skills" skills={[
            'Team Leadership',
            'Mentoring',
            'Agile/Scrum',
            'Technical Writing',
            'Public Speaking',
        ]}/>
    </div>); },
};
exports.YearsOfExperience = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <SkillCategory_1.SkillCategory category="Primary Skills" skills={[
            { name: 'JavaScript', level: '8 yrs' },
            { name: 'React', level: '6 yrs' },
            { name: 'Node.js', level: '7 yrs' },
            { name: 'TypeScript', level: '5 yrs' },
        ]} showLevel={true}/>
      <SkillCategory_1.SkillCategory category="Additional Skills" skills={[
            { name: 'Python', level: '3 yrs' },
            { name: 'Docker', level: '4 yrs' },
            { name: 'AWS', level: '3 yrs' },
        ]} showLevel={true}/>
    </div>); },
};
