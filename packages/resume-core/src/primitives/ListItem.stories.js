"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * ListItem Stories
 */
var ListItem_1 = require("./ListItem");
var meta = {
    title: 'Resume Core/Primitives/ListItem',
    component: ListItem_1.ListItem,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'First list item',
    },
};
exports.Example = {
    args: {
        children: 'List item with icon',
        icon: '✓',
    },
};
