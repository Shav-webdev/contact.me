import {
    SIGN_IN_SUCCESS,
    SIGN_IN_REQUEST,
    SIGN_IN_FAILURE,
} from "../actions/constants";

const initialState = {
    signing: false,
    showMessage: false,
    currentUserData: {},
};

export default function authReducer(state = initialState, action) {
    console.log("authReducer action.payload ", action.payload);
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {
                ...state,
                signing: true,
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                signing: false,
                currentUserData: action.payload,
                showMessage: true,
            };
        case SIGN_IN_FAILURE:
            return {
                ...state,
                signing: false,
                showMessage: false,
            };
        default:
            return state;
    }
}
