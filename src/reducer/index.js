import todoReducers from "./TodoReducer";
import { combineReducers } from "redux";


const rootReduser = combineReducers({
    todoReducers
})

// console.log("jsdlafsdlf ", todoReducers)

export default rootReduser