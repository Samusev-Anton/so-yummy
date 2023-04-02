import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'components/GlobalStyles';

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  padding-bottom: 18px;

  align-items: center;

  background-color: #22252a;

  @media ${device.mobile} {
    flex-direction: row;
    background-color: ${p => p.theme.colors.olive};
  }
  @media ${device.tablet} {
    background-color: ${p => p.theme.colors.whiteText};
  }
  @media ${device.desktop} {
    background-color: red;
  }
`;
export const TitleBlock = styled.h2`
  display: flex;
  align-items: center;
  margin: 0px;
  padding-bottom: 32px;
`;

export const Title = styled.h2`
  margin: 0px;
  margin-left: 8px;
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.015em;
`;

export const Logo = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="12" fill="#8BAA36" />
      <path
        d="M8.79883 8.89569V13.9857V14.0884V13.9857C8.79883 15.4391 9.43295 16.7258 10.4161 17.5586C10.8969 17.9658 11.2145 18.5157 11.2145 19.126V27.6223C11.2145 28.5669 12.0262 29.3334 13.0263 29.3334C14.0264 29.3334 14.838 28.5669 14.838 27.6223V19.126C14.838 18.5157 15.1557 17.9658 15.6364 17.5586C16.6196 16.7258 17.2537 15.4391 17.2537 13.9857V8.89569V13.9857"
        stroke="#FAFAFA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0254 14.5038V8.79999"
        stroke="#FAFAFA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.3322 9.99976C29.3322 9.37007 28.7911 8.85901 28.1243 8.85901H26.9165C24.9151 8.85901 23.293 10.391 23.293 12.2813V19.1258C23.293 20.6133 24.3039 21.867 25.7087 22.3382V27.6221C25.7087 28.5667 26.5203 29.3333 27.5204 29.3333C28.5205 29.3333 29.3322 28.5667 29.3322 27.6221V22.5481V9.99976Z"
        stroke="#FAFAFA"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const FooterNav = styled.nav`
  // display: flex;
`;

export const FooterNavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  margin-bottom: 32px;
  width: 89px;
  align-items: center;
  gap: 14px;
`;

export const Link = styled(NavLink)`
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-decoration: none;
`;
