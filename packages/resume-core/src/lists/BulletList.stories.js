"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * BulletList Stories
 */
var BulletList_1 = require("./BulletList");
var meta = {
    title: 'Resume Core/Lists/BulletList',
    component: BulletList_1.BulletList,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        items: [
            'Led development of cloud-native microservices architecture',
            'Mentored 5 junior developers and conducted code reviews',
            'Improved system performance by 300% through optimization',
            'Established CI/CD pipeline reducing deployment time by 60%',
        ],
        bullet: '•',
    },
};
exports.Example = {
    args: {
        items: [
            'React, TypeScript, Node.js expertise',
            'AWS cloud infrastructure management',
            'Agile/Scrum methodologies',
            'Technical leadership and mentorship',
        ],
        bullet: '→',
    },
};
