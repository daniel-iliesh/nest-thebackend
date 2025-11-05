"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TightLayout = exports.InContext = exports.ManualComposition = exports.CustomDivider = exports.WithDividers = exports.Sizes = exports.Default = void 0;
var KPIChipLine_1 = require("./KPIChipLine");
var meta = {
    title: 'Data/KPIChipLine',
    component: KPIChipLine_1.KPIChipLine,
    tags: ['autodocs'],
};
exports.default = meta;
exports.Default = {
    args: {
        kpis: ['95% Uptime', 'NPS 8.5', '200K MAU', '<100ms P95'],
    },
};
exports.Sizes = {
    render: function () { return (<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <strong>Extra Small:</strong>
        <KPIChipLine_1.KPIChipLine kpis={['95% Uptime', 'NPS 8.5', '200K MAU']} size="xs"/>
      </div>
      <div>
        <strong>Small (default):</strong>
        <KPIChipLine_1.KPIChipLine kpis={['95% Uptime', 'NPS 8.5', '200K MAU']} size="sm"/>
      </div>
      <div>
        <strong>Medium:</strong>
        <KPIChipLine_1.KPIChipLine kpis={['95% Uptime', 'NPS 8.5', '200K MAU']} size="md"/>
      </div>
    </div>); },
};
exports.WithDividers = {
    args: {
        kpis: ['95% Uptime', 'NPS 8.5', '200K MAU', '<100ms P95'],
        showDividers: true,
    },
};
exports.CustomDivider = {
    args: {
        kpis: ['95% Uptime', 'NPS 8.5', '200K MAU', '<100ms P95'],
        showDividers: true,
        divider: '•',
    },
};
exports.ManualComposition = {
    render: function () { return (<KPIChipLine_1.KPIChipLine>
      <KPIChipLine_1.KPIChip>99.9% Uptime</KPIChipLine_1.KPIChip>
      <KPIChipLine_1.KPIChip>NPS 9.2</KPIChipLine_1.KPIChip>
      <KPIChipLine_1.KPIChip>500K MAU</KPIChipLine_1.KPIChip>
      <KPIChipLine_1.KPIChip>&lt;50ms P95</KPIChipLine_1.KPIChip>
      <KPIChipLine_1.KPIChip>SOC 2 Compliant</KPIChipLine_1.KPIChip>
    </KPIChipLine_1.KPIChipLine>); },
};
exports.InContext = {
    render: function () { return (<div>
      <h3>Platform Engineer - Cloud Infrastructure</h3>
      <p>
        Managed critical production infrastructure supporting millions of users.
      </p>
      <KPIChipLine_1.KPIChipLine kpis={['99.9% Uptime', '<100ms P95', '200K MAU', '$2.5M Saved']} margin="12px 0"/>
      <p>
        Led migration to Kubernetes, implementing automated scaling, monitoring,
        and disaster recovery processes across 3 regions.
      </p>
    </div>); },
};
exports.TightLayout = {
    args: {
        kpis: [
            'React',
            'TypeScript',
            'Node.js',
            'PostgreSQL',
            'AWS',
            'Docker',
            'K8s',
        ],
        size: 'xs',
        gap: '4px',
        margin: '4px 0',
    },
};
