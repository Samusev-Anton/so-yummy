import { useState, useEffect } from 'react';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList/RecipeIngredientsList';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { useParams } from 'react-router-dom';
import { getRecipesById } from 'services/API/Recipes';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';

export const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipeDescription, setRecipeDescription] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    getRecipesById(recipeId).then(data => {
      setRecipeDescription(data.data.recipe[0]);
      setIngredientsList(data.data.recipe[0].ingredients);
      // console.log(data.data.recipe[0]);
    });
  }, [recipeId]);

  return (
    <>
      <RecipePageHero recipeDescription={recipeDescription} />
      <RecipeIngredientsList ingredientsList={ingredientsList} />
      <RecipePreparation recipeDescription={recipeDescription} />{' '}
    </>
  );
};
