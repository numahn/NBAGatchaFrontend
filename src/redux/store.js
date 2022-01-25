import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
