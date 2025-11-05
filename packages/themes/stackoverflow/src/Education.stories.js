"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complete = void 0;
var Education_1 = require("./Education");
var storyResume_json_1 = require("./storyResume.json");
var meta = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Education',
    component: Education_1.Education,
};
exports.default = meta;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
exports.Complete = {
    render: function () { return <Education_1.Education education={storyResume_json_1.default.education}/>; },
};
