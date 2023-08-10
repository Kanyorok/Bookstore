import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryItems: [],
  status: 'under construction',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    statusUpdate: (state) => state.status,
  },
});

export const { statusUpdate } = categorySlice.actions;

export default categorySlice.reducer;
