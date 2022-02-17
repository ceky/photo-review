import axios from 'axios';
import { Dispatch } from 'react';
import {
  fetchRandomImage,
  fetchRandomImageSuccess,
} from '../state/action-creators/fetchImages';

import { GET_RANDOM_IMAGE_URL } from './urls';

export const getRandomImage = () => async (dispatch: Dispatch<any>) => {
  dispatch(fetchRandomImage());

  const response = await axios.get(GET_RANDOM_IMAGE_URL);

  dispatch(fetchRandomImageSuccess(response.data));
};
