"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = exports.ContactInfo = exports.SkillTags = exports.HeaderLayout = exports.CustomGap = exports.Wrapped = exports.Centered = exports.SpaceBetween = exports.Column = exports.Row = void 0;
var react_1 = require("react");
/**
 * FlexLayout Stories
 * Flexible layout with customizable direction and alignment
 */
var FlexLayout_1 = require("./FlexLayout");
var meta = {
    title: 'Resume Core/Layouts/FlexLayout',
    component: FlexLayout_1.FlexLayout,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: 'select',
            options: ['row', 'column'],
            description: 'Flex direction',
        },
        justify: {
            control: 'select',
            options: [
                'flex-start',
                'center',
                'flex-end',
                'space-between',
                'space-around',
                'space-evenly',
            ],
            description: 'Justify content',
        },
        align: {
            control: 'select',
            options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
            description: 'Align items',
        },
        wrap: {
            control: 'boolean',
            description: 'Allow wrapping',
        },
        gap: {
            control: 'text',
            description: 'Gap between items',
        },
    },
};
exports.default = meta;
var Box = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? '#007bff' : _b;
    return (<div style={{
            padding: '1rem',
            background: color,
            color: 'white',
            borderRadius: '4px',
            minWidth: '80px',
            textAlign: 'center',
        }}>
    {children}
  </div>);
};
exports.Row = {
    args: {
        direction: 'row',
        children: (<>
        <Box>Item 1</Box>
        <Box color="#28a745">Item 2</Box>
        <Box color="#ffc107">Item 3</Box>
      </>),
    },
};
exports.Column = {
    args: {
        direction: 'column',
        children: (<>
        <Box>Item 1</Box>
        <Box color="#28a745">Item 2</Box>
        <Box color="#ffc107">Item 3</Box>
      </>),
    },
};
exports.SpaceBetween = {
    args: {
        direction: 'row',
        justify: 'space-between',
        children: (<>
        <Box>Start</Box>
        <Box color="#28a745">Middle</Box>
        <Box color="#ffc107">End</Box>
      </>),
    },
};
exports.Centered = {
    args: {
        direction: 'row',
        justify: 'center',
        align: 'center',
        children: (<>
        <Box>Centered</Box>
        <Box color="#28a745">Items</Box>
      </>),
    },
};
exports.Wrapped = {
    args: {
        direction: 'row',
        wrap: true,
        gap: '1rem',
        children: (<>
        <Box>Tag 1</Box>
        <Box color="#28a745">Tag 2</Box>
        <Box color="#ffc107">Tag 3</Box>
        <Box color="#dc3545">Tag 4</Box>
        <Box color="#6f42c1">Tag 5</Box>
        <Box color="#20c997">Tag 6</Box>
        <Box color="#fd7e14">Tag 7</Box>
        <Box color="#e83e8c">Tag 8</Box>
      </>),
    },
};
exports.CustomGap = {
    args: {
        direction: 'row',
        gap: '2rem',
        children: (<>
        <Box>Wide</Box>
        <Box color="#28a745">Gap</Box>
        <Box color="#ffc107">Items</Box>
      </>),
    },
};
exports.HeaderLayout = {
    render: function () { return (<FlexLayout_1.FlexLayout direction="row" justify="space-between" align="center">
      <div>
        <h2>John Doe</h2>
        <p style={{ color: '#666' }}>Senior Software Engineer</p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <p>john@example.com</p>
        <p>(555) 123-4567</p>
      </div>
    </FlexLayout_1.FlexLayout>); },
};
exports.SkillTags = {
    render: function () { return (<FlexLayout_1.FlexLayout direction="row" wrap={true} gap="0.5rem">
      {[
            'JavaScript',
            'React',
            'Node.js',
            'TypeScript',
            'Python',
            'Docker',
            'AWS',
            'PostgreSQL',
            'GraphQL',
            'Redis',
        ].map(function (skill) { return (<div key={skill} style={{
                padding: '0.5rem 1rem',
                background: '#f0f0f0',
                borderRadius: '20px',
                fontSize: '0.9rem',
            }}>
          {skill}
        </div>); })}
    </FlexLayout_1.FlexLayout>); },
};
exports.ContactInfo = {
    render: function () { return (<FlexLayout_1.FlexLayout direction="row" wrap={true} justify="center" gap="2rem">
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📧</div>
        <div>john@example.com</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📱</div>
        <div>(555) 123-4567</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🌐</div>
        <div>johndoe.com</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💼</div>
        <div>linkedin.com/in/johndoe</div>
      </div>
    </FlexLayout_1.FlexLayout>); },
};
exports.ButtonGroup = {
    render: function () { return (<FlexLayout_1.FlexLayout direction="row" gap="1rem">
      <button style={{
            padding: '0.75rem 1.5rem',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        }}>
        Download PDF
      </button>
      <button style={{
            padding: '0.75rem 1.5rem',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        }}>
        View Online
      </button>
      <button style={{
            padding: '0.75rem 1.5rem',
            background: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        }}>
        Share
      </button>
    </FlexLayout_1.FlexLayout>); },
};
