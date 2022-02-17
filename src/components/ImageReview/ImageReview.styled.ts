import styled from "styled-components";

export const StyledImageReview = styled.main`
  p {
    text-transform: uppercase;
  }

  .add-image-button {
    max-width: 100px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .background {
    width: calc(100% - 2rem);
    margin: 1rem;
    background-color: #eeece0;

    &.none {
      background: none;
    }
  }

  .current-photo {
    width: 100%;
    height: 100%;
    max-height: 350px;
    object-fit: contain;
  }

  .small-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    position: relative;
    top: 4px;
  }

  .buttons-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 0.8rem;
  }
`;
