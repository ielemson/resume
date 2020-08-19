import axios from "axios";
import {
  FETCH_PORTFOLIO_REQUEST,
  FETCH_PORTFOLIO_SUCCESS,
  FETCH_PORTFOLIO_FAILURE,
} from "./PortfolioTypes";
const API_URL = "../utils/portfolio.json";
export const fetchPortfolio = () => {
  return (dispatch) => {
    dispatch(fetchPortfolioRequest());
    axios
      .get(`${API_URL}`)
      .then((response) => {
        // response.data is the users
        const portfolioItems = response.data.portfolios;
        dispatch(fetchPortfolioSuccess(portfolioItems));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(fetchPortfolioFailure(errormsg));
      });
  };
};

export const fetchPortfolioRequest = () => {
  return {
    type: FETCH_PORTFOLIO_REQUEST,
  };
};

export const fetchPortfolioSuccess = (portfolioItems) => {
  return {
    type: FETCH_PORTFOLIO_SUCCESS,
    payload: portfolioItems,
  };
};

export const fetchPortfolioFailure = (error) => {
  return {
    type: FETCH_PORTFOLIO_FAILURE,
    payload: error,
  };
};
