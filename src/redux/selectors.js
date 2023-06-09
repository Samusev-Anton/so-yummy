
export const getCategories = state => state.recipes.categories;

export const getRecipesOfCategory = state => state.recipes.recipesOfCategory;

export const isLoadingRecipesOfCategory = state => state.recipes.loadingRecipesOfCategory;

export const getContentForMain = state => state.recipes.mainCategories;

export const isLoadingMainPage = state => state.recipes.loadingRecipesMain

export const getIngredients = state => state.ingredients.ingredients;