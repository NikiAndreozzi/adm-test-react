/* GET https://swapi.dev/api/people
· GET http://swapi.dev/api/planets/{planetId}/ */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const peopleApi = createApi({
    reducerPath: 'people',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
    endpoints: (builder) => ({
        getPeople: builder.query({
            query() {
                return '/people';
            },
        }),
    }),
});

export const { useGetPeopleQuery } = peopleApi;
