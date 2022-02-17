import styled, { css } from "styled-components";
import { ButtonProps, ButtonTypes } from "./Button";

export const StyledButton = styled.a`
  padding: 1rem;
  border-radius: 2rem;
  width: 100%;
  max-width: 200px;
  display: block;
  text-align: center;
  text-decoration: none;

  ${(props: ButtonProps) =>
    props.type === ButtonTypes.APPROVE &&
    css`
      background-color: green;
      color: white;
    `}

  ${(props: ButtonProps) =>
    props.type === ButtonTypes.DENY &&
    css`
      background-color: red;
      color: white;
    `}
`;
