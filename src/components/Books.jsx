import React, { useState, useEffect } from 'react';
import Specificbook from './Specificbook';
import books from '../Data/Booksdata';

const Books = () => {
  const [booksLoading, setBooksLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setBooksLoading(false);
    }, 2000);
  }, []);

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
              <input className="border-2 border-gray-400" placeholder="Book Title" type="text" />
              <input className="border-2 border-gray-400 ml-5" placeholder="Author" type="text" />
            </label>
            <button className="border-2 border-black ml-5 px-4" type="submit">Add Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Books;
