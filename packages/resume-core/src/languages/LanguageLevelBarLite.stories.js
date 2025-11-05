"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleLanguages = exports.DirectSegments = exports.WithoutLabel = exports.WithPercentage = exports.Beginner = exports.Intermediate = exports.Professional = exports.Native = void 0;
var LanguageLevelBarLite_1 = require("./LanguageLevelBarLite");
var meta = {
    title: 'Languages/LanguageLevelBarLite',
    component: LanguageLevelBarLite_1.LanguageLevelBarLite,
    tags: ['autodocs'],
};
exports.default = meta;
exports.Native = {
    args: {
        language: 'English',
        fluency: 'Native',
    },
};
exports.Professional = {
    args: {
        language: 'Spanish',
        fluency: 'Professional',
    },
};
exports.Intermediate = {
    args: {
        language: 'French',
        fluency: 'Intermediate',
    },
};
exports.Beginner = {
    args: {
        language: 'Japanese',
        fluency: 'Beginner',
    },
};
exports.WithPercentage = {
    args: {
        language: 'German',
        fluency: 75,
    },
};
exports.WithoutLabel = {
    args: {
        language: 'Italian',
        fluency: 'Professional',
        showLabel: false,
    },
};
exports.DirectSegments = {
    args: {
        language: 'Mandarin',
        fluency: 3,
        showLabel: false,
    },
};
exports.MultipleLanguages = {
    render: function () { return (<div>
      <LanguageLevelBarLite_1.LanguageLevelBarLite language="English" fluency="Native"/>
      <LanguageLevelBarLite_1.LanguageLevelBarLite language="Spanish" fluency="Fluent"/>
      <LanguageLevelBarLite_1.LanguageLevelBarLite language="French" fluency="Professional"/>
      <LanguageLevelBarLite_1.LanguageLevelBarLite language="German" fluency="Intermediate"/>
      <LanguageLevelBarLite_1.LanguageLevelBarLite language="Japanese" fluency="Beginner"/>
    </div>); },
};
