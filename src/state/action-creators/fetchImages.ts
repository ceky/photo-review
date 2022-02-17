import { ImageType } from "../../types/ImageType";

export const FETCH_RANDOM_IMAGE = "NETWORK/FETCH_RANDOM_IMAGE";
export const FETCH_RANDOM_IMAGE_SUCCESS = "NETWORK/FETCH_RANDOM_IMAGE_SUCCESS";
export const FETCH_LOCALSTORAGE = "NETWORK/FETCH_LOCALSTORAGE_IMAGES";
export const FETCH_LOCALSTORAGE_SUCCESS =
  "NETWORK/FETCH_LOCALSTORAGE_IMAGES_SUCCESS";

export type FetchRandomImageAction = {
  type: typeof FETCH_RANDOM_IMAGE;
};

export type FetchRandomImageSuccessAction = {
  type: typeof FETCH_RANDOM_IMAGE_SUCCESS;
  payload: any;
};

export type FetchLocalStorageAction = {
  type: typeof FETCH_LOCALSTORAGE;
};

export type FetchLocalStorageSuccessAction = {
  type: typeof FETCH_LOCALSTORAGE_SUCCESS;
  payload: ImageType[];
};

export const fetchRandomImage = () => {
  return {
    type: FETCH_RANDOM_IMAGE,
  };
};

export const fetchRandomImageSuccess = (image: any) => {
  return {
    type: FETCH_RANDOM_IMAGE_SUCCESS,
    payload: image,
  };
};

export const fetchLocalStorage = () => {
  return {
    type: FETCH_LOCALSTORAGE,
  };
};

export const fetchLocalStorageSuccess = (images: ImageType[]) => {
  return {
    type: FETCH_LOCALSTORAGE_SUCCESS,
    payload: images,
  };
};
