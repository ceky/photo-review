import { StyledButton } from "./Button.styled";

export interface ButtonProps {
  type: string;
  onClick: () => void;
}

export enum ButtonTypes {
  APPROVE = "approve",
  DENY = "deny",
}

function Button({ type, onClick }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} href="#">
      {type === ButtonTypes.APPROVE ? "Approve" : "Deny"}
    </StyledButton>
  );
}

export default Button;
