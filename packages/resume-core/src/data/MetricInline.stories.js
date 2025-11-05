"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InContext = exports.Sizes = exports.Default = void 0;
var MetricInline_1 = require("./MetricInline");
var meta = {
    title: 'Data/MetricInline',
    component: MetricInline_1.MetricInline,
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    render: function () { return (<p>
      Increased revenue by <MetricInline_1.MetricInline>40%</MetricInline_1.MetricInline> year over year while
      reducing costs by <MetricInline_1.MetricInline>$2.5M</MetricInline_1.MetricInline> annually.
    </p>); },
};
exports.Sizes = {
    render: function () { return (<div>
      <p>
        Small: Led team of <MetricInline_1.MetricInline size="sm">12</MetricInline_1.MetricInline> engineers
      </p>
      <p>
        Medium (default): Improved performance by{' '}
        <MetricInline_1.MetricInline>3x</MetricInline_1.MetricInline>
      </p>
      <p>
        Large: Achieved <MetricInline_1.MetricInline size="lg">99.9%</MetricInline_1.MetricInline> uptime
      </p>
    </div>); },
};
exports.InContext = {
    render: function () { return (<div>
      <h3>Senior Software Engineer</h3>
      <p>
        Led a cross-functional team of <MetricInline_1.MetricInline>15</MetricInline_1.MetricInline> engineers
        to deliver a cloud-native platform serving{' '}
        <MetricInline_1.MetricInline>2M+</MetricInline_1.MetricInline> daily active users. Improved API
        response time by <MetricInline_1.MetricInline>85%</MetricInline_1.MetricInline> and reduced
        infrastructure costs by <MetricInline_1.MetricInline size="lg">$4.2M</MetricInline_1.MetricInline>{' '}
        annually.
      </p>
    </div>); },
};
