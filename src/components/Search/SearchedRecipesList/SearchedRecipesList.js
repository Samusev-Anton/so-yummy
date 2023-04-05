import { NeedSearching } from '../NeedSearching/NeedSearching';
import { SearchedRecipesListWrap } from './SearchRecipesList.styled';

  export const SearchedRecipesList = (recipes) => {
  console.log(recipes);
  return (
    <div>
      {recipes.length === 0 ? (
        <SearchedRecipesListWrap>
          {recipes.map(recipes => (
            <li key={recipes._id}>
              <img src={recipes.preview} alt={recipes.title}></img>
              <p>{recipes.title}</p>
            </li>
          ))}
        </SearchedRecipesListWrap>
      ) : (
        <NeedSearching />
      )}
    </div>
  );
}; 

