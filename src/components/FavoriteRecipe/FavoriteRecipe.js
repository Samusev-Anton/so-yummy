import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getMode } from '../../redux/theme/themeSelector';

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
import { ReactComponent as Icon } from '../../images/trash-icon.svg';

export const FavoriteRecipe = ({ recipe, onDelete }) => {
  const { mode } = useSelector(getMode);
  return (
    <FavRecipeItem mode={mode}>
      <Link to={`/recipe/${recipe._id}`}>
        <RecipeImage src={recipe.preview} alt={recipe.title} />
      </Link>
      <FavRecipeTopInfo>
        <div>
          <RecipeTitle mode={mode}>{recipe.title}</RecipeTitle>
          <RecipeDescription mode={mode}>
            {recipe.description}
          </RecipeDescription>
        </div>
        <RecipePrepTime mode={mode}>{recipe.time} min</RecipePrepTime>
      </FavRecipeTopInfo>

      <DeleteButton onClick={() => onDelete(recipe._id)} mode={mode}>
        <Icon mode={mode} />
      </DeleteButton>
      <Link to={`/recipe/${recipe._id}`}>
        <SeeRecipeBtn mode={mode}>See Recipe</SeeRecipeBtn>
      </Link>
    </FavRecipeItem>
  );
};
