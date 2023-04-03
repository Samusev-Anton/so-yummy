import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { recipesReducer } from './slices';
import { authReducer } from './auth/AuthSlice';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const recipesPersistConfig = {
  key: 'recipes',
  storage,
  whitelist: ['categories', 'recipesOfCategory'],
};

const persistedRecipesReducer = persistReducer(
  recipesPersistConfig,
  recipesReducer
);

export const store = configureStore({
  reducer: {
    recipes: persistedRecipesReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
