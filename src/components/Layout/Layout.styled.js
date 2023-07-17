import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: auto;
  overflow-y: scroll;

  background-image: url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::-webkit-scrollbar-track {
    background-color: gray(30);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(white, 0.2);
    border-radius: 100px;
  }

  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }
`;
