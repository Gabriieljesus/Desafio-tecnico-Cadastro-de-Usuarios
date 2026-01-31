import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; /* Garante que fique atrás de tudo */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

