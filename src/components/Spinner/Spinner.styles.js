import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const Item = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  border: 6px solid transparent;
  border-color: #efa315 transparent;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin: auto 0;
  animation: spin 1s linear infinite; 

  @keyframes spin {
    0% {
      width: 50px;
      height: 50px;
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
      width: 70px;
      height: 70px;
    }
    100% {
      transform: rotate(360deg);
      width: 50px;
      height: 50px;
    }
  }
`;
