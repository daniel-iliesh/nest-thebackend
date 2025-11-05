"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeLayout = exports.CustomGap = exports.WideSidebar = exports.NarrowSidebar = exports.RightSidebar = exports.Default = void 0;
var react_1 = require("react");
/**
 * SidebarLayout Stories
 * Layout with main content and sidebar
 */
var SidebarLayout_1 = require("./SidebarLayout");
var meta = {
    title: 'Resume Core/Layouts/SidebarLayout',
    component: SidebarLayout_1.SidebarLayout,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        sidebarWidth: {
            control: 'text',
            description: 'Sidebar width (CSS value)',
        },
        sidebarPosition: {
            control: 'select',
            options: ['left', 'right'],
            description: 'Sidebar position',
        },
        gap: {
            control: 'text',
            description: 'Gap between sidebar and main',
        },
    },
};
exports.default = meta;
var SidebarContent = function () { return (<div style={{ padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
    <h3>Sidebar</h3>
    <div style={{ marginTop: '1rem' }}>
      <h4>Contact</h4>
      <p>john@example.com</p>
      <p>(555) 123-4567</p>
    </div>
    <div style={{ marginTop: '1rem' }}>
      <h4>Skills</h4>
      <p>React, Node.js, TypeScript</p>
    </div>
  </div>); };
var MainContent = function () { return (<div style={{ padding: '1rem', background: '#fafafa', borderRadius: '8px' }}>
    <h2>Main Content</h2>
    <p>
      This is the main content area. It contains the primary information like
      work experience, projects, and education.
    </p>
    <h3>Work Experience</h3>
    <p>Senior Software Engineer at Tech Corp (2020-Present)</p>
    <p>Led development of microservices architecture serving 1M+ users.</p>
  </div>); };
exports.Default = {
    args: {
        sidebar: 'Sidebar content',
        children: 'Main content',
    },
};
exports.RightSidebar = {
    args: {
        sidebarWidth: '30%',
        sidebarPosition: 'right',
        sidebar: <SidebarContent />,
        children: <MainContent />,
    },
};
exports.NarrowSidebar = {
    args: {
        sidebarWidth: '25%',
        sidebarPosition: 'left',
        sidebar: <SidebarContent />,
        children: <MainContent />,
    },
};
exports.WideSidebar = {
    args: {
        sidebarWidth: '35%',
        sidebarPosition: 'left',
        sidebar: <SidebarContent />,
        children: <MainContent />,
    },
};
exports.CustomGap = {
    args: {
        sidebarWidth: '30%',
        sidebarPosition: 'left',
        gap: '3rem',
        sidebar: <SidebarContent />,
        children: <MainContent />,
    },
};
exports.ResumeLayout = {
    render: function () { return (<SidebarLayout_1.SidebarLayout sidebarWidth="280px" sidebarPosition="left" sidebar={<div style={{
                padding: '1.5rem',
                background: '#2c3e50',
                color: 'white',
                borderRadius: '8px',
            }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: '#34495e',
                margin: '0 auto 1rem',
            }}/>
            <h3>John Doe</h3>
            <p>Senior Developer</p>
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h4>Contact</h4>
            <p>john@example.com</p>
            <p>(555) 123-4567</p>
          </div>
          <div>
            <h4>Skills</h4>
            <p>JavaScript • React • Node.js • TypeScript • AWS</p>
          </div>
        </div>}>
      <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px' }}>
        <h2>Experience</h2>
        <div style={{ marginTop: '1rem' }}>
          <h3>Senior Software Engineer</h3>
          <p>Tech Corp • 2020-Present</p>
          <p>Leading development of cloud-native applications.</p>
        </div>
        <h2 style={{ marginTop: '2rem' }}>Education</h2>
        <div style={{ marginTop: '1rem' }}>
          <h3>BS Computer Science</h3>
          <p>University of Technology • 2016</p>
        </div>
      </div>
    </SidebarLayout_1.SidebarLayout>); },
};
