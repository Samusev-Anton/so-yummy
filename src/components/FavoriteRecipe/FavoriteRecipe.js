import { Link } from 'react-router-dom';
import {
  FavRecipeItem,
  RecipeImage,
  RecipeTitle,
  RecipeDescription,
  RecipePrepTime,
  DeleteButton,
  SeeRecipeBtn,
  FavRecipeTopInfo,
} from './FavoriteRecipe.Styled';
import { ReactComponent as Icon } from '../../images/trashIcon-dark.svg';

export const FavoriteRecipe = ({ recipe, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(recipe);
  };

  return (
    <FavRecipeItem>
      <RecipeImage src={recipe.preview} alt={recipe.title} />

      <FavRecipeTopInfo>
        <div>
          <RecipeTitle>{recipe.title}</RecipeTitle>
          <RecipeDescription>{recipe.description}</RecipeDescription>
        </div>
        <RecipePrepTime>{recipe.time} min</RecipePrepTime>
      </FavRecipeTopInfo>

      <DeleteButton onClick={handleDeleteClick}>
        <Icon />
      </DeleteButton>
      <Link to={`/recipe/${recipe._id}`}>
        <SeeRecipeBtn>See Recipe</SeeRecipeBtn>
      </Link>
    </FavRecipeItem>
  );
};