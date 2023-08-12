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
    category: '',
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
        category: bookState.category,
      };

      setBookState({
        title: '',
        author: '',
        category: '',
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
    <>
      <div className="flex flex-col px-3 max-w-6xl mx-auto">
        {booksLoading ? (
          <p>Loading...</p>
        ) : (
          books.map((book) => <Specificbook key={book.title} book={book} />)
        )}
        <hr />
      </div>
      <div className="bg-white mt-4 w-full">
        <div className="bg-white rounded-sm w-full mt-3 px-5 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mt-4">Add New Book</h2>
          <div className="flex w-full mt-3">
            <form className="w-full">
              <label htmlFor="book-title">
                <input className="border-2 w-1/3 border-gray-400 p-4 mr-3" placeholder="Book Title" type="text" value={bookState.title} name="title" required onChange={handleNewBook} />
                <input className="border-2 w-1/3 border-gray-400 p-4 mr-3" placeholder="Author" type="text" value={bookState.author} name="author" onChange={handleNewBook} />
              </label>
              <select className="border-2 border-gray-400 p-4" value={bookState.category} name="category" onChange={handleNewBook} placeholder="Category">
                <option value="">Category</option>
                <option value="Action">Action</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
              </select>
              <button className="ml-5 px-5 pb-5 pt-5 text-white bg-[#0290ff]" type="submit" onClick={handleAddBook}>Add Book</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
