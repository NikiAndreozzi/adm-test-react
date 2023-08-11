import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const planetsApi = createApi({
    reducerPath: 'planets',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
    endpoints: (builder) => ({
        getPlanets: builder.query({
            query: (id) => `/planets/${id}`,
        }),
    }),
});

export const { useGetPlanetsQuery, useLazyGetPlanetsQuery } = planetsApi;
