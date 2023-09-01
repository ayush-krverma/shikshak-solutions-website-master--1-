import { combineReducers } from "redux";
import { cartReducer } from "./reducers/shopReducer";
import auth from "./reducers/auth";
import message from "./reducers/message";
import {productReducer}from "./reducers/productReducer";




const rootReducer = combineReducers({
    cartReducer,
    auth,
    productReducer,
    message
});


export default rootReducer
