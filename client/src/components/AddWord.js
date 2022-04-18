/* Renders Add Button & contains logic for adding words */

import { useState } from 'react'
import axios from 'axios'

import { Alert, Box, Button, Fab, Input, Modal, Snackbar, Toolbar, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'

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

export default function AddWords(props) {
  // Opening Modals & Alerts
  const [open, setOpen] = useState(false)
  const [openSnackbar, setSnackbarOpen] = useState(false)
  const [alert, setAlert] = useState({ severity: 'error', message: '' })
  
  // Storing Word to be added
  const [word, setWord] = useState("")

  // Handle Opening & Closing of Modal & Alert
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleSnackbarOpen = () => setSnackbarOpen(true)
  const handleSnackbarClose = () => setSnackbarOpen(false)

  // Submit Data to API for adding words
  const onSubmit = async (e) => {
    e.preventDefault()
    const port = process.env.REACT_APP_SERVER_PORT;
    axios.post(`https://vocabulary-app-01.herokuapp.com/words/`,{
      word: word
    })
      .then((response) => {
        handleClose()
        props.updateRes()
        if(response.data.word) {
          setAlert({ 'severity': 'success', 'message': `${word} Word was Added Successfully` })
          handleSnackbarOpen()
        } else {
          setAlert({ 'severity': 'warning', 'message': `${response.data}` })
          handleSnackbarOpen()
        }
      })
      .catch((error) => {
        console.error(error)
        setAlert({ 'severity': 'error', 'message': `ERROR : ${error}` })
        handleSnackbarOpen()
      })
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
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  )
}
