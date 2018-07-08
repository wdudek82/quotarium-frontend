import { css } from 'styled-components';

export default css`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,700,900');

  * {
    color: #555;
    font-family: "Lato", sans-serif;
    box-sizing: border-box;

    ::selection {
      background: #efa315;
      color: #fff;
    }
  }

  html {
    font-size: 62.5%;
    background: linear-gradient(#eee, #fff);
  }

  html, body {
    margin: 0;
    /* height: 100%; */
    overflow: visible;
  }

  body {
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Fira Sans", sans-serif;
    margin: 0;
  }
`;
