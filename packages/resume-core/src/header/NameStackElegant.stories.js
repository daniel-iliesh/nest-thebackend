"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Minimal = exports.LongTagline = exports.RightAlign = exports.LeftAlign = exports.WithTagline = exports.Default = void 0;
var NameStackElegant_1 = require("./NameStackElegant");
var meta = {
    title: 'Resume Core/Header/NameStackElegant',
    component: NameStackElegant_1.NameStackElegant,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'Alexandra Chen',
        role: 'Senior Product Designer',
    },
};
exports.WithTagline = {
    args: {
        name: 'Alexandra Chen',
        role: 'Senior Product Designer',
        tagline: 'Creating intuitive digital experiences that delight users',
    },
};
exports.LeftAlign = {
    args: {
        name: 'Marcus Thompson',
        role: 'Full Stack Developer',
        tagline: 'Building scalable web applications',
        align: 'left',
    },
};
exports.RightAlign = {
    args: {
        name: 'Sarah Williams',
        role: 'Data Scientist',
        tagline: 'Transforming data into actionable insights',
        align: 'right',
    },
};
exports.LongTagline = {
    args: {
        name: 'Dr. James Rodriguez',
        role: 'Research Scientist & AI Engineer',
        tagline: 'Pioneering advances in machine learning and artificial intelligence with a focus on ethical AI development and real-world applications',
    },
};
exports.Minimal = {
    args: {
        name: 'Jordan Lee',
        role: 'UX Designer',
    },
};
