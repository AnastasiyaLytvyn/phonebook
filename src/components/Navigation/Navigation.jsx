import { NavLink } from 'react-router-dom';
import { Container } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </Container>
  );
};
