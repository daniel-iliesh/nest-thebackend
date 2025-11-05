"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedLength = exports.CustomBullet = exports.Default = void 0;
var AchievementListSpacious_1 = require("./AchievementListSpacious");
/**
 * AchievementListSpacious Stories
 */
var meta = {
    title: 'Resume Core/Lists/AchievementListSpacious',
    component: AchievementListSpacious_1.AchievementListSpacious,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        items: [
            'Led cross-functional team of 12 engineers and designers to deliver cloud-native platform',
            'Established best practices and coding standards adopted across 3 departments',
            'Reduced technical debt by 40% through systematic refactoring initiatives',
            'Presented at 5 industry conferences on microservices architecture patterns',
        ],
        bullet: '•',
    },
};
exports.CustomBullet = {
    args: {
        items: [
            'Architected scalable infrastructure handling 10M+ requests per day',
            'Mentored 8 developers resulting in 5 promotions to senior roles',
            'Implemented security framework achieving SOC 2 Type II compliance',
        ],
        bullet: '→',
    },
};
exports.MixedLength = {
    args: {
        items: [
            'Short achievement',
            'This is a longer achievement that spans multiple lines to demonstrate how the spacious list maintains proper baseline grid alignment and visual rhythm throughout the content',
            'Medium length achievement with comfortable spacing',
            'Another concise win',
        ],
    },
};
