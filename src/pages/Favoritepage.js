import React from 'react';
import styled from 'styled-components';

const FavoriteRecipes = ({ recipes, handleDelete }) => {
  return (
    <div>
      <h2>Favorite Recipes</h2>
      <RecipeList>
        {recipes.map(recipe => (
          <FavRecipeItem key={recipe.id}>
            <RecipeImage src={recipe.image} alt={recipe.title} />
            <RecipeDetails>
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <RecipeDescription>{recipe.description}</RecipeDescription>
              <RecipePrepTime>
                Preparation time: {recipe.prepTime} minutes
              </RecipePrepTime>
            </RecipeDetails>
            <DeleteButton onClick={() => handleDelete(recipe.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#EBF3D4"
                  d="M16.318 5.308l2.707 2.707-4.025 4.025 4.025 4.025-2.707 2.707-4.025-4.025-4.025 4.025-2.707-2.707 4.025-4.025-4.025-4.025 2.707-2.707 4.025 4.025 4.025-4.025z"
                />
              </svg>
            </DeleteButton>
          </FavRecipeItem>
        ))}
      </RecipeList>
    </div>
  );
};

const RecipeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FavRecipeItem = styled.li`
  display: flex;
  align-items: center;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const RecipeImage = styled.img`
  width: 124px;
  height: 124px;
  margin-right: 14px;
`;

const RecipeDetails = styled.div`
  flex: 1;
`;

const RecipeTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.24px;
  margin: 0;
  margin-bottom: 6px;
`;

const RecipeDescription = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  margin: 0;
  margin-bottom: 10px;
`;

const RecipePrepTime = styled.p`
  font-size: 10px;
  line-height: 14px;
  letter-spacing: -0.24px;
  margin: 0;
`;

const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: #ebf3d4;
  border: none;
  border-radius: 4px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #333;
    width: 16px;
    height: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default FavoriteRecipes;
