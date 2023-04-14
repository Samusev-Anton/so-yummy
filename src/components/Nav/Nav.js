import React, { useState } from 'react';
import {
  PrimaryNav,
  NavLink,
  NavMenu,
  MobileContainer,
  TabletContainer,
  StyledBurger,
  WrapperTheme,
} from './Nav.styled';
import { useMediaQuery } from 'react-responsive';
import Modal from 'components/ModalMenu/Modal';
import SearchIcon from '@mui/icons-material/Search';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler'


const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });


  const [showModal, setShowModal] = useState(false);


  return (
    <>
      {isDesktop && (
        <>
          <PrimaryNav>
            <NavMenu>
              <NavLink to="/categories">Categories</NavLink>
              <NavLink to="/add">Add recipes</NavLink>
              <NavLink to="/my">My recipes</NavLink>
              <NavLink to="/favorite">Favorites</NavLink>
              <NavLink to="/shopping-list">Shopping list</NavLink>
              <NavLink to="/search">
                {' '}
                <SearchIcon sx={{ fontSize: 24 }} />
              </NavLink>
            </NavMenu>
          </PrimaryNav>
          <UserMenu />
          <ThemeToggler></ThemeToggler>
        </>
      )}
      {isMobile && (
        <>
          <UserMenu />
        </>
      )}
      {isMobile && showModal && (
        <Modal onClose={setShowModal}>
          <MobileContainer>
            <PrimaryNav>
              <NavMenu>
                <NavLink to="/categories">Categories</NavLink>
                <NavLink to="/add">Add recipes</NavLink>
                <NavLink to="/my">My recipes</NavLink>
                <NavLink to="/favorite">Favorites</NavLink>
                <NavLink to="/shopping-list">Shopping list</NavLink>
                <NavLink to="search">
                  <SearchIcon sx={{ fontSize: 20 }} />
                  Search
                </NavLink>
              </NavMenu>
            </PrimaryNav>
          </MobileContainer>
          <WrapperTheme>
            <ThemeToggler></ThemeToggler>
          </WrapperTheme>
        </Modal>
      )}

      {isTablet && (
        <>
          <UserMenu />
        </>
      )}
      {isTablet && showModal && (
        <Modal onClose={setShowModal}>
          <TabletContainer>
            <NavMenu>
              <NavLink to="/categories">Categories</NavLink>
              <NavLink to="/add">Add recipes</NavLink>
              <NavLink to="/my">My recipes</NavLink>
              <NavLink to="/favorite">Favorites</NavLink>
              <NavLink to="/shopping-list">Shopping list</NavLink>
              <NavLink to="search">
                <SearchIcon sx={{ fontSize: 20 }} />
                Search</NavLink>
            </NavMenu>
          </TabletContainer>
          <WrapperTheme>
            <ThemeToggler></ThemeToggler>
          </WrapperTheme>
        </Modal>
      )}

      <StyledBurger
        aria-label="menu"
        open={showModal}
        onClick={() => {
          setShowModal(current => !current);
          setShowModal(!showModal);
        }}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

export default Nav;
