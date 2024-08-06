import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'


const EditExpense = () => {
  const [description, setDescription] = useState('')
  const [brand, setBrand] = useState('')
  const [amount, setAmount] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const getExpenseById = async () => {
      const response = await axios.get(`http://localhost:3333/expense/${id}`)
      setDescription(response.data.description)
      setBrand(response.data.brand)
      setAmount(response.data.amount)
    }
    getExpenseById()
  }, [id])

  const updateExpense = async e => {
    e.preventDefault()
    await axios.patch(`http://localhost:3333/expense/${id}`, { description: description, brand: brand, amount: parseInt(amount)})
    navigate('/')
  }

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-lg sm:shadow sm:border">
      <h1>Edit expense</h1>
      <form onSubmit={updateExpense}>
          <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Description
              </label>
              <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Product name"
                  required
              />
          </div>
          <div className="mb-6">
              <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Brand
              </label>
              <input
                  type="text"
                  id="brand"
                  value={brand}
                  onChange={e => setBrand(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Product brand"
                  required
              />
          </div>
          <div className="mb-6">
              <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Amount
              </label>
              <input
                  type="text"
                  id="amount"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Expense amount"
                  required
              />
          </div>
          <button
              type="submit"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              Save
          </button>
          <Link to="/">
              <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  Cancel
              </button>
          </Link>
      </form>
    </div>
  )
}

export default EditExpense