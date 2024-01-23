import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * { 
    box-sizing: border-box;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Pretendard', sans-serif;
  }
`;

export default GlobalStyle;