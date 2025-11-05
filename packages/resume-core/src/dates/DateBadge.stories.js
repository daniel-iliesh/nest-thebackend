"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * DateBadge Stories
 */
var DateBadge_1 = require("./DateBadge");
var meta = {
    title: 'Resume Core/Dates/DateBadge',
    component: DateBadge_1.DateBadge,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        date: '2020 - 2023',
        variant: 'outlined',
    },
};
exports.Example = {
    args: {
        date: 'Jan 2022 - Present',
        icon: '📅',
        variant: 'filled',
        dateTime: '2022-01-01',
    },
};
