import { REGISTER_USER } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return action.payload;
        default: 
        return state;
    }
}


