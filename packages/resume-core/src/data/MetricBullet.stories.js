"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InContext = exports.CustomBullet = exports.TightSpacing = exports.RightAligned = exports.Default = void 0;
var MetricBullet_1 = require("./MetricBullet");
var meta = {
    title: 'Data/MetricBullet',
    component: MetricBullet_1.MetricBullet,
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    render: function () { return (<MetricBullet_1.MetricBulletList>
      <MetricBullet_1.MetricBullet metric="40%">Revenue increase in Q4 2023</MetricBullet_1.MetricBullet>
      <MetricBullet_1.MetricBullet metric="$2.5M">Annual cost savings achieved</MetricBullet_1.MetricBullet>
      <MetricBullet_1.MetricBullet metric="3x">
        Performance improvement over baseline
      </MetricBullet_1.MetricBullet>
    </MetricBullet_1.MetricBulletList>); },
};
exports.RightAligned = {
    render: function () { return (<MetricBullet_1.MetricBulletList>
      <MetricBullet_1.MetricBullet metric="40%" align="right">
        Revenue increase in Q4 2023
      </MetricBullet_1.MetricBullet>
      <MetricBullet_1.MetricBullet metric="$2.5M" align="right">
        Annual cost savings achieved
      </MetricBullet_1.MetricBullet>
      <MetricBullet_1.MetricBullet metric="3x" align="right">
        Performance improvement over baseline
      </MetricBullet_1.MetricBullet>
    </MetricBullet_1.MetricBulletList>); },
};
exports.TightSpacing = {
    render: function () { return (<MetricBullet_1.MetricBulletList>
      <MetricBullet_1.MetricBullet metric="99.9%" spacing="tight">
        System uptime maintained
      </MetricBullet_1.MetricBullet>
      <MetricBullet_1.MetricBullet metric="<100ms" spacing="tight">
        P95 latency achieved
      </MetricBullet_1.MetricBullet>
      <MetricBullet_1.MetricBullet metric="200K" spacing="tight">
        Monthly active users reached
      </MetricBullet_1.MetricBullet>
      <MetricBullet_1.MetricBullet metric="NPS 8.5" spacing="tight">
        Customer satisfaction score
      </MetricBullet_1.MetricBullet>
    </MetricBullet_1.MetricBulletList>); },
};
exports.CustomBullet = {
    render: function () { return (<MetricBullet_1.MetricBulletList>
      <MetricBullet_1.MetricBullet metric="40%" bullet="✓">
        Revenue increase achieved
      </MetricBullet_1.MetricBullet>
      <MetricBullet_1.MetricBullet metric="$2.5M" bullet="✓">
        Cost savings realized
      </MetricBullet_1.MetricBullet>
      <MetricBullet_1.MetricBullet metric="15" bullet="→">
        Team members led
      </MetricBullet_1.MetricBullet>
    </MetricBullet_1.MetricBulletList>); },
};
exports.InContext = {
    render: function () { return (<div>
      <h3>Senior Software Engineer - Acme Corp</h3>
      <p>
        Led development of microservices platform serving enterprise clients.
      </p>
      <MetricBullet_1.MetricBulletList>
        <MetricBullet_1.MetricBullet metric="85%">
          Reduced API response time by optimizing database queries
        </MetricBullet_1.MetricBullet>
        <MetricBullet_1.MetricBullet metric="$4.2M">
          Annual infrastructure cost savings through cloud optimization
        </MetricBullet_1.MetricBullet>
        <MetricBullet_1.MetricBullet metric="15">
          Engineers mentored across 3 cross-functional teams
        </MetricBullet_1.MetricBullet>
        <MetricBullet_1.MetricBullet metric="2M+">
          Daily active users supported by platform
        </MetricBullet_1.MetricBullet>
      </MetricBullet_1.MetricBulletList>
    </div>); },
};
