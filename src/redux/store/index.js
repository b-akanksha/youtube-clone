import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducer";

const rootReducer = combineReducers({ youtubeify: reducer });
const middlewares =
  process.env.NODE_ENV === "production" ? [thunk] : [thunk, logger];

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
