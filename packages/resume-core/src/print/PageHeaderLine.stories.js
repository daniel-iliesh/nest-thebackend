"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiPageDemo = exports.CustomContent = exports.WithSubtitle = exports.Default = void 0;
var PageHeaderLine_1 = require("./PageHeaderLine");
var meta = {
    title: 'Print/PageHeaderLine',
    component: PageHeaderLine_1.PageHeaderLine,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Repeating header line with name on subsequent pages. Uses CSS @page margin boxes to reserve top space for printing. Only visible in print preview.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'text',
            description: 'Full name to display in header',
        },
        subtitle: {
            control: 'text',
            description: 'Optional subtitle (e.g., job title)',
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'John Doe',
    },
    render: function (args) { return (<div>
      <PageHeaderLine_1.PageHeaderLine {...args}/>
      <div style={{ padding: '2rem' }}>
        <h1>Resume Content</h1>
        <p>
          The header line will appear at the top of each printed page. Use your
          browser's print preview (Cmd/Ctrl + P) to see the effect.
        </p>
        <p>
          This component uses <code>position: running(header)</code> which is
          supported in print mode to create repeating headers.
        </p>
      </div>
    </div>); },
};
exports.WithSubtitle = {
    args: {
        name: 'Jane Smith',
        subtitle: 'Software Engineer',
    },
    render: function (args) { return (<div>
      <PageHeaderLine_1.PageHeaderLine {...args}/>
      <div style={{ padding: '2rem' }}>
        <h1>Resume Content</h1>
        <p>Header with name and subtitle for additional context.</p>
      </div>
    </div>); },
};
exports.CustomContent = {
    args: {
        name: 'Alex Johnson',
    },
    render: function (args) { return (<div>
      <PageHeaderLine_1.PageHeaderLine {...args}>
        <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
          Updated: January 2025
        </span>
      </PageHeaderLine_1.PageHeaderLine>
      <div style={{ padding: '2rem' }}>
        <h1>Resume Content</h1>
        <p>Header with custom children content on the right side.</p>
      </div>
    </div>); },
};
exports.MultiPageDemo = {
    args: {
        name: 'Sarah Williams',
        subtitle: 'UX Designer',
    },
    render: function (args) { return (<div>
      <PageHeaderLine_1.PageHeaderLine {...args}/>
      <div style={{ padding: '2rem' }}>
        <h1>Page 1 Content</h1>
        {Array.from({ length: 20 }, function (_, i) { return (<p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>); })}
      </div>
    </div>); },
};
