import { actionTypes } from "../constants/action_type";



export const setLogin = (username, password) => {

    return {
        username,
        password
    }
}

export const setLogout = (username) => {

    return {
        username
    }
}

