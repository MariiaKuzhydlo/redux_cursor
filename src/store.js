import { combineReducers } from "redux";
import { createStore } from "redux";
import postsReducer from "./redux/reducer";

const reducer = combineReducers({ postsReducer })
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;