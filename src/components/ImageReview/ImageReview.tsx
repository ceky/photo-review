import plusIcon from '../../assets/plus-icon.svg';
import Button, { ButtonTypes } from '../Button/Button';
import Credits from './Credits/Credits';
import Description from './Description/Description';
import { StyledImageReview } from './ImageReview.styled';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../types/ApplicationState';
import { getRandomImage } from '../../services/getRandomImageService';
import {
  approveImage,
  denyImage,
} from '../../state/action-creators/reviewImage';
import { useEffect } from 'react';
import Spinner from '../Spinner/Spinner';

function ImageReview() {
  const activeImage = useSelector(
    (state: ApplicationState) => state.activeImage
  );
  const deniedImages = useSelector(
    (state: ApplicationState) => state.reviewedImages.deniedImages
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (deniedImages.includes(activeImage.id)) {
      dispatch(getRandomImage());
    }
  }, [activeImage.id]);

  const onGetRandomPhoto = () => {
    dispatch(getRandomImage());
  };

  const onClickApprove = () => {
    dispatch(approveImage(activeImage.url));
    dispatch(getRandomImage());
  };

  const onClickDeny = () => {
    dispatch(denyImage(activeImage.id));
    dispatch(getRandomImage());
  };

  return (
    <StyledImageReview>
      <div className={`background ${activeImage.id ? 'none' : ''}`}>
        {activeImage.id && !activeImage.isLoading && (
          <img
            src={activeImage.url}
            className="current-photo"
            alt="Current Image"
          />
        )}
        {!activeImage.id && !activeImage.isLoading && (
          <img
            src={plusIcon}
            className="add-image-button"
            alt="Add Image Button"
            onClick={onGetRandomPhoto}
          />
        )}
      </div>

      {activeImage.isLoading && <Spinner />}

      {activeImage.id && (
        <Credits
          currentUsername={activeImage.username}
          currentName={activeImage.name}
        />
      )}

      {activeImage.id && (
        <div className="buttons-container">
          <Button
            type={ButtonTypes.APPROVE}
            disabled={activeImage.isLoading}
            onClick={onClickApprove}
          />
          <Button
            type={ButtonTypes.DENY}
            disabled={activeImage.isLoading}
            onClick={onClickDeny}
          />
        </div>
      )}

      {!activeImage.id && <Description />}
    </StyledImageReview>
  );
}

export default ImageReview;
