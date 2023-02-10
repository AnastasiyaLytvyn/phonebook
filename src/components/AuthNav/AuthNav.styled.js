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
  color: #d3d3d3;
  font-size: 16px;
  font-weight: 400;
  text-shadow: 0.5px 0px 0.5px white;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover,
  &:focus {
    color: #A9A9A9;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
