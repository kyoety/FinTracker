import express from 'express'
import { getExpenses, getExpenseById, createExpense, updateExpense, deleteExpense } from  '../controller/ExpensesController.js'

const router = express.Router()

router.get('/expense', getExpenses)
router.get('/expense/:id', getExpenseById)
router.post('/expense', createExpense)
router.patch('/expense/:id', updateExpense)
router.delete('/expense/:id', deleteExpense)

export default router