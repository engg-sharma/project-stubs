import logger from "redux-logger"
import {createLogger} from "redux-logger";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import mathReducer from "./reducers/mathReducer"
import userReducer from "./reducers/userReducer"


// this arrow function is explained in part 6
const myLooger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    // executing next is important because its provided by redux package
    // if not called next, then our action is not travelling any further
    // its not reaching the reducer, its cancelled or failing
    next(action);
}

// here es6 is automatically doing
// mathReducer : mathReducer
// userReducer : userReducer
// empty javascript is overwritten by default state provided
export default createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLooger, createLogger(), thunk, promise()));
