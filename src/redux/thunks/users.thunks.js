import api from "../../services/axiosEndpoints";
import {
    getUserByIdFailure,
    getUserByIdRequest,
    getUserByIdSuccess,
} from "../actions/users.actions";

export const getUserThunk = id => async dispatch => {
    try {
        dispatch(getUserByIdRequest());
        const response = await api.getUserById(id).get();
        if (response.status !== 200) {
            throw new Error(response.data.message);
        }
        dispatch(getUserByIdSuccess(response.data.user));
    } catch (e) {
        console.log(e);
        dispatch(getUserByIdFailure());
    }
};
