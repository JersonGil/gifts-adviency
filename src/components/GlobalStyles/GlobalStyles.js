import { createGlobalStyle, css } from "styled-components";

const bootstrap = css`
  ${require("bootstrap/dist/css/bootstrap.min.css")}
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Gwendolyn:wght@700&family=Roboto:wght@100&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');

  ${bootstrap};

  body {
    height: 100vh;
    background-color: #fff3e6;
  }
`;

export default GlobalStyle;
