import {
  Table,
  Blocks,
  TableHead,
  TableHeadProduct,
  TableHeadNumber,
  TableHeadRemove,
} from './RecipeIngredientsList.styled';
import { Container } from 'components/GlobalStyles';

import { IngredientItem } from './IngridientItem';

export const RecipeIngredientsList = ({ ingredientsList, recipeId }) => {
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
            <IngredientItem
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
