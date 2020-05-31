import {
    createCourseFailure,
    hideRequestMessage,
    showRequestMessage,
} from "../redux/actions";
import { queryMessages } from "../utils/constants";

export default (error, dispatch) => {
    console.log("catch err", error);
    dispatch(createCourseFailure());
    if (error.response && error.response.data && error.response.data.message) {
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
};
