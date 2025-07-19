import express from 'express'
import dotenv from 'dotenv'
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'

// Config of env
dotenv.config()

// Config of app
const app = express()

// Read data body
app.use(express.json())

// DB connection
db()

// Middlewares
app.use('/api/services', servicesRoutes)

// Server PORT
const PORT = process.env.PORT || 4000

// Start app
app.listen(PORT, ()=> {
    console.log('The server is running on port:', PORT)
})