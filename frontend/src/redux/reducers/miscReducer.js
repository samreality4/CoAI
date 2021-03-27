import { SET_SIDEBAR_STATE } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case SET_SIDEBAR_STATE:
      return action.payload;
    default:
      return state;
  }
}
