import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { recipesReducer } from './slices';
import { authReducer } from './auth/AuthSlice';
import { searchReducer } from './slices';
import { favRecipiesReducer } from './ShoppingList/slices';

const recipesPersistConfig = {
  key: 'recipes',
  storage,
  whitelist: ['categories', 'recipesOfCategory'],
};

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const searchPersistConfig = {
  key: 'search',
  storage,
  whitelist: ['searchedRecipes'],
};

const persistedRecipesReducer = persistReducer(
  recipesPersistConfig,
  recipesReducer
);

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const persistedSearchReducer = persistReducer(
  searchPersistConfig,
  searchReducer
);

export const store = configureStore({
  reducer: {
    recipes: persistedRecipesReducer,
    auth: persistedAuthReducer,
    search: persistedSearchReducer,
    favRecipies: favRecipiesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
