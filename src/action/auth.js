import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "./types";

import AuthApi from "../services/authAPI";

export const login = (credentials) => (dispatch) => {
  return AuthApi.loginService(credentials)
    .then((response) => {
      dispatch({
        type: CLEAR_MESSAGE,
      });

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user: response.data["hydra:member"][0],
          token: response.token,
        },
      });

      return Promise.resolve();
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: {
          message: "Your password or email-address seems to be wrong",
        },
      });

      return Promise.reject();
    });
};

export const registerUser = (credentials) => (dispatch) => {
  return AuthApi.registerService(credentials)
    .then((response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: { message: "You must activet your Account from Your Email" },
      });

      return Promise.resolve();
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_FAIL,
      });

      if (error.response.data.violations) {
        dispatch({
          type: SET_MESSAGE,
          payload: {
            violations: error.response.data.violations,
            message: "email are already exists",
          },
        });
      } else {
        dispatch({
          type: SET_MESSAGE,
          payload: {
            message: "impossible to make an account please retry your request",
          },
        });
      }

      return Promise.reject();
    });
};
