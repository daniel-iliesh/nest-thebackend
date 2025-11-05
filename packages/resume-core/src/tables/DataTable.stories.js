"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * DataTable Stories
 */
var DataTable_1 = require("./DataTable");
var meta = {
    title: 'Resume Core/Tables/DataTable',
    component: DataTable_1.DataTable,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        columns: [
            { key: 'company', header: 'Company', align: 'left' },
            { key: 'position', header: 'Position', align: 'left' },
            { key: 'years', header: 'Years', align: 'center' },
            { key: 'location', header: 'Location', align: 'left' },
        ],
        data: [
            {
                company: 'Tech Corp',
                position: 'Senior Engineer',
                years: '3',
                location: 'San Francisco, CA',
            },
            {
                company: 'Innovation Labs',
                position: 'Software Engineer',
                years: '2',
                location: 'New York, NY',
            },
            {
                company: 'WebDev Agency',
                position: 'Junior Developer',
                years: '2',
                location: 'Austin, TX',
            },
        ],
        striped: true,
    },
};
exports.Example = {
    args: {
        columns: [
            { key: 'skill', header: 'Skill', align: 'left' },
            { key: 'level', header: 'Level', align: 'center' },
            { key: 'years', header: 'Years Exp', align: 'center' },
        ],
        data: [
            { skill: 'JavaScript', level: 'Expert', years: '8' },
            { skill: 'React', level: 'Expert', years: '5' },
            { skill: 'Python', level: 'Advanced', years: '4' },
            { skill: 'Node.js', level: 'Advanced', years: '6' },
        ],
        striped: true,
        footer: ['Total Skills', '4', '23 years'],
    },
};
