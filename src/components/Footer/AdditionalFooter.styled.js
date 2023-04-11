import styled from 'styled-components';
import { device } from 'components/GlobalStyles';
import FooterLeavesImg from 'images/footer-leaves1x.png';
import FooterLeavesImg2x from 'images/footer-leaves2x.png';

export const AdditionalFooterStyle = styled.div`
  display: flex;
  position: relative;
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

export const FooterLeaves = styled.svg`
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 0;
  border: none;
  outline: none;
    outline-offset: 0;
    box-shadow: none
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media ${device.mobileOnly} {
    width: 160px;
    height: 120px;
    background-image: url(${FooterLeavesImg});
  }
   @media screen and
    (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx)
    {
    background-image: url(${FooterLeavesImg2x});
  }

  @media ${device.tablet} {
    width: 290px;
    height: 215px;
    background-image: url(${FooterLeavesImg});
  }

    @media ${device.tablet} {
    screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${FooterLeavesImg2x});
  }


  @media ${device.desktop} {
    width: 438px;
    height: 320px;
    background-image: url(${FooterLeavesImg});
  }

      @media ${device.desktop} {
    (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx)
    {
    background-image: url(${FooterLeavesImg2x});
  }
`;
