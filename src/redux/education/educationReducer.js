import {
  FETCH_EDUCATION_REQUEST,
  FETCH_EDUCATION_SUCCESS,
  FETCH_EDUCATION_FAILURE,
} from "./educationTypes";

const initialState = {
  loading: false,
  eductionItems: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EDUCATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EDUCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        eductionItems: action.payload,
        error: "",
      };
    case FETCH_EDUCATION_FAILURE:
      return {
        ...state,
        loading: false,
        eductionItems: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
