import { RecipeInngredientsList } from 'components/RecipeInngredientsList/RecipeInngredientsList';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';

export const RecipePage = () => {
  return (
    <>
      <RecipePageHero />
      <RecipeInngredientsList />
      {/* <RecipePreparation /> */}
    </>
  );
};
