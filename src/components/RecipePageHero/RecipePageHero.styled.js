import styled from 'styled-components';
import img from '../../images/recipeDesc/flat-lay-assortment-vegetables-1x-mob.jpg';
import img2 from '../../images/recipeDesc/flat-lay-assortment-vegetables-1x-tab.jpg';
import img3 from '../../images/recipeDesc/flat-lay-assortment-vegetables-1x-deks.jpg';
import { AccessTime } from '@styled-icons/material/AccessTime';

export const RecipeHeroBox = styled.div`
  max-width: 100%;
  min-height: 455px;
  margin-bottom: 29px;
  padding: 144px 0px 90px 0px;
  background-image: url(${img});

  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    min-height: 495px;
    margin-bottom: 50px;
    padding: 136px 0px 32px 0px;
    background-image: url(${img2});
  }

  @media (min-width: 1280px) {
    min-height: 493px;
    padding: 164px 0px 32px 0px;
    background-image: url(${img3});
  }
`;

export const RecipeHeroWrapper = styled.div`
  max-width: 303px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 506px;
  }

  @media (min-width: 1280px) {
    max-width: 656px;
  }
`;

export const HeroButton = styled.button`
  display: block;
  margin: 0 auto;
  border-radius: 20px 42px;
  border: 1px solid #8baa36;
  padding: 10px 18px;
  background-color: transparent;

  // transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  font-size: 10px;
  line-height: 1.5;
  color: #22252a;
  margin-bottom: 42px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #8baa36;
    color: #fafafa;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    margin-bottom: 60px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 48px;
  }
`;

export const RecipeHeroTitle = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #8baa36;

  margin-bottom: 18px;

  @media (min-width: 768px) {
    font-size: 44px;
    margin-bottom: 24px;
  }
`;

export const RecipeHeroText = styled.p`
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  letter-spacing: -0.02em;
  color: #22252a;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 30px;
  }
`;

export const HeroTimeBox = styled.div`
  display: flex;
  justify-content: center;
  color: #23262a;
`;

export const HeroTimeIcon = styled(AccessTime)`
  width: 14px;
  margin-right: 4px;

  @media (min-width: 768px) {
    width: 20px;
    margin-right: 8px;
  }
`;

export const HeroTime = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`;
