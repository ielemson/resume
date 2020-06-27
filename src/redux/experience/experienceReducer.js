import {
  FETCH_EXPERIENCE_REQUEST,
  FETCH_EXPERIENCE_SUCCESS,
  FETCH_EXPERIENCE_FAILURE
} from "./experienceTypes";

const initialState = {
  loading: false,
  experienceObj: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EXPERIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        experienceObj: action.payload,
        error: "",
      };
    case FETCH_EXPERIENCE_FAILURE:
      return {
        ...state,
        loading: false,
        experienceObj: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
