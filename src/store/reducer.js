import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { peopleApi } from '../services/people';

export const store = configureStore({
    reducer: {
        [peopleApi.reducerPath]: peopleApi.reducer,
    },
    devTools: import.meta.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(peopleApi.middleware),
});

setupListeners(store.dispatch);
