import { initialState } from "../store";

const loggedInReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case "GET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default loggedInReducer;
