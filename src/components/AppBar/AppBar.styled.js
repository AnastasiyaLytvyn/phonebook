import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  backdrop-filter: blur(3px);
  background-color: rgba(white, 0.1);
  border: 1px solid rgba(white, 0.2);
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(black, 0.25);

  position: relative;
  transition: transform 250ms;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;
