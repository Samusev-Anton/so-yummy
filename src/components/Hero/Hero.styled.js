import styled from "styled-components";

import Background1xMobile from "images/bg2-mobile-1.png"
import Background1x from "images/bg2-1x.png"
import PlateImgMobile from "images/plate-mobile-1x.png"
import PlateImg from "images/plate-1x.png"
import SpinashImgMobile from "images/kisspng-pasta-spinach-dip-english-muffin-breakfast-mobile-1x.png"
import SpinashImg from "images/kisspng-pasta-spinach-dip-english-muffin-breakfast-sandwic-spinach-1x.png"
import SpinashImgLeftMobile from "images/kisspng-pasta-spinach-dip-english-muffin-breakfast-sandwic-spinach-mobile-1x.png"
import SpinashImgLeft from "images/kisspng-pasta-spinach-dip-english-muffin-breakfast-sandwic-left-1x.png"


export const SectionHero = styled.section`
min-height: 800px;
background-image: url(${SpinashImgLeft});
background-repeat: no-repeat;
position:relative;
z-index:2;
`
export const HeroImgBlock = styled.div`
min-height: 912px;
background-position:top right;
background-size: 45%;
background-repeat: no-repeat;
background-image: url(${Background1x});
z-index:1;
position:relative;
`
export const ShpinashImg = styled.div`
min-height: 944px;
background-image: url(${SpinashImg});
background-repeat: no-repeat;
background-position:top 10% right -10%;
${'' /* z-index: 5; */}
`
export const BlockPlateImg = styled.div`
min-height: 944px;
background-image: url(${PlateImg});
background-repeat: no-repeat;
background-position:top 30% right 15%;
${'' /* z-index: 6; */}
`
export const HeroTitle = styled.h1`
`