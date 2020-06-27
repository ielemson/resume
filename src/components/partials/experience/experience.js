import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchExperience } from "../../../redux/experience";

const Experience = ({ experienceData, fetchExperience }) => {
  useEffect(() => {
    fetchExperience();
  }, [fetchExperience]);
  return experienceData.loading ? (
    <h2>Loading</h2>
  ) : experienceData.error ? (
    <h2>{experienceData.error}</h2>
  ) : (
        <Fragment>
          {experienceData.experienceObj.map((experience) => (
            <li className="time-line-item">
              <span className="badge badge-primary">{experience.year}</span>
              <h6 className="time-line-item-title">{experience.company}</h6>
              <p className="time-line-item-subtitle">{experience.jobtitle}</p>
              <p className="time-line-item-content">{experience.jobdesc}</p>
            </li>
          ))}
          {/* {console.log(experienceData)} */}
        </Fragment>
      );
};

const mapStateToProps = (state) => {
  return {
    experienceData: state.experience,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchExperience: () => dispatch(fetchExperience()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Experience);
