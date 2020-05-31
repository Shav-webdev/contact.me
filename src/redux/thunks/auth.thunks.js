import api from "../../services/axiosEndpoints";
import { queryMessages, messageType } from "../../utils/constants";
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
    signUpRequest,
    signUpFailure,
    signUpMessage,
} from "../actions";
import history from "../../routes/history";

const { login, register } = api;
const { userCreated } = queryMessages;
const { errType, successType } = messageType;

export const userRegisterThunk = data => async dispatch => {
    try {
        dispatch(signUpRequest());
        const response = await register.post(data);
        if (response.status !== 201) {
            throw new Error(response.data.message);
        }
        dispatch(
            signUpMessage({
                msg: userCreated,
                messageType: successType,
            })
        );
        setTimeout(() => {
            dispatch(signUpFailure());
            history.push("/");
        }, 4000);
    } catch (error) {
        console.log("error in catch", error);
        dispatch(signUpFailure());
        if (error.response && error.response.data) {
            console.log(error.response);
            dispatch(
                signUpMessage({
                    msg: error.response.data.message,
                    messageType: errType,
                })
            );
        }
    }
};

export const userLoginThunk = data => async dispatch => {
    try {
        dispatch(authRequest());
        const response = await login.post(data);
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
        dispatch(authFailure());
        if (
            error.response &&
            error.response.data &&
            error.response.data.message
        ) {
            console.log(error.response);
            dispatch(
                authFailureMessage({
                    msg: error.response.data.message,
                    authMessageType: "error",
                })
            );
            setTimeout(() => dispatch(hideAuthMessage()), 4000);
        } else if (error.message) {
            dispatch(
                authFailureMessage({
                    msg: error.message,
                    authMessageType: "error",
                })
            );
            setTimeout(() => dispatch(hideAuthMessage()), 4000);
        } else {
            dispatch(
                authFailureMessage({
                    msg: queryMessages.errorWentWrong,
                    authMessageType: "error",
                })
            );
            setTimeout(() => dispatch(hideAuthMessage()), 4000);
        }
    }
};

export const autoLoginThunk = () => dispatch => {
    try {
        const auth = JSON.parse(localStorage.getItem("auth"));
        if (auth) {
            if (!auth.token) {
                authLogoutThunk();
            } else {
                const expirationDate = new Date(auth.expiresIn).getTime();
                if (expirationDate <= new Date().getTime()) {
                    authLogoutThunk();
                } else {
                    dispatch(authSuccess(auth.token));
                    dispatch(signInSuccess(auth));
                    autoLogOutThunk(
                        expirationDate - new Date().getTime() / 1000
                    );
                }
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
