import { css } from 'styled-components';

export default css`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,700,900');

  * {
    color: var(--graphite-dark);
    font-family: "Lato", sans-serif;
    box-sizing: border-box;

    ::selection {
      background: var(--mango);
    }
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
    overflow: visible;
  }

  body {
    font-size: 1.6rem;
    background: #eee;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Fira Sans", sans-serif;
    margin: 0;
  }
`;
