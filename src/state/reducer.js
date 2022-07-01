import { SET_IS_AUTH, SET_PROFILE, SET_RESET, SET_TOKEN } from "./type";

const ReducerAction = (state, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: action.data,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.data,
      };
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.data,
      };
    case SET_RESET:
      return {
        isAuth: false,
        profile: {},
        token: "",
      };

    default:
      break;
  }
};

export default ReducerAction;
