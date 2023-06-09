import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import background from 'images/page-picture.png';

// import background from '../images/flat-lay-assortment-vegetables-with-copy-space 4.png';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Poppins',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }
    #root {
        height: 100vh;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, Poppins,
        monospace;
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        color: ${p => p.theme.colors.justBlack};
        text-decoration: none;
    }
    img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }
    body::-webkit-scrollbar {
        width: 20px;
    }
    body::-webkit-scrollbar-track {
        background-color: transparent;
        margin-top: ${p => p.theme.space[4]}px;
        margin-bottom: ${p => p.theme.space[7]}px;
        opacity: 0;
		border-radius: ${p => p.theme.radii.md};
    }
    body::-webkit-scrollbar-thumb {
        background-color: ${p => p.theme.colors.reallyBisque};
		border-radius: ${p => p.theme.radii.md};
		border: ${p => `${p.theme.borders.medium} ${p.theme.colors.almostDarkGreen}`};
    }
`;

export const Container = styled.div`
  padding: 0 16px;
  position:relative;

  @media (min-width: 768px) {
    padding: 0 32px;
  }
  @media (min-width: 1280px) {
    padding: 0 100px;
  }
`;

const size = {
  mobile: '480',
  tablet: '768',
  desktop: '1280',
};

export const device = {
  mobile: `(min-width: ${size.mobile}px)`,
  mobileOnly: `(max-width: ${size.tablet - 0.02}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  tabletOnly: `(max-width: ${size.desktop - 0.02}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};

export const MainWrap = styled.div`
  margin-top: ${p => p.theme.space[7]}px;
  text-align: center;
`;

export const MainTitle = styled.h1`
  text-align: center;
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.clearlyWhite};
`;

export const SecondTitle = styled.h2`
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.clearlyWhite};
`;

export const WarningMessage = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.reallyBisque};
`;

export const CirclesStyled = {
  color: '#1E90FF',
  width: '70',
  visible: true,
  ariaLabel: 'falling-lines-loading',
};

export const AppBarList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const AppBarItem = styled.li`
  cursor: pointer;
  transition: ${p => p.theme.transition.cubicBezier};
  &:hover {
    transform: ${p => p.theme.transform.scaleThird};
    text-shadow: ${p => p.theme.shadows.shadowSecond};
  }
  &:not(:first-child) {
    margin-left: ${p => p.theme.space[4]}px;
  }
`;

export const UserAuthWrap = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    margin-top: ${p => p.theme.space[3]}px;
  }
`;

export const NavTitle = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.clearlyWhite};
  transition: ${p => p.theme.transition.cubicBezier};
  &.active {
    color: ${p => p.theme.colors.reallyBisque};
  }
`;

export const NavButton = styled(NavLink)`
  display: inline-flex;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.md};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
  color: ${p => p.theme.colors.reallyBisque};
  background-color: ${p => p.theme.colors.almostDarkGreen};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${p => p.theme.colors.almostDarkGreen};
    background-color: ${p => p.theme.colors.reallyBisque};
  }
`;

export const NavToLink = styled(NavLink)`
  color: ${p => p.theme.colors.reallyBisque};
`;

export const ClassicFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 280px;
  margin: 0 auto;
  padding: ${p => p.theme.space[5]}px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
  border-radius: ${p => p.theme.radii.sm};
`;

export const ClassicLabelForm = styled.label`
  position: relative;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.clearlyWhite};
`;

export const ClassicInputForm = styled.input`
  display: block;
  width: 240px;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 35px;
  margin-top: ${p => p.theme.space[2]}px;
  outline: none;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.almostDarkGreen}`};
  border-radius: ${p => p.theme.radii.sm};
  &:first-child {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const ClassicButton = styled.button`
  color: rgb(255, 255, 255);
  border: none;
  font-family: 'Poppins';
  background-color: #8baa36;
  border-radius: 24px 44px;
  ${'' /* position: absolute;
   right: 0; */
  }
  display:flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  height: 43px;
  width: 125px;
  &:hover {
    background-color: #22252a;
    color: #fafafa;
  }
  @media (min-width: 768px) {
    height: 43px;
    width: 141px;
    padding: 13px 32px;
    font-size: 14px;
  }
`;

export const ErrorSection = styled.section`
  text-align: center;
  padding: ${p => p.theme.space[4]}px;
  img {
    padding-bottom: ${p => p.theme.space[5]}px;
    display: block;
    margin: 0 auto;
  }
`;

export const ContactsWrapper = styled.div`
  background-color: #b8bebf;
  padding: ${p => p.theme.space[5]}px;
`;
export const Picture = styled.div`
  background-image: url(${background});
  background-position: left bottom;
  background-repeat: no-repeat;
  ${'' /* background-position: center; */}
  ${'' /* background-size: cover; */}
`;
