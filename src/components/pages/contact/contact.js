import React, { Fragment } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { Formik, Form, Field } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  HeaderPartial,
  AsidePartial,
  // SectionPArtial,
  Footer,
} from "../../partials";

const ContactComponent = () => {
  return (
    <Fragment>
      <HeaderPartial />

      <div className="content-wrapper">
        <AsidePartial />
        <main>
          <main>
            <section className="contact-section">
              <h2 className="section-title">GET IN TOUCH</h2>
              <p className="mb-4">
                If you’d like to talk about a project, our work or anything else
                then get in touch.
              </p>

              <div className="contact-cards-wrapper">
                <div className="contact-card">
                  <h6 className="contact-card-title">Contact Number</h6>
                  <p className="contact-card-content">
                    +234 8067407355 , +234 7086708146
                  </p>
                </div>
                <div className="contact-card">
                  <h6 className="contact-card-title">Email</h6>
                  <p className="contact-card-content">ielemson@gmail.com</p>
                </div>
              </div>
              <Formik
                initialValues={{ email: "", name: "", message: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  if (!values.name) {
                    errors.name = "Required";
                  }
                  if (!values.message) {
                    errors.message = "Required";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setSubmitting(false);
                  emailjs
                    .sendForm(
                      "gmail",
                      "resume",
                      ".contact-form",
                      "user_Rs0pWSqP4rX2SDcnHt86g"
                    )
                    .then(
                      (result) => {
                        toast.success(`Message Sent!`, {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });

                        resetForm();
                      },
                      (error) => {
                        toast.error(`Error,please resend`, {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });
                      }
                    );
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group form-group-name">
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="NAME"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <div className="has-error">
                        {errors.name && touched.email && errors.name}
                      </div>
                    </div>
                    <div className="form-group form-group-email">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="EMAIL"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <div className="has-error">
                        {errors.email && touched.email && errors.email}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        placeholder="MESSAGE"
                        rows="5"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      ></textarea>
                      <div className="has-error">
                        {errors.message && touched.email && errors.message}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary form-submit-btn"
                      disabled={isSubmitting}
                    >
                      SEND MESSAGE
                    </button>
                  </Form>
                )}
              </Formik>
            </section>
            <section className="location-section">
              <h5 className="section-title">MY LOCATION</h5>

              <div className="map-wrapper col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.647688294255!2d3.55067642329362!3d6.463774893670261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7442fc585df%3A0x642eaefe2c2c7ce2!2sAja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1591289335116!5m2!1sen!2sng"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="address"
                  className="responsive-iframe"
                ></iframe>
              </div>
            </section>
          </main>
          <Footer />
          <ToastContainer />
        </main>
      </div>
    </Fragment>
  );
};

export default ContactComponent;
