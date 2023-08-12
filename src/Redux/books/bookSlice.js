import { createSlice } from '@reduxjs/toolkit';
import books from '../../Data/Booksdata';

const initialState = {
  books,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((books) => books.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
