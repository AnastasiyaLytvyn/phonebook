import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgba(white, 0.1);
  border: 1px solid rgba(white, 0.2);
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(black, 0.25);

  position: relative;
  transition: transform 250ms;
  margin: 32px auto 20px auto;
  padding: 15px;
  width: 320px;
 

  @media screen and (min-width: 768px) {
    width: 420px;
  }
`;

export const TitlePhone = styled.h1`
  margin-bottom: 10px;
  color: #f5deb3;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const TitleContacts = styled.h2`
  margin-bottom: 10px;
  color: #f5deb3;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;
