import { useDispatch } from 'react-redux';
import { addFavRecipe } from 'redux/ShoppingList/operations.js';
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

export const RecipePageHero = ({ recipeDescription }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addFavRecipe(recipeDescription._id));
  };
  return (
    <RecipeHeroBox>
      <RecipeHeroWrapper>
        <RecipeHeroTitle>{recipeDescription.title}</RecipeHeroTitle>
        <RecipeHeroText>{recipeDescription.description}</RecipeHeroText>
      </RecipeHeroWrapper>
      <HeroButton onClick={handleClick} type="button">
        Add to favorite recipes
      </HeroButton>
      <HeroTimeBox>
        <HeroTimeIcon />
        <HeroTime>{recipeDescription.time} min</HeroTime>
      </HeroTimeBox>
    </RecipeHeroBox>
  );
};
