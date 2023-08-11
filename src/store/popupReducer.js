import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    id: undefined,
};

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        open: (state, action) => {
            const { payload } = action;

            state.isOpen = true;
            state.id = payload;
        },
        close: (state) => {
            state.isOpen = false;
            state.id = undefined;
        },
    },
});

export const { open, close } = popupSlice.actions;

export const popupReducer = popupSlice.reducer;
