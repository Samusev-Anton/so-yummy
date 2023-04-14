import styled from 'styled-components';

export const FollowUsBlock = styled.div`
  height: 19px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  // fill: #8baa36;
  fill: ${a => (a.mode === 'light' ? `#8BAA36` : `#FAFAFA`)};
  &:focus,
  &:hover {
    fill: ${a => (a.mode === 'light' ? `#FAFAFA` : `#1E1F28`)};
  }
`;
