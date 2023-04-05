import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';
import backgroundImg from '../../images/welcome-pic/welcomePic1x.jpg';
import backgroundImg2x from '../../images/welcome-pic/welcomePic2x.jpg';
import backgroundImgTab from '../../images/welcome-pic/welcomePicTab1x.jpg';
import backgroundImgTab2x from '../../images/welcome-pic/welcomePicTab2x.jpg';
import backgroundImgMob from '../../images/welcome-pic/welcomePicMob1x.jpg';
import backgroundImgMob2x from '../../images/welcome-pic/welcomePicMob2x.jpg';

export const ContainerWelcome = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 35px;

  font-family: ${theme.fonts.main};

  background-size: cover;
  background-widh: 100wh;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${backgroundImgMob});

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${backgroundImgMob2x});
  }

  @media screen and (min-width: 768px) {
    padding: 0 135px;

    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${backgroundImgTab});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(${backgroundImgTab2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${backgroundImg});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.6) 58.58%,
          rgba(0, 0, 0, 0.345172) 78.98%,
          rgba(0, 0, 0, 0) 100%
        ),
        url(${backgroundImg2x});
    }
  }
`;

export const Logo = styled.img`
  width: 54px;
  height: 54px;

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 68px;
  }
`;

export const Title = styled.h1`
  margin-top: 28px;

  font-weight: 600;

  font-family: ${theme.fonts.main};
  font-size: 24px;
  color: ${theme.colors.whiteText};

  @media screen and (min-width: 768px) {
    margin-top: 44px;
    font-size: 28px;
  }
`;

export const Text = styled.p`
  display: inline-block;
  max-width: 305px;
  margin-top: 14px;

  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.whiteText};
  text-align: center;
  line-height: 1.5;
  letter-spacing: -0.06em;
  font-stretch: ultra-expanded;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    max-width: 500px;
  }
  @media screen and (min-width: 768px) {
    max-width: 540px;
  }
`;

export const NavBox = styled.nav`
  display: flex;
  gap: 12px;
  margin-top: 44px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const StyledLink = styled(Link)`
 border-radius: 20px 60px;
 
border: 2px solid #FAFAFA;

  padding: 12px 24px;


  font-size: 14px;
  padding: 12px 24px;
  background-color: transparent;
  text-decoration: none;
  color: #fafafa;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #fafafa;
    border: 2px solid #8baa36;
    color: #8baa36;
  }
       @media screen and (min-width: 768px) {
    padding: 22px 44px;

    font-size: 16px;
    
  }

  &:first-of-type {
    background-color: #8BAA36;
    border: none;
    &:hover {
      background-color: #22252A;;
      color: #FAFAFA;
    }


`;
