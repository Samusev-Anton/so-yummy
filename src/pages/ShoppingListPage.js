import { IngredientsShoppingList } from 'components/IngredientsShoppingList/IngredientsShoppingList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import { useState, useEffect } from 'react';
import { getShoppingList } from 'services/API/Recipes';
import { Container } from 'components/GlobalStyles';

const ShoppingListPage = () => {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    getShoppingList().then(data => {
      // console.log(data);
      setShoppingList(data.data);
    });
  }, []);

  return (
    <Container>
      <MainPageTitle value="Shopping list"></MainPageTitle>
      <IngredientsShoppingList
        shoppingList={shoppingList}
      ></IngredientsShoppingList>
    </Container>
  );
};

export default ShoppingListPage;
