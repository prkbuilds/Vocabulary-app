import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Divider } from '@mui/material'

import Word from './Word'

const port = process.env.REACT_APP_SERVER_PORT || 5000;

export default function WordList() {
  const [wordList, setWordList] = useState([])

  const fetchData = async () => {
    const wordlist = await axios.get(`http://localhost:${port}/`)
    setWordList(wordlist.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return(
    <Container className="main">
      <Container className="main-heading-wrapper">
        <h4 className="main-heading">Word List</h4>
        <Divider textAlign="center" />
      </Container>
      <Container className="word-list">
        {
          wordList.map(word => <Word key={word.word} word={word} />)
        }
      </Container>
    </Container>
  )
}
