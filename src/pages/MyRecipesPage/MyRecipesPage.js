import { useEffect, useState } from 'react';
import { MyRecipe } from '../../components/MyRecipe/MyRecipe';
import { Container } from 'components/GlobalStyles';
import { RecipeList, FavoritePageThumb } from './MyRecipesPage.Styled';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';

import { getFavoriteRecipesAPI } from '../../services/API/Recipes';

function fetchData() {
  return getFavoriteRecipesAPI().then(data => {
    return data.data;
  });
}

export const MyRecipesPage = () => {
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
        <MainPageTitle value="My recipe"></MainPageTitle>
        <RecipeList>
          {data.slice(0, 4).map(recipe => (
            <MyRecipe
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
