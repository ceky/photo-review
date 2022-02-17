import { StyledButton } from "./Button.styled";
import approveIcon from "../../assets/check-icon.svg";
import denyIcon from "../../assets/close-icon.svg";

export interface ButtonProps {
  type: string;
  disabled?: boolean;
  onClick: () => void;
}

export enum ButtonTypes {
  APPROVE = "approve",
  DENY = "deny",
}

function Button({ type, disabled, onClick }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled} href="#">
      {type === ButtonTypes.APPROVE ? (
        <img src={approveIcon} className="approve-icon" />
      ) : (
        <img src={denyIcon} className="deny-icon" />
      )}
    </StyledButton>
  );
}

export default Button;
