"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publications = void 0;
var dateHelpers_1 = require("./dateHelpers");
var react_i18next_1 = require("react-i18next");
exports.Publications = (0, react_i18next_1.withTranslation)()(function (_a) {
    var publications = _a.publications, t = _a.t;
    return publications.length > 0 ? (<section className="section">
        <header>
          <h2 className="section-title">{t('Publications')}</h2>
        </header>
        <section id="publications">
          {publications.map(function (publication, index) { return (<section className="publication-item" key={index}>
              {publication.summary && (<label htmlFor={"publication-item-".concat(index)}></label>)}
              <header className="clear">
                {publication.releaseDate && (<span className="date">{(0, dateHelpers_1.DMY)(publication.releaseDate)}</span>)}
                <div className="header-left">
                  {publication.name && (<span className="name">
                      {publication.url ? (<span className="website">
                          <span className="fas fa-external-link-alt"></span>
                          <a target="_blank" href={publication.url} rel="noreferrer">
                            {'\u00A0'}
                            {publication.name}
                          </a>
                        </span>) : (publication.name)}
                    </span>)}
                  {publication.publisher && (<span className="publisher">
                      {' '}
                      in {publication.publisher}
                    </span>)}
                </div>
              </header>

              <div className="item">
                {publication.summary && (<div className="summary">{publication.summary}</div>)}
              </div>
            </section>); })}
        </section>
      </section>) : null;
});
