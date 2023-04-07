import React from 'react';
import { MyRecipe } from '../../components/MyRecipe/MyRecipe';
import { Container } from 'components/GlobalStyles';
import {
  RecipeList,
  FavoritePageTitle,
  FavoritePageThumb,
} from './MyRecipesPage.Styled';
import { TitleConteiner } from 'components/MainPageTitle/MainPageTitle/MainPageTitle.styled';

// import { getFavoriteRecipesAPI } from '../../services/API/Recipes';

// const fav = getFavoriteRecipesAPI()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(console.error);

// fav();

const myRecipes = [
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

export const MyRecipesPage = () => {
  return (
    <Container>
      <TitleConteiner></TitleConteiner>
      <FavoritePageThumb>
        <FavoritePageTitle>My recipes</FavoritePageTitle>
        <RecipeList>
          {myRecipes.map(recipe => (
            <MyRecipe key={recipe.id} recipe={recipe} />
          ))}
        </RecipeList>
      </FavoritePageThumb>
    </Container>
  );
};
