import * as React from 'react';
import { useSelector } from 'react-redux';
import { getMode } from '../../redux/theme/themeSelector';
import {
  MainBlock,
  TitleBlock,
  Title,
  FeaturesList,
  Feature,
  FooterMain,
  FooterMainBlock,
  FooterNav,
  FooterNavList,
  FooterStyle,
  Link,
  Logo,
  LogoStyle,
} from './Footer.styled';
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';
import { FollowUsFooter } from '../FollowUs/FollowUsFooter';

export const Footer = () => {
  const { mode } = useSelector(getMode);
  return (
    <FooterStyle mode={mode}>
      <FooterMain>
        <FooterMainBlock>
          <MainBlock>
            <TitleBlock>
              <LogoStyle>
                <Logo />
              </LogoStyle>
              <Title>So Yummy</Title>
            </TitleBlock>
            <FeaturesList>
              <Feature>Database of recipes that can be replenished </Feature>
              <Feature>
                Flexible search for desired and unwanted ingredients
              </Feature>
              <Feature>Ability to add your own recipes with photos</Feature>
              <Feature>Convenient and easy to use</Feature>
            </FeaturesList>
          </MainBlock>
          <FooterNav>
            <FooterNavList>
              <Link to="/search" mode={mode}>
                Ingredients
              </Link>
              <Link to="/add" mode={mode}>
                Add recipes
              </Link>
              <Link to="/my" mode={mode}>
                My recipes
              </Link>
              <Link to="/favorite" mode={mode}>
                Favorite
              </Link>
              <Link to="/shopping-list" mode={mode}>
                Shopping list
              </Link>
            </FooterNavList>
          </FooterNav>
          <SubscribeForm />
        </FooterMainBlock>
      </FooterMain>
      <FollowUsFooter />
    </FooterStyle>
  );
};
