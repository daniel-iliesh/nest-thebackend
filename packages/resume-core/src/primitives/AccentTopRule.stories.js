"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllVariants = exports.Thicker = exports.CustomColor = exports.CustomWidth = exports.RightAligned = exports.Centered = exports.Default = void 0;
var AccentTopRule_1 = require("./AccentTopRule");
var meta = {
    title: 'Primitives/Dividers/AccentTopRule',
    component: AccentTopRule_1.AccentTopRule,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <AccentTopRule_1.AccentTopRule />
      <h2>Work Experience</h2>
      <p>Section content below the accent rule</p>
    </div>); },
};
exports.Centered = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <AccentTopRule_1.AccentTopRule align="center"/>
      <h2 style={{ textAlign: 'center' }}>Work Experience</h2>
      <p style={{ textAlign: 'center' }}>
        Section content below the centered accent rule
      </p>
    </div>); },
};
exports.RightAligned = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <AccentTopRule_1.AccentTopRule align="right"/>
      <h2 style={{ textAlign: 'right' }}>Work Experience</h2>
      <p style={{ textAlign: 'right' }}>
        Section content below the right-aligned accent rule
      </p>
    </div>); },
};
exports.CustomWidth = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <AccentTopRule_1.AccentTopRule width="40%"/>
      <h2>Work Experience</h2>
      <p>Section with wider accent rule (40%)</p>
    </div>); },
};
exports.CustomColor = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <AccentTopRule_1.AccentTopRule color="#8b5cf6"/>
      <h2>Work Experience</h2>
      <p>Section with purple accent rule</p>
    </div>); },
};
exports.Thicker = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <AccentTopRule_1.AccentTopRule thickness="4pt"/>
      <h2>Work Experience</h2>
      <p>Section with thicker accent rule (4pt)</p>
    </div>); },
};
exports.AllVariants = {
    render: function () { return (<div style={{ maxWidth: '600px' }}>
      <AccentTopRule_1.AccentTopRule />
      <h3>Left aligned (default)</h3>

      <div style={{ marginTop: '2rem' }}>
        <AccentTopRule_1.AccentTopRule align="center"/>
        <h3 style={{ textAlign: 'center' }}>Center aligned</h3>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <AccentTopRule_1.AccentTopRule align="right"/>
        <h3 style={{ textAlign: 'right' }}>Right aligned</h3>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <AccentTopRule_1.AccentTopRule width="40%" color="#8b5cf6" thickness="3pt"/>
        <h3>Custom (40% width, purple, 3pt thick)</h3>
      </div>
    </div>); },
};
