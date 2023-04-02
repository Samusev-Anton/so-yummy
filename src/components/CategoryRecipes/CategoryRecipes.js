import { CardMeal } from 'components/CardMeal/CardMeal';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoriesOperation, getRecipesByCategoryOperation } from 'redux/opertions';
import { getCategories, getRecipesOfCategory, isLoadingRecipesOfCategory } from 'redux/selectors';
import { RowTable } from './CategoryRecipes.styled';

export const CategoryRecipes = () => {
    const dispatch = useDispatch();
    const { categoryName } = useParams();
    const categories = useSelector(getCategories);
    const recipes = useSelector(getRecipesOfCategory);
    const isLoading = useSelector(isLoadingRecipesOfCategory);

    useEffect(() => {
        dispatch(getCategoriesOperation());
    }, [dispatch]);

    useEffect(() => {
        if (categoryName) {
            dispatch(getRecipesByCategoryOperation(categoryName));
        } else if (categories?.length) {
            dispatch(getRecipesByCategoryOperation(categories[0]));
        }
    }, [dispatch, categoryName, categories]);

    return isLoading ? (
        <Loader />
    ) : (
        <RowTable>
            {recipes.slice(0, 8).map(meal => (
                <CardMeal meal={meal} key={meal._id} />
            ))}
        </RowTable>
    );
};
