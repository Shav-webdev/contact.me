import { combineReducers } from "redux";
import usersReducer from "./users.reducers";
import authReducer from "./auth.reducers";

export default combineReducers({
    users: usersReducer,
    auth: authReducer,
});
