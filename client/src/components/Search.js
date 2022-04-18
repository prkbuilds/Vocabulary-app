/* Renders new Word-List for displaying results & Modals for new Search */

import { useState, useEffect } from 'react'
import { Container, IconButton, Input, Toolbar } from '@mui/material'
import { Close } from '@mui/icons-material'
import WordList from './WordList'

export default function Search(props) {
  // Storing query & query results
  const [word, setWord] = useState("")
  const [wordList, setWordList] = useState(props.wordList)

  // Running Search Query
  useEffect(() => {
    setWordList(props.wordList.filter(wordItem => wordItem.word.indexOf(word.toLowerCase()) > -1))
  }, [word, props.wordList])

  return (
    <>
      <Container position="fixed" className="nav">
        <Toolbar variant="dense">
          <div style={{ flexGrow: 1, fontSize: '1.5em' }}>
            <Input type="text" value={word} onChange={e => setWord(e.target.value)} sx={{ color: 'white' }}/>
          </div>
          <IconButton 
            color="inherit" 
            aria-label="search"
            size="large"
            href="/"
          >
            <Close />
          </IconButton>
        </Toolbar>
      </Container>
      <WordList wordList={wordList} />
    </>
  )
}