import * as React from 'react';
import { getPopularRecipesAPI } from 'services/API/Recipes';
// import { useDispatch } from 'react-redux';

export const PopularRecipe = () => {
  const [popularRecipe, setPopularRecipe] = React.useState([]);
  React.useEffect(() => {
    getPopularRecipesAPI().then(data => {
      setPopularRecipe(data);
    });
  }, []);
  return (
    <>
      <div style={{ width: '319px', height: '528px' }}>
        <ul style={{ listStyle: 'none' }}>
          {popularRecipe.map(recipe => (
            <li
              key={recipe._id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <img src={recipe.preview} alt={recipe.title} width="85" />
              <div style={{paddingLeft: '10px'}}>
                <h2
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
                </h2>
                <p
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
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
