import { combineReducers } from "redux";
import usersReducer from "./users.reducers";
import authReducer from "./auth.reducers";
import coursesReducer from "./course.reducrs";

export default combineReducers({
    users: usersReducer,
    auth: authReducer,
    courses: coursesReducer,
});
