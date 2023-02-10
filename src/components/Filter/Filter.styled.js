import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 12px;
  color: #fffaf0;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Input = styled.input`
  width: 300px;
  padding: 5px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid lightslategrey;
    transition: all 0.5s ease-out;
  }
  @media screen and (min-width: 768px) {
    width: 410px;
  }
`;
