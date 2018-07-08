import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 5rem 0;
`;

export const Quote = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  margin: 1rem 0;
  padding: 0 2rem;
  background: #fff;
  height: 200px;
  box-shadow: none;
  transition: all 500ms;

  :hover {
    box-shadow: 0 0 20px 0 #555;
    transform: rotate(3deg);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  padding-right: 2rem;
  border-right: 1px solid #ccc;
`;

export const Button = styled.button`
  background: #fff;
  border: transparent;
  height: 50px;
  margin: 0 0.2rem;
  min-width: 70px;
  cursor: pointer;
  transition: all 1s;

  :hover {
    background: #333;
    color: #fff;
    outline: none;
    box-shadow: 0 0 20px 0px #555;
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
