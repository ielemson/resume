import React from "react";

const Aside = () => {
  return (
    <aside>
      <div className="profile-img-wrapper">
        <img src="assets/images/profile/ifeanyi.jpg" alt="profile" />
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

          <p>PHONE : +234 8067407355</p>
          <p>
            MAIL : <a href="mailto:ielemson@gmail.com">ielemson@gmail.com</a>
          </p>
          <p>Location : Lagos Nigeria</p>

          <a
            href="https://drive.google.com/file/d/1r51Ew70YOGx_fy2FSlH40531lV-j9VDS/view?usp=sharing"
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
      <div className="widget card">
        <div className="card-body">
          <div className="widget-content">
            <h5 className="widget-title card-title">STACK</h5>
            <p>Vanilla Javascript</p>
            <p>React Js</p>
            <p>Node JS</p>
            <p>Express JS</p>
            <p>Mongo DB</p>
            <p>PHP OOP</p>
            <p>Laravel FrameWork</p>
            <p>MySQL</p>
            <p>CSS</p>
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
