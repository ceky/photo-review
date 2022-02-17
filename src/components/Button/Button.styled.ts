import styled, { css } from 'styled-components';
import { ButtonProps, ButtonTypes } from './Button';

export const StyledButton = styled.a`
  padding: 1rem;
  border-radius: 2rem;
  width: 100%;
  height: 18px;
  max-width: 200px;
  display: block;
  text-align: center;
  text-decoration: none;
  transition: all 200ms;

  &:hover {
    box-shadow: 3px 3px 3px 1px rgb(0 0 0 / 40%);
    transform: scale(1.05);
  }

  ${(props: ButtonProps) =>
    props.type === ButtonTypes.APPROVE &&
    css`
      background-color: #46c046;
      color: white;
    `}

  ${(props: ButtonProps) =>
    props.type === ButtonTypes.DENY &&
    css`
      background-color: #ff3b3b;
      color: white;
    `}

  ${(props: ButtonProps) =>
    props.disabled &&
    css`
      opacity: 0.3;
      cursor: initial;
    `}

  .approve-icon {
    width: 32px;
    margin-top: -6px;
  }

  .deny-icon {
    width: 40px;
    margin-top: -10px;
  }
`;
