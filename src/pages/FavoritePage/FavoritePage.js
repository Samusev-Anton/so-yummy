import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FavoriteRecipe } from '../../components/FavoriteRecipe/FavoriteRecipe';
import { Container } from 'components/GlobalStyles';
import { RecipeList, FavoritePageThumb } from './FavoritePage.Styled';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import { Pagination } from '../../components/Pagination/Pagination';
import { PaginationWrapper } from '../../components/Pagination/Pagination.styled';
import { getFavoriteRecipesAPI } from '../../services/API/Recipes';
import { deleteFavorite } from '../../redux/opertions';

function fetchData() {
  return getFavoriteRecipesAPI().then(data => {
    return data.data;
  });
}

export const FavoritePage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);

  const handleDelete = async recipeId => {
    await dispatch(deleteFavorite({ recipeId }));
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
        <MainPageTitle value="Favorites"></MainPageTitle>
        <RecipeList>
          {getPaginatedData().map(recipe => (
            <FavoriteRecipe
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
