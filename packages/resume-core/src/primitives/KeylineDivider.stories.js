"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllVariants = exports.CustomColor = exports.WithInset = exports.Default = void 0;
var KeylineDivider_1 = require("./KeylineDivider");
var meta = {
    title: 'Primitives/Dividers/KeylineDivider',
    component: KeylineDivider_1.KeylineDivider,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {},
};
exports.WithInset = {
    args: {
        inset: '2rem',
    },
};
exports.CustomColor = {
    args: {
        color: '#94a3b8',
    },
};
exports.AllVariants = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <p>Full width keyline</p>
      <KeylineDivider_1.KeylineDivider />

      <p>With 1rem inset</p>
      <KeylineDivider_1.KeylineDivider inset="1rem"/>

      <p>With 2rem inset</p>
      <KeylineDivider_1.KeylineDivider inset="2rem"/>

      <p>Custom color (slate)</p>
      <KeylineDivider_1.KeylineDivider color="#94a3b8"/>
    </div>); },
};
