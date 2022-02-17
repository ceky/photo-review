import axios from "axios";
import { Dispatch } from "react";
import {
  fetchRandomImage,
  fetchRandomImageSuccess,
} from "../state/action-creators/fetchImages";

import { GET_RANDOM_IMAGE_URL } from "./urls";

export function getRandomImage(dispatch: Dispatch<any>) {
  dispatch(fetchRandomImage());

  return axios.get(GET_RANDOM_IMAGE_URL).then((response) => {
    const activeImage = response.data;
    dispatch(fetchRandomImageSuccess(activeImage));
  });
}
