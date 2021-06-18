import * as types from "./types";

export const storeLoginData = (payload) => {
    return {
        type : types.STORE_LOGIN_DATA,
        payload
    }
}