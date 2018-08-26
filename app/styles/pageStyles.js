import { css } from "styled-components";

const style = css`
  body {
  }
  @media all and (min-width: 800px) {
    .test {
      color: blue;
      background-color: pink;
    }
  }
  @media only screen and (max-width: 600px) {
    .test {
      color: blue;
      background-color: pink;
    }
  }
`;

export default style;
