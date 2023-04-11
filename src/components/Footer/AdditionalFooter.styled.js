import styled from 'styled-components';
import { device } from 'components/GlobalStyles';

export const AdditionalFooterStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  @media ${device.mobileOnly} {
    gap: 14px;
    height: 66px;
  }
  @media ${device.tablet} {
    gap: 28px;
    height: 78px;
  }
  @media ${device.desktop} {
    gap: 40px;
    height: 114px;
  }
`;

export const AdditionalFooterItem = styled.p`
  margin: 0;
  font-style: normal;

  letter-spacing: -0.01em;

  color: ${p => (p.mode === 'light' ? `#22252a` : `rgba(250, 250, 250, 0.5)`)};

  @media ${device.mobileOnly} {
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
  }
  @media ${device.tablet} {
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
  }
  @media ${device.desktop} {
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
  }
`;

export const AdditionalFooterLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;

  color: ${a => (a.mode === 'light' ? `#22252a` : `rgba(250, 250, 250, 0.5)`)};
  @media ${device.tablet} {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
  }
  @media ${device.desktop} {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
  }
`;
