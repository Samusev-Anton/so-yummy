import { useEffect, useState } from 'react';
import { FavoriteRecipe } from '../../components/FavoriteRecipe/FavoriteRecipe';
import { Container } from 'components/GlobalStyles';
import {
  RecipeList,
  FavoritePageTitle,
  FavoritePageThumb,
} from './FavoritePage.Styled';
import { TitleConteiner } from 'components/MainPageTitle/MainPageTitle/MainPageTitle.styled';

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
      <TitleConteiner></TitleConteiner>
      <FavoritePageThumb>
        <FavoritePageTitle>Favorites</FavoritePageTitle>
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
