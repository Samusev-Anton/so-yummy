import { useState, useEffect } from 'react';
import { RecipeDescIngredientsList } from 'components/RecipeDescIngredientsList/RecipeDescIngredientsList';
import { RecipePageHero } from 'components/RecipePageHero/RecipePageHero';
import { useParams } from 'react-router-dom';
import { getRecipesById } from 'services/API/Recipes';
import { RecipePreparation } from 'components/RecipePreparation/RecipePreparation';

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipeDescription, setRecipeDescription] = useState({});
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    getRecipesById(recipeId).then(data => {
      setRecipeDescription(data.data.recipe[0]);
      setIngredientsList(data.data.recipe[0].ingredients);
    });
  }, [recipeId]);

  return (
    <>
      <RecipePageHero recipeDescription={recipeDescription} />
      <RecipeDescIngredientsList
        recipeId={recipeId}
        ingredientsList={ingredientsList}
      />
      <RecipePreparation recipeDescription={recipeDescription} />
    </>
  );
};

export default RecipePage;
