import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MyRecipe } from '../../components/MyRecipe/MyRecipe';
import { Container } from 'components/GlobalStyles';
import { RecipeList, FavoritePageThumb } from './MyRecipesPage.Styled';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import { Pagination } from '../../components/Pagination/Pagination';
import { PaginationWrapper } from '../../components/Pagination/Pagination.styled';
import { getMyRecipesAPI } from '../../services/API/Recipes';
import { deleteMyRecipe } from '../../redux/opertions';

function fetchData() {
  return getMyRecipesAPI().then(data => {
    return data.data;
  });
}

export const MyRecipesPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);

  const handleDelete = async recipeId => {
    await dispatch(deleteMyRecipe({ recipeId }));
    fetchData().then(data => setData(data));
  };

  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  return (
    <Container>
      <FavoritePageThumb>
        <MainPageTitle value="My recipe"></MainPageTitle>
        <RecipeList>
          {getPaginatedData().map(recipe => (
            <MyRecipe
              key={recipe._id}
              recipe={recipe}
              onDelete={handleDelete}
            />
          ))}
        </RecipeList>
      </FavoritePageThumb>
      <PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </PaginationWrapper>
    </Container>
  );
};
