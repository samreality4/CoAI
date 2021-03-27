import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer";
import miscReducer from "./miscReducer";

export default combineReducers({
  auth: authReducer,
  data: dataReducer,
  misc: miscReducer,
});
