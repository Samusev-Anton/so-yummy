import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { CardMeal } from 'components/CardMeal/CardMeal';
import { getMainCategories } from '../../redux/opertions';

import { getContentForMain, isLoadingMainPage } from '../../redux/selectors';

import {
  TitleCatigories,
  ListCatigories,
  ListMeals,
  ItemCategories,
  BtnRecipesLink,
  BtnCategoriesOther,
} from './MainPageRecipes.styled';
import { Container } from 'components/GlobalStyles';
import { Loader } from 'components/Loader/Loader';

export const PreviewCategories = () => {
  const data = useSelector(getContentForMain);
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isLoading = useSelector(isLoadingMainPage);

  useEffect(() => {
    if (data !== null) return;
    dispatch(getMainCategories());
  }, [dispatch, data]);

  let numCard;
  if (isDesktop) {
    numCard = 4;
  } else if (isTablet) {
    numCard = 2;
  } else {
    numCard = 1;
  }



  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <ListCatigories>
        {data &&
          data.map(meal => (
            <ItemCategories key={meal._id}>
              <TitleCatigories>{meal._id}</TitleCatigories>
              <ListMeals>
                {meal.firstFour?.slice(0, numCard).map(ingredient => (
                  <CardMeal key={ingredient._id} meal={ingredient} />
                ))}
              </ListMeals>

              <BtnRecipesLink to={`/categories/${meal._id}`}>
                See all
              </BtnRecipesLink>
            </ItemCategories>
          ))}
      </ListCatigories>
      <BtnCategoriesOther to={`/categories`} onClick={() => {
        window.scrollTo(0, 0);
      }}>
        Other categories
      </BtnCategoriesOther>
    </Container>
  )
};
