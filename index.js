const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Importing Connection details
require('dotenv').config()

// Connecting Middleware
const app = express()
app.use(express.json())
app.use(cors())

if(process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

// Connecting MongoDB Datbase
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))

// Hosting Server & Connecting Routes
const wordsRouter = require('./routes/words')
app.use('/words', wordsRouter)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening on PORT : ${port}`)
})
