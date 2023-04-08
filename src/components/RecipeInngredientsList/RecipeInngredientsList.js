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
} from './RecipeInngredientsList.styled';

export const RecipeInngredientsList = () => {
  return (
    <Table>
      <Blocks>
        <TableHead>
          <TableHeadProduct>Ingredients</TableHeadProduct>
          <TableHeadNumber>Number</TableHeadNumber>
          <TableHeadRemove>Add to list</TableHeadRemove>
        </TableHead>
        <TableRow>
          <TableProduct>
            <TableProductBox></TableProductBox>
            <TableProductText>Salmon</TableProductText>
          </TableProduct>
          <TableNumber>
            <TableNumberBox>2 chopped</TableNumberBox>
          </TableNumber>
          <TableRemove>
            <InputCheck
              className="input-check visually-hidden"
              type="checkbox"
              name="add"
              id="add1"
              required
            />
            <CheckLabel class="check-label" for="add1">
              <Checkbox class="checkbox">
                <CheckMark />
              </Checkbox>
            </CheckLabel>
          </TableRemove>
        </TableRow>
        <TableRow>
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
        </TableRow>
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
