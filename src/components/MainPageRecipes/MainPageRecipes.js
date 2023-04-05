import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useMediaQuery } from 'react-responsive';
// import { CardMeal } from 'components/CardMeal/CardMeal';

import { getMainCategories } from '../../redux/opertions';

import { getContentForMain } from '../../redux/selectors';


export const PreviewCategories = () => {
    const mainCategories = useSelector(getContentForMain);
    console.log(getContentForMain)
    const dispatch = useDispatch();
    // const isDesktop = useMediaQuery({ minWidth: 1440 });
    // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

    useEffect(() => {
      if (mainCategories !== null) return;
      dispatch(getMainCategories());
    }, [dispatch, mainCategories]);

    // let numCard;
    // if (isDesktop) {
    //   numCard = 4; // Десктоп
    // } else if (isTablet) {
    //   numCard = 2; // Планшет
    // } else {
    //   numCard = 1; // Мобильный
    // };

    return (
      <ul>
        {mainCategories &&
          Object.entries(mainCategories).map(([category, meals]) => (
            <li key={category}>
              <h1>{category}</h1>
              {/* <>
                {meals.slice(0, numCard).map(meal => (
                  
                  <CardMeal key={meal._id} meal={meal} />
                  
                ))}
              </> */}
            
            </li>
          ))}
      </ul>
    );
}