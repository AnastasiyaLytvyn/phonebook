import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 300px;
  font-size: 16px;
  color: #dcdcdc;
  padding-left: 10px;
  border-radius: 4px;
  outline: 1px solid #a9a9a9;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  overflow: hidden;

  &:hover,
  &:focus {
    color: #ffe4c4;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 410px;
  }
`;

export const Button = styled.button`
  padding: 4px 12px;
  padding: 4px 6px;
  width: 80px;
  color: #2f4f4f;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  outline: 1px solid lightgrey;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover,
  &:focus {
    border-color: #2f4f4f;
    background-color: #d3d3d3;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 100px;
  }
`;
