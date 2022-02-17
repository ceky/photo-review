import { ReviewedImages } from "../../types/ReviewdImagesType";
import {
  ApproveImageAction,
  APPROVE_IMAGE,
  DenyImageAction,
  DENY_IMAGE,
} from "../action-creators/reviewImage";

const initialState: ReviewedImages = {
  approvedImages: [],
  deniedImages: [],
};

type ActionTypes = ApproveImageAction | DenyImageAction;

const reducer = (state: ReviewedImages = initialState, action: ActionTypes) => {
  switch (action.type) {
    case APPROVE_IMAGE:
      return {
        ...state,
        approvedImages: [...state.approvedImages, action.payload],
      };
    case DENY_IMAGE:
      return {
        ...state,
        deniedImages: [...state.deniedImages, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
