"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomShadowColor = exports.MultipleCards = exports.ExperienceBlock = exports.SkillsCard = exports.ProfileCard = exports.Default = void 0;
var SoftShadowEmulation_1 = require("./SoftShadowEmulation");
var meta = {
    title: 'Print/SoftShadowEmulation',
    component: SoftShadowEmulation_1.SoftShadowEmulation,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Printed "shadow" effect using second keyline with slight offset. No actual blur - uses subtle tint (≤8%) for print-safe shadow effect that is guaranteed to render on all printers.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        offset: {
            control: 'text',
            description: 'Shadow offset distance',
        },
        shadowColor: {
            control: 'color',
            description: 'Shadow tint color (≤8% opacity)',
        },
        printShadowColor: {
            control: 'color',
            description: 'Solid color for print output',
        },
        padding: {
            control: 'text',
            description: 'Inner padding',
        },
    },
};
exports.default = meta;
exports.Default = {
    args: {
        offset: '4px',
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        printShadowColor: '#f0f0f0',
    },
    render: function (args) { return (<div style={{ padding: '2rem' }}>
      <SoftShadowEmulation_1.SoftShadowEmulation {...args}>
        <h2 style={{ margin: '0 0 1rem 0' }}>Section Title</h2>
        <p style={{ margin: 0 }}>
          This content has a subtle shadow effect that will print reliably on
          all devices. The shadow is created using a second border, not CSS
          box-shadow.
        </p>
      </SoftShadowEmulation_1.SoftShadowEmulation>
    </div>); },
};
exports.ProfileCard = {
    args: {
        offset: '6px',
        shadowColor: 'rgba(0, 0, 0, 0.06)',
        printShadowColor: '#f5f5f5',
    },
    render: function (args) { return (<div style={{ padding: '2rem' }}>
      <SoftShadowEmulation_1.SoftShadowEmulation {...args}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: '#e5e7eb',
            margin: '0 auto 1rem',
        }}/>
          <h2 style={{ margin: '0 0 0.5rem 0' }}>John Doe</h2>
          <p style={{ color: '#6b7280', margin: '0 0 1rem 0' }}>
            Software Engineer
          </p>
          <p style={{ fontSize: '0.875rem', margin: 0 }}>
            john.doe@example.com | (555) 123-4567
          </p>
        </div>
      </SoftShadowEmulation_1.SoftShadowEmulation>
    </div>); },
};
exports.SkillsCard = {
    args: {
        offset: '4px',
    },
    render: function (args) { return (<div style={{ padding: '2rem' }}>
      <SoftShadowEmulation_1.SoftShadowEmulation {...args}>
        <h3 style={{ margin: '0 0 1rem 0' }}>Technical Skills</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python'].map(function (skill) { return (<span key={skill} style={{
                padding: '0.25rem 0.75rem',
                background: '#f3f4f6',
                borderRadius: '4px',
                fontSize: '0.875rem',
            }}>
                {skill}
              </span>); })}
        </div>
      </SoftShadowEmulation_1.SoftShadowEmulation>
    </div>); },
};
exports.ExperienceBlock = {
    args: {
        offset: '5px',
        shadowColor: 'rgba(0, 0, 0, 0.07)',
    },
    render: function (args) { return (<div style={{ padding: '2rem' }}>
      <SoftShadowEmulation_1.SoftShadowEmulation {...args}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
        }}>
          <h3 style={{ margin: 0 }}>Senior Developer</h3>
          <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
            2020 - Present
          </span>
        </div>
        <p style={{ color: '#6b7280', margin: '0 0 1rem 0' }}>
          Tech Company Inc.
        </p>
        <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
          <li>Led development of microservices architecture</li>
          <li>Mentored team of 5 junior developers</li>
          <li>Improved application performance by 40%</li>
        </ul>
      </SoftShadowEmulation_1.SoftShadowEmulation>
    </div>); },
};
exports.MultipleCards = {
    args: {
        offset: '4px',
    },
    render: function (args) { return (<div style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
        }}>
      <SoftShadowEmulation_1.SoftShadowEmulation {...args}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Education</h3>
        <p style={{ margin: 0 }}>
          <strong>Bachelor of Science in Computer Science</strong>
          <br />
          University Name, 2016
        </p>
      </SoftShadowEmulation_1.SoftShadowEmulation>

      <SoftShadowEmulation_1.SoftShadowEmulation {...args}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Certifications</h3>
        <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
          <li>AWS Certified Solutions Architect</li>
          <li>Google Cloud Professional</li>
        </ul>
      </SoftShadowEmulation_1.SoftShadowEmulation>

      <SoftShadowEmulation_1.SoftShadowEmulation {...args}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Languages</h3>
        <p style={{ margin: 0 }}>
          English (Native), Spanish (Professional), French (Conversational)
        </p>
      </SoftShadowEmulation_1.SoftShadowEmulation>
    </div>); },
};
exports.CustomShadowColor = {
    args: {
        offset: '6px',
        shadowColor: 'rgba(59, 130, 246, 0.08)',
        printShadowColor: '#dbeafe',
    },
    render: function (args) { return (<div style={{ padding: '2rem' }}>
      <SoftShadowEmulation_1.SoftShadowEmulation {...args}>
        <h2 style={{ margin: '0 0 1rem 0', color: '#2563eb' }}>
          Highlighted Section
        </h2>
        <p style={{ margin: 0 }}>
          This shadow uses a blue tint instead of gray for a branded look while
          remaining print-safe.
        </p>
      </SoftShadowEmulation_1.SoftShadowEmulation>
    </div>); },
};
