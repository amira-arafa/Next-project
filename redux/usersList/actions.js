import * as types from "./types";
import axios from "axios";



export const getUserList = () => async (dispatch) => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users`,
      );
      res && dispatch({
          type : types.STORE_USERS_LIST_DATA ,
          payload: res.data
      })
  };

  export const getUserDetails = (id) => async (dispatch) => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      res && dispatch({
          type : types.STORE_SINGLE_USER_DATA,
          payload: res.data
      })
  };