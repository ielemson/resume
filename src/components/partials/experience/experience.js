import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchExperience } from "../../../redux/experience";
import PuffLoader from "react-spinners/PuffLoader";

const Experience = ({ experienceData, fetchExperience }) => {
  useEffect(() => {
    fetchExperience();
  }, [fetchExperience]);
  return experienceData.loading ? (
    <div className="sweet-loading">
      <PuffLoader
        size={60}
        color={"#123abc"}
        loading={experienceData.loading}
      />
      Please Wait...
    </div>
  ) : experienceData.error ? (
    <h2>{experienceData.error}</h2>
  ) : (
    <Fragment>
      {experienceData.experienceObj.map((experience) => (
        <li className="time-line-item" key={experience.id}>
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
