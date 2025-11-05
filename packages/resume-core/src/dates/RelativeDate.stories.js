"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * RelativeDate Stories
 */
var RelativeDate_1 = require("./RelativeDate");
var meta = {
    title: 'Resume Core/Dates/RelativeDate',
    component: RelativeDate_1.RelativeDate,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        date: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000), // 1 year ago
        ago: true,
    },
};
exports.Example = {
    args: {
        startDate: '2020-01-01',
        endDate: '2023-06-30',
        ago: false,
    },
};
