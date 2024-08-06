import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import useSWR, { mutate } from 'swr'

const Table = () => {
  const fetcher = async () => {
    const response = await axios.get('http://localhost:3333/expense')
    return response.data
  } 

  const { data } = useSWR('expense', fetcher)
  /*if (!data) {
    return <h2>Loading...</h2>
  }
    */
  const length = Array.isArray(data) ? data.length : 0

  const deleteExpense = async expenseId => {
    await axios.delete(`http://localhost:3333/expense/${expenseId}`)
    mutate('expense')
  } 

  return (
    <div className="mt-5 overflow-x-auto relative">
      <table className=" w-full text-sm text-left text-gray-700 border dark:text-gray-400 ">
        <thead className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b">
          <tr>
            {/*<th scope="col" className="py-3 px-6">#</th>*/}
            <th scope="col" className="py-3 px-6 w-[150px] truncate">Date</th>
            <th scope="col" className="py-3 px-6 truncate">Name</th>
            <th scope="col" className="py-3 px-6 truncate">To</th>
            <th scope="col" className="py-3 px-6 truncate">Amount</th>
            <th scope="col" className="py-3 px-6 w-[150px] min-w-[150px] truncate"></th>
          </tr>
        </thead>
        <tbody>
          {length > 0 ?(
              data.map((expense, index) => (
                <tr className=" bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={expense.id}>
                  {/*<td className="py-4 px-6">{index+1}</td>*/}
                  <td className="py-4 px-6 truncate">Tue, Aug 27</td>
                  <td className="py-4 px-6 truncate">{expense.description}</td>
                  <td className="py-4 px-6 truncate">{expense.brand}</td>
                  {parseInt(expense.amount) < 0 ?(
                      <td className="py-4 px-6 truncate">
                        -${Math.abs(parseInt(expense.amount))}
                      </td>
                    ) : (
                      <td className="py-4 px-6 truncate">
                        ${expense.amount}
                      </td>
                    )
                  }
                  {/*
                  <td className="py-2 px-6">
                    {expense.amount}
                  </td> */}
                  <td className="py-4 px-6 ">
                    <Link to={`/edit/${expense.id}`}>
                      <button
                        type="button"
                        className="mr-3 text-sm font-medium text-blue-700 hover:text-blue-800 dark:text-blue-600 dark:hover:text-blue-700">
                        Edit
                      </button>
                    </Link>
                    <button
                        type="button"
                        onClick={() => deleteExpense(expense.id)}
                        className="text-sm font-medium text-red-700 hover:text-red-800 dark:text-red-600 dark:hover:text-red-700">
                        Delete
                    </button>
                    
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td colSpan={4} className="py-4 px-6 text-center">No Expenses</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
