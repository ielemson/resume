import React, { Fragment } from "react";
import Education from "../education";
import Experience from "../experience";
const section = () => {
  return (
    <Fragment>
      <section className="intro-section">
        <h2 className="section-title">About Me</h2>
        <p>
          I am a creative self-taught front-end web developer with roughly 2
          years’ experience. Currently residing in Lagos, Nigeria. I am
          proficient in JavaScript libraries and frameworks such as React and
          Angular. I have also worked with PHP framework such as Laravel. I am
          knowledgeable with back end technologies like SQL, and NoSQL. I adapt
          well under pressure and learn fast. Consistent with research and
          abreast with recent web technologies. It will be a privilege to
          partner with you in any project you may be working on. Contact me and
          let us share ideas on how to make your ideas a reality.
        </p>
        <a href="mailto:ielemson@gmail.com" className="btn btn-primary btn-hire-me">
          HIRE ME
        </a>
      </section>
      <section className="resume-section">
        <div className="row">
          <div className="col-lg-6">
            {/* <h6 className="section-subtitle">RESUME</h6> */}
            <h2 className="section-title">EDUCATION</h2>
            <ul className="time-line">
              <Education />
            </ul>
          </div>
          <div className="col-lg-6">
            {/* <h6 className="section-subtitle">RESUME</h6> */}

            <h2 className="section-title">Experience</h2>
            <ul className="time-line">
              <Experience />
            </ul>
          </div>
        </div>
      </section>
      <section className="services-section">
        <h6 className="section-subtitle">WHAT I DO</h6>
        <h2 className="section-title">SERVICES</h2>
        <div className="row">
          <div className="media service-card col-lg-6">
            <div className="service-icon">
              <img src="assets/images/001-target.svg" alt="target" />
            </div>
            <div className="media-body">
              <h5 className="service-title">Web designing</h5>
              <p className="service-description">
                I deliver exceptional responsive website for different devices,
                for individuals and coperate body.
              </p>
            </div>
          </div>
          <div className="media service-card col-lg-6">
            <div className="service-icon">
              <img src="assets/images/003-idea.svg" alt="bulb" />
            </div>
            <div className="media-body">
              <h5 className="service-title">Graphic design</h5>
              <p className="service-description">
                I have a team of experienced graphic designers that handle all
                graphics relate projects with exceptional picture quality and a
                touch of excellence.
              </p>
            </div>
          </div>
          <div className="media service-card col-lg-6">
            <div className="service-icon">
              <img src="assets/images/002-development.svg" alt="development" />
            </div>
            <div className="media-body">
              <h5 className="service-title">Development</h5>
              <p className="service-description">
                I have 3years experience in front end web development, using
                modern tools for exceptional result and meeting deadline.
              </p>
            </div>
          </div>
          <div className="media service-card col-lg-6">
            <div className="service-icon">
              <img src="assets/images/004-smartphone.svg" alt="smartphone" />
            </div>
            <div className="media-body">
              <h5 className="service-title">Mobile design</h5>
              <p className="service-description">
                I have a team who specialize in mobile app design using latest
                technologies for exceptional result in mobile app development
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="testimonial-section">
        <div
          id="testimonialCarousel"
          className="testimonial-carousel carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="testimonial-content">
                Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.
              </p>
              <img
                src="assets/images/Profile.png"
                alt="profile"
                className="testimonial-img"
              />
              <p className="testimonial-name">Nout Golstein</p>
            </div>
            <div className="carousel-item">
              <p className="testimonial-content">
                Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.
              </p>
              <img
                src="assets/images/Profile.png"
                alt="profile"
                className="testimonial-img"
              />
              <p className="testimonial-name">Nout Golstein</p>
            </div>
            <div className="carousel-item">
              <p className="testimonial-content">
                Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.
              </p>
              <img
                src="assets/images/Profile.png"
                alt="profile"
                className="testimonial-img"
              />
              <p className="testimonial-name">Nout Golstein</p>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#testimonialCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#testimonialCarousel" data-slide-to="1"></li>
            <li data-target="#testimonialCarousel" data-slide-to="2"></li>
          </ol>
        </div>
      </section> */}
    </Fragment>
  );
};

export default section;
