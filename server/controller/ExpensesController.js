import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//This contains all our get and responses (basically functions). You can update the create and edit expense to reflect changes to parameters.

export const getExpenses = async (req, res) => {
    try {
        const response = await prisma.expense.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getExpenseById = async (req,res) => {
    try {
        const response = await prisma.expense.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message})
    }
}

export const createExpense = async (req, res) => {
    const { description, brand, amount} = req.body
    try {
        const expense = await prisma.expense.create({
            data: {
                description: description,
                brand: brand,
                amount: amount,
            },
        })
        res.status(201).json(expense)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateExpense = async (req, res) => {
    const { description, brand, amount } = req.body
    try {
        const expense = await prisma.expense.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                description: description,
                brand: brand,
                amount: amount,
            },
        })
        res.status(200).json(expense)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteExpense = async (req, res) => {
    try {
        const expense = await prisma.expense.delete({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(expense)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
