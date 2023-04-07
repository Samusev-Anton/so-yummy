import { RowTable } from '../../CategoryRecipes/CategoryRecipes.styled';
import { CardMeal } from '../../CardMeal/CardMeal';
import { NeedSearching } from '../NeedSearching/NeedSearching';

export const SearchedRecipesList = ({ recipes }) => {

  return (
    <div>
      {recipes.length > 0 ? (
        <RowTable>
            {recipes.slice(0, 12).map(recipe => (
                <CardMeal meal={recipe} key={recipe._id} />
            ))}
        </RowTable>
      ) : (
        <NeedSearching />
      )}
    </div>
  );
};

