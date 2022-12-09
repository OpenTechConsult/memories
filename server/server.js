import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postsRoutes from './routes/posts.js'

const app = express()

app.use(bodyParser.json({
    limit: "30mb",
    extended: true
}))

app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true
}))

app.use(cors())

const CONNECTION_URL = 'mongodb+srv://opentechconsult:QAMC91EY7zMwnxPp@memoriescluster.kehp6.mongodb.net/memoriesdb?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5500

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(err => console.error(err.message))

mongoose.set('strictQuery', true)

app.use('/posts', postsRoutes)
