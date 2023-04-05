import { NeedSearching } from '../NeedSearching/NeedSearching';

export const SearchedRecipesList = (recipes) => {
  console.log(recipes);
  return (
    <div>
      {recipes.length === 0 ? (
        <>
          {recipes.map(recipes => (
            <li key={recipes._id}>
              <img src={recipes.preview} alt={recipes.title}></img>
              <p>{recipes.title}</p>
            </li>
          ))}
        </>
      ) : (
        <NeedSearching />
      )}
    </div>
  );
}; 

