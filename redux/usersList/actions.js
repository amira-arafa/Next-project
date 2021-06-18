import * as types from "./types";
import axios from "axios";



export const getUserList = () => async (dispatch) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users`,
      );
      res && dispatch({
          type : types.STORE_USERS_LIST_DATA ,
          payload: res.data
      })
      
    } catch (err) {
    }
  };