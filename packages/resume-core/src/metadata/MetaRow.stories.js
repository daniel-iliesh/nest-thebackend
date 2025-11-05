"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithChildren = exports.CustomSeparator = exports.Default = void 0;
var MetaRow_jsx_1 = require("./MetaRow.jsx");
var meta = {
    title: 'Metadata/MetaRow',
    component: MetaRow_jsx_1.MetaRow,
    tags: ['autodocs'],
    argTypes: {
        separator: { control: 'text' },
        as: { control: 'text' },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        items: ['San Francisco, CA', 'Jan 2020 - Present', 'Full-time'],
    },
};
exports.CustomSeparator = {
    args: {
        items: ['Remote', 'Contract', '$150k-$200k'],
        separator: ' | ',
    },
};
exports.WithChildren = {
    render: function () { return (<MetaRow_jsx_1.MetaRow>
      <span>Boston, MA</span>
      <span>Jun 2018 - Dec 2019</span>
      <span>Part-time</span>
    </MetaRow_jsx_1.MetaRow>); },
};
