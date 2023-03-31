import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const PrimaryNav = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media (min-width: 1280px) {
    flex-direction: row;
    ${'' /* justify-content: center; */}
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  
  text-decoration: none;
  flex-direction: column;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: #22252A;
  letter-spacing: -0.02em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (min-width: 768px) {
    font-size: 24px;
    margin-top: 40px;
  }
  @media (min-width: 1280px) {
    margin-top: 0;
    margin-left: 30px;
    font-size: 14px;
    justify-content:center;
  }
  &:hover {
    color: #8BAA36;
    font-weight: 600;
  }
  &.active {
    color: #8BAA36;
    font-weight: 600;
    text-decoration: none;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TabletContainer = styled.div``;
export const StyledBurger = styled.button`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
  @media (min-width: 1280px) {
    display: none;
  }
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#111111')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
  `;