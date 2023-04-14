import { CategoryList } from 'components/CategoryList/CategoryList';
import { CategoryRecipes } from 'components/CategoryRecipes/CategoryRecipes';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import { Container } from '../components/GlobalStyles';

const CategoriesPage = () => {
  return (
    <Container>
      <MainPageTitle value="Categories"></MainPageTitle>
      <CategoryList />
      <CategoryRecipes />
    </Container>
  );
};

export default CategoriesPage;
