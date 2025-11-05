"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
var dateHelpers_1 = require("./dateHelpers");
var react_i18next_1 = require("react-i18next");
exports.Projects = (0, react_i18next_1.withTranslation)()(function (_a) {
    var projects = _a.projects, t = _a.t;
    return (<>
      {projects.length > 0 && (<section className="section">
          <header>
            <h2 className="section-title">
              {t('Projects')}{' '}
              <span className="item-count">({projects.length})</span>
            </h2>
          </header>
          <section id="projects">
            {projects.map(function (project, index) {
                var _a, _b;
                return (<section className="project-item" key={index}>
                {project.description && (<label htmlFor={"project-item-".concat(index)}></label>)}
                {project.name && (<header className="clear">
                    {project.name && (<div className="position">{project.name}</div>)}
                    {project.startDate && (<div className="date">
                        <span className="startDate">
                          {(0, dateHelpers_1.MY)(project.startDate)}
                          {'\u00A0'}
                        </span>
                        {project.endDate ? (<span className="endDate">
                            - {(0, dateHelpers_1.MY)(project.endDate)}
                          </span>) : (<span className="endDate">- Current</span>)}
                      </div>)}
                  </header>)}

                {project.url && (<span className="website">
                    <span className="fas fa-external-link-alt"></span>
                    <a target="_blank" href={project.url} rel="noreferrer">
                      {'\u00A0'}
                      {project.url}
                    </a>
                  </span>)}
                {((_a = project.keywords) === null || _a === void 0 ? void 0 : _a.length) && (<ul className="keywords">
                    {project.keywords.map(function (keyword, index) { return (<li key={index}>{keyword}</li>); })}
                  </ul>)}
                <div className="item">
                  {project.description && (<div className="summary">{project.description}</div>)}
                  {((_b = project.highlights) === null || _b === void 0 ? void 0 : _b.length) && (<ul className="highlights">
                      {project.highlights.map(function (highlight, index) { return (<li key={index}>{highlight}</li>); })}
                    </ul>)}
                </div>
              </section>);
            })}
          </section>
        </section>)}
    </>);
});
