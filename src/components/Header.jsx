import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import userIcon from '../assets/usericon.png';

const Header = () => {
  const location = useLocation();
  function isActive(path) {
    if (path === location.pathname) {
      return 'text-black';
    }
    return '';
  }
  return (
    <div className="bg-white border-b">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="flex items-center">
          <h1 className="text-3xl text-[#0290ff] font-bold cursor-pointer">
            <Link to="/">BookStore CMS</Link>
          </h1>
          <div className="ml-5 mt-1">
            <ul className="flex space-x-10">
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${isActive(
                  '/',
                )}`}
              >
                <Link to="/">Books</Link>
              </li>
              <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${isActive(
                  '/categories',
                )}`}
              >
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="icon">
          <img src={userIcon} width="30" alt="User Icon" />
        </div>
      </header>
    </div>
  );
};

export default Header;
