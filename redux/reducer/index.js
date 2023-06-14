import { combineReducers } from "redux";
import { contentPayLoad } from "./adedValue/index";
import { contentCheckPayLoad } from "./adedValue/getCheckValue";

const rootReducer = combineReducers({
  contentPayLoad,
  contentCheckPayLoad,
});

export default rootReducer;
