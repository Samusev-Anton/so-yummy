import React from 'react';
import { PrimaryHeader} from './Header.styled';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';

export const Header = () => {
  return (
    // <HeaderWrapper>
      <PrimaryHeader>
        <Logo />
        <Nav />
      </PrimaryHeader>
    //  </HeaderWrapper>
  );
};

export default Header;
