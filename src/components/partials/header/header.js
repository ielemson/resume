import React from "react";
import { NavLink } from "react-router-dom";
const header = () => {
  return (
    <header>
      <button className="btn btn-white btn-share ml-auto mr-3 ml-md-0 mr-md-auto">
        <img src="assets/images/share.svg" alt="share" className="btn-img" />
        SHARE
      </button>
      <nav className="collapsible-nav" id="collapsible-nav">
        <NavLink to="/" className="nav-link" exact={true}>
          HOME
        </NavLink>
        {/* <a href="resume.html" className="nav-link">
          RESUME
        </a> */}
        <NavLink to="/portfolio" className="nav-link" exact={true}>
          PORTFOLIO
        </NavLink>
        <NavLink to="/blogs" className="nav-link" exact={true}>
          BLOG
        </NavLink>
        <NavLink to="/contact" className="nav-link" exact={true}>
          CONTACT
        </NavLink>
      </nav>
      <button
        className="btn btn-menu-toggle btn-white rounded-circle"
        data-toggle="collapsible-nav"
        data-target="collapsible-nav"
      >
        <img src="assets/images/hamburger.svg" alt="hamburger" />
      </button>
    </header>
  );
};

export default header;
