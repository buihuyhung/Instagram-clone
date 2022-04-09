import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import theme from "./themeReducer";
import profile from "./profileReducer";
import status from "./statusReducer";
import homePosts from "./postReducer";
import detailPost from "./detailPostReducer";
import modal from "./modalReducer";
import discover from "./discoverReducer";
import suggestions from "./suggestionsReducer";

export default combineReducers({
  auth,
  alert,
  theme,
  profile,
  status,
  homePosts,
  modal,
  detailPost,
  discover,
  suggestions,
});
