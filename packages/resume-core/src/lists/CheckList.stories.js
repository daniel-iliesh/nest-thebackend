"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * CheckList Stories
 */
var CheckList_1 = require("./CheckList");
var meta = {
    title: 'Resume Core/Lists/CheckList',
    component: CheckList_1.CheckList,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        items: [
            { text: 'JavaScript/TypeScript', checked: true },
            { text: 'React & Redux', checked: true },
            { text: 'Node.js & Express', checked: true },
            { text: 'GraphQL', checked: false },
        ],
        strikethrough: false,
    },
};
exports.Example = {
    args: {
        items: [
            { text: 'Complete authentication system', checked: true },
            { text: 'Implement user dashboard', checked: true },
            { text: 'Add analytics tracking', checked: false },
            { text: 'Deploy to production', checked: false },
        ],
        strikethrough: true,
    },
};
