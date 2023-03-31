import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: #2a363b;
  &.active {
    color: orangered;
  }
`;
