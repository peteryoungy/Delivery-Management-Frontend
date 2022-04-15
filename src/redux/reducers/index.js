import { combineReducers } from "redux";
import * as reducers from "./reducers";

const reducer = combineReducers({
  log: reducers.logReducers,
});

export default reducer;
