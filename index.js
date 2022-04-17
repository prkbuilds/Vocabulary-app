// Importing Modules
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Importing Connection details
require('dotenv').config()

// Connecting Middleware
const app = express()
app.use(express.json())
app.use(cors())

// Connecting MongoDB Datbase
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))

// Hosting Servers & Connecting Routes
const wordsRouter = require('./routes/words')
app.use('/', wordsRouter)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening on PORT : ${port}`)
})
