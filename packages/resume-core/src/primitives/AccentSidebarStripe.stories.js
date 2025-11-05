"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialHeight = exports.CustomColor = exports.CustomWidth = exports.RightAligned = exports.Default = void 0;
var AccentSidebarStripe_1 = require("./AccentSidebarStripe");
var meta = {
    title: 'Primitives/Dividers/AccentSidebarStripe',
    component: AccentSidebarStripe_1.AccentSidebarStripe,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    render: function () { return (<div style={{ position: 'relative', minHeight: '300px', padding: '2rem' }}>
      <AccentSidebarStripe_1.AccentSidebarStripe />
      <h2>Section Title</h2>
      <p>Content with left accent stripe</p>
    </div>); },
};
exports.RightAligned = {
    render: function () { return (<div style={{ position: 'relative', minHeight: '300px', padding: '2rem' }}>
      <AccentSidebarStripe_1.AccentSidebarStripe position="right"/>
      <h2>Section Title</h2>
      <p>Content with right accent stripe</p>
    </div>); },
};
exports.CustomWidth = {
    render: function () { return (<div style={{ position: 'relative', minHeight: '300px', padding: '2rem' }}>
      <AccentSidebarStripe_1.AccentSidebarStripe width="6mm"/>
      <h2>Section Title</h2>
      <p>Content with wider accent stripe (6mm)</p>
    </div>); },
};
exports.CustomColor = {
    render: function () { return (<div style={{ position: 'relative', minHeight: '300px', padding: '2rem' }}>
      <AccentSidebarStripe_1.AccentSidebarStripe color="#8b5cf6"/>
      <h2>Section Title</h2>
      <p>Content with purple accent stripe</p>
    </div>); },
};
exports.PartialHeight = {
    render: function () { return (<div style={{ position: 'relative', minHeight: '300px', padding: '2rem' }}>
      <AccentSidebarStripe_1.AccentSidebarStripe height="150px" top="1rem"/>
      <h2>Section Title</h2>
      <p>Content with partial-height accent stripe</p>
      <p>The stripe doesn't extend the full height</p>
    </div>); },
};
