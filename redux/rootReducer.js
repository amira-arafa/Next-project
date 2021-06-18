import { combineReducers } from "redux";
import login from "./login/reducer";
import  users  from "./usersList/reducer";


export default combineReducers({
    login,
    users
  });