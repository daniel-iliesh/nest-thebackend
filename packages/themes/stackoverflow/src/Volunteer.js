"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volunteer = void 0;
var react_i18next_1 = require("react-i18next");
exports.Volunteer = (0, react_i18next_1.withTranslation)()(function (_a) {
    var volunteer = _a.volunteer, t = _a.t;
    if (!volunteer.length) {
        return null;
    }
    return (<section className="section">
        <header>
          <h2 className="section-title">{t('Volunteer')}</h2>
        </header>
        <section id="volunteer">
          {volunteer.map(function (item, index) { return (<section key={index} className="volunteer-item">
              {item.organization && (<>
                  {item.summary && (<label htmlFor={"volunteer-item-".concat(index)}></label>)}
                  <header className="clear">
                    <div className="date">
                      {item.startDate && (<span className="startDate">
                          {new Date(item.startDate).toLocaleDateString()}
                          {'\u00A0'}
                        </span>)}
                      {item.endDate ? (<span className="endDate">
                          - {new Date(item.endDate).toLocaleDateString()}
                        </span>) : (<span className="endDate"> - Current</span>)}
                    </div>
                    <div className="header-left">
                      {item.position && (<div className="position">{item.position}</div>)}
                      <div className="organization">{item.organization}</div>
                    </div>
                  </header>
                </>)}
              {item.url && (<div className="website">
                  <span className="fas fa-external-link-alt"></span>
                  <a target="_blank" href={item.url} rel="noreferrer">
                    {'\u00A0'}
                    {item.url}
                  </a>
                </div>)}

              <div className="item">
                {item.summary && <div className="summary">{item.summary}</div>}
                {item.highlights && item.highlights.length > 0 && (<ul className="highlights">
                    {item.highlights.map(function (highlight, index) { return (<li key={index}>{highlight}</li>); })}
                  </ul>)}
              </div>
            </section>); })}
        </section>
      </section>);
});
