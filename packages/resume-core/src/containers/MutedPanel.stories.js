"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargePadding = exports.CompactPanel = exports.CoolTint = exports.WarmTint = exports.AccentTint = exports.Default = void 0;
var MutedPanel_jsx_1 = require("./MutedPanel.jsx");
var meta = {
    title: 'Containers/MutedPanel',
    component: MutedPanel_jsx_1.MutedPanel,
    tags: ['autodocs'],
    argTypes: {
        tint: {
            control: 'select',
            options: ['neutral', 'accent', 'warm', 'cool'],
        },
        padding: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        margin: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg'],
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        children: (<div>
        <h3 style={{ marginTop: 0 }}>Professional Summary</h3>
        <p>
          Experienced software engineer with 8+ years building scalable web
          applications. Specialized in React, Node.js, and cloud architecture.
          Proven track record of leading teams and delivering high-impact
          projects.
        </p>
      </div>),
    },
};
exports.AccentTint = {
    args: {
        tint: 'accent',
        children: (<div>
        <h4 style={{ marginTop: 0 }}>Key Highlights</h4>
        <ul style={{ marginBottom: 0 }}>
          <li>Led migration serving 10M+ users with zero downtime</li>
          <li>Reduced infrastructure costs by 40% through optimization</li>
          <li>Mentored 15+ junior engineers across 3 teams</li>
        </ul>
      </div>),
    },
};
exports.WarmTint = {
    args: {
        tint: 'warm',
        padding: 'lg',
        children: (<div>
        <h4 style={{ marginTop: 0 }}>Career Philosophy</h4>
        <p style={{ marginBottom: 0 }}>
          I believe in building software that genuinely improves people's lives,
          with a focus on user experience, maintainability, and team
          collaboration.
        </p>
      </div>),
    },
};
exports.CoolTint = {
    args: {
        tint: 'cool',
        padding: 'sm',
        children: <p style={{ margin: 0 }}>Quick note or sidebar information</p>,
    },
};
exports.CompactPanel = {
    args: {
        padding: 'sm',
        margin: 'sm',
        children: (<p style={{ margin: 0 }}>
        <strong>Note:</strong> Available for remote opportunities worldwide
      </p>),
    },
};
exports.LargePadding = {
    args: {
        padding: 'lg',
        children: (<div>
        <h3 style={{ marginTop: 0 }}>About Me</h3>
        <p>
          Passionate about open source and developer tools. Contributor to
          several major OSS projects including React, Next.js, and TypeScript.
        </p>
        <p style={{ marginBottom: 0 }}>
          Outside of coding, I enjoy hiking, photography, and teaching
          programming to beginners through local workshops.
        </p>
      </div>),
    },
};
