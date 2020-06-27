import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchEducation } from "../../../redux/education";
import PuffLoader from "react-spinners/PuffLoader";

const Education = ({ educationData, fetchEducation }) => {
  useEffect(() => {
    fetchEducation();
  }, [fetchEducation]);
  return educationData.loading ? (
    <div className="sweet-loading">
      <PuffLoader
        size={60}
        color={"#123abc"}
        loading={educationData.loading}
      />
      Please Wait...
    </div>
  ) : educationData.error ? (
    <h2>{educationData.error}</h2>
  ) : (
        <Fragment>
          {educationData.eductionItems.map((education) => (
            <li className="time-line-item" key={education.year}>
              <span className="badge badge-primary">{education.year}</span>
              <h6 className="time-line-item-title">{education.school}</h6>
              <p className="time-line-item-subtitle">{education.title}</p>
              <p className="time-line-item-content">{education.location}</p>
            </li>
          ))}

        </Fragment>
      );
};

const mapStateToProps = (state) => {
  return {
    educationData: state.education,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEducation: () => dispatch(fetchEducation()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Education);
