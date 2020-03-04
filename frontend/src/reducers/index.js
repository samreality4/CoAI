import {combineReducers} from "redux";
import logInReducer from "./logInReducer";
import registerReducer from "./registerReducer"
import dataReducer from "./dataReducer";

export default combineReducers({
    login: logInReducer,
    register: registerReducer,
    data: dataReducer

});