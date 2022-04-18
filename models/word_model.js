/* Word Model for storing in words collection */

const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    lexicalEntries: {
        type: Array,
        required: true
    }

})

module.exports = word_model = mongoose.model(
    'words', 
    wordSchema
)