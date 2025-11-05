"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicalSpecs = exports.ProjectMetadata = exports.InContext = exports.ManualComposition = exports.Sizes = exports.Default = void 0;
var KeyValueInline_1 = require("./KeyValueInline");
var meta = {
    title: 'Data/KeyValueInline',
    component: KeyValueInline_1.KeyValueInline,
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        pairs: [
            { key: 'Stack', value: 'React + Node.js' },
            { key: 'Team', value: '5 engineers' },
            { key: 'Duration', value: '8 months' },
        ],
    },
};
exports.Sizes = {
    render: function () { return (<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div>
        <strong>Extra Small:</strong>
        <br />
        <KeyValueInline_1.KeyValueInline size="xs" pairs={[
            { key: 'Stack', value: 'React + Node.js' },
            { key: 'Team', value: '5 engineers' },
        ]}/>
      </div>
      <div>
        <strong>Small (default):</strong>
        <br />
        <KeyValueInline_1.KeyValueInline size="sm" pairs={[
            { key: 'Stack', value: 'React + Node.js' },
            { key: 'Team', value: '5 engineers' },
        ]}/>
      </div>
      <div>
        <strong>Medium:</strong>
        <br />
        <KeyValueInline_1.KeyValueInline size="md" pairs={[
            { key: 'Stack', value: 'React + Node.js' },
            { key: 'Team', value: '5 engineers' },
        ]}/>
      </div>
    </div>); },
};
exports.ManualComposition = {
    render: function () { return (<KeyValueInline_1.KeyValueInline>
      <KeyValueInline_1.KeyValue keyLabel="Technologies" value="React, TypeScript, PostgreSQL"/>
      <KeyValueInline_1.KeyValue keyLabel="Scale" value="2M+ users"/>
      <KeyValueInline_1.KeyValue keyLabel="Team" value="12 engineers"/>
    </KeyValueInline_1.KeyValueInline>); },
};
exports.InContext = {
    render: function () { return (<div>
      <h3>E-Commerce Platform Redesign</h3>
      <p>
        Led complete redesign of legacy e-commerce platform.{' '}
        <KeyValueInline_1.KeyValueInline pairs={[
            { key: 'Stack', value: 'React + Node.js + PostgreSQL' },
            { key: 'Team', value: '8 engineers' },
            { key: 'Duration', value: '14 months' },
            { key: 'Impact', value: '40% conversion increase' },
        ]}/>
      </p>
      <p>
        Implemented microservices architecture with automated testing and
        continuous deployment pipeline.
      </p>
    </div>); },
};
exports.ProjectMetadata = {
    render: function () { return (<div>
      <h3>Cloud Migration Project</h3>
      <KeyValueInline_1.KeyValueInline pairs={[
            { key: 'Client', value: 'Fortune 500 Financial Services' },
            { key: 'Duration', value: '18 months' },
            { key: 'Budget', value: '$12M' },
            { key: 'Team Size', value: '25 engineers' },
            { key: 'Cloud Provider', value: 'AWS' },
            { key: 'Regions', value: 'US-East, EU-West, APAC' },
        ]} size="xs"/>
      <p>
        Successfully migrated 200+ applications to cloud infrastructure with
        zero downtime, achieving 99.9% uptime and $4.5M annual cost savings.
      </p>
    </div>); },
};
exports.TechnicalSpecs = {
    render: function () { return (<div>
      <h3>Distributed Cache System</h3>
      <p>Built high-performance distributed caching layer.</p>
      <KeyValueInline_1.KeyValueInline pairs={[
            { key: 'Language', value: 'Go' },
            { key: 'Storage', value: 'Redis Cluster' },
            { key: 'Throughput', value: '100K req/sec' },
            { key: 'Latency', value: '<5ms P99' },
            { key: 'Hit Rate', value: '94%' },
        ]} size="xs"/>
    </div>); },
};
