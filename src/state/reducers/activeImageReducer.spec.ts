import '@testing-library/jest-dom/extend-expect';

import reducer from './activeImageReducer';
import {
  fetchRandomImage,
  FetchRandomImageAction,
  fetchRandomImageSuccess,
  FetchRandomImageSuccessAction,
} from '../action-creators/fetchImages';
import { ImageType } from '../../types/ImageType';

const initialState: ImageType = {
  id: '',
  name: '',
  url: '',
  username: '',
  isLoading: false,
};

describe('Active Image Reducer', () => {
  it('should set isLoading to true when asked for a new random image', () => {
    const activeImageReducer = reducer(
      initialState,
      fetchRandomImage() as FetchRandomImageAction
    );

    expect(activeImageReducer.isLoading).toBe(true);
  });

  it('should set isLoading to false when asked for a new random image is resolved', () => {
    const image = {
      id: '1234',
      user: { name: 'Test User', username: 'testUsername' },
      urls: { regular: 'http://randomimage.com/test.jpg' },
    };

    const activeImageReducer = reducer(
      initialState,
      fetchRandomImageSuccess(image) as FetchRandomImageSuccessAction
    );

    expect(activeImageReducer.isLoading).toBe(false);
  });

  it('should get the correct image properties from the server', () => {
    const image = {
      id: '1234',
      user: { name: 'Test User', username: 'testUsername' },
      urls: { regular: 'http://randomimage.com/test.jpg' },
    };

    const activeImageReducer = reducer(
      initialState,
      fetchRandomImageSuccess(image) as FetchRandomImageSuccessAction
    );

    expect(activeImageReducer.username).toBe('testUsername');
    expect(activeImageReducer.id).toBe('1234');
    expect(activeImageReducer.url).toBe('http://randomimage.com/test.jpg');
  });
});
