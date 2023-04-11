import {
  Table,
  Blocks,
  TableHead,
  TableHeadProduct,
  TableHeadNumber,
  TableHeadRemove,
} from './IngredientsShoppingList.styled';
import { useSelector } from 'react-redux';
import { selectShoppingList } from 'redux/auth/selectors';
import { IngredientItem } from './IngredientItem';

export const IngredientsShoppingList = ({ shoppingList }) => {
  const list = useSelector(selectShoppingList);

  return (
    <Table>
      <Blocks>
        <TableHead>
          <TableHeadProduct>Product</TableHeadProduct>
          <TableHeadNumber>Number</TableHeadNumber>
          <TableHeadRemove>Remove</TableHeadRemove>
        </TableHead>
        {list.map(item => (
          <IngredientItem item={item} />
        ))}
      </Blocks>
    </Table>
  );
};
