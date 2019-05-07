import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import alertsReducer from "./alertsReducer"
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  alerts: alertsReducer
});