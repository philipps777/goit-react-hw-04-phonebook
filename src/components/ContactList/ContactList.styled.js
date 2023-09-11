import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  box-shadow: 1px 0px 22px 10px rgba(0, 0, 0, 0.72) inset;
  -webkit-box-shadow: 1px 0px 22px 10px rgba(0, 0, 0, 0.72) inset;
  -moz-box-shadow: 1px 0px 22px 10px rgba(0, 0, 0, 0.72) inset;
  border-radius: 25px;
  padding: 32px;
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
`;
export const ButtonList = styled.button`
  display: inline-flex;
  padding: 3px 4px;
  border: 1px solid black;
  border-radius: 4px;
  font-family: inherit;
  font-size: 12px;
  background-color: cyan;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: orange;
  }
`;
export const Number = styled.span`
  margin-right: 10px;
  margin-left: 10px;
`;
