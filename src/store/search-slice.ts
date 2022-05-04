import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    text: '',
  },
  reducers: {
    clearSearch(_) {
      _.text = '';
    },

    setSearch(_, { payload: query }) {
      console.log(query);
      _.text = query;
    },
  },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
