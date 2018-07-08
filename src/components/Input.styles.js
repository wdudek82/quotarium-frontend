import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const InputField = styled.input`
  border: none;
  border-bottom: 1px solid #999;
  height: 4.5rem;
  width: 100%;
  padding: 0 2rem;
  font-size: 2rem;
  outline: none;
`;

export const Button = styled.button`
  background: #fff;
  border: transparent;
  height: 100%;
  transition: all 1s;
  width: 100px;
  outline: none;
  cursor: pointer;

  :hover {
    background: #333;
    color: #fff;
  }
`;
