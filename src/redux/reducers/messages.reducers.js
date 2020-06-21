import {
    CREATE_MESSAGE_REQUEST,
    CREATE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_REQUEST,
    DELETE_MESSAGE_SUCCESS,
    GET_MESSAGES_BY_ROOM_ID_REQUEST,
    GET_MESSAGES_BY_ROOM_ID_SUCCESS,
    HIDE_REQUEST_MESSAGE,
    SHOW_REQUEST_MESSAGE,
} from "../actions/constants";

const initialState = {
    creatingMessage: false,
    removingMessage: false,
    gettingMessagesByRoomId: false,
    messagesByRoomId: {},
    requestMessage: "",
    msgType: null,
    showReqMessage: false,
};

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_MESSAGE_REQUEST:
            return {
                ...state,
                creatingMessage: true,
            };
        case CREATE_MESSAGE_SUCCESS:
            return {
                ...state,
                creatingMessage: false,
            };
        case DELETE_MESSAGE_REQUEST:
            return {
                ...state,
                removingMessage: true,
            };
        case DELETE_MESSAGE_SUCCESS:
            return {
                ...state,
                removingMessage: false,
            };

        case GET_MESSAGES_BY_ROOM_ID_REQUEST:
            return {
                ...state,
                gettingUserCourses: true,
            };
        case GET_MESSAGES_BY_ROOM_ID_SUCCESS:
            return {
                ...state,
                gettingUserCourses: false,
                messagesByRoomId: {
                    ...state.messagesByRoomId,
                    ...action.payload,
                },
            };

        case SHOW_REQUEST_MESSAGE:
            return {
                ...state,
                showReqMessage: true,
                requestMessage: action.payload.msg,
                msgType: action.payload.msgType,
            };
        case HIDE_REQUEST_MESSAGE:
            return {
                ...state,
                showReqMessage: false,
                requestMessage: "",
                msgType: null,
            };
        default:
            return state;
    }
}
