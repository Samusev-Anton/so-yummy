import { useEffect, useState } from 'react';
import { MyRecipe } from '../../components/MyRecipe/MyRecipe';
import { Container } from 'components/GlobalStyles';
import { RecipeList, FavoritePageThumb } from './MyRecipesPage.Styled';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import { Pagination } from '../../components/Pagination/Pagination';
import { PaginationWrapper } from '../../components/Pagination/Pagination.styled';

import { getFavoriteRecipesAPI } from '../../services/API/Recipes';

function fetchData() {
  return getFavoriteRecipesAPI().then(data => {
    return data.data;
  });
}

export const MyRecipesPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);

  const handleDelete = recipe => {
    const filteredData = data.filter(item => item._id !== recipe._id);
    setData(filteredData);
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
      < PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </PaginationWrapper>
    </Container>
  );
};
