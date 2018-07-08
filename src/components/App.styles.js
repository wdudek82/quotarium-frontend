import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: minmax(300px, 700px);
  grid-template-rows: 15rem 4.5rem auto auto;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
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
  align-self: flex-end;
  background: #eee;
  width: 100%;
  height: 100px;
`;
