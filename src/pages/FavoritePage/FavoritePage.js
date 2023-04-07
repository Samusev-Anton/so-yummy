import React from 'react';
import { FavoriteRecipe } from '../../components/FavoriteRecipe/FavoriteRecipe';
import { Container } from 'components/GlobalStyles';
import {
  RecipeList,
  FavoritePageTitle,
  FavoritePageThumb,
} from './FavoritePage.Styled';

// import { getFavoriteRecipesAPI } from '../services/API/Recipes';

// const fav = getFavoriteRecipesAPI().then(data => {
//   console.log(data);
// });

// console.log(fav);

const favoriteRecipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?resize=768,574',
    description:
      'Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, bacon, and black pepper. It is a creamy and satisfying meal that is perfect for any occasion.',
    prepTime: '30 min',
  },
  {
    id: 2,
    name: 'Chicken Alfredo',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?resize=768,574',
    description:
      'Chicken Alfredo is a delicious pasta dish that is made with fettuccine, chicken, and a creamy Parmesan sauce. It is a comforting and filling meal that is perfect for any night of the week.',
    prepTime: '60 min',
  },
  {
    id: 3,
    name: 'Chocolate Chip Cookies',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?resize=768,574',
    description:
      'Chocolate Chip Cookies are a classic dessert that is loved by all. This recipe makes soft and chewy cookies that are loaded with chocolate chips. They are perfect for any occasion and are sure to be a hit with everyone!',
    prepTime: '60 min',
  },
  {
    id: 4,
    name: 'Chocolate Chip Cookies',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg?resize=768,574',
    description:
      'Chocolate Chip Cookies are a classic dessert that is loved by all. This recipe makes soft and chewy cookies that are loaded with chocolate chips. They are perfect for any occasion and are sure to be a hit with everyone!',
    prepTime: '60 min',
  },
];

export const FavoritePage = () => {
  return (
    <Container>
      <FavoritePageThumb>
        <FavoritePageTitle>Favorites</FavoritePageTitle>
        <RecipeList>
          {favoriteRecipes.map(recipe => (
            <FavoriteRecipe key={recipe.id} recipe={recipe} />
          ))}
        </RecipeList>
      </FavoritePageThumb>
    </Container>
  );
};
