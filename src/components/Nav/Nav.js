import React, { useState } from 'react';
import {
  PrimaryNav,
  SecondaryNav,
  NavLink,
  NavMenu,
  AuthMenu,
  MobileContainer,
  TabletContainer,
  StyledBurger,
} from "./Nav.styled";
// import AuthNav from 'components/AuthNav/AuthNav';
// import UserNav from 'components/UserNav/UserNav';
// import { useAuth } from 'hooks';
import { useMediaQuery } from 'react-responsive';
import Modal from "components/ModalMenu/Modal";
import SearchIcon from '@mui/icons-material/Search';
import { UserMenu } from 'components/UserMenu/UserMenu';


const Nav = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

//   const { isLoggedIn } = useAuth();

  const [showModal, setShowModal] = useState(false);


  return (
    <>
      {
        isDesktop &&
    <>
        <PrimaryNav>
        <NavMenu>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/add">Add recipes</NavLink>
          <NavLink to="/my">My recipes</NavLink>
          <NavLink to="/favorite">Favorites</NavLink>
          <NavLink to="/shopping-list">Shopping list</NavLink>
          <NavLink to="search"> <SearchIcon sx={{ fontSize: 24 }}/></NavLink>
        </NavMenu>
          </PrimaryNav>
  <UserMenu/>
        </>
      }
      
      {isMobile && showModal && <Modal onClose={setShowModal}>
        <MobileContainer>
          
          <PrimaryNav>
            <NavMenu>
            <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/add">Add recipes</NavLink>
          <NavLink to="/my">My recipes</NavLink>
          <NavLink to="/favorite">Favorites</NavLink>
          <NavLink to="/shopping-list">Shopping list</NavLink>
          <NavLink to="search"></NavLink>
            </NavMenu>
          </PrimaryNav>
        </MobileContainer>
      </Modal>}

      {isTablet && showModal && <Modal onClose={setShowModal}>
        <TabletContainer>
          <NavMenu>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/add">Add recipes</NavLink>
          <NavLink to="/my">My recipes</NavLink>
          <NavLink to="/favorite">Favorites</NavLink>
          <NavLink to="/shopping-list">Shopping list</NavLink>
          <NavLink to="search"></NavLink>
          </NavMenu>
        </TabletContainer>
      </Modal>}
      
        <StyledBurger aria-label='menu' open={showModal} onClick={() => {
          setShowModal(current => !current);
          setShowModal(!showModal);
        }}>
          <div />
          <div />
          <div />
        </StyledBurger>

    </>
  );
};

export default Nav;