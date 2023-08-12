import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as itemIdV4 } from 'uuid';
import Specificbook from './Specificbook';
import { addNewBook as addBookItem, retrieveBooks } from '../Redux/books/bookSlice';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const [booksLoading, setBooksLoading] = useState(true);
  const [bookState, setBookState] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleNewBook = (e) => {
    e.preventDefault();

    setBookState({
      ...bookState,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (bookState.author && bookState.title) {
      const newBook = {
        item_id: itemIdV4(),
        title: bookState.title,
        author: bookState.author,
        category: 'not-provided',
      };

      setBookState({
        title: '',
        author: '',
      });

      dispatch(addBookItem(newBook));
    }
  };

  useEffect(() => {
    dispatch(retrieveBooks());
    setTimeout(() => {
      setBooksLoading(false);
    }, 2000);
  }, [dispatch]);

  return (
    <div className="flex flex-col px-3 max-w-6xl mx-auto">
      {booksLoading ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => <Specificbook key={book.title} book={book} />)
      )}
      <div className="bg-white border-b shadow-lg rounded-sm w-full mt-3 mb-3 px-5">
        <h2 className="text-2xl font-bold">Add New Book</h2>
        <div className="flex">
          <form className="mb-7">
            <label htmlFor="book-title">
              <input className="border-2 border-gray-400" placeholder="Book Title" type="text" value={bookState.title} name="title" required onChange={handleNewBook} />
              <input className="border-2 border-gray-400 ml-5" placeholder="Author" type="text" value={bookState.author} name="author" onChange={handleNewBook} />
            </label>
            <button className="border-2 border-black ml-5 px-4" type="submit" onClick={handleAddBook}>Add Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Books;
