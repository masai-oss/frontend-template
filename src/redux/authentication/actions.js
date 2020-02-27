import { LOGIN_USER_REQUEST,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAILURE,
          } from "./actionTypes";

export const loginUser = () => ({
  type: LOGIN_USER
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});
