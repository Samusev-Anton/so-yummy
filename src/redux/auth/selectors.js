export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;

export const selectToken = state => state.auth.token;

export const selectUserLoggedIn = state => state.auth.isLoggedIn;

export const selectRefreshing = state => state.auth.isRefreshing;

export const getIsSuccess = state => state.auth.isSuccess;

export const selectfavRecipies = state => state.auth.user.favoritsRecipe;

export const selectShoppingList = state => state.auth.user.shoppingList;

export const tempPassword = state => state.auth.temporaryPassword;
