import {
  FavRecipeItem,
  RecipeImage,
  RecipeTitle,
  RecipeDescription,
  RecipePrepTime,
  DeleteButton,
  SeeRecipeBtn,
  FavRecipeTopInfo,
} from './MyRecipe.Styled';
import { ReactComponent as Icon } from '../../images/trashIcon-light.svg';

export const MyRecipe = ({ recipe, onRemove, onSee }) => {
  const handleRemove = () => {
    onRemove(recipe.id);
  };

  const handleSeeReciepe = () => {
    onSee(recipe.id);
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

      <DeleteButton onClick={handleRemove}>
        <Icon />
      </DeleteButton>
      <SeeRecipeBtn onClick={handleSeeReciepe}>See Recipe</SeeRecipeBtn>
    </FavRecipeItem>
  );
};
