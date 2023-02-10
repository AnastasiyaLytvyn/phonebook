import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const Text = styled.p`
  color: #ffe4c4;
  font-size: 16px;
  font-weight: 500;
  text-shadow: 1px 1px 1px white;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

export const Button = styled.button`
  padding: 4px;
  width: 50px;
  color: #2f4f4f;
  font-size: 12px;
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
    font-size: 16px;
    width: 70px;
  }
`;
