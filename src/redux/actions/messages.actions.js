import {
    CREATE_MESSAGE_REQUEST,
    CREATE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_REQUEST,
    DELETE_MESSAGE_SUCCESS,
    GET_MESSAGES_BY_ROOM_ID_REQUEST,
    GET_MESSAGES_BY_ROOM_ID_SUCCESS,
} from "./constants";

export const createMessageRequest = () => ({
    type: CREATE_MESSAGE_REQUEST,
});
export const createMessageSuccess = data => ({
    type: CREATE_MESSAGE_SUCCESS,
    payload: data,
});

export const deleteMessageRequest = () => ({
    type: DELETE_MESSAGE_REQUEST,
});
export const deleteMessageSuccess = data => ({
    type: DELETE_MESSAGE_SUCCESS,
    payload: data,
});
export const getMessageByRoomIdRequest = () => ({
    type: GET_MESSAGES_BY_ROOM_ID_REQUEST,
});
export const getMessageByRoomIdSuccess = data => ({
    type: GET_MESSAGES_BY_ROOM_ID_SUCCESS,
    payload: data,
});
