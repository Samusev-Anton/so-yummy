import * as React from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { getRecipesIngredients } from '../../redux/selectors';
import { Ingredient } from 'components/Ingredient/Ingredient';
import { SectionTitle } from 'components/RecipePreparationFields/RecipePreparationFields.styled';

export const RecipeIngredientsList = searchTerm => {
  //   const dispatch = useDispatch();
  // const ingerdients = useSelector(getRecipesIngredients);

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //   };
  // const arr = [{}];
  return (
    <>
      <SectionTitle>Ingredients</SectionTitle>
      <ul>
        <li>
          <Ingredient searchTerm={searchTerm} />
        </li>
      </ul>
      {/* <ul>
        {ingerdients.map(el => (
          <Ingredient key={el.id} {...el} />
        ))}
      </ul> */}
    </>

import {
  Table,
  Blocks,
  TableHead,
  TableHeadProduct,
  TableHeadNumber,
  TableHeadRemove,
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
} from './RecipeIngredientsList.styled';

export const RecipeIngredientsList = ({ ingredientsList }) => {
  console.log(ingredientsList);
  return (
    <Table>
      <Blocks>
        <TableHead>
          <TableHeadProduct>Ingredients</TableHeadProduct>
          <TableHeadNumber>Number</TableHeadNumber>
          <TableHeadRemove>Add to list</TableHeadRemove>
        </TableHead>
        {ingredientsList.map(item => (
          <TableRow key={item._id}>
            <TableProduct>
              <TableProductBox>
                <img src={item.thb} alt={item.ttl} />
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
                required
              />
              <CheckLabel class="check-label" for={item._id}>
                <Checkbox class="checkbox">
                  <CheckMark />
                </Checkbox>
              </CheckLabel>
            </TableRemove>
          </TableRow>
        ))}

        {/* <TableRow>
          <TableProduct>
            <TableProductBox></TableProductBox>
            <TableProductText>Salmon</TableProductText>
          </TableProduct>
          <TableNumber>
            <TableNumberBox>1 small finely diced</TableNumberBox>
          </TableNumber>
          <TableRemove>
            <InputCheck
              className="input-check visually-hidden"
              type="checkbox"
              name="add"
              id="add2"
              required
            />
            <CheckLabel class="check-label" for="add2">
              <Checkbox class="checkbox">
                <CheckMark />
              </Checkbox>
            </CheckLabel>
          </TableRemove>
        </TableRow> */}
      </Blocks>
    </Table>

    //     {/* {Object.keys(rates).map((key, index) => ( */}
    //     <TableBodyRow>
    //       <td>
    //         <div></div>
    //         <p>Salmon</p>
    //       </td>
    //       <TableNumberItem>
    //         <div>5</div>
    //       </TableNumberItem>
    //       <td>werewtew</td>
    //     </TableBodyRow>
    //     {/* ))} */}
  );
};
