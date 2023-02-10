import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Container } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Container>
  );
};
