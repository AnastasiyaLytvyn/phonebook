import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px auto 20px auto;
  padding: 15px;
  width: 320px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;

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
