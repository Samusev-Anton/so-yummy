import styled from 'styled-components';
import { device } from 'components/GlobalStyles';

export const FollowUsBlock = styled.div`
  display: none;
  @media ${device.desktop} {
    //   width: 204px;
    height: 19px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    //   flex-direction: column;
    gap: 16px;
    margin-bottom: 102px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  // fill: #8baa36;
  fill: ${a => (a.mode === 'light' ? `#8BAA36` : `#FAFAFA`)};
  &:focus,
  &:hover {
    fill: ${a => (a.mode === 'light' ? `#1E1F28` : `#FAFAFA`)};
  }
`;
