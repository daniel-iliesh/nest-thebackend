"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.References = void 0;
var react_i18next_1 = require("react-i18next");
exports.References = (0, react_i18next_1.withTranslation)()(function (_a) {
    var references = _a.references, t = _a.t;
    return references.length ? (<section className="section">
        <header>
          <h2 className="section-title">{t('References')}</h2>
        </header>
        <section id="references">
          {references.map(function (reference, index) { return (<div className="item" key={index}>
              {reference.reference && (<blockquote className="reference">
                  &#8220;{reference.reference}&#8221;
                  {reference.name && (<div className="name">{reference.name}</div>)}
                </blockquote>)}
            </div>); })}
        </section>
      </section>) : null;
});
