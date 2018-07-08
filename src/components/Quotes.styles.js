import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 5rem 0;
`;

export const Quote = styled.div`
  display: flex;
  height: 4rem;
  margin: 1rem 0;
`;

export const Button = styled.button`
  background: #fff;
  border: transparent;
  height: 100%;
  margin: 0 0.2rem;
  min-width: 70px;
  cursor: pointer;
  transition: all 1s;

  :hover {
    background: #333;
    color: #fff;
    outline: none;
  }
`;

export const EditButton = styled(Button)`
  :hover {
    background: #296fff;
  }
`;

export const DeleteButton = styled(Button)`
  :hover {
    background: #fc5a1c;
  }
`;
