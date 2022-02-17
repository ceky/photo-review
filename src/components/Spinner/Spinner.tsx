import { StyledSpinner } from "./Spinner.styled";

function Spinner() {
  return (
    <StyledSpinner>
      <div className="spinner load4">
        <div className="loader">Loading...</div>
      </div>
    </StyledSpinner>
  );
}

export default Spinner;
