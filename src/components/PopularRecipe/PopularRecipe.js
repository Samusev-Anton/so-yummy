import * as React from 'react';
import { getPopularRecipesAPI } from 'services/API/Recipes';
// import { useDispatch } from 'react-redux';
import { PopularItem, RecipeTitle, RecepiImg, RecipeText, PopularTitle } from '../AddRecipeForm/AddRecipeForm.styled'

export const PopularRecipe = () => {
  const [popularRecipe, setPopularRecipe] = React.useState([]);
  React.useEffect(() => {
    getPopularRecipesAPI().then(data => {
      setPopularRecipe(data);
    });
  }, []);
  return (
    <div>
      <PopularTitle style={{ marginBottom: '40px'}}>Popular recipe</PopularTitle>
      <div style={{ width: '319px', height: '528px' }}>
        <ul style={{ listStyle: 'none' }}>
          {popularRecipe.map(recipe => (
            <PopularItem
              key={recipe._id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <RecepiImg src={recipe.preview} alt={recipe.title} width="85" />
              <div style={{paddingLeft: '10px'}}>
                <RecipeTitle
                  style={{
                    fontSize: '16px',
                    padding: 0,
                    marginBottom: '3px',
                    marginTop: '0px',
                    width: '198px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {recipe.title}
                </RecipeTitle>
                <RecipeText
                  style={{
                    fontSize: '12px',
                    width: '198px',
                    height: '56px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'wrap',
                  }}
                >
                  {recipe.description}
                </RecipeText>
              </div>
            </PopularItem>
          ))}
        </ul>
      </div>
    </div>
  );
};
