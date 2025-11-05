"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimalStyle = exports.WithoutSpacer = exports.WithCustomContent = exports.WithTagline = exports.Default = void 0;
var LetterheadBar_1 = require("./LetterheadBar");
var meta = {
    title: 'Print/LetterheadBar',
    component: LetterheadBar_1.LetterheadBar,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Thin top bar across entire page with name. Reserves top margin for printer unprintable area. Appears as a fixed bar in print mode.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'text',
            description: 'Full name to display prominently',
        },
        tagline: {
            control: 'text',
            description: 'Optional tagline or subtitle',
        },
        includeSpacer: {
            control: 'boolean',
            description: 'Add spacer to prevent content overlap',
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        name: 'John Doe',
        includeSpacer: true,
    },
    render: function (args) { return (<div>
      <LetterheadBar_1.LetterheadBar {...args}/>
      <div style={{ padding: '2rem' }}>
        <h1>Resume Content</h1>
        <p>
          The letterhead bar appears at the top of the page, reserving space for
          printer margins.
        </p>
        <p>
          In print mode, it becomes fixed and accounts for the typical 0.25in
          unprintable area at the top of pages.
        </p>
      </div>
    </div>); },
};
exports.WithTagline = {
    args: {
        name: 'Jane Smith',
        tagline: 'Senior Product Designer',
        includeSpacer: true,
    },
    render: function (args) { return (<div>
      <LetterheadBar_1.LetterheadBar {...args}/>
      <div style={{ padding: '2rem' }}>
        <h1>Professional Experience</h1>
        <p>Letterhead with name and professional tagline.</p>
      </div>
    </div>); },
};
exports.WithCustomContent = {
    args: {
        name: 'Alex Chen',
        includeSpacer: true,
    },
    render: function (args) { return (<div>
      <LetterheadBar_1.LetterheadBar {...args}>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
          <span>alex@example.com</span>
          <span>|</span>
          <span>555-0123</span>
        </div>
      </LetterheadBar_1.LetterheadBar>
      <div style={{ padding: '2rem' }}>
        <h1>Resume Content</h1>
        <p>Letterhead with custom contact information.</p>
      </div>
    </div>); },
};
exports.WithoutSpacer = {
    args: {
        name: 'Sarah Williams',
        tagline: 'Full Stack Developer',
        includeSpacer: false,
    },
    render: function (args) { return (<div>
      <LetterheadBar_1.LetterheadBar {...args}/>
      <div style={{ padding: '2rem' }}>
        <h1>Resume Content (No Spacer)</h1>
        <p>
          Without the spacer, content will start immediately after the
          letterhead bar.
        </p>
        <p>
          This can be useful if you want to manually control spacing or have a
          custom layout.
        </p>
      </div>
    </div>); },
};
exports.MinimalStyle = {
    args: {
        name: 'Michael Brown',
        includeSpacer: true,
    },
    render: function (args) { return (<div>
      <LetterheadBar_1.LetterheadBar {...args}/>
      <div style={{ padding: '2rem' }}>
        <h1>Minimal Letterhead</h1>
        <p>Simple name-only letterhead for clean, professional look.</p>
        {Array.from({ length: 10 }, function (_, i) { return (<p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>); })}
      </div>
    </div>); },
};
