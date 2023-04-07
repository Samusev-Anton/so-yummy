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

export const FavoriteRecipe = ({ recipe, onRemove, onSee }) => {
  const handleRemove = () => {
    onRemove(recipe.id);
  };

  const handleSeeReciepe = () => {
    onSee(recipe.id);
  };

  return (
    <FavRecipeItem>
      <RecipeImage src={recipe.image} alt={recipe.name} />

      <FavRecipeTopInfo>
        <div>
          <RecipeTitle>{recipe.name}</RecipeTitle>
          <RecipeDescription>{recipe.description}</RecipeDescription>
        </div>
        <RecipePrepTime>{recipe.prepTime}</RecipePrepTime>
      </FavRecipeTopInfo>

      <DeleteButton onClick={handleRemove}>
        <Icon />
      </DeleteButton>
      <SeeRecipeBtn onClick={handleSeeReciepe}>See Recipe</SeeRecipeBtn>
    </FavRecipeItem>
  );
};
