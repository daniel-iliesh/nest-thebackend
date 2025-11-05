"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NarrowColumn = exports.CustomColor = exports.GermanLanguage = exports.SpanishLanguage = exports.FrenchLanguage = exports.WithMaxLines = exports.JustifiedText = exports.Default = void 0;
var HyphenationSafeParagraph_jsx_1 = require("./HyphenationSafeParagraph.jsx");
var meta = {
    title: 'Typography/HyphenationSafeParagraph',
    component: HyphenationSafeParagraph_jsx_1.HyphenationSafeParagraph,
    tags: ['autodocs'],
    argTypes: {
        lang: {
            control: 'select',
            options: ['en', 'es', 'fr', 'de', 'it', 'pt'],
        },
        color: { control: 'color' },
        textAlign: {
            control: 'select',
            options: ['left', 'center', 'right', 'justify'],
        },
        maxLines: { control: 'number' },
        as: {
            control: 'select',
            options: ['p', 'div', 'span'],
        },
    },
};
exports.default = meta;
var longText = 'Implemented comprehensive internationalization framework for enterprise-level applications, incorporating sophisticated multilingual content management capabilities and advanced localization strategies that significantly improved user engagement across global markets.';
exports.Default = {
    args: {
        children: longText,
    },
    decorators: [
        function (Story) { return (<div style={{ maxWidth: '400px' }}>
        <Story />
      </div>); },
    ],
};
exports.JustifiedText = {
    args: {
        children: longText,
        textAlign: 'justify',
    },
    decorators: [
        function (Story) { return (<div style={{ maxWidth: '500px' }}>
        <Story />
      </div>); },
    ],
};
exports.WithMaxLines = {
    args: {
        children: 'Developed and maintained mission-critical microservices architecture supporting millions of daily transactions. Led technical implementation of containerization strategy and continuous deployment pipelines. Collaborated with product teams to define scalable solutions.',
        maxLines: 2,
    },
    decorators: [
        function (Story) { return (<div style={{ maxWidth: '450px' }}>
        <Story />
      </div>); },
    ],
};
exports.FrenchLanguage = {
    args: {
        children: "Développement d'applications web modernes avec React et TypeScript, intégration de microservices et implémentation de solutions d'infrastructure cloud évolutives pour des entreprises internationales.",
        lang: 'fr',
    },
    decorators: [
        function (Story) { return (<div style={{ maxWidth: '400px' }}>
        <Story />
      </div>); },
    ],
};
exports.SpanishLanguage = {
    args: {
        children: 'Arquitecto de soluciones con experiencia en desarrollo de aplicaciones empresariales, implementación de metodologías ágiles y liderazgo de equipos multidisciplinarios en proyectos de transformación digital.',
        lang: 'es',
    },
    decorators: [
        function (Story) { return (<div style={{ maxWidth: '400px' }}>
        <Story />
      </div>); },
    ],
};
exports.GermanLanguage = {
    args: {
        children: 'Softwareentwickler mit umfangreichen Kenntnissen in der Implementierung skalierbarer Systeme, Cloud-Infrastruktur und kontinuierlicher Integration für unternehmenskritische Anwendungen.',
        lang: 'de',
    },
    decorators: [
        function (Story) { return (<div style={{ maxWidth: '400px' }}>
        <Story />
      </div>); },
    ],
};
exports.CustomColor = {
    args: {
        children: longText,
        color: '#475569',
    },
    decorators: [
        function (Story) { return (<div style={{ maxWidth: '400px' }}>
        <Story />
      </div>); },
    ],
};
exports.NarrowColumn = {
    args: {
        children: 'Spearheaded the architectural transformation of legacy monolithic applications into cloud-native microservices, resulting in improved scalability and maintainability.',
    },
    decorators: [
        function (Story) { return (<div style={{
                maxWidth: '250px',
                border: '1px solid #e5e7eb',
                padding: '16px',
            }}>
        <Story />
      </div>); },
    ],
};
