"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basics = exports.Contact = void 0;
var react_1 = require("react");
var R = require("ramda");
var Location = function (_a) {
    var address = _a.address, postalCode = _a.postalCode, city = _a.city, region = _a.region, countryCode = _a.countryCode;
    return (<span className="location">
    {address && <span className="address">{address}, </span>}
    {postalCode && <span className="postalCode">{postalCode}, </span>}
    {city && <span className="city">{city}, </span>}
    {region && <span className="region">{region} </span>}
    {countryCode && <span className="countryCode">{countryCode}</span>}
  </span>);
};
var Contact = function (_a) {
    var email = _a.email, url = _a.url, phone = _a.phone;
    return (<div id="contact">
    {url && (<div className="website">
        <span className="fas fa-external-link-alt"></span>
        <a className="hide-href-print" target="_blank" href={url} rel="noreferrer">
          {'\u00A0'}
          {url}
        </a>
      </div>)}
    {email && (<div className="email">
        <span className="far fa-envelope"></span>
        <a className="hide-href-print" href={"mailto:".concat(email)}>
          {'\u00A0'}
          {email}
        </a>
      </div>)}
    {phone && (<div className="phone">
        <span className="fas fa-mobile-alt"></span>
        <a className="hide-href-print" href="tel:{{phone}}">
          {'\u00A0'}
          {phone}
        </a>
      </div>)}
  </div>);
};
exports.Contact = Contact;
var Profile = function (_a) {
    var network = _a.network, username = _a.username, url = _a.url;
    return (<div className="item">
    {network && (<div className="username">
        <span className={"fab fa-".concat(R.toLower(network), " ").concat(R.toLower(network), " social")}></span>
        {url ? (<span className="url">
            <a target="_blank" href={url} rel="noreferrer">
              {'\u00A0'}
              {username}
            </a>
          </span>) : (<span>
            {'\u00A0'}
            {username}
          </span>)}
      </div>)}
  </div>);
};
var Basics = function (props) {
    var name = props.name, label = props.label, location = props.location, image = props.image, profiles = props.profiles, summary = props.summary;
    return (<>
      <header id="header" className="clear">
        {image && <img className="image" src={image} alt="{{name}}"/>}
        <div className="middle">
          <h1 className="name">{name}</h1>
          <h2 className="label">{label}</h2>
        </div>
        {location && <Location {...location}/>}
        <exports.Contact {...props}/>
        {profiles && (<div id="profiles">
            {profiles.map(function (profile, index) { return (<Profile {...profile} key={index}/>); })}
          </div>)}
      </header>
      {summary && (<section className="section">
          <section className="main-summary">
            <div>{summary}</div>
          </section>
        </section>)}
    </>);
};
exports.Basics = Basics;
