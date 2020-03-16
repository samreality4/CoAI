import { FETCH_DATA, RESET_DATA } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
    case RESET_DATA:
      return action.payload;
    default:
      return state;
  }
}
