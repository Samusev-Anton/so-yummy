import { CategoryList } from 'components/CategoryList/CategoryList';
import { CategoryRecipes } from 'components/CategoryRecipes/CategoryRecipes';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';

export const CategoriesPage = () => {
  return (
    <div>
      <MainPageTitle value="Categories"></MainPageTitle>
      <CategoryList />
      <CategoryRecipes />
    </div>
  );
};
