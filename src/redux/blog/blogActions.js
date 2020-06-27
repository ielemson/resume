import axios from "axios";
import {
  FETCH_BLOG_REQUEST,
  FETCH_BLOG_SUCCESS,
  FETCH_BLOG_FAILURE,
} from "./blogTypes";
const API_URL = `${process.env.PUBLIC_URL}/utils/blogs.json`;
export const fetchBlog = () => {
  return (dispatch) => {
    dispatch(fetchBlogRequest());
    axios
      .get(`${API_URL}`)
      .then((response) => {
        // response.data is the users
        const blogItems = response.data.blogs;
        dispatch(fetchBlogSuccess(blogItems));
      })
      .catch((error) => {
        // error.message is the error message
        const errormsg = error.message;
        dispatch(fetchBlogFailure(errormsg));
      });
  };
};

export const fetchBlogRequest = () => {
  return {
    type: FETCH_BLOG_REQUEST,
  };
};

export const fetchBlogSuccess = (blogItems) => {
  return {
    type: FETCH_BLOG_SUCCESS,
    payload: blogItems,
  };
};

export const fetchBlogFailure = (error) => {
  return {
    type: FETCH_BLOG_FAILURE,
    payload: error,
  };
};
