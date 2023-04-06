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

export const RecipePageHero = () => {
  return (
    <RecipeHeroBox>
      <RecipeHeroWrapper>
        <RecipeHeroTitle>Salmon Avocado Salad</RecipeHeroTitle>
        <RecipeHeroText>
          Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
          pan seared salmon is layered on top of spinach, avocado, tomatoes, and
          red onions. Then drizzled with a homemade lemon vinaigrette.
        </RecipeHeroText>
      </RecipeHeroWrapper>
      <HeroButton type="button">Add to favorite recipes</HeroButton>
      <HeroTimeBox>
        <HeroTimeIcon />
        <HeroTime>20 min</HeroTime>
      </HeroTimeBox>
    </RecipeHeroBox>
  );
};
