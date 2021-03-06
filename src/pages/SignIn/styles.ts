import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackground from '../../assets/sign-in-background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  /* Estiliza apenas os a's que vem diretamente após a tag content */
  > a {
    color: #ec4444;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    margin-top: 24px;

    transition: color 0.2s;

    svg {
      margin-right: 10px;
    }

    &:hover {
      color: ${shade(0.2, '#ec4444')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) center no-repeat;
  background-size: cover;
`;
