import { createGlobalStyle } from "styled-components";
import { theme } from "../themes/styles";

const myStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: ${theme.colors.black};
    -webkit-font-smoothing: antialiased;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default myStyles;
