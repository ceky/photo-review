import { combineReducers } from "redux";

import activeImageReducer from "./activeImageReducer";

const rootReducer = combineReducers({
  activeImage: activeImageReducer,
});

export default rootReducer;
