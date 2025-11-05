"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * CompactList Stories
 */
var CompactList_1 = require("./CompactList");
var meta = {
    title: 'Resume Core/Lists/CompactList',
    component: CompactList_1.CompactList,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        items: ['JavaScript', 'Python', 'React', 'Node.js', 'Docker'],
        showBullets: true,
        divider: false,
    },
};
exports.Example = {
    args: {
        items: [
            'Tech Corp - Senior Engineer',
            'Innovation Labs - Software Engineer',
            'WebDev Agency - Developer',
        ],
        showBullets: false,
        divider: true,
    },
};
