import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
// import favoritesReducer from "./reducers/favorites";
import loggedInReducer from "./reducers/users";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  users: {
    username: "",
    isLoggedIn: false,
    error: false,
    isLoading: false,
  },
  //   favorites: {
  //     project: [],
  //   },
};
const allReducers = combineReducers({
  users: loggedInReducer,
  //   favorites: favoritesReducer,
});

const configureStore = () => createStore(allReducers, initialState, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
