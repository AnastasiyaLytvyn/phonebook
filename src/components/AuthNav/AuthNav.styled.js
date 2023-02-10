import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #696969;
  font-size: 16px;
  font-weight: 400;
  text-shadow: 1px 1px 1px #808080;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover,
  &:focus {
    color: #5f9ea0;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
