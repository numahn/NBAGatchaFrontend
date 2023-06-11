import { combineReducers } from "redux";
import { userReducer } from "./userReducers";
export const rootReducer = combineReducers({ user: userReducer });