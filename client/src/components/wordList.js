import { Container, Divider } from '@mui/material'
import Word from './Word'

export default function WordList() {
  return(
    <Container className="main">
      <Container className="main-heading-wrapper">
        <h4 className="main-heading">Word List</h4>
        <Divider textAlign="center" />
      </Container>
      <Container className="word-list">
        <Word />
      </Container>
    </Container>
  )
}
