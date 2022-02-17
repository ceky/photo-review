import styled, { css } from "styled-components";

interface ButtonProps {
  primary?: boolean;
}

const Button2 = styled.button`
  background: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props: ButtonProps) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export default Button2;

{
  /* <Button>Normal Button</Button>
<Button primary>Primary Button</Button> */
}
