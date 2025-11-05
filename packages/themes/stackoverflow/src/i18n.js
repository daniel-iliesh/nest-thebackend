"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createI18N = void 0;
var i18next_1 = require("i18next");
var translations_json_1 = require("./translations.json");
var createI18N = function (language) {
    i18next_1.default.init({
        resources: translations_json_1.default,
        lng: language, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        fallbackLng: 'en',
    });
    return i18next_1.default;
};
exports.createI18N = createI18N;
