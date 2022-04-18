import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import axios from 'axios'

import NavBar from './components/NavBar.js';
import WordList from './components/WordList.js'
import AddWord from './components/AddWord.js'
import Search from './components/Search.js'

import './App.css';

export default function App() {
  // Main wordlist Data
  const [wordList, setWordList] = useState([])

  // Fetching Data from API
  const fetchData = async () => {
    const port = process.env.PORT;
    const wordlist = await axios.get(`https://vocabulary-app-01.herokuapp.com/words/`)
    setWordList(wordlist.data)
  }
  
  // Updating Data on render
  useEffect(() => {
    const fetchData = async () => {
      const port = process.env.PORT;
      const wordlist = await axios.get(`https://vocabulary-app-01.herokuapp.com/words/`)
      setWordList(wordlist.data)
    }
    fetchData()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={
          <div className="App">
            <NavBar />
            <WordList wordList={wordList} />
            <AddWord updateRes={fetchData} />
          </div>
        } />
        <Route path="/search" exact element={
          <div className="App">
            <Search wordList={wordList} />
          </div>
        } />
      </Routes>
    </Router>
  );
}
