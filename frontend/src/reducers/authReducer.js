import { LOGIN_USER, REGISTER_USER } from "../actions/types";


export default function (state = null, action) {
    switch (action.type) {
        case LOGIN_USER:
            return action.payload;
            //if paylod returns "", it is a false value and thus returns false since both sides are false.
            case REGISTER_USER:
                return action.payload;
        default: 
        return state;
    }

  
}



