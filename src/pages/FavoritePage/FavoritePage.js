import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FavoriteRecipe } from '../../components/FavoriteRecipe/FavoriteRecipe';
import { Container } from 'components/GlobalStyles';
import { RecipeList, FavoritePageThumb } from './FavoritePage.Styled';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle/MainPageTitle';
import { getFavoriteRecipesAPI } from '../../services/API/Recipes';
import { deleteFavorite } from '../../redux/opertions';

function fetchData() {
  return getFavoriteRecipesAPI().then(data => {
    return data.data;
  });
}

export const FavoritePage = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);

  const handleDelete = async recipeId => {
    console.log('log on handleDelete');
    await dispatch(deleteFavorite({ recipeId }));
    fetchData().then(data => setData(data));
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
