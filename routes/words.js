/* Main words Router */
const Word = require('../models/word_model')

const express = require('express')
const router = express.Router()

require('dotenv').config()

const axios = require('axios')

// Importing New Word from Web & saving in Database
router.post('/', async (req, res) => {
    try {
        const wordId = req.body.word

        // Filtering illegal enteries
        if(wordId === undefined || wordId === null || wordId == "") throw new Error("ERROR : Invalid Word")
        const flag = await Word.find({ "word": wordId })
        if(flag.length > 0) throw new Error("ERROR : Word already exists")
        
        // Making API call to Oxford Dictionary for new word
        const response = await axios({
            url: 'https://od-api.oxforddictionaries.com/api/v2/entries/en-us/'
                + wordId + '?fields=definitions,examples,etymologies',
            method: 'GET',
            headers: {
                'app_id': process.env.APP_ID,
                'app_key': process.env.APP_KEY
            }
        })
        wordRes = response.data.results[0]
        
        // Initializing new word
        const word = {
            word: wordRes.id,
            lexicalEntries: []
        }
        wordRes.lexicalEntries.filter(lexicalEntry => {
            try{
                let l = {
                    lexicalCategory: lexicalEntry.lexicalCategory.id,
                    entry: lexicalEntry.entries[0],
                }
                if(l.entry.etymologies) l.entry.etymologies = l.entry.etymologies[0]
                l.entry.senses = l.entry.senses.map(sense => {
                    let s = []
                    let s1 = {
                        definitions: sense.definitions[0]
                    }
                    if(sense.examples) s1.examples = sense.examples.map(example => example.text)
                    s.push(s1)
                    if(sense.subsenses) sense.subsenses.filter(subsense => {
                            let ss = {
                                definitions: subsense.definitions[0]
                            }
                            if(subsense.examples) ss.examples = subsense.examples.map(example => example.text)
                            s.push(ss)
                        })
                    return s
                })
                word.lexicalEntries.push(l)
            } catch(err) {
                console.log(err)
            }
        })

        const new_word = new Word(word)
        await new_word.save()

        // returning word in response
        res.json(word)
    } catch (err) {
        // 
        res.json(err.message)
    }
})

// Returns all the words
router.get('/', async (req, res) => {
    try {
        const allWords = await Word.find()
        res.json(allWords)
    } catch (err) {
        res.json(err.message)
    }
})

module.exports = router
