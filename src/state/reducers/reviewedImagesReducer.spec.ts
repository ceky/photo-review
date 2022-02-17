import '@testing-library/jest-dom/extend-expect';

import reducer from './reviewedImagesReducer';
import { ReviewedImages } from '../../types/ReviewdImagesType';
import {
  approveImage,
  ApproveImageAction,
  denyImage,
  DenyImageAction,
} from '../action-creators/reviewImage';

const initialState: ReviewedImages = {
  approvedImages: [],
  deniedImages: [],
};

describe('Reviewed Images Reducer', () => {
  it('should add an image to the approve list', () => {
    const reviewedImagesReducer = reducer(
      initialState,
      approveImage('http://testurl.com/image.jpg') as ApproveImageAction
    );

    expect(reviewedImagesReducer.approvedImages[0]).toBe(
      'http://testurl.com/image.jpg'
    );
    expect(reviewedImagesReducer.approvedImages.length).toBe(1);
  });

  it('should add an image to the deny list', () => {
    const reviewedImagesReducer = reducer(
      initialState,
      denyImage('1234') as DenyImageAction
    );

    expect(reviewedImagesReducer.deniedImages[0]).toBe('1234');
    expect(reviewedImagesReducer.deniedImages.length).toBe(1);
  });
});
