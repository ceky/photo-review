import { useSelector } from 'react-redux';
import { ApplicationState } from '../../types/ApplicationState';
import { StyledApprovedImages } from './ApprovedImages.styled';
import Flickity from 'react-flickity-component';

function ApprovedImages() {
  const flickityOptions = {
    groupCells: true,
  };

  const approvedImages = useSelector(
    (state: ApplicationState) => state.reviewedImages.approvedImages
  );

  const renderImages = () =>
    approvedImages.map((imageUrl) => (
      <img src={imageUrl} className="scrollable-image" />
    ));

  return (
    <StyledApprovedImages>
      <p>Approved Images ({approvedImages.length})</p>
      <Flickity className="carousel" options={flickityOptions}>
        {renderImages()}
      </Flickity>
      <hr />
    </StyledApprovedImages>
  );
}

export default ApprovedImages;
