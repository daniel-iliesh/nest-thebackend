"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complete = void 0;
var Resume_1 = require("./Resume");
var storyResume_json_1 = require("./storyResume.json");
var meta = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Resume',
    component: Resume_1.Resume,
};
exports.default = meta;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
exports.Complete = {
    render: function () { return <Resume_1.Resume {...storyResume_json_1.default}/>; },
};
