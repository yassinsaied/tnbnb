import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  UPDATE_USER
} from "../action/types";

const initialState = {
  currentUser: {},
  logged: false,
  registred: false,
};

const loginRegisterReducer = (state = initialState, action) => {

  

  switch (action.type) {

    case LOGIN_SUCCESS :
     
      return {
        ...state,
        currentUser: action.payload.user,
        logged: !state.logged,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        registred: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: {},
        registred: true,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        registred: false,
      };

      case UPDATE_USER:
        return {
          ...state,
          currentUser: action.payload.user,
        };

    default:
      return state;
  }
};

export default loginRegisterReducer;
