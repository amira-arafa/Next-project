import { createStore , compose , applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
const middlewares = [thunk];
const composeEnhancers = compose;
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
