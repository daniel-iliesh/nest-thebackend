"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllCorners = exports.InCorner = exports.ThreeInitials = exports.CustomColor = exports.LargeSize = exports.BorderedRounded = exports.Bordered = exports.OutlineSerif = exports.Outline = exports.CustomInitials = exports.Default = void 0;
var CornerInitials_1 = require("./CornerInitials");
var meta = {
    title: 'Header/CornerInitials',
    component: CornerInitials_1.CornerInitials,
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'John Smith',
        position: 'relative',
    },
};
exports.CustomInitials = {
    args: {
        initials: 'JQ',
        position: 'relative',
    },
};
exports.Outline = {
    args: {
        name: 'Jane Doe',
        outline: true,
        position: 'relative',
    },
};
exports.OutlineSerif = {
    args: {
        name: 'Alex Johnson',
        outline: true,
        serif: true,
        position: 'relative',
    },
};
exports.Bordered = {
    args: {
        name: 'Maria Garcia',
        bordered: true,
        position: 'relative',
    },
};
exports.BorderedRounded = {
    args: {
        name: 'Robert Chen',
        bordered: true,
        rounded: true,
        position: 'relative',
    },
};
exports.LargeSize = {
    args: {
        name: 'Sarah Williams',
        size: '80px',
        bordered: true,
        rounded: true,
        position: 'relative',
    },
};
exports.CustomColor = {
    args: {
        name: 'David Brown',
        color: '#0066cc',
        bordered: true,
        position: 'relative',
    },
};
exports.ThreeInitials = {
    args: {
        name: 'John Patrick Smith',
        bordered: true,
        rounded: true,
        position: 'relative',
    },
};
exports.InCorner = {
    render: function () { return (<div style={{
            position: 'relative',
            width: '600px',
            height: '300px',
            border: '2px solid #ddd',
            padding: '20px',
        }}>
      <CornerInitials_1.CornerInitials name="Jessica Taylor" corner="top-right"/>
      <h1 style={{ marginTop: '60px' }}>Resume Content</h1>
      <p>
        The initials appear in the top-right corner when position is absolute.
      </p>
    </div>); },
};
exports.AllCorners = {
    render: function () { return (<div style={{
            position: 'relative',
            width: '600px',
            height: '400px',
            border: '2px solid #ddd',
        }}>
      <CornerInitials_1.CornerInitials name="Top Left" corner="top-left" size="40px"/>
      <CornerInitials_1.CornerInitials name="Top Right" corner="top-right" size="40px"/>
      <CornerInitials_1.CornerInitials name="Bottom Left" corner="bottom-left" size="40px"/>
      <CornerInitials_1.CornerInitials name="Bottom Right" corner="bottom-right" size="40px"/>
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2>Resume Header</h2>
        <p>Content area with initials in all four corners</p>
      </div>
    </div>); },
};
