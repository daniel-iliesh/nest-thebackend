"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = void 0;
var Resume_1 = require("./Resume");
var server_1 = require("react-dom/server");
var react_i18next_1 = require("react-i18next");
var i18n_1 = require("./i18n");
var styled_components_1 = require("styled-components");
var style_css_inline_1 = require("../style.css?inline");
var createRender = function (language) { return function (resume) {
    var _a;
    var styleSheet = new styled_components_1.ServerStyleSheet();
    var resumeHtml = (0, server_1.renderToString)(styleSheet.collectStyles(<react_i18next_1.I18nextProvider i18n={(0, i18n_1.createI18N)(language)}>
        <Resume_1.Resume {...resume}/>
      </react_i18next_1.I18nextProvider>));
    return "<!doctype html><html lang=\"en\"><head>\n    <meta charSet=\"UTF-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1.0\"\n    />\n    <title>".concat(((_a = resume.basics) === null || _a === void 0 ? void 0 : _a.name) || 'Resume', "</title>\n    <link\n      rel=\"stylesheet\"\n      href=\"https://use.fontawesome.com/releases/v5.15.4/css/all.css\"\n      integrity=\"sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm\"\n      crossOrigin=\"anonymous\"\n    />\n    <style>").concat(style_css_inline_1.default, "</style>\n  </head>\n  <body>\n  <div id=\"root\">\n  ").concat(resumeHtml, "\n  </div></body>\n      </html>");
}; };
var marginValue = '0.8 cm';
var pdfRenderOptions = {
    margin: {
        top: marginValue,
        bottom: marginValue,
        left: marginValue,
        right: marginValue,
    },
};
var createTheme = function (language) {
    if (language === void 0) { language = 'en'; }
    return ({
        pdfRenderOptions: pdfRenderOptions,
        render: createRender(language),
    });
};
exports.createTheme = createTheme;
