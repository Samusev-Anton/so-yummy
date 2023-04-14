import * as React from 'react';
import { Link } from 'react-router-dom';

import { getPopularRecipesAPI } from 'services/API/Recipes';
// import { useDispatch } from 'react-redux';
import {
  PopularItem,
  RecipeTitle,
  RecepiImg,
  RecipeText,
  PopularTitle,
  PopularList,
} from '../AddRecipeForm/AddRecipeForm.styled';

export const PopularRecipe = () => {
  const [popularRecipe, setPopularRecipe] = React.useState([]);
  const firstTwoRecipes = popularRecipe.slice(0, 2);

  React.useEffect(() => {
    getPopularRecipesAPI().then(data => {
      setPopularRecipe(data);
    });
  }, []);
  return (
    <div>
      <PopularTitle>Popular recipe</PopularTitle>
      <div id="4" style={{ display: 'flex' }}>
        <PopularList>
          {popularRecipe.map(recipe => (
            <Link
              to={`/recipe/${recipe._id}`}
              style={{ textDecoration: 'none' }}
              key={recipe._id}
            >
              <PopularItem key={recipe._id}>
                <RecepiImg src={recipe.preview} alt={recipe.title} />
                <div>
                  <RecipeTitle>{recipe.title}</RecipeTitle>
                  <RecipeText>{recipe.description}</RecipeText>
                </div>
              </PopularItem>
            </Link>
          ))}
        </PopularList>
      </div>
      <div id="2" style={{ display: 'none' }}>
        <PopularList>
          {firstTwoRecipes.map(recipe => (
            <Link
              to={`/recipe/${recipe._id}`}
              style={{ textDecoration: 'none' }}
              key={recipe._id}
            >
              <PopularItem key={recipe._id}>
                <RecepiImg src={recipe.preview} alt={recipe.title} />
                <div>
                  <RecipeTitle>{recipe.title}</RecipeTitle>
                  <RecipeText>{recipe.description}</RecipeText>
                </div>
              </PopularItem>
            </Link>
          ))}
        </PopularList>
      </div>
      <style>
        {`
      @media screen and (min-width: 768px) and (max-width: 1280px) {
        div[id*="2"] {
          display: flex !important;
                 }
      }
      
      `}

        {`@media screen and (min-width: 768px) and (max-width: 1280px) {
       div[id*="4"] {
         display: none !important;
                }
     }`}
      </style>
    </div>
  );
};
