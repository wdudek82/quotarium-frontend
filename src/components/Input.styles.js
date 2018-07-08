import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const InputField = styled.input`
  border: none;
  border-bottom: 2px solid #999;
  height: 4.5rem;
  width: 100%;
  padding: 0 2rem;
  font-size: 2rem;
  outline: none;
  transition: all 0.3s;

  ::selection {
    background: #efa315;
  }

  :focus {
    border-bottom: 2px solid #efa315;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: inline-block;
  background: #fff;
  border: 1px solid #ccc;
  height: 100%;
  transition: all 1s;
  width: 100px;
  outline: none;
  cursor: pointer;

  :hover {
    background: #efa315;
    color: #000;
    border: transparent;
  }
`;
