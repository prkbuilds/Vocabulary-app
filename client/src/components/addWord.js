import { useState } from 'react'
import axios from 'axios'
import { Box, Button, Fab, Input, Modal, Toolbar, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'

const port = process.env.REACT_APP_SERVER_PORT || 5000;

const buttonStyle = {
  position: 'fixed', 
  bottom: 16, 
  right: 16, 
  color: '#5D1049'
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 0,
  borderRadius: '1em',
  color: 'black',
  boxShadow: 24,
  p: 4,
}

export default function AddWords() {
  const [open, setOpen] = useState(false)
  const [word, setWord] = useState("")
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    axios.post(`http://localhost:${port}/`,{
        word: word
    })
      .then((response) => {
        console.log(response.data)
        handleClose()
      })
      .catch((error) => console.error(error))
  }

  return (
    <>
      <Fab aria-label="add" sx={buttonStyle} onClick={handleOpen}>
        <Add />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add to Dictionary
          </Typography>
          <p>New Word</p>
          <Input type="text" value={word} onChange={e => setWord(e.target.value)} />
          <Toolbar disableGutters sx={{ textAlign: 'right' }}>
            <Button onClick={handleClose} sx={{ color: '#5D1049', ml: 'auto', mr: 0 }}>Cancel</Button>
            <Button onClick={onSubmit} sx={{ color: '#5D1049' }}>Add</Button>
          </Toolbar>
        </Box>
      </Modal>
    </>
  )
}
