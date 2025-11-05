"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resume = void 0;
var react_1 = require("react");
var Basics_1 = require("./Basics");
var Volunteer_1 = require("./Volunteer");
var Education_1 = require("./Education");
var Awards_1 = require("./Awards");
var Certificates_1 = require("./Certificates");
var Interests_1 = require("./Interests");
var Languages_1 = require("./Languages");
var Projects_1 = require("./Projects");
var Publications_1 = require("./Publications");
var References_1 = require("./References");
var Skills_1 = require("./Skills");
var Work_1 = require("./Work");
var Resume = function (resume) { return (<div id="resume">
    <Basics_1.Basics {...resume.basics}/>
    {resume.skills && <Skills_1.Skills skills={resume.skills}/>}
    {resume.work && <Work_1.Work work={resume.work}/>}
    {resume.projects && <Projects_1.Projects projects={resume.projects}/>}
    {resume.volunteer && <Volunteer_1.Volunteer volunteer={resume.volunteer}/>}
    {resume.education && <Education_1.Education education={resume.education}/>}
    {resume.awards && <Awards_1.Awards awards={resume.awards}/>}
    {resume.certificates && <Certificates_1.Certificates certificates={resume.certificates}/>}
    {resume.publications && <Publications_1.Publications publications={resume.publications}/>}
    {resume.languages && <Languages_1.Languages languages={resume.languages}/>}
    {resume.interests && <Interests_1.Interests interests={resume.interests}/>}
    {resume.references && <References_1.References references={resume.references}/>}
  </div>); };
exports.Resume = Resume;
