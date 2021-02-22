import * as TYPES from "../types";

const initState = {
  username: "",
  role: 2,
  userId: 0,
  github: null,
};

export default function UserReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case TYPES.USER_LOGIN:
      return { ...state };
    case TYPES.USER_REGISTER:
      return { ...state };
    case TYPES.USER_LOGIN_OUT:
      return { ...state };
    default:
      return state;
  }
}
