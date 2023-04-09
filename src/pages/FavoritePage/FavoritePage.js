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

  return (
    <Container>
      <TitleConteiner></TitleConteiner>
      <FavoritePageThumb>
        <FavoritePageTitle>Favorites</FavoritePageTitle>
        <RecipeList>
          {data.slice(0, 4).map(recipe => (
            <FavoriteRecipe key={recipe._id} recipe={recipe} />
          ))}
        </RecipeList>
      </FavoritePageThumb>
    </Container>
  );
};

// const favoriteRecipes = [
//   {
//     _id: 1,
//     title: 'Spaghetti Carbonara',
//     preview:
//       'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?resize=768,574',
//     description:
//       'Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, bacon, and black pepper. It is a creamy and satisfying meal that is perfect for any occasion.',
//     time: '30 min',
//   },
//   {
//     _id: 2,
//     title: 'Chicken Alfredo',
//     preview:
//       'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?resize=768,574',
//     description:
//       'Chicken Alfredo is a delicious pasta dish that is made with fettuccine, chicken, and a creamy Parmesan sauce. It is a comforting and filling meal that is perfect for any night of the week.',
//     time: '60 min',
//   },
//   {
//     _id: 3,
//     title: 'Chocolate Chip Cookies',
//     preview:
//       'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?resize=768,574',
//     description:
//       'Chocolate Chip Cookies are a classic dessert that is loved by all. This recipe makes soft and chewy cookies that are loaded with chocolate chips. They are perfect for any occasion and are sure to be a hit with everyone!',
//     time: '60 min',
//   },
//   {
//     _id: 4,
//     title: 'Chocolate Chip Cookies',
//     preview:
//       'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?resize=768,574',
//     description:
//       'Chocolate Chip Cookies are a classic dessert that is loved by all. This recipe makes soft and chewy cookies that are loaded with chocolate chips. They are perfect for any occasion and are sure to be a hit with everyone!',
//     time: '60 min',
//   },
// ];
