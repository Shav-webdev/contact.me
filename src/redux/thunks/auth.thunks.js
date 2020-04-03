import api from "../../services/axiosEndpoints";
import { signInRequest, signInSuccess, signInFailure } from "../actions";
import history from "../../routes/history";

export const userLogin = data => async dispatch => {
    try {
        dispatch(signInRequest());
        const response = await api.login.post(data);
        console.log("response", response);
        if (response.status !== 200) {
            throw new Error(response.data.message);
        }
        // Storage.set("user", {
        //     id: response.data.id,
        //     token: response.headers.authorization,
        //     userType: response.data.type,
        // });
        console.log("response before dispatch", { ...response.data });
        dispatch(signInSuccess({ ...response.data }));
        console.log("Sign In is successful !");
        dispatch(signInFailure());
        history.push("/profile");
    } catch (error) {
        console.log(error);
        dispatch(signInFailure());
        const err = {
            ...error,
        };
        console.log(err);
    }
};

// export const signInAsAdminThunk = data => async dispatch => {
//     try {
//         dispatch(signInCurrentUserRequest());
//         const response = await api.loginAdmin.post(data);
//         console.log(response);
//         if (response.status !== 200) {
//             throw new Error(response.data.message);
//         } else {
//             Storage.set("deliver", {
//                 token: response.headers.authorization,
//                 userType: "admin",
//             });
//             dispatch(
//                 signInCurrentUserSuccess({
//                     ...response.data,
//                     userType: response.data.type,
//                 })
//             );
//             history.push("/admin/dashboard");
//         }
//     } catch (error) {
//         const err = {
//             ...error,
//         };
//         errorMessage(err.response.data.message);
//     }
// };
