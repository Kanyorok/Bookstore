import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_RETRIEVE = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rbRLSUyFBdSpIyQHGv9w/books';

export const retrieveBooks = createAsyncThunk('books/retrieveBooks', async () => {
  try {
    const retrievedData = await axios.get(API_RETRIEVE);
    const books = Object.keys(retrievedData.data).map((key) => ({
      item_id: key,
      ...retrievedData.data[key][0],
    }));
    return books;
  } catch (error) {
    throw Error(error);
  }
});

export const addNewBook = createAsyncThunk('books/addNewBook', async (data) => {
  try {
    const retrievedData = await axios.post(API_RETRIEVE, data);
    return [retrievedData.data, data];
  } catch (error) {
    throw Error(error);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (data) => {
  try {
    const retrievedData = await axios.delete(`${API_RETRIEVE}/${data}`);
    return [retrievedData.data, data];
  } catch (error) {
    throw Error(error);
  }
});

const initialState = {
  books: [],
  loading: 'idle',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    availableCategories: (state, action) => {
      const category = action.payload;
      state.books = state.books.filter((book) => book.category === category);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveBooks.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(retrieveBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = 'succeded';
      })
      .addCase(retrieveBooks.rejected, (state) => {
        state.loading = 'failed';
      })
      .addCase(addNewBook.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.books.push(action.payload[1]);
        state.loading = 'adding new book succeeded';
      })
      .addCase(addNewBook.rejected, (state) => {
        state.loading = 'failed to load books';
      })
      .addCase(removeBook.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const itemId = action.payload[1];
        state.books = state.books.filter((item) => item.item_id !== itemId);
        state.loading = 'succeded';
      })
      .addCase(removeBook.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export const { availableCategories } = booksSlice.actions;

export default booksSlice.reducer;
