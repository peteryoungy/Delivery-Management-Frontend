import { actionTypes } from "../constants/action_type";

const initialState = {
  isLoggedIn: false,
};

// note define some reducers
export const logReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOG_IN:
      return { ...state, isLoggedIn: true };
    case actionTypes.LOG_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
