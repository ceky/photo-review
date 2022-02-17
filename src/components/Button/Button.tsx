import { StyledButton } from "./Button.styled";

export interface ButtonProps {
  type: string;
}

export enum ButtonTypes {
  APPROVE = "approve",
  DENY = "deny",
}

function Button({ type }: ButtonProps) {
  return (
    <StyledButton type={type} href="#">
      {type === ButtonTypes.APPROVE ? "Approve" : "Deny"}
    </StyledButton>
  );
}

export default Button;
