import PropTypes from 'prop-types';

const Specificbook = ({ book }) => (
  <div className="bg-white border-b shadow-lg rounded-sm w-full mt-3 mb-3 px-5">
    <div className="grid grid-cols-3 gap-4 divide-x-2 divide-yellow-600 divide-solid">
      <div className="flex justify-between col-span-2 sm:col-span-2">
        <div>
          <h3 className="font-Montserrat">{ book.category }</h3>
          <h2>{ book.title }</h2>
          <h4>{ book.author }</h4>
          <ul className="flex space-x-5 divide-x-2 divide-yellow-600 divide-solid mt-6">
            <li>Comments</li>
            <li className="px-4">Remove</li>
            <li className="px-4">Edit</li>
          </ul>
        </div>
        <div>
          <h3>
            { book.completed }
            %
          </h3>
        </div>
      </div>
      <div className="px-4 col-span-1 sm:col-span-1">
        <h3>Current Chapter</h3>
        <h4>{ book.currentChapter }</h4>
      </div>
    </div>
  </div>
);

Specificbook.propTypes = {
  book: PropTypes.shape().isRequired,
};

export default Specificbook;
