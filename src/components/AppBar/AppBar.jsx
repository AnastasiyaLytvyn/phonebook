import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';

export const AppBar = () => {
    console.log('Hello')
  return (
    <>
      <Header>
        <Navigation />
        <AuthNav />
      </Header>
    </>
  );
};
