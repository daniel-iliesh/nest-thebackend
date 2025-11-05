"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * DateRange Stories
 */
var DateRange_1 = require("./DateRange");
var meta = {
    title: 'Resume Core/Primitives/DateRange',
    component: DateRange_1.DateRange,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        start: '2020',
        end: 'Present',
    },
};
exports.Example = {
    args: {
        start: 'Jan 2022',
        end: 'Dec 2023',
    },
};
