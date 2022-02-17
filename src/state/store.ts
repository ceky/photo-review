import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const persistedState = {
  reviewedImages: JSON.parse(localStorage.getItem("reviewedImages")!),
};

export const store = createStore(
  rootReducer,
  persistedState.reviewedImages ? persistedState : {},
  applyMiddleware(thunk)
);

store.subscribe(() => {
  localStorage.setItem(
    "reviewedImages",
    JSON.stringify(store.getState().reviewedImages)
  );
});
