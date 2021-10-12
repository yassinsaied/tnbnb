import { SET_MESSAGE, CLEAR_MESSAGE } from "../action/types";

const initialState = {
  message: null,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };

    default:
      break;
  }

  return state;
};

export default messageReducer;
