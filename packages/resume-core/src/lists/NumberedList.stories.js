"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * NumberedList Stories
 */
var NumberedList_1 = require("./NumberedList");
var meta = {
    title: 'Resume Core/Lists/NumberedList',
    component: NumberedList_1.NumberedList,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        items: [
            'Research and analyze user requirements',
            'Design system architecture and data models',
            'Implement features using agile methodology',
            'Conduct code reviews and testing',
            'Deploy to production and monitor',
        ],
        start: 1,
    },
};
exports.Example = {
    args: {
        items: [
            'Bachelor of Science in Computer Science',
            'AWS Certified Solutions Architect',
            'Certified Scrum Master (CSM)',
            'Google Cloud Professional Architect',
        ],
        start: 1,
    },
};
