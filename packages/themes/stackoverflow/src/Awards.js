"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Awards = void 0;
var react_i18next_1 = require("react-i18next");
exports.Awards = (0, react_i18next_1.withTranslation)()(function (_a) {
    var awards = _a.awards, t = _a.t;
    return (<>
      {awards.length > 0 && (<section className="section">
          <header>
            <h2 className="section-title">{t('Awards')}</h2>
          </header>
          <section id="awards">
            {awards.map(function (award, index) { return (<section key={index} className="award-item">
                {award.summary && <label htmlFor={"award-item-".concat(index)}/>}
                <header className="clear">
                  {award.date && (<div className="date">
                      {new Date(award.date).getFullYear()}
                    </div>)}
                  <div className="header-left">
                    {award.title && <div className="title">{award.title}</div>}
                    {award.awarder && (<div className="awarder">{award.awarder}</div>)}
                  </div>
                </header>
                <div className="item">
                  {award.summary && (<div className="summary">{award.summary}</div>)}
                </div>
              </section>); })}
          </section>
        </section>)}
    </>);
});
