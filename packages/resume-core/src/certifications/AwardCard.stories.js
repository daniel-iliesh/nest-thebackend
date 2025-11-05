"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * AwardCard Stories
 */
var AwardCard_1 = require("./AwardCard");
var meta = {
    title: 'Resume Core/Certifications/AwardCard',
    component: AwardCard_1.AwardCard,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        title: 'Excellence in Engineering Award',
        organization: 'Tech Corp',
        date: '2023',
    },
};
exports.Example = {
    args: {
        title: 'Innovation Award',
        organization: 'Innovation Labs',
        date: '2022',
        description: 'Recognized for developing breakthrough performance optimization',
    },
};
