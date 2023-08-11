import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { peopleApi } from '../services/people';
import { planetsApi } from '../services/planets';

import { popupReducer } from './popupReducer';
import { filterReducer } from './filterReducer';

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        filter: filterReducer,
        [peopleApi.reducerPath]: peopleApi.reducer,
        [planetsApi.reducerPath]: planetsApi.reducer,
    },
    devTools: import.meta.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([peopleApi.middleware, planetsApi.middleware]),
});

setupListeners(store.dispatch);
