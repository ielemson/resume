import {
  FETCH_BLOG_REQUEST,
  FETCH_BLOG_SUCCESS,
  FETCH_BLOG_FAILURE
} from "./blogTypes";

const initialState = {
  loading: false,
  blogItems: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        blogItems: action.payload,
        error: "",
      };
    case FETCH_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        blogItems: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
