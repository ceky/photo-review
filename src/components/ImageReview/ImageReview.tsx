import axios from "axios";
import { useState } from "react";
import plusIcon from "../../assets/plus-icon.svg";
import { GET_RANDOM_IMAGE_URL } from "../../services/urls";
import Button, { ButtonTypes } from "../Button/Button";
import Credits from "./Credits/Credits";
import Description from "./Description/Description";
import { StyledImageReview } from "./ImageReview.styled";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../types/ApplicationState";
import { getRandomImage } from "../../services/getRandomImageService";

function ImageReview() {
  const activeImage = useSelector(
    (state: ApplicationState) => state.activeImage
  );

  const dispatch = useDispatch();

  const onGetRandomPhoto = () => {
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

      {activeImage.id && <hr />}

      <div className="buttons-container">
        <Button type={ButtonTypes.APPROVE} />
        <Button type={ButtonTypes.DENY} />
      </div>

      {!activeImage.id && <Description />}
    </StyledImageReview>
  );
}

export default ImageReview;
