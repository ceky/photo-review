import { useSelector } from "react-redux";
import { ApplicationState } from "../../types/ApplicationState";
import { StyledApprovedImages } from "./ApprovedImages.styled";

function ApprovedImages() {
  const approvedImages = useSelector(
    (state: ApplicationState) => state.reviewedImages.approvedImages
  );

  return (
    <StyledApprovedImages>
      <p>Approved Images ({approvedImages.length})</p>
      <p>{"<images here>"}</p>
      <hr />
    </StyledApprovedImages>
  );
}

export default ApprovedImages;
