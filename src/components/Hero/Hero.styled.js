import styled from "styled-components";
import HeroImg from 'images/Hero.png';
import HeroImg2x from 'images/Hero2x.png'
import HeroImgTablet from 'images/HeroTablet.png'
import HeroImgTablet2x from 'images/HeroTablet2x.png'
import HeroImgMobile from 'images/HeroMobile.png'
import HeroImgMobile2x from 'images/HeroMobile2x.png'
import { NavLink } from 'react-router-dom';

export const SectionHero = styled.section`
position:relative;
font-family: 'Poppins', sans-serif;
height: 777px;
background-image: url(${HeroImgMobile});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
margin-bottom: 60px;
display:flex;

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
export const WrapperText = styled.div`
text-align:left;
`

export const HeroTitle = styled.h1`
font-weight: 400;
font-size: 60px;
line-height: 60px;
text-align: center;
letter-spacing: -0.005em;
color: #22252A;
margin: 132px 12px 0px 12px;
display: flex;
  text-align: center;
  justify-content: center;

@media (min-width: 768px) {
padding-top:0;
margin: 204px 12px 0px 0px;
font-size: 72px;
line-height: 72px;
text-align: left;
justify-content: left;
}


@media (min-width: 1280px) {
font-size: 100px;
line-height: 100px;
${'' /* top:226px;
left:170px; */}

}
`
export const HeroTitleSo = styled.span`
color: #8BAA36;
line-height: 60px;
font-weight: 400;
font-size: 60px;
text-align: center;
letter-spacing: -0.005em;
@media (min-width: 768px) {
    font-size: 72px;
    line-height: 72px;
}
@media (min-width: 1280px) {
line-height: 100px;
font-size: 100px;

}
`
export const HeroTitleYummy = styled.span`
color: ${p => p.theme.colors.sectionHeader}`

export const HeroText = styled.p`

margin: 14px 40px 157px 40px;
font-weight: 400;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.02em;
color: ${p => p.theme.colors.sectionHeader};
text-align: center;

@media (min-width: 768px) {
margin: 24px 0 32px 0;
text-align: left;
width: 362px;
}
@media (min-width: 1280px) {
    margin: 14px 0px 50px 0;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    width:465px;
}
`
export const HeroInputSearch = styled.div`

`
export const HeroRecipeWrapper = styled.div`
width: 225px;

background: #FFFFFF;
border-radius: 8px;

margin-left: 88px;
margin-bottom: 115px;

@media (min-width: 768px) {
    position:absolute;
     bottom:8%;
     right:5%;

}
@media (min-width: 1280px) {

width: 298px;
margin-bottom:150px;
margin-right: 60px;
}
@media (min-width: 1440px) {
    margin-bottom:142px;
margin-right: 100px;
}

`
export const HeroRecipeText = styled.p`
tex-align:left;
color:#3E4462;
font-size: 12px;
line-height: 18px;
letter-spacing: -0.24px;
padding: 8px 8px 0 8px;
@media (min-width: 1280px) {
padding: 16px 16px 0 16px;
font-weight: 500;
font-size: 14px;
line-height: 20px;
letter-spacing: -0.24px;
}
`
export const HeroRecipeLink = styled(NavLink)`
 text-decoration:none;
 font-weight: 400;
font-size: 10px;
line-height: 12px;
display: flex;
align-items: center;
text-align: center;
justify-content: right;
letter-spacing: 0.2px;
color: #3E4462;
margin-top: 7px;
padding-bottom: 8px;
padding-right: 8px;
&:hover{
    color:#8BAA36;
}
@media (min-width: 768px) {
}
@media (min-width: 1280px) {
padding-bottom: 16px;
padding-right: 16px;
}

`
export const HeroRecipeAccent = styled.span`
color:#8BAA36;
@media (min-width: 1280px) {
font-weight: 500;
line-height: 20px;
letter-spacing: -0.24px;

}
`
