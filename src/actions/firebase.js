/* eslint-disable import/prefer-default-export */
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../constants';

export function createUser({ email, password, username }) {
  return (dispatch, getState, helper) => helper.getFirebase().createUser(
      { email, password },
      { username, email },
    ).then((user) => {
      dispatch({
        type: LOGIN_SUCCESS,
        user,
      });
    });
}

export function login(config) {
  return (dispatch, getState, helper) => {
    helper.getFirebase().login(config).then((user) => {
      dispatch({
        type: LOGIN_SUCCESS,
        user,
      });
    });
  };
}

export function logout() {
  return (dispatch, getState, helper) => helper.getFirebase().logout().then(() => {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  });
}
