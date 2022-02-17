import plusIcon from "../../assets/plus-icon.svg";
import Button, { ButtonTypes } from "../Button/Button";
import Credits from "./Credits/Credits";
import Description from "./Description/Description";
import { StyledImageReview } from "./ImageReview.styled";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../types/ApplicationState";
import { getRandomImage } from "../../services/getRandomImageService";
import {
  approveImage,
  denyImage,
} from "../../state/action-creators/reviewImage";
import { useEffect } from "react";

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
      getRandomImage(dispatch);
    }
  }, [activeImage.id]);

  const onGetRandomPhoto = () => {
    getRandomImage(dispatch);
  };

  const onClickApprove = () => {
    dispatch(approveImage(activeImage.url));
    getRandomImage(dispatch);
  };

  const onClickDeny = () => {
    dispatch(denyImage(activeImage.id));
    getRandomImage(dispatch);
  };

  return (
    <StyledImageReview>
      <div className={`background ${activeImage.id ? "none" : ""}`}>
        {activeImage.id && (
          <img
            src={activeImage.url}
            className="current-photo"
            alt="Current Image"
          />
        )}
        {!activeImage.id && (
          <img
            src={plusIcon}
            className="add-image-button"
            alt="Add Image Button"
            onClick={onGetRandomPhoto}
          />
        )}
      </div>

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
