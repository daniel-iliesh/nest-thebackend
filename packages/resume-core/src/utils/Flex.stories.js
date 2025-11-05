"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * Flex Stories
 */
var Flex_1 = require("./Flex");
var meta = {
    title: 'Resume Core/Utils/Flex',
    component: Flex_1.Flex,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'Flex container content',
    },
};
exports.Example = {
    args: {
        direction: 'column',
        gap: 'medium',
        children: 'Vertical flex layout',
    },
};
