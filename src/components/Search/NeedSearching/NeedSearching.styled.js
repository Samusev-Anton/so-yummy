import styled from "styled-components";
import needSearchingImgMobile from '../../../images/search/need_searching_img_mobile_1x.png';
import needSearchingImgMobileRetina from '../../../images/search/need_searching_img_mobile_2x.png';
import needSearchingImgTablet from '../../../images/search/need_searching_img_tablet_1x.png';
import needSearchingImgTabletRetina from '../../../images/search/need_searching_img_tablet_2x.png'
import needSearchingImgDecktop from '../../../images/search/need_searching_img_decktop_1x.png';
import needSearchingImgDecktopRetina from '../../../images/search/need_searching_img_tablet_2x.png';
import { device } from '../../GlobalStyles';

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
    margin-bottom: 24px;
        @media ${device.mobile},
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url(${needSearchingImgMobileRetina});
        }
        @media ${device.tablet} {
            background-image: url(${needSearchingImgTablet});
            width: 350px;
            height: 225px;
            margin-bottom: 32px;
        @media ${device.tablet},
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
            background-image: url(${ needSearchingImgTabletRetina});
        }
        }
        @media ${device.desktop} {
            background-image: url(${needSearchingImgDecktop});
        @media ${device.desktop},
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
        margin-bottom: 100px;
            @media ${device.tablet}  {
                font-size: 24px;
                margin-bottom: 200px;
        }
    `;