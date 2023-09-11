import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;
export const FormWrapper = styled.div`
  box-shadow: 1px 0px 22px 10px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 1px 0px 22px 10px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 1px 0px 22px 10px rgba(0, 0, 0, 0.72);
  border-radius: 25px;
`;
export const Button = styled.button`
  display: inline-flex;
  padding: 5px 7px;
  border: 1px solid black;
  border-radius: 4px;
  font-family: inherit;
  font-size: 14px;
  background-color: cyan;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;
export const Input = styled.input`
  padding: 8px 12px;
  border: 3px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: orange;
    box-shadow: 0 0 5px rgba(102, 175, 233, 0.5);
  }
`;
