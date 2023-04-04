import styled from "styled-components";

import Background1xMobile from "images/bg2-mobile-1.png"
import Background1x from "images/bg2-1x.png"
import PlateImgMobile from "images/plate-mobile-1x.png"
import PlateImg from "images/plate-1x.png"
import SpinashImgMobile from "images/kisspng-pasta-spinach-dip-english-muffin-breakfast-mobile-1x.png"
import SpinashImg from "images/kisspng-pasta-spinach-dip-english-muffin-breakfast-sandwic-spinach-1x.png"
import SpinashImgLeftMobile from "images/kisspng-pasta-spinach-dip-english-muffin-breakfast-sandwic-spinach-mobile-1x.png"
import SpinashImgLeft from "images/kisspng-pasta-spinach-dip-english-muffin-breakfast-sandwic-left-1x.png"
// import {DebounceInput} from 'react-debounce-input';

export const SectionHero = styled.section`
width:100%;
margin-left:auto;
margin-right:auto;
overflow-y:hidden;
min-height: 800px;
background-image: url(${SpinashImgLeft});
background-repeat: no-repeat;
position:relative;
z-index:2;
`
export const HeroImgBlock = styled.div`
min-height: 912px;
background-position:top right;
background-size: 49%;
background-repeat: no-repeat;
background-image: url(${Background1x});
z-index:1;
${'' /* position:relative; */}
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
background-position:top 25% right 20%;
${'' /* z-index: 6; */}
`
export const HeroTitle = styled.h1`
font-weight: 400;
font-size: 100px;
text-align: center;
letter-spacing: -0.005em;
line-height: 100px;
display:flex;
text-content:center;
align-items:center;
position:absolute;
top:226px;
left:170px;
margin: 0 0;
`
export const HeroTitleSo = styled.span`
line-height: 100px;
font-weight: 400;
font-size: 100px;
text-align: center;
letter-spacing: -0.005em;
color: #8BAA36
`
export const HeroText = styled.p`
width: 430px;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.02em;
color: #23262A;
position:absolute;
top:340px;
left:170px;
text-align: left;
`
export const HeroInputSearch = styled.div`
position:absolute;
top:460px;
left:160px;
`
export const HeroRecipeWrapper = styled.div`
position:absolute;
top:430px;
right:70px;
background: #FFFFFF;
border-radius: 8px;
width: 298px;
height: 114px;
padding: 16px;
`
export const HeroRecipeText = styled.p`
font-weight: 500;
${'' /* font-size: 14px; */}
line-height: 20px;
${'' /* letter-spacing: -0.24px; */}
color:#3E4462;
`
export const HeroRecipeLink = styled.link`

`
export const HeroRecipeAccent = styled.span`
font-weight: 500;
${'' /* font-size: 14px; */}
line-height: 20px;
${'' /* letter-spacing: -0.24px; */}
color:#8BAA36;
`
