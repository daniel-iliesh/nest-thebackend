"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sizes = exports.WithBorder = exports.Square = exports.Small = exports.Large = exports.Placeholder = exports.WithImage = void 0;
var react_1 = require("react");
/**
 * Avatar Stories
 */
var Avatar_1 = require("./Avatar");
var meta = {
    title: 'Resume Core/Profile/Avatar',
    component: Avatar_1.Avatar,
    parameters: { layout: 'padded' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'text' },
        rounded: { control: 'boolean' },
        border: { control: 'boolean' },
    },
};
exports.default = meta;
exports.WithImage = {
    args: {
        src: 'https://i.pravatar.cc/150?img=12',
        alt: 'John Doe',
        size: '80px',
        rounded: true,
    },
};
exports.Placeholder = {
    args: {
        alt: 'John Doe',
        size: '80px',
        rounded: true,
    },
};
exports.Large = {
    args: {
        src: 'https://i.pravatar.cc/150?img=33',
        alt: 'Jane Smith',
        size: '120px',
        rounded: true,
    },
};
exports.Small = {
    args: {
        src: 'https://i.pravatar.cc/150?img=45',
        alt: 'Alex Johnson',
        size: '40px',
        rounded: true,
    },
};
exports.Square = {
    args: {
        src: 'https://i.pravatar.cc/150?img=56',
        alt: 'Mike Wilson',
        size: '80px',
        rounded: false,
    },
};
exports.WithBorder = {
    args: {
        src: 'https://i.pravatar.cc/150?img=68',
        alt: 'Sarah Davis',
        size: '80px',
        rounded: true,
        border: true,
    },
};
exports.Sizes = {
    render: function () { return (<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar_1.Avatar src="https://i.pravatar.cc/150?img=12" alt="Small" size="40px"/>
      <Avatar_1.Avatar src="https://i.pravatar.cc/150?img=12" alt="Medium" size="60px"/>
      <Avatar_1.Avatar src="https://i.pravatar.cc/150?img=12" alt="Large" size="80px"/>
      <Avatar_1.Avatar src="https://i.pravatar.cc/150?img=12" alt="XL" size="120px"/>
    </div>); },
};
