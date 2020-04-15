import {
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAILURE,
    UPLOAD_AVATAR_REQUEST,
    UPLOAD_AVATAR_SUCCESS,
    UPLOAD_AVATAR_FAILURE,
} from "../actions/constants";

const initialState = {
    gettingUser: false,
    userData: {},
    uploadingAvatar: false,
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
        case UPLOAD_AVATAR_REQUEST:
            return {
                ...state,
                uploadingAvatar: true,
            };
        case UPLOAD_AVATAR_SUCCESS:
            return {
                ...state,
                uploadingAvatar: false,
                userData: { ...state.userData, avatar: action.payload },
            };
        case UPLOAD_AVATAR_FAILURE:
            return {
                ...state,
                gettingUser: false,
            };
        default:
            return state;
    }
}
