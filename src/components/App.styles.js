import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15rem 4.5rem auto auto;
  margin: 0 20%;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  margin-bottom: 2rem;
`;

export const H3 = styled.h3`
  color: #efa315;
`;


export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  width: 100%;
  height: 100px;
`;
