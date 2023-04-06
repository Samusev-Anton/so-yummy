import { useState, useEffect } from 'react';
import { RecipeInngredientsList } from 'components/RecipeInngredientsList/RecipeInngredientsList';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { useParams } from 'react-router-dom';
import { getRecipesById } from 'services/API/Recipes';

export const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipeDescription, setRecipeDescription] = useState([]);

  useEffect(() => {
    console.log(
      getRecipesById(recipeId).then(data => {
        setRecipeDescription(data.data.recipe[0]);
        console.log(data.data.recipe[0]);
      })
    );
  }, [recipeId]);

  return (
    <>
      <RecipePageHero recipeDescription={recipeDescription} />
      <RecipeInngredientsList ingredientsList={recipeDescription.ingredients} />
      {/* <RecipePreparation /> */}
    </>
  );
};
