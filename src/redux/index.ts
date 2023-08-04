import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { formReducer } from "./formReducer";

export const rootReducer = combineReducers({
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
