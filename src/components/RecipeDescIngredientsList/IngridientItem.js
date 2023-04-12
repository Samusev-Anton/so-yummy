import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TableRow,
  TableProduct,
  TableNumber,
  TableRemove,
  TableProductBox,
  TableProductText,
  TableNumberBox,
  CheckMark,
  Checkbox,
  InputCheck,
  CheckLabel,
} from './RecipeDescIngredientsList.styled';
import { selectShoppingList } from 'redux/auth/selectors';
import { addIngredient, deleteIngredient } from 'redux/auth/auth-operations.js';
import placeholder from '../../images/shoppingList/Orange.png';

export const IngredientItem = ({ item }) => {
  const list = useSelector(selectShoppingList);
  const [isChecked, setIsChecked] = useState(false);
  const [ingredientInShoppingList, setIngredientInShoppingList] =
    useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const result = list.find(ingredient => ingredient._id === item._id);
    setIngredientInShoppingList(result);
    setIsChecked(!!result);
  }, [item._id, list]);

  const onChange = () => {
    if (!ingredientInShoppingList) {
      dispatch(
        addIngredient({
          desc: item.desc,
          measure: item.measure,
          t: item.desc,
          thb: item.thb,
          ttl: item.ttl,
          _id: item._id,
        })
      );
    } else {
      dispatch(deleteIngredient(item._id));
    }
  };

  return (
    <TableRow key={item._id}>
      <TableProduct>
        <TableProductBox>
          {/* <img src={placeholder} alt={item.ttl} /> */}
        </TableProductBox>
        <TableProductText>{item.ttl}</TableProductText>
      </TableProduct>
      <TableNumber>
        <TableNumberBox>{item.measure}</TableNumberBox>
      </TableNumber>
      <TableRemove>
        <InputCheck
          className="input-check visually-hidden"
          type="checkbox"
          name="add"
          id={item._id}
          onChange={onChange}
          checked={isChecked}
          required
        />
        <CheckLabel className="check-label" for={item._id}>
          <Checkbox className="checkbox">
            <CheckMark />
          </Checkbox>
        </CheckLabel>
      </TableRemove>
    </TableRow>
  );
};
