import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

// const fileName = "./elemson-ifeanyi-cv.pdf";
const aside = (props) => {
  return (
    <aside>
      <div className="profile-img-wrapper">
        <img src="assets/images/profile/Profile.png" alt="profile" />
      </div>
      <h1 className="profile-name">Elemson Ifeanyi</h1>
      <div className="text-center">
        <span className="badge badge-white badge-pill profile-designation">
          FRONT END DEVELOPER
        </span>
      </div>
      <nav className="social-links">
        <a href="https://facebook.com/ielemson" className="social-link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#!" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#!" className="social-link">
          <i className="fab fa-behance"></i>
        </a>
        <a href="#!" className="social-link">
          <i className="fab fa-dribbble"></i>
        </a>
        <a href="https://github.com/ielemson" className="social-link">
          <i className="fab fa-github"></i>
        </a>
      </nav>
      <div className="widget">
        <h5 className="widget-title">personal information</h5>
        <div className="widget-content">
          <p>BIRTHDAY : 07 July</p>
          {/* <p>
            WEBSITE : <a href="/">elemson.netlify.app</a>
          </p> */}
          <p>PHONE : +234 8067407355</p>
          <p>
            MAIL : <a href="mailto:ielemson@gmail.com">ielemson@gmail.com</a>
          </p>
          <p>Location : Lagos Nigeria</p>

          <a
            href="https://drive.google.com/file/d/1m4CXwRaGo6qd0s7SfyyexLwnYzYuWTrv/view?usp=sharing"
            className="btn btn-download-cv btn-primary rounded-pill"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              src="assets/images/download.svg"
              alt="download"
              className="btn-img"
            />
            DOWNLOAD CV{" "}
          </a>
        </div>
      </div>
      <div className="widget card">
        <div className="card-body">
          <div className="widget-content">
            <h5 className="widget-title card-title">LANGUAGES</h5>
            <p>Igbo : native</p>
            <p>English : fluent</p>
            <p>Yoruba : good</p>
          </div>
        </div>
      </div>
      <div className="widget card">
        <div className="card-body">
          <div className="widget-content">
            <h5 className="widget-title card-title">INTERESTS</h5>
            <p>Video games</p>
            <p>Finance</p>
            <p>Basketball</p>
            <p>Movies</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default aside;
