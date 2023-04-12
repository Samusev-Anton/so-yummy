import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: '',
    },
    reducers: {
        setSearch: (_, { payload }) => ({
            search: payload,
            }),
    },
});

export const { setSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
