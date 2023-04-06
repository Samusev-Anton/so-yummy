import { IngredientsShoppingList } from 'components/IngredientsShoppingList/IngredientsShoppingList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';

export const ShoppingListPage = () => {
  return (
    <>
      <MainPageTitle value="Shopping list"></MainPageTitle>
      <IngredientsShoppingList></IngredientsShoppingList>
    </>
  );
};
