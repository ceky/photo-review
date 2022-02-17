import styled from "styled-components";

interface HeaderProps {
  bg: string;
}

export const StyledHeader = styled.header`
  background-color: ${(props: HeaderProps) => props.bg};
  font-size: 2rem;
`;
