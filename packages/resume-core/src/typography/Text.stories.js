"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLineHeight = exports.Bold = exports.CustomColor = exports.CustomSize = exports.Default = void 0;
/**
 * Text Stories
 */
var Text_1 = require("./Text");
var meta = {
    title: 'Resume Core/Typography/Text',
    component: Text_1.Text,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
var longText = 'Experienced software engineer with 8+ years building scalable web applications. Specialized in React, Node.js, and cloud technologies. Passionate about mentoring and open source.';
exports.Default = {
    args: {
        children: 'Body text content',
    },
};
exports.CustomSize = {
    args: { size: '18px', children: 'Larger text for emphasis' },
};
exports.CustomColor = {
    args: { color: '#666', children: 'Secondary color text' },
};
exports.Bold = {
    args: { weight: 'bold', children: 'Bold emphasized text' },
};
exports.CustomLineHeight = {
    args: { lineHeight: '1.8', children: longText },
};
