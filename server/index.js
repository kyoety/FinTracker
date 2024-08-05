import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ExpenseRoute from './routes/ExpenseRoute.js'
dotenv.config()

const app = express()
const port = process.env.APP_PORT || 3333

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
      res.send('Hello World!')
})
app.use(ExpenseRoute)

app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
})
  
export default app

