import * as React from 'react';
import {
  TitleBlock,
  Title,
  FooterNav,
  FooterNavList,
  FooterStyle,
  Link,
  Logo,
} from './Footer.styled';
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';
import { FollowUs } from '../FollowUs/FollowUs';

export const Footer = () => {
  return (
    <FooterStyle>
      <TitleBlock>
        <Logo />
        <Title>So Yummy</Title>
      </TitleBlock>
      <FooterNav>
        <FooterNavList>
          <Link to="/search">Ingredients</Link>
          <Link to="/add">Add recipes</Link>
          <Link to="/my">My recipes</Link>
          <Link to="/favorite">Favorite</Link>
          <Link to="/shopping-list">Shopping list</Link>
        </FooterNavList>
      </FooterNav>
      <SubscribeForm />
      <FollowUs />
    </FooterStyle>
  );
};
