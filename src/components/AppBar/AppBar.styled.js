import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }

  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
