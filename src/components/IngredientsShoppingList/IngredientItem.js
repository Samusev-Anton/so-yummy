import {
  TableRow,
  TableProduct,
  TableNumber,
  TableRemove,
  TableProductBox,
  TableProductText,
  TableNumberBox,
  XIcon,
} from './IngredientsShoppingList.styled';
import { useDispatch } from 'react-redux';
import { deleteIngredient } from 'redux/auth/auth-operations.js';
import placeholder from '../../images/shoppingList/Orange.svg';

export const IngredientItem = ({ item }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteIngredient(item._id));
  };

  return (
    <TableRow key={item._id}>
      <TableProduct>
        <TableProductBox>
          <img src={item.thb ? item.thb : placeholder} alt={item.ttl} />
        </TableProductBox>
        <TableProductText>{item.ttl}</TableProductText>
      </TableProduct>
      <TableNumber>
        <TableNumberBox>{item.measure}</TableNumberBox>
      </TableNumber>
      <TableRemove onClick={onClick}>
        <XIcon />
      </TableRemove>
    </TableRow>
  );
};
