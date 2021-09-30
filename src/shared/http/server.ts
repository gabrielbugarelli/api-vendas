import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import routes from './routes/index'
import AppError from './errors/AppError'
import "@shared/typeorm"

const app = express()

app.use(cors())
app.use(express.json())

//routes
app.use(routes)

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

const PORT: number = 3000
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
