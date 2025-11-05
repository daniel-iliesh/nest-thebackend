"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * Link Stories
 */
var Link_1 = require("./Link");
var meta = {
    title: 'Resume Core/Primitives/Link',
    component: Link_1.Link,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        href: 'https://example.com',
        children: 'Visit website',
    },
};
exports.Example = {
    args: {
        href: 'https://github.com/username',
        children: 'GitHub Profile',
        external: true,
    },
};
