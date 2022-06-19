import { combineReducers,applyMiddleware} from "redux";
// import createStore from "redux";
import thunk from "redux-thunk";
// import { Todoreducers } from "./reducers/TodoReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodoReducers } from "./reducers/TodoReducers";
import { createStore } from "redux";
const reducers = combineReducers({
Todo: TodoReducers ,
});
const initialState = {}
const middleware = [thunk];
const Store = createStore(
    reducers,
    initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default Store;