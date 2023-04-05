import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { recipesReducer } from './slices';
import { authReducer } from './auth/AuthSlice';

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

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    recipes: persistedRecipesReducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);