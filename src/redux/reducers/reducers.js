import { combineReducers } from "redux";
import { userReducer } from "./userReducers";
import { loginStatusReducer } from "./LoginStatusReducers";
export default combineReducers ({
    user: userReducer, 
    loginStatus: loginStatusReducer, 
})
