"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompactMetadata = exports.InParagraph = exports.CustomColor = exports.JobMetadata = exports.LocationAndDate = exports.Default = void 0;
var react_1 = require("react");
var InlineSeparatorPipe_1 = require("./InlineSeparatorPipe");
var meta = {
    title: 'Primitives/InlineSeparatorPipe',
    component: InlineSeparatorPipe_1.InlineSeparatorPipe,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Vertical pipe separator for inline metadata with thin space padding. Uses Unicode thin space (U+2009) for optimal spacing without crowding.',
            },
        },
    },
};
exports.default = meta;
exports.Default = {
    render: function () { return (<div>
      <span>Remote</span>
      <InlineSeparatorPipe_1.InlineSeparatorPipe />
      <span>Full-time</span>
      <InlineSeparatorPipe_1.InlineSeparatorPipe />
      <span>$100k-$150k</span>
    </div>); },
};
exports.LocationAndDate = {
    render: function () { return (<div>
      <span>San Francisco, CA</span>
      <InlineSeparatorPipe_1.InlineSeparatorPipe />
      <span>Jan 2020 - Present</span>
      <InlineSeparatorPipe_1.InlineSeparatorPipe />
      <span>3 years</span>
    </div>); },
};
exports.JobMetadata = {
    render: function () { return (<div style={{ fontSize: '14px', color: '#666' }}>
      <span>Senior Engineer</span>
      <InlineSeparatorPipe_1.InlineSeparatorPipe />
      <span>Tech Corp</span>
      <InlineSeparatorPipe_1.InlineSeparatorPipe />
      <span>Remote</span>
    </div>); },
};
exports.CustomColor = {
    render: function () { return (<div>
      <span>Item A</span>
      <InlineSeparatorPipe_1.InlineSeparatorPipe color="#0066cc"/>
      <span>Item B</span>
      <InlineSeparatorPipe_1.InlineSeparatorPipe color="#0066cc"/>
      <span>Item C</span>
    </div>); },
};
exports.InParagraph = {
    render: function () { return (<p style={{ maxWidth: '600px' }}>
      Led a cross-functional team of 8 engineers
      <InlineSeparatorPipe_1.InlineSeparatorPipe />
      Delivered 5 major features on time
      <InlineSeparatorPipe_1.InlineSeparatorPipe />
      Increased system performance by 40%
      <InlineSeparatorPipe_1.InlineSeparatorPipe />
      Mentored 3 junior developers to senior level.
    </p>); },
};
exports.CompactMetadata = {
    render: function () { return (<div style={{ fontSize: '12px', color: '#888' }}>
      <span>Published</span>
      <InlineSeparatorPipe_1.InlineSeparatorPipe />
      <span>Mar 2023</span>
      <InlineSeparatorPipe_1.InlineSeparatorPipe />
      <span>IEEE</span>
      <InlineSeparatorPipe_1.InlineSeparatorPipe />
      <span>DOI: 10.1109/example</span>
    </div>); },
};
