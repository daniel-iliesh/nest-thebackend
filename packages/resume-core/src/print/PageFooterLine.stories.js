"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiPageDemo = exports.WithCustomContent = exports.CustomDateFormat = exports.WithoutDate = exports.Default = void 0;
var PageFooterLine_1 = require("./PageFooterLine");
var meta = {
    title: 'Print/PageFooterLine',
    component: PageFooterLine_1.PageFooterLine,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Small footer with page number and date. Displays "Page X of N" format with automatic page numbering. Only visible in print preview.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        showDate: {
            control: 'boolean',
            description: 'Show current date in footer',
        },
        dateFormat: {
            control: 'text',
            description: 'Custom date string (defaults to locale date)',
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        showDate: true,
    },
    render: function (args) { return (<div>
      <div style={{ padding: '2rem', minHeight: '400px' }}>
        <h1>Resume Content</h1>
        <p>
          The footer will appear at the bottom of each printed page with page
          numbers. Use your browser's print preview (Cmd/Ctrl + P) to see the
          effect.
        </p>
      </div>
      <PageFooterLine_1.PageFooterLine {...args}/>
    </div>); },
};
exports.WithoutDate = {
    args: {
        showDate: false,
    },
    render: function (args) { return (<div>
      <div style={{ padding: '2rem', minHeight: '400px' }}>
        <h1>Resume Content</h1>
        <p>Footer with page numbers only, no date.</p>
      </div>
      <PageFooterLine_1.PageFooterLine {...args}/>
    </div>); },
};
exports.CustomDateFormat = {
    args: {
        showDate: true,
        dateFormat: 'January 2025',
    },
    render: function (args) { return (<div>
      <div style={{ padding: '2rem', minHeight: '400px' }}>
        <h1>Resume Content</h1>
        <p>Footer with custom date format.</p>
      </div>
      <PageFooterLine_1.PageFooterLine {...args}/>
    </div>); },
};
exports.WithCustomContent = {
    args: {
        showDate: true,
    },
    render: function (args) { return (<div>
      <div style={{ padding: '2rem', minHeight: '400px' }}>
        <h1>Resume Content</h1>
        <p>Footer with additional custom content.</p>
      </div>
      <PageFooterLine_1.PageFooterLine {...args}>
        <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
          Confidential
        </span>
      </PageFooterLine_1.PageFooterLine>
    </div>); },
};
exports.MultiPageDemo = {
    args: {
        showDate: true,
        dateFormat: 'October 2025',
    },
    render: function (args) { return (<div>
      <div style={{ padding: '2rem' }}>
        <h1>Multi-Page Resume</h1>
        {Array.from({ length: 20 }, function (_, i) { return (<p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>); })}
      </div>
      <PageFooterLine_1.PageFooterLine {...args}/>
    </div>); },
};
