import axios from "axios";
import {
  FETCH_EDUCATION_REQUEST,
  FETCH_EDUCATION_SUCCESS,
  FETCH_EDUCATION_FAILURE,
} from "./educationTypes";
const API_URL = `${process.env.PUBLIC_URL}/utils/education.json`;
export const fetchEducation = () => {
  return (dispatch) => {
    dispatch(fetchEducationRequest());
    axios
      .get(`${API_URL}`)
      .then((response) => {
        // response.data is the users
        const eductionItems = response.data.education;
        dispatch(fetchEducationSuccess(eductionItems));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(fetchEducationFailure(errormsg));
      });
  };
};

export const fetchEducationRequest = () => {
  return {
    type: FETCH_EDUCATION_REQUEST,
  };
};

export const fetchEducationSuccess = (eductionItems) => {
  return {
    type: FETCH_EDUCATION_SUCCESS,
    payload: eductionItems,
  };
};

export const fetchEducationFailure = (error) => {
  return {
    type: FETCH_EDUCATION_FAILURE,
    payload: error,
  };
};
