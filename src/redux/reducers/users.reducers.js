import {
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAILURE,
} from "../actions/constants";

const initialState = {
    gettingUser: false,
    userData: {},
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_BY_ID_REQUEST:
            return {
                ...state,
                gettingUser: true,
            };
        case GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                gettingUser: false,
                userData: { ...action.payload },
            };
        case GET_USER_BY_ID_FAILURE:
            return {
                ...state,
                gettingUser: false,
            };
        default:
            return state;
    }
}
