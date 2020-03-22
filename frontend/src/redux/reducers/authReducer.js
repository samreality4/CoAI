import {
  LOGIN_USER,
  REGISTER_USER,
  FETCH_USER,
  LOGOUT_USER
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
    case LOGIN_USER:
    case REGISTER_USER:
    case LOGOUT_USER:
      return action.payload;
    default:
      return state;
  }
}
