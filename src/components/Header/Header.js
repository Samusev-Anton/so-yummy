import React from 'react';
import { PrimaryHeader} from './Header.styled';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import { Container } from 'components/GlobalStyles';

export const Header = () => {
  return (
  
    <Container>
      <PrimaryHeader>
        <Logo />
        <Nav />
      </PrimaryHeader>
    </Container>
  );
};

export default Header;
