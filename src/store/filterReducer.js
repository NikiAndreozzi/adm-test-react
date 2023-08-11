import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterName: (state, action) => {
            const { payload } = action;

            state.name = payload;
        },
    },
});

export const { filterName } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
