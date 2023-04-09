import { useEffect, useState } from 'react';
import { FavoriteRecipe } from '../../components/FavoriteRecipe/FavoriteRecipe';
import { Container } from 'components/GlobalStyles';
import { RecipeList, FavoritePageThumb } from './FavoritePage.Styled';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import { getFavoriteRecipesAPI } from '../../services/API/Recipes';

function fetchData() {
  return getFavoriteRecipesAPI().then(data => {
    return data.data;
  });
}

export const FavoritePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);

  const handleDelete = recipe => {
    const filteredData = data.filter(item => item._id !== recipe._id);
    setData(filteredData);
  };

  return (
    <Container>
      <FavoritePageThumb>
        <MainPageTitle value="Favorites"></MainPageTitle>
        <RecipeList>
          {data.slice(0, 4).map(recipe => (
            <FavoriteRecipe
              key={recipe._id}
              recipe={recipe}
              onDelete={handleDelete}
            />
          ))}
        </RecipeList>
      </FavoritePageThumb>
    </Container>
  );
};
