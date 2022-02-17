import { ImageType } from './ImageType';
import { ReviewedImages } from './ReviewdImagesType';

export type ApplicationState = {
  readonly activeImage: ImageType;
  readonly reviewedImages: ReviewedImages;
};
