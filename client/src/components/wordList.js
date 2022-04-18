/* Renders Given Word List for all words */

import { Container, Divider } from '@mui/material'

import Word from './Word'

export default function WordList(props) {
  return(
    <Container className="main">
      <Container className="main-heading-wrapper">
        <h4 className="main-heading">Word List</h4>
        <Divider textAlign="center" />
      </Container>
      <Container className="word-list">
        {props.wordList.map(word => <Word key={word.word} word={word} />)}
      </Container>
    </Container>
  )
}
