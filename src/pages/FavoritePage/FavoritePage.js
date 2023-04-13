import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { FavoriteRecipe } from '../../components/FavoriteRecipe/FavoriteRecipe';
import { Container } from 'components/GlobalStyles';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import { Pagination } from '../../components/Pagination/Pagination';
import { PaginationWrapper } from '../../components/Pagination/Pagination.styled';
import { getFavoriteRecipesAPI } from '../../services/API/Recipes';
import { deleteFavorite } from '../../redux/opertions';
import { Loader } from 'components/Loader/Loader';
import { getMode } from '../../redux/theme/themeSelector';

import {
  RecipeList,
  FavoritePageThumb,
  FailNotification,
} from './FavoritePage.Styled';

function fetchData() {
  return getFavoriteRecipesAPI().then(data => {
    return data.data;
  });
}

export const FavoritePage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { mode } = useSelector(getMode);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData().then(data => {
      setData(data);
      setIsLoading(false);
    });
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
      <MainPageTitle value="Favorites"></MainPageTitle>
      {isLoading ? (
        <Loader />
      ) : data.length > 0 ? (
        <>
          <FavoritePageThumb>
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
        </>
      ) : (
        <FailNotification mode={mode}>
          Sorry, you haven't added any recipes to favorites yet
        </FailNotification>
      )}
    </Container>
  );
};
