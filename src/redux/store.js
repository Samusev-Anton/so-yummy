import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { recipesReducer } from './slices';

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
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
