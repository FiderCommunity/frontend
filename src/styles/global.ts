import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
  }

  body {
    background: #e5e5e5;
    color: #312E38;
    -webkit-font-smooting: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer
  }



  /* Change Autofill inputs color */
  @-webkit-keyframes autofill {
      0%,100% {
          color: #312e38;
          background: transparent;
      }
  }

  input:-webkit-autofill {
      -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
      -webkit-animation-name: autofill;
      -webkit-animation-fill-mode: both;
  }
`;
