"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * StatCard Stories
 */
var StatCard_1 = require("./StatCard");
var meta = {
    title: 'Resume Core/Data/StatCard',
    component: StatCard_1.StatCard,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        value: '8+',
        label: 'Years Experience',
    },
};
exports.Example = {
    args: {
        value: '15+',
        label: 'Projects Completed',
        icon: '🚀',
    },
};
