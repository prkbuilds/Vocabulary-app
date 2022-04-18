import { useState, useEffect } from 'react'
import axios from 'axios'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import WordList from './components/WordList'
import AddWord from './components/AddWord'
import Search from './components/Search'

import './App.css';

export default function App() {
  const [wordList, setWordList] = useState([])
  const port = process.env.REACT_APP_SERVER_PORT || 5000;

  const fetchData = async () => {
    const wordlist = await axios.get(`http://localhost:${port}/`)
    setWordList(wordlist.data)
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const port = process.env.REACT_APP_SERVER_PORT || 5000;
      const wordlist = await axios.get(`http://localhost:${port}/`)
      setWordList(wordlist.data)
    }
    fetchData()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <NavBar />
            <WordList wordList={wordList} />
            <AddWord updateRes={fetchData} />
          </div>
        } />
        <Route path="/search" element={
          <div className="App">
            <Search wordList={wordList} />
          </div>
        } />
      </Routes>
    </Router>
  );
}
