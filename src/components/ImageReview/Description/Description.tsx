import { StyledDescription } from './Description.styled';
import plusIcon from '../../../assets/plus-icon.svg';

function Description() {
  return (
    <StyledDescription>
      <div className="description">
        <span>Click on the </span>
        <img src={plusIcon} alt="Add Image Small Icon" className="small-icon" />
        <span> in order to get image recommandations.</span>
      </div>
    </StyledDescription>
  );
}

export default Description;
