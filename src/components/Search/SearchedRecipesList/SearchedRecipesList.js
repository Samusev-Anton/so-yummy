import { NeedSearching } from '../NeedSearching/NeedSearching';

export const SearchedRecipesList = (recipes) => {
  console.log(recipes);
  return (
    <div>
      {recipes.length > 0 ? (
        <>
        <div>Список рецептів</div>
          {recipes.map(([...data]) => (
            <li key={data._id}>
              <img src={data.preview} alt={data.title}></img>
              <p>{data.title}</p>
            </li>
          ))}
        </>
      ) : (
        <NeedSearching />
      )}
    </div>
  );
}; 

