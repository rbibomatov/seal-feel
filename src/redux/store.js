import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import appReducer from "./app.reducer";
import profileReducer from "./profile.reducer";
import messagesReducer from "./messages.reducer";
import usersReducer from "./users.reducer";
import authReducer from "./auth.reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  auth: authReducer,
  app: appReducer,
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
