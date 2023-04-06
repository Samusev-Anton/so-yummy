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
  XIcon,
} from './IngredientsShoppingList.styled';

export const IngredientsShoppingList = () => {
  return (
    <Table>
      <Blocks>
        <TableHead>
          <TableHeadProduct>Product</TableHeadProduct>
          <TableHeadNumber>Number</TableHeadNumber>
          <TableHeadRemove>Remove</TableHeadRemove>
        </TableHead>
        <TableRow>
          <TableProduct>
            <TableProductBox></TableProductBox>
            <TableProductText>Salmon</TableProductText>
          </TableProduct>
          <TableNumber>
            <TableNumberBox>5</TableNumberBox>
          </TableNumber>
          <TableRemove>
            <XIcon />
          </TableRemove>
        </TableRow>
        <TableRow>
          <TableProduct>
            <TableProductBox></TableProductBox>
            <TableProductText>Salmon</TableProductText>
          </TableProduct>
          <TableNumber>
            <TableNumberBox>5</TableNumberBox>
          </TableNumber>
          <TableRemove>
            <XIcon />
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
