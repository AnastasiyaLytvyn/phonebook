import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #fffaf0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Input = styled.input`
  padding: 5px;
  width: 300px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid #2f4f4f;
    transition: all 0.5s ease-out;
  }
  @media screen and (min-width: 768px) {
    width: 410px;
  }
`;

export const Button = styled.button`
  margin: 10px 0;
  padding: 4px 6px;
  width: 150px;
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
    width: 200px;
  }
`;
