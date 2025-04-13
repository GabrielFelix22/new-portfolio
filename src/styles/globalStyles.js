import { createGlobalStyle } from "styled-components";
import { theme } from "../themes/styles";

const myStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    background-color: ${theme.colors.black};
  }
`;

export default myStyles;
