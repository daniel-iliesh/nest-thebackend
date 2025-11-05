"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Work = void 0;
var dateHelpers_1 = require("./dateHelpers");
var react_i18next_1 = require("react-i18next");
exports.Work = (0, react_i18next_1.withTranslation)()(function (_a) {
    var work = _a.work, t = _a.t;
    return work.length ? (<section className="section">
        <header>
          <h2 className="section-title">
            {t('Work Experience')}{' '}
            <span className="item-count">({work.length})</span>
          </h2>
        </header>

        <section id="work">
          {work.map(function (workItem, index) {
            var _a, _b;
            return (<section key={index} className="work-item">
              {workItem.name && (<>
                  {workItem.summary && <label htmlFor={"work-item-".concat(index)}/>}
                  <header className="clear">
                    <div className="date">
                      {workItem.startDate && (<span className="startDate">
                          {(0, dateHelpers_1.MY)(workItem.startDate)}
                          {'\u00A0'}
                        </span>)}
                      {workItem.endDate ? (<span className="endDate">
                          - {(0, dateHelpers_1.MY)(workItem.endDate)}
                        </span>) : (<span className="endDate">- Current</span>)}
                    </div>
                    {workItem.position && (<div className="position">{workItem.position}</div>)}
                    <div className="company">{workItem.name}</div>
                  </header>
                </>)}

              {workItem.location && (<>
                  <span className="fas fa-map-marker-alt"/>
                  <span className="location">
                    {'\u00A0'}
                    {workItem.location}
                  </span>
                </>)}

              {((_a = workItem.keywords) === null || _a === void 0 ? void 0 : _a.length) && (<ul className="keywords">
                  {workItem.keywords.map(function (keyword, index) { return (<li key={index}>{keyword}</li>); })}
                </ul>)}

              {workItem.url && (<span className="url">
                  <span className="fas fa-external-link-alt"/>
                  <a target="_blank" href={workItem.url} rel="noreferrer">
                    {'\u00A0'}
                    {workItem.url}
                  </a>
                </span>)}

              <div className="item" id="work-item">
                {workItem.summary && (<div className="summary">{workItem.summary}</div>)}

                {((_b = workItem.highlights) === null || _b === void 0 ? void 0 : _b.length) && (<ul className="highlights">
                    {workItem.highlights.map(function (highlight, index) { return (<li key={index}>{highlight}</li>); })}
                  </ul>)}
              </div>
            </section>);
        })}
        </section>
      </section>) : null;
});
