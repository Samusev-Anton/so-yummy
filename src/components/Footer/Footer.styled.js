import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'components/GlobalStyles';

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  padding-bottom: 18px;

  align-items: center;

  background-color: ${footer =>
    footer.mode === 'light' ? `#22252a` : `#8BAA36`};

  @media ${device.tablet} {
    flex-direction: column;
    padding-left: 32px;
    padding-right: 94px;
    padding-top: 50px;
    padding-bottom: 24px;
  }
  @media ${device.desktop} {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 64px;
    padding-bottom: 50px;
  }
`;

export const FooterMain = styled.div`
  width: 100%;
  @media ${device.desktop} {
    display: flex;
    align-items: flex-start;
  }
`;

export const FooterMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.tablet} {
    align-items: flex-start;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;

export const MainBlock = styled.div`
  max-width: 380px;

  @media ${device.tablet} {
    margin-bottom: 72px;
  }
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  padding-left: 25px;
  @media ${device.mobileOnly} {
    display: none;
  }
  @media ${device.tablet} {
    gap: 10px;
  }
  @media ${device.desktop} {
    width: 350px;
    gap: 12px;
  }
`;

export const Feature = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #fafafa;
  @media ${device.desktop} {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  padding-bottom: 32px;
  justify-content: center;
  @media ${device.tablet} {
    padding-bottom: 24px;
    justify-content: start;
  }
`;

export const Title = styled.h2`
  margin: 0px;
  margin-left: 8px;
  color: #fafafa;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.015em;
  @media ${device.tablet} {
    margin-left: 12px;
  }
  @media ${device.desktop} {
    font-weight: 700;
    font-size: 28px;
    line-height: 28px;
  }
`;

export const LogoStyle = styled.div`
  @media ${device.mobileOnly} {
    width: 32px;
    height: 32px;
  }
  @media ${device.mobile} {
    width: 32px;
    height: 32px;
  }
  @media ${device.tablet} {
    width: 44px;
    height: 44px;
  }
  @media ${device.desktop} {
    width: 44px;
    height: 44px;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    grid-row: 1;
    grid-column: 2;
  }
  @media ${device.desktop} {
    display: flex;
    justify-content: center;
  }
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
  @media ${device.tablet} {
    align-items: start;
    gap: 20px;
  }
  @media ${device.desktop} {
    gap: 24px;
  }
`;

export const Link = styled(NavLink)`
  color: #fafafa;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-decoration: none;
`;

export const Logo = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="6" fill="#EBF3D4" />
      <path
        d="M7 7.08398V11.546V11.636V11.546C7 12.8201 7.55588 13.9481 8.41776 14.6781C8.83918 15.0351 9.11765 15.5171 9.11765 16.0521V23.5002C9.11765 24.3282 9.82918 25.0002 10.7059 25.0002C11.5826 25.0002 12.2941 24.3282 12.2941 23.5002V16.0521C12.2941 15.5171 12.5726 15.0351 12.994 14.6781C13.8559 13.9481 14.4118 12.8201 14.4118 11.546V7.08398V11.546"
        stroke="#8BAA36"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7051 12.0001V7"
        stroke="#8BAA36"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.9992 8.05153C24.9992 7.49952 24.5248 7.05151 23.9404 7.05151H22.8815C21.1271 7.05151 19.7051 8.39453 19.7051 10.0515V16.0516C19.7051 17.3556 20.5913 18.4546 21.8227 18.8677V23.4997C21.8227 24.3277 22.5343 24.9997 23.411 24.9997C24.2877 24.9997 24.9992 24.3277 24.9992 23.4997V19.0517V8.05153Z"
        stroke="#8BAA36"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
