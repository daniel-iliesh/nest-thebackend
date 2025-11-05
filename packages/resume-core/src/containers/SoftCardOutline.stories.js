"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleCards = exports.NoMargin = exports.TransparentCard = exports.LargePadding = exports.SmallPadding = exports.MutedVariant = exports.AccentVariant = exports.Default = void 0;
var SoftCardOutline_jsx_1 = require("./SoftCardOutline.jsx");
var meta = {
    title: 'Containers/SoftCardOutline',
    component: SoftCardOutline_jsx_1.SoftCardOutline,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'accent', 'muted'],
        },
        padding: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        margin: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg'],
        },
        rounded: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        background: {
            control: 'select',
            options: ['none', 'accent', 'muted'],
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        children: (<div>
        <h4 style={{ marginTop: 0, marginBottom: '8px' }}>
          Senior Software Engineer
        </h4>
        <p style={{ margin: '4px 0', color: '#666' }}>
          Tech Company Inc. • 2020-2023 • San Francisco, CA
        </p>
        <ul style={{ marginTop: '8px', marginBottom: 0 }}>
          <li>Led team of 5 engineers building customer analytics platform</li>
          <li>Architected microservices handling 50M+ requests daily</li>
          <li>Reduced infrastructure costs by 35% through optimization</li>
        </ul>
      </div>),
    },
};
exports.AccentVariant = {
    args: {
        variant: 'accent',
        background: 'accent',
        children: (<div>
        <h4 style={{ marginTop: 0, marginBottom: '8px' }}>Featured Project</h4>
        <p style={{ margin: '4px 0' }}>
          <strong>Real-time Collaboration Platform</strong>
        </p>
        <p style={{ margin: '4px 0' }}>
          Built WebSocket-based collaboration tool supporting 10,000+ concurrent
          users. Technologies: React, Node.js, Redis, PostgreSQL.
        </p>
      </div>),
    },
};
exports.MutedVariant = {
    args: {
        variant: 'muted',
        children: (<div>
        <h4 style={{ marginTop: 0, marginBottom: '8px' }}>Education</h4>
        <p style={{ margin: '4px 0' }}>
          <strong>Bachelor of Science in Computer Science</strong>
        </p>
        <p style={{ margin: '4px 0', color: '#666' }}>
          Stanford University • 2012-2016 • GPA: 3.8/4.0
        </p>
      </div>),
    },
};
exports.SmallPadding = {
    args: {
        padding: 'sm',
        rounded: 'sm',
        children: (<div>
        <p style={{ margin: 0 }}>
          <strong>Certification:</strong> AWS Solutions Architect Professional •
          Expires 2025
        </p>
      </div>),
    },
};
exports.LargePadding = {
    args: {
        padding: 'lg',
        rounded: 'lg',
        background: 'muted',
        children: (<div>
        <h3 style={{ marginTop: 0 }}>Technical Skills</h3>
        <p style={{ marginBottom: '12px' }}>
          <strong>Languages:</strong> TypeScript, Python, Go, Java
        </p>
        <p style={{ marginBottom: '12px' }}>
          <strong>Frameworks:</strong> React, Next.js, Node.js, Django
        </p>
        <p style={{ margin: 0 }}>
          <strong>Infrastructure:</strong> AWS, Docker, Kubernetes, Terraform
        </p>
      </div>),
    },
};
exports.TransparentCard = {
    args: {
        background: 'none',
        children: (<div>
        <h4 style={{ marginTop: 0, marginBottom: '8px' }}>Volunteer Work</h4>
        <p style={{ margin: '4px 0' }}>
          <strong>Code Mentor</strong> • Tech Education Non-Profit
        </p>
        <p style={{ margin: '4px 0' }}>
          Teaching web development to underrepresented groups in tech.
        </p>
      </div>),
    },
};
exports.NoMargin = {
    args: {
        margin: 'none',
        children: (<p style={{ margin: 0 }}>
        Card with no vertical margins - useful for dense layouts or nested
        components.
      </p>),
    },
};
exports.MultipleCards = {
    render: function () { return (<div>
      <SoftCardOutline_jsx_1.SoftCardOutline variant="accent" background="accent">
        <h4 style={{ marginTop: 0 }}>Card 1</h4>
        <p style={{ marginBottom: 0 }}>Accent variant with background</p>
      </SoftCardOutline_jsx_1.SoftCardOutline>
      <SoftCardOutline_jsx_1.SoftCardOutline>
        <h4 style={{ marginTop: 0 }}>Card 2</h4>
        <p style={{ marginBottom: 0 }}>Default card</p>
      </SoftCardOutline_jsx_1.SoftCardOutline>
      <SoftCardOutline_jsx_1.SoftCardOutline variant="muted">
        <h4 style={{ marginTop: 0 }}>Card 3</h4>
        <p style={{ marginBottom: 0 }}>Muted variant</p>
      </SoftCardOutline_jsx_1.SoftCardOutline>
    </div>); },
};
