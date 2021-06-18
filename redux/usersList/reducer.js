import * as types from "./types";

export default (state = { usersList: null}, action) => {
  switch (action.type) {
    case types.STORE_USERS_LIST_DATA:
      return { ...state, usersList: action.payload };
    default:
      return state;
  }
};
