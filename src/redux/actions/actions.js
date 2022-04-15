import { actionTypes } from "../constants/action_type";



export const login = (username, password) => {

    return (dispatch) => {
        dispatch({
            type: actionTypes.LOG_IN,
            payload: username
        })
    }
}

export const logout = (username) => {

    return (dispatch) => {
        dispatch({
            type: actionTypes.LOG_OUT,
            payload: username
        })
    }
}

