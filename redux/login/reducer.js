import * as types from "./types";

export default (state = { loginData: process.browser ? localStorage.getItem("user") : null }, action) => {
  switch (action.type) {
    case types.STORE_LOGIN_DATA:
      return { ...state, loginData: action.payload };
    default:
      return state;
  }
};
