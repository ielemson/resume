import { combineReducers } from "redux";
import educationReducer from "./education/educationReducer";
import experienceReducer from "./experience/experienceReducer";
import blogReducer from "./blog/blogReducer"
import portfolioReducer from "./portofolio/PortfolioReducer"
const rootReducer = combineReducers({
  education: educationReducer,
  experience: experienceReducer,
  blog: blogReducer,
  portfolio: portfolioReducer
});
export default rootReducer;
