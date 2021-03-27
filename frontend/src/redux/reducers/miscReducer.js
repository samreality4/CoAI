import { SET_MENUBAR_STATE } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case SET_MENUBAR_STATE:
      return action.payload;
    default:
      return state;
  }
}
