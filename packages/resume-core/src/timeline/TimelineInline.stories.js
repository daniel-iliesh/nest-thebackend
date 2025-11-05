"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithHyphen = exports.JapaneseLocale = exports.ArabicLocale = exports.SpanishLocale = exports.FrenchLocale = exports.NumericFormat = exports.LongFormat = exports.OngoingPosition = exports.Default = void 0;
var TimelineInline_1 = require("./TimelineInline");
exports.default = {
    title: 'Timeline/TimelineInline',
    component: TimelineInline_1.TimelineInline,
    tags: ['autodocs'],
};
exports.Default = {
    args: {
        startDate: '2020-01-15',
        endDate: '2022-03-30',
    },
};
exports.OngoingPosition = {
    args: {
        startDate: '2022-03-01',
        endDate: null,
        presentLabel: 'Present',
    },
};
exports.LongFormat = {
    args: {
        startDate: '2020-01-15',
        endDate: '2022-03-30',
        format: 'long',
    },
};
exports.NumericFormat = {
    args: {
        startDate: '2020-01-15',
        endDate: '2022-03-30',
        format: 'numeric',
    },
};
exports.FrenchLocale = {
    args: {
        startDate: '2020-01-15',
        endDate: null,
        locale: 'fr-FR',
        format: 'long',
    },
};
exports.SpanishLocale = {
    args: {
        startDate: '2020-01-15',
        endDate: '2022-03-30',
        locale: 'es-ES',
        format: 'long',
    },
};
exports.ArabicLocale = {
    args: {
        startDate: '2020-01-15',
        endDate: '2022-03-30',
        locale: 'ar-SA',
        numberingSystem: 'arab',
    },
};
exports.JapaneseLocale = {
    args: {
        startDate: '2020-01-15',
        endDate: null,
        locale: 'ja-JP',
        format: 'long',
    },
};
exports.WithHyphen = {
    args: {
        startDate: '2020-01-15',
        endDate: '2022-03-30',
        useEnDash: false,
    },
};
