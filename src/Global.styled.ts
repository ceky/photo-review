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
    margin: 0 auto;
    background-color: rgb(249, 223, 116);
    max-width: 600px;
  }
`;

export default GlobalStyles;
