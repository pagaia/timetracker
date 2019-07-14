import { combineReducers } from "redux";
import { reducer as mainReducer } from "../mainApp/index";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  mainReducer,
  form: formReducer
});
