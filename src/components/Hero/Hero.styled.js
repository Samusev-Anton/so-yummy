import styled from "styled-components";
import HeroImg from 'images/Hero.png';
import HeroImg2x from 'images/Hero2x.png'
import HeroImgTablet from 'images/HeroTablet.png'
import HeroImgTablet2x from 'images/HeroTablet2x.png'
import HeroImgMobile from 'images/HeroMobile.png'
import HeroImgMobile2x from 'images/HeroMobile2x.png'

export const SectionHero = styled.section`
${'' /* width:100%;
margin-left:auto;
margin-right:auto; */}
height: 777px;
background-image: url(${HeroImgMobile});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
margin-bottom: 60px;
z-index:2;

@media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${HeroImgMobile2x});
}
@media (min-width: 768px) {
    height: 640px;
    margin-bottom: 72px;
    background-image: url(${HeroImgTablet});

@media (min-width: 768px),
    screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${HeroImgTablet2x});
}
}
@media (min-width: 1280px) {
    background-image: url(${HeroImg});
    height: 800px;
    margin-bottom: 100px;

@media (min-width: 1280px),
    screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${HeroImg2x});
      }
}
`

export const HeroTitle = styled.h1`
font-weight: 400;
font-size: 60px;
line-height: 60px;
text-align: center;
letter-spacing: -0.005em;
margin: 0;
position:absolute;
left: 20%;
top: 132px;

@media (min-width: 768px) {
padding-top:0;
display:flex;
text-content:center;
align-items:center;
font-size: 100px;
line-height: 100px;

top:226px;
left:170px;

}


@media (min-width: 1280px) {
display:flex;
text-content:center;
align-items:center;
font-size: 100px;
line-height: 100px;
top:226px;
left:170px;

}
`
export const HeroTitleSo = styled.span`
color: #8BAA36;
@media (min-width: 768px) {

}
@media (min-width: 1280px) {
line-height: 100px;
font-weight: 400;
font-size: 100px;
text-align: center;
letter-spacing: -0.005em;
color: #8BAA36
}
`
export const HeroText = styled.p`
position:absolute;
width: 248px;
left: 20%;
top: 206px;
font-weight: 400;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.02em;
color: #23262A;
text-align: center;

@media (min-width: 1280px) {
width: 430px;

font-size: 18px;
line-height: 24px;

top:340px;
left:170px;
text-align: left;
}
`
export const HeroInputSearch = styled.div`
position:absolute;
left: 18%;
top: 650px;
@media (min-width: 1280px) {
top:460px;
left:160px;
}
`
export const HeroRecipeWrapper = styled.div`
width: 225px;
height: 92px;
left: 116px;
top: 435px;
position:absolute;
background: #FFFFFF;
border-radius: 8px;
padding: 8px;
@media (min-width: 1280px) {
top:437px;
right:90px;
width: 298px;
height: 114px;
padding: 16px;
}
`
export const HeroRecipeText = styled.p`
color:#3E4462;

@media (min-width: 1280px) {
font-weight: 500;
${'' /* font-size: 14px; */}
line-height: 20px;
${'' /* letter-spacing: -0.24px; */}
}
`
export const HeroRecipeLink = styled.link`

`
export const HeroRecipeAccent = styled.span`
color:#8BAA36;
@media (min-width: 1280px) {
font-weight: 500;
${'' /* font-size: 14px; */}
line-height: 20px;
${'' /* letter-spacing: -0.24px; */}

}
`
