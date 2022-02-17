import { ImageType } from '../../types/ImageType';
import {
  FetchRandomImageAction,
  FetchRandomImageSuccessAction,
  FETCH_RANDOM_IMAGE,
  FETCH_RANDOM_IMAGE_SUCCESS,
} from '../action-creators/fetchImages';

const initialState: ImageType = {
  id: '',
  name: '',
  url: '',
  username: '',
  isLoading: false,
};

type ActionTypes = FetchRandomImageAction | FetchRandomImageSuccessAction;

const reducer = (state: ImageType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case FETCH_RANDOM_IMAGE:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_RANDOM_IMAGE_SUCCESS:
      const {
        id,
        user: { name },
        urls: { regular: url },
        user: { username },
      } = action.payload;

      return {
        ...state,
        id,
        name,
        url,
        username,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
