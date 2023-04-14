import {
  Table,
  Blocks,
  TableHead,
  TableHeadProduct,
  TableHeadNumber,
  TableHeadRemove,
} from './RecipeDescIngredientsList.styled';
import { Container } from 'components/GlobalStyles';

import { RecipeDescIngredientsItem } from './RecipeDescIngredientsItem';

export const RecipeDescIngredientsList = ({ ingredientsList, recipeId }) => {
  return (
    <Container>
      <Table>
        <Blocks>
          <TableHead>
            <TableHeadProduct>Ingredients</TableHeadProduct>
            <TableHeadNumber>Number</TableHeadNumber>
            <TableHeadRemove>Add to list</TableHeadRemove>
          </TableHead>
          {ingredientsList.map(item => (
            <RecipeDescIngredientsItem
              key={item._id}
              recipeId={recipeId}
              ingredientsList={ingredientsList}
              item={item}
            />
          ))}
        </Blocks>
      </Table>
    </Container>
  );
};
