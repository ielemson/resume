import {
  FETCH_PORTFOLIO_REQUEST,
  FETCH_PORTFOLIO_SUCCESS,
  FETCH_PORTFOLIO_FAILURE
} from "./PortfolioTypes";

const initialState = {
  loading: false,
  portfolioItems: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        portfolioItems: action.payload,
        error: "",
      };
    case FETCH_PORTFOLIO_FAILURE:
      return {
        ...state,
        loading: false,
        portfolioItems: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
