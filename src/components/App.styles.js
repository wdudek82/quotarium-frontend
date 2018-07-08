import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10rem 4.5rem 90% 5rem;
  margin: 0 20%;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
`;

export const H3 = styled.h1`
`;


export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid #ccc;
`;
