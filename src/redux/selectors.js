
export const getCategories = state => state.recipes.categories;

export const getRecipesOfCategory = state => state.recipes.recipesOfCategory;

export const isLoadingRecipesOfCategory = state => state.recipes.loadingRecipesOfCategory;

export const getContentForMain = state => state.recipes.mainCategories;

export const selectsearchedRecipes = state => state.search.searchedRecipes;

export const selectIsLoading = state => state.search.isLoading;

export const selectError = state => state.search.error;
