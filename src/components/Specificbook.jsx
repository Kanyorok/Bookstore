import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/books/bookSlice';
import progress from '../assets/progress.png';

const Specificbook = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white border-b shadow-lg rounded-sm w-full mt-3 mb-3 px-5">
      <div className="grid grid-cols-3 gap-4 divide-x-2 divide-[#f7f7f7] divide-solid">
        <div className="flex justify-between col-span-2 sm:col-span-2">
          <div>
            <h3 className="font-Montserrat">{ book.category }</h3>
            <h2>{ book.title }</h2>
            <h4>{ book.author }</h4>
            <ul className="flex space-x-5 divide-x-2 divide-[#f7f7f7] divide-solid mt-6">
              <li className="text-[#4386bf]">Comments</li>
              <li className="px-4">
                <button
                  className="mb-5 px-4 text-[#4386bf]"
                  type="button"
                  onClick={() => {
                    dispatch(removeBook(book.item_id));
                  }}
                >
                  Remove
                </button>
              </li>
              <li className="px-4 text-[#4386bf]">Edit</li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="flex">
              <img src={progress} width="90" alt="progess bar" />
            </div>
            <div>
              <h3 className="text-5xl">
                10%
              </h3>
              <h4>Completed</h4>
            </div>
          </div>
        </div>
        <div className="px-4 col-span-1 sm:col-span-1">
          <h3>Current Chapter</h3>
          <h4>chapter 17</h4>
          <button className="px-2 pb-2 pt-2 text-white bg-[#0290ff]" type="submit">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Specificbook.propTypes = {
  book: PropTypes.shape().isRequired,
};

export default Specificbook;
