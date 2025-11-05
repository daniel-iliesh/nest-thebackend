"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skills = void 0;
var react_i18next_1 = require("react-i18next");
exports.Skills = (0, react_i18next_1.withTranslation)()(function (_a) {
    var skills = _a.skills, t = _a.t;
    return skills.length > 0 ? (<section className="section">
        <header>
          <h2 className="section-title">{t('Skills')}</h2>
        </header>
        <section id="skills">
          {skills.map(function (skill, index) {
            var _a;
            return (<div className="item" key={index}>
              {skill.name && <h3 className="name">{skill.name}</h3>}
              {skill.level && (<div className={"level ".concat(skill.level.toLowerCase())}>
                  <em>{skill.level}</em>
                  <div className="bar"></div>
                </div>)}
              {((_a = skill.keywords) === null || _a === void 0 ? void 0 : _a.length) && (<ul className="keywords">
                  {skill.keywords.map(function (keyword, index) { return (<li key={index}>{keyword}</li>); })}
                </ul>)}
            </div>);
        })}
        </section>
      </section>) : null;
});
