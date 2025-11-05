"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithText = exports.WithPageNumbers = exports.Default = void 0;
var Footer_1 = require("./Footer");
var meta = {
    title: 'Resume Core/Header/Footer',
    component: Footer_1.Footer,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        children: 'Resume generated with JSONResume.org',
    },
};
exports.WithPageNumbers = {
    args: {},
};
exports.WithText = {
    args: {},
};
