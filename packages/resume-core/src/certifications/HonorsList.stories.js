"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = exports.Default = void 0;
/**
 * HonorsList Stories
 */
var HonorsList_1 = require("./HonorsList");
var meta = {
    title: 'Resume Core/Certifications/HonorsList',
    component: HonorsList_1.HonorsList,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        items: [
            { title: "Dean's List", year: '2015-2019' },
            { title: 'Summa Cum Laude', year: '2019' },
        ],
    },
};
exports.Example = {
    args: {
        items: [
            {
                title: 'Employee of the Year',
                organization: 'Tech Corp',
                year: '2022',
            },
            { title: 'Innovation Award', organization: 'Startup XYZ', year: '2021' },
        ],
    },
};
