import { useDispatch, useSelector } from 'react-redux';
import {
  addFavRecipe,
  deleteFavRecipe,
} from 'redux/ShoppingList/operations.js';
import {
  RecipeHeroBox,
  HeroButton,
  RecipeHeroTitle,
  RecipeHeroText,
  HeroTimeBox,
  HeroTimeIcon,
  HeroTime,
  RecipeHeroWrapper,
} from './RecipePageHero.styled.js';
import { Container } from 'components/GlobalStyles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { selectfavRecipies } from 'redux/auth/selectors';

export const RecipePageHero = ({ recipeDescription }) => {
  const [isAdded, setIsAdded] = useState(false);

  const recipesFav = useSelector(selectfavRecipies);
  const { recipeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const isAdd = recipesFav.indexOf(recipeId);
    if (isAdd === -1) {
      setIsAdded(false);
    } else {
      setIsAdded(true);
    }
  }, [recipeId, recipesFav]);

  const handleClickAdd = () => {
    dispatch(addFavRecipe(recipeId));
  };

  const handleClickRemove = () => {
    dispatch(deleteFavRecipe(recipeId));
  };

  return (
    <RecipeHeroBox>
      <Container>
        <RecipeHeroWrapper>
          <RecipeHeroTitle>{recipeDescription.title}</RecipeHeroTitle>
          <RecipeHeroText>{recipeDescription.description}</RecipeHeroText>
        </RecipeHeroWrapper>
        {isAdded ? (
          <HeroButton onClick={handleClickRemove} type="button">
            Remove from favorite recipes
          </HeroButton>
        ) : (
          <HeroButton onClick={handleClickAdd} type="button">
            Add to favorite recipes
          </HeroButton>
        )}
        {recipeDescription.time && (
          <HeroTimeBox>
            <HeroTimeIcon />
            <HeroTime>{recipeDescription.time} min</HeroTime>
          </HeroTimeBox>
        )}
      </Container>
    </RecipeHeroBox>
  );
};
