import * as types from "./types";

export default (state = { usersList: null , singleUser: null }, action) => {
  switch (action.type) {
    case types.STORE_USERS_LIST_DATA:
      return { ...state, usersList: action.payload };
    case types.STORE_SINGLE_USER_DATA:
      return { ...state, singleUser: action.payload };
    default:
      return state;
  }
};
