"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * MetricBar Stories
 */
var MetricBar_1 = require("./MetricBar");
var meta = {
    title: 'Resume Core/Data/MetricBar',
    component: MetricBar_1.MetricBar,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        label: 'JavaScript',
        value: 90,
        max: 100,
    },
};
exports.Example = {
    args: {
        label: 'React',
        value: 95,
        max: 100,
        color: 'blue',
    },
};
