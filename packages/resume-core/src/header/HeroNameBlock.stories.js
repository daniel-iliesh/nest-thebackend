"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortName = exports.LongName = exports.WithLabel = exports.Default = void 0;
var HeroNameBlock_1 = require("./HeroNameBlock");
var meta = {
    title: 'Resume Core/Header/HeroNameBlock',
    component: HeroNameBlock_1.HeroNameBlock,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'Alexandra Martinez',
    },
};
exports.WithLabel = {
    args: {
        name: 'Alexandra Martinez',
        label: 'Portfolio',
    },
};
exports.LongName = {
    args: {
        name: 'Dr. Maximilian Alexander van der Woodsworth III',
        label: 'Curriculum Vitae',
    },
};
exports.ShortName = {
    args: {
        name: 'Max Li',
    },
};
