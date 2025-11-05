"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interests = void 0;
var react_i18next_1 = require("react-i18next");
exports.Interests = (0, react_i18next_1.withTranslation)()(function (_a) {
    var interests = _a.interests, t = _a.t;
    if (!interests.length) {
        return null;
    }
    return (<section className="section">
        <header>
          <h2 className="section-title">{t('Interests')}</h2>
        </header>
        <section id="interests">
          {interests.map(function (interest, index) {
            var _a;
            return (<div key={index} className="item">
              {interest.name && <h3 className="name">{interest.name}</h3>}
              {((_a = interest.keywords) === null || _a === void 0 ? void 0 : _a.length) && (<ul className="keywords">
                  {interest.keywords.map(function (keyword, i) { return (<li key={i}>{keyword}</li>); })}
                </ul>)}
            </div>);
        })}
        </section>
      </section>);
});
