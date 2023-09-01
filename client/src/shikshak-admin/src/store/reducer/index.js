import { combineReducers } from "redux";
import {productReducer} from "./productReducer";
import {customerReducer} from "./customerReducer";

const reducer = combineReducers({product:productReducer,customer:customerReducer });

export default reducer;