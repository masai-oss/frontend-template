import { LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,     
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE
} from "./actionTypes";
import axios from "../../utils/axiosInterceptor"

export const loginUserRequest = () => ({
  type: LOGIN_USER
});

export const loginUserSuccess = () => ({
  type: LOGIN_USER
});

export const loginUserFailure = () => ({
  type: LOGIN_USER
});


export const loginUser = payload => {
  return dispatch => {
    dispatch(loginUserRequest());
    return axios
      .post("/login", {
        email: payload.email,
        password: payload.password
      })
      .then(res => {
        dispatch(loginUserSuccess(res.data));
      })
      .catch(() => dispatch(loginUserFail()));
  };
};

export const logoutUserRequest = () => ({
  type: LOGOUT_USER
});

export const logoutUserSuccess = () => ({
  type: LOGOUT_USER
});

export const logoutUserFailure = () => ({
  type: LOGOUT_USER
});

export const logoutUser = payload => {
  return dispatch => {
    dispatch(logoutUserRequest());
    return axios
      .post(
        "/logout",
        {},
        {
          headers: {
            Authorization: payload.token
          }
        }
      )
      .then(res => {
        dispatch(logoutUserSuccess(res));
      })
      .catch((err) => dispatch(logoutUserFail(err.message)));
  };
};