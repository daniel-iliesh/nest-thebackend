"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
var react_i18next_1 = require("react-i18next");
exports.Education = (0, react_i18next_1.withTranslation)()(function (_a) {
    var education = _a.education, t = _a.t;
    if (!education.length)
        return null;
    var formatDate = function (date) {
        return new Date(date).getFullYear();
    };
    return (<section className="section">
        <header>
          <h2 className="section-title">
            {t('Education')}{' '}
            <span className="item-count">({education.length})</span>
          </h2>
        </header>

        <section id="education">
          {education.map(function (edu, index) {
            var _a;
            return (<section className="education-item" key={index}>
              <header className="clear">
                <div className="date">
                  {edu.startDate && (<span className="startDate">
                      {formatDate(edu.startDate)}
                    </span>)}
                  {edu.endDate ? (<span className="endDate">
                      {' '}
                      - {formatDate(edu.endDate)}
                    </span>) : (<span className="endDate"> - Current</span>)}
                </div>
                <div className="header-left">
                  {edu.studyType && (<div className="studyType">{edu.studyType}</div>)}
                  {edu.area && (<div className="area">
                      {'\u00A0'}
                      {edu.area}
                    </div>)}
                  {edu.institution && (<div className="institution">{edu.institution}</div>)}
                </div>
              </header>

              {((_a = edu.courses) === null || _a === void 0 ? void 0 : _a.length) && (<ul className="courses">
                  {edu.courses.map(function (course, i) { return (<li key={i}>{course}</li>); })}
                </ul>)}

              <div className="item">
                {edu.score && (<div className="gpa">
                    <strong> Grade:</strong> <span>{edu.score}</span>
                  </div>)}
              </div>
            </section>);
        })}
        </section>
      </section>);
});
