import { LOGIN_USER_REQUEST, LOGOUT_USER_R, LOGOUT_USER_REQUEST } from "./actionTypes";

const initState = {
  isAuth: true
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { isAuth: true };
    case LOGOUT_USER_REQUEST:
      return { isAuth: false };

    default:
      return state;
  }
};

export default reducer;
