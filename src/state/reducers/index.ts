import { combineReducers } from "redux";

import activeImageReducer from "./activeImageReducer";
import reviewedImagesReducer from "./reviewedImagesReducer";

const rootReducer = combineReducers({
  activeImage: activeImageReducer,
  reviewedImages: reviewedImagesReducer,
});

export default rootReducer;
