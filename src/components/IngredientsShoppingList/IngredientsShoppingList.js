import {
  Table,
  Blocks,
  TableHead,
  TableHeadProduct,
  TableHeadNumber,
  TableHeadRemove,
  EmptyList,
} from './IngredientsShoppingList.styled';
import { useSelector } from 'react-redux';
import { selectShoppingList } from 'redux/auth/selectors';
import { IngredientItem } from './IngredientItem';

export const IngredientsShoppingList = () => {
  const list = useSelector(selectShoppingList);

  return (
    <>
      {list.length === 0 && (
        <EmptyList>Sorry, you haven't added any ingredients yet</EmptyList>
      )}
      <Table>
        <Blocks>
          <TableHead>
            <TableHeadProduct>Product</TableHeadProduct>
            <TableHeadNumber>Number</TableHeadNumber>
            <TableHeadRemove>Remove</TableHeadRemove>
          </TableHead>
          {list.map(item => (
            <IngredientItem key={item._id} item={item} />
          ))}
        </Blocks>
      </Table>
    </>
  );
};
