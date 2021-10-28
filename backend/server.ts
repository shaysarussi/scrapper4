import express from 'express'
import dotenv from 'dotenv'
import scrapperRoutes from "./routes/scrapper"
import {notFound,errorHandler} from './middleware/errorMiddleware'


dotenv.config()
const app = express()

app.use(express.json())

app.use('/api/scrape',scrapperRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{console.log(`server running on ${PORT}`)})