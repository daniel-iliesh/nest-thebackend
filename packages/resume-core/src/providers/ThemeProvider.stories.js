"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeComparison = exports.HighContrast = exports.Minimal = exports.Classic = exports.Modern = exports.Professional = void 0;
var react_1 = require("react");
/**
 * ThemeProvider Stories
 * Demonstrates all available themes for resume components
 */
var ThemeProvider_1 = require("./ThemeProvider");
var Section_1 = require("../primitives/Section");
var Heading_1 = require("../typography/Heading");
var Text_1 = require("../typography/Text");
var SkillBar_1 = require("../skills/SkillBar");
var Badge_1 = require("../primitives/Badge");
var meta = {
    title: 'Resume Core/Providers/ThemeProvider',
    component: ThemeProvider_1.ThemeProvider,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: [
                'professional',
                'modern',
                'classic',
                'minimal',
                'high-contrast',
            ],
            description: 'Theme variant to apply',
        },
    },
};
exports.default = meta;
var SampleContent = function () { return (<div style={{ padding: '2rem' }}>
    <Section_1.Section>
      <Heading_1.Heading level={1}>John Doe</Heading_1.Heading>
      <Text_1.Text>Senior Software Engineer</Text_1.Text>
      <div style={{
        marginTop: '1rem',
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap',
    }}>
        <Badge_1.Badge>React</Badge_1.Badge>
        <Badge_1.Badge>TypeScript</Badge_1.Badge>
        <Badge_1.Badge>Node.js</Badge_1.Badge>
      </div>
    </Section_1.Section>

    <Section_1.Section>
      <Heading_1.Heading level={2}>Skills</Heading_1.Heading>
      <SkillBar_1.SkillBar skill="JavaScript" level={90} showPercentage/>
      <SkillBar_1.SkillBar skill="React" level={85} showPercentage/>
      <SkillBar_1.SkillBar skill="TypeScript" level={80} showPercentage/>
      <SkillBar_1.SkillBar skill="Node.js" level={75} showPercentage/>
    </Section_1.Section>

    <Section_1.Section>
      <Heading_1.Heading level={2}>About</Heading_1.Heading>
      <Text_1.Text>
        Passionate software engineer with 8+ years of experience building
        scalable web applications. Specialized in React, TypeScript, and modern
        web technologies. Love mentoring junior developers and contributing to
        open source projects.
      </Text_1.Text>
    </Section_1.Section>
  </div>); };
exports.Professional = {
    args: {
        theme: 'professional',
        children: <SampleContent />,
    },
};
exports.Modern = {
    args: {
        theme: 'modern',
        children: <SampleContent />,
    },
};
exports.Classic = {
    args: {
        theme: 'classic',
        children: <SampleContent />,
    },
};
exports.Minimal = {
    args: {
        theme: 'minimal',
        children: <SampleContent />,
    },
};
exports.HighContrast = {
    args: {
        theme: 'high-contrast',
        children: <SampleContent />,
    },
};
exports.ThemeComparison = {
    render: function () { return (<div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            padding: '2rem',
        }}>
      {['professional', 'modern', 'classic', 'minimal', 'high-contrast'].map(function (theme) { return (<div key={theme} style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
            }}>
            <div style={{
                padding: '1rem',
                background: '#f5f5f5',
                fontWeight: 'bold',
                textTransform: 'capitalize',
            }}>
              {theme}
            </div>
            <ThemeProvider_1.ThemeProvider theme={theme}>
              <SampleContent />
            </ThemeProvider_1.ThemeProvider>
          </div>); })}
    </div>); },
};
