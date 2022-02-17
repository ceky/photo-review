import { StyledCredits } from './Credits.styled';

interface CreditsProps {
  currentUsername: string;
  currentName: string;
}

function Credits({ currentUsername, currentName }: CreditsProps) {
  return (
    <StyledCredits>
      <div className="credits">
        <span>Photo by </span>
        <a href={`https://unsplash.com/@${currentUsername}`}>{currentName}</a>
        <span> on </span>
        <a href="https://unsplash.com">Unsplash</a>
      </div>
    </StyledCredits>
  );
}

export default Credits;
