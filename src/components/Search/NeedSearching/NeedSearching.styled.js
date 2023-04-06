import styled from "styled-components";
import needSearchingImgMobile from '../../../images/search/need_searching_img_mobile_1x.png';
import needSearchingImgMobileRetina from '../../../images/search/need_searching_img_mobile_2x.png';
import needSearchingImgTablet from '../../../images/search/need_searching_img_tablet_1x.png';
import needSearchingImgTabletRetina from '../../../images/search/need_searching_img_tablet_2x.png'
import needSearchingImgDecktop from '../../../images/search/need_searching_img_decktop_1x.png';
import needSearchingImgDecktopRetina from '../../../images/search/need_searching_img_tablet_2x.png';
    
export const NeedSearchingWrap = styled.div`
    text-align: center;
    margin-top: 3.125rem;
    `
export const NeedSearchingImg = styled.div`
    background-image: url(${needSearchingImgMobile});
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    width: 208px;
    height: 133px;
        @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url(${needSearchingImgMobileRetina});
        }
        @media screen and (min-width: 768px) {
            background-image: url(${needSearchingImgTablet});
            width: 350px;
            height: 225px;
        @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url(${ needSearchingImgTabletRetina});
        }
        }
        @media screen and (min-width: 1440px) {
            background-image: url(${needSearchingImgDecktop});
        @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url(${needSearchingImgDecktopRetina});
        }
        }
    `;
    
    export const NeedSearchingText = styled.p`
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #000000;
        opacity: 0.5;
            @media screen and (min-width: 768px) {
                font-size: 24px;
        }
    `;