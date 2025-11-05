"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
var Callout_1 = require("./Callout");
var meta = {
    title: 'Resume Core/Callouts/Callout',
    component: Callout_1.Callout,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        title: 'Important Note',
        children: 'This is an important callout message for highlighting key information.',
    },
};
exports.Example = {
    args: {
        title: 'Success!',
        variant: 'success',
        children: 'Your changes have been saved successfully.',
    },
};
