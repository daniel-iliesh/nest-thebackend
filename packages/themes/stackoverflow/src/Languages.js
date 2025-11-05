"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Languages = void 0;
var react_i18next_1 = require("react-i18next");
exports.Languages = (0, react_i18next_1.withTranslation)()(function (_a) {
    var languages = _a.languages, t = _a.t;
    return (<>
      {languages.length && (<section className="section">
          <header>
            <h2 className="section-title">{t('Languages')}</h2>
          </header>
          <section id="languages">
            {languages.map(function (language, index) { return (<div key={index} className="display">
                {language.language && (<h3 className="language">{language.language}</h3>)}
                <div className="item">
                  {language.fluency && (<div className={"level fluency ".concat(language.fluency.toLowerCase())}>
                      <em>{language.fluency}</em>
                      <div className="bar"></div>
                    </div>)}
                </div>
              </div>); })}
          </section>
        </section>)}
    </>);
});
