import api from "../../services/axiosEndpoints";
import {
    createMessageRequest,
    createMessageSuccess,
    deleteMessageRequest,
    deleteMessageSuccess,
    getMessageByRoomIdRequest,
    getMessageByRoomIdSuccess,
    hideRequestMessage,
    showRequestMessage,
} from "../actions";
import { queryMessages } from "../../utils/constants";

export const createMessageThunk = message => async dispatch => {
    try {
        dispatch(createMessageRequest());
        const response = await api.newMessage.post(message);
        if (response.status !== 201) {
            throw new Error(response.data.message);
        }
        dispatch(
            showRequestMessage({
                msg: response.data.message,
                msgType: "success",
            })
        );
        dispatch(createMessageSuccess(response.data.message));
        dispatch(getMessagesByRoomIdThunk(message.roomId));
        setTimeout(() => dispatch(hideRequestMessage()), 4000);
    } catch (error) {
        console.log("catch err", error);
        if (error?.response?.data?.message) {
            console.log(error.response);
            dispatch(
                showRequestMessage({
                    msg: error.response.data.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else if (error.message) {
            dispatch(
                showRequestMessage({
                    msg: error.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else {
            dispatch(
                showRequestMessage({
                    msg: queryMessages.errorWentWrong,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        }
    }
};

export const deleteMessageThunk = message => async dispatch => {
    try {
        dispatch(deleteMessageRequest());
        const response = await api
            .deleteMessage(message.id)
            .delete({ ...message });
        if (response.status !== 200) {
            throw new Error(response.data.message);
        }
        dispatch(deleteMessageSuccess(response.data.message));
    } catch (error) {
        console.log(error);
        if (error?.response?.data?.message) {
            console.log(error.response);
            dispatch(
                showRequestMessage({
                    msg: error.response.data.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else if (error.message) {
            dispatch(
                showRequestMessage({
                    msg: error.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else {
            dispatch(
                showRequestMessage({
                    msg: queryMessages.errorWentWrong,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        }
    }
};

export const getMessagesByRoomIdThunk = roomId => async dispatch => {
    try {
        dispatch(getMessageByRoomIdRequest());
        const response = await api.getMessageByRoomId(roomId).get();
        if (response.status !== 200) {
            throw new Error(response.data.message);
        }
        dispatch(getMessageByRoomIdSuccess(response.data));
    } catch (error) {
        console.log(error);
        if (error?.response?.data?.message) {
            console.log(error.response);
            dispatch(
                showRequestMessage({
                    msg: error.response.data.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else if (error.message) {
            dispatch(
                showRequestMessage({
                    msg: error.message,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        } else {
            dispatch(
                showRequestMessage({
                    msg: queryMessages.errorWentWrong,
                    msgType: "error",
                })
            );
            setTimeout(() => dispatch(hideRequestMessage()), 4000);
        }
    }
};
