import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { recipesReducer } from './slices';
import { authReducer } from './auth/AuthSlice';
import { themeReducer } from './theme/themeSlice';
import { searchReducer } from './search/searchSlice';
import { ingredientsReducer } from './ingredients/ingredientsSlice';

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

const persistedRecipesReducer = persistReducer(
  recipesPersistConfig,
  recipesReducer
);

const themePersistConfig = {
  key: 'theme',
  storage,
};

const searchPersistConfig = {
  key: 'search',
  storage,
};

const ingredientsPersistConfig = {
  key: 'ingredients',
  storage,
  whitelist: ['ingredients'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
const persistedSearchReducer = persistReducer(searchPersistConfig, searchReducer);
const persistedIngredientsReducer = persistReducer(ingredientsPersistConfig,ingredientsReducer);

export const store = configureStore({
  reducer: {
    recipes: persistedRecipesReducer,
    auth: persistedAuthReducer,
    search: persistedSearchReducer,
    theme: persistedThemeReducer,
    ingredients: persistedIngredientsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
