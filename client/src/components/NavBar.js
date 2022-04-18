import { Container, IconButton, Toolbar } from '@mui/material'
import { Search } from '@mui/icons-material'

export default function NavBar() {
  return (
    <Container position="fixed" className="nav">
      <Toolbar variant="dense">
        <div style={{ flexGrow: 1, fontSize: '1.5em' }}>
          Vocabulary App
        </div>
        <IconButton 
          color="inherit" 
          aria-label="search"
          size="large"
          href="/search"
        >
          <Search />
        </IconButton>
      </Toolbar>
    </Container>
  )
}