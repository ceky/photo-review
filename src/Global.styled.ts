import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #6A0136;
  }

  body {
    font-size: 14px;
    margin: 0;
    margin-bottom: 0.4rem;
    background-color: #F9DF74;
  }
`;

export default GlobalStyles;
