import axios from "axios";
// const api_url  "";
import {
  FETCH_EXPERIENCE_REQUEST,
  FETCH_EXPERIENCE_SUCCESS,
  FETCH_EXPERIENCE_FAILURE,
} from "./experienceTypes";

const API_URL = "../utils/experience.json"
export const fetchExperience = () => {
  return (dispatch) => {
    dispatch(fetchExperienceRequest());
    axios
      .get(`${API_URL}`)
      .then((response) => {
        // response.data is the users

        const experienceObj = response.data.experience;
        dispatch(fetchExperienceSuccess(experienceObj));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(fetchExperienceFailure(errormsg));
      });
  };
};

export const fetchExperienceRequest = () => {
  return {
    type: FETCH_EXPERIENCE_REQUEST,
  };
};

export const fetchExperienceSuccess = (experienceObj) => {
  return {
    type: FETCH_EXPERIENCE_SUCCESS,
    payload: experienceObj,
  };
};

export const fetchExperienceFailure = (error) => {
  return {
    type: FETCH_EXPERIENCE_FAILURE,
    payload: error,
  };
};
