import {combineReducers} from "redux";
import authReducer from "./authReducer";
import clickReducer from "./clickReducer";

export default combineReducers({
    auth: authReducer,
    click: clickReducer
});