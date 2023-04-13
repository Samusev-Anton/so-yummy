import styled from 'styled-components';
import { theme } from '../../theme';

import backgroundImg from '../../images/welcome-pic/background-reg-log-desk1x.png';
import backgroundImg2x from '../../images/welcome-pic/background-reg-log-desk2x.png';
import backgroundImgTab from '../../images/welcome-pic/background-reg-log-tab1x.png';
import backgroundImgTab2x from '../../images/welcome-pic/background-reg-log-tab2x.png';
import backgroundImgMob from '../../images/welcome-pic/background-reg-log-mob1x.png';
import backgroundImgMob2x from '../../images/welcome-pic/background-reg-log-mob2x.png';

export const Wrapper = styled.div`
  box-sizing: border-box;

  background-color: #fafafa;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-family: ${theme.fonts.main};

  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  background-attachment: fixed;

  background-image: url(${backgroundImgMob});

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${backgroundImgMob2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundImgTab});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundImgTab2x});
    }
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 115px;
    background-image: url(${backgroundImg});

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundImg2x});
    }
  }
`;

export const ImgBox = styled.picture`
  width: 285px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 409px;
    height: 359px;
  }
  @media screen and (min-width: 1280px) {
    width: 532px;
    height: 468px;
  }
`;
