import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <h1>Expense Tracker</h1>
      <div>
        <Link to="/add">
          <button 
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >Add Expense
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;