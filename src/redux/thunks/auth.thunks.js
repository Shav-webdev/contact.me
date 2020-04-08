import api from "../../services/axiosEndpoints";
import {
    signOutRequest,
    signOutSuccess,
    authSuccess,
    authFailure,
    authRequest,
    authSuccessMessage,
    authFailureMessage,
    hideAuthMessage,
    signInSuccess,
} from "../actions";
import history from "../../routes/history";

export const userLoginThunk = data => async dispatch => {
    try {
        dispatch(authRequest());
        const response = await api.login.post(data);
        if (response.status !== 200) {
            throw new Error(response.data.message);
        }
        dispatch(
            authSuccessMessage({
                msg: response.data.message,
                authMessageType: "success",
            })
        );
        const responseAuth = response.data.auth;
        const expiresIn = new Date(
            new Date().getTime() + responseAuth.expiresIn * 1000
        );
        const authLS = {
            ...responseAuth,
            expiresIn,
        };

        localStorage.setItem("auth", JSON.stringify(authLS));
        dispatch(authSuccess(responseAuth.token));
        dispatch(signInSuccess(response.data.auth));
        dispatch(autoLogOutThunk(responseAuth.expiresIn));
        setTimeout(() => dispatch(hideAuthMessage()), 4000);
    } catch (error) {
        console.log("error in catch", error);
        dispatch(authFailure());
        if (error.response) {
            console.log(error.response);
            dispatch(
                authFailureMessage({
                    msg: error.response.data.message,
                    authMessageType: "error",
                })
            );
            setTimeout(() => dispatch(hideAuthMessage()), 4000);
        }
    }
};

export const autoLogin = () => dispatch => {
    try {
        const auth = JSON.parse(localStorage.getItem("auth"));
        console.log(auth);
        if (!auth.token) {
            dispatch(authLogoutThunk());
        } else {
            const expirationDate = new Date(auth.expiresIn).getTime();
            if (expirationDate <= new Date().getTime()) {
                dispatch(authLogoutThunk());
            } else {
                authSuccess(auth.token);
                autoLogOutThunk(
                    expirationDate.getTime() - new Date().getTime() / 1000
                );
            }
        }
    } catch (e) {
        console.log(e);
    }
};

export const autoLogOutThunk = time => dispatch => {
    setTimeout(() => dispatch(authLogoutThunk()), time * 1000);
};

export const authLogoutThunk = () => dispatch => {
    dispatch(signOutRequest());
    localStorage.removeItem("auth");
    dispatch(signOutSuccess());
    history.push("/");
};
