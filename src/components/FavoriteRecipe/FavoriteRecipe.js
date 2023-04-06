import {
  FavRecipeItem,
  RecipeImage,
  RecipeTitle,
  RecipeDescription,
  RecipePrepTime,
  DeleteButton,
  Details,
  SeeRecipe,
} from './FavoriteRecipe.Styled';

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
      <Details>
        <RecipeTitle>{recipe.name}</RecipeTitle>
        <RecipeDescription>{recipe.description}</RecipeDescription>
        <RecipePrepTime>{recipe.prepTime}</RecipePrepTime>
        <SeeRecipe onClick={handleSeeReciepe}>See Recipe</SeeRecipe>
        <DeleteButton onClick={handleRemove}>Remove</DeleteButton>
      </Details>
    </FavRecipeItem>
  );
};
