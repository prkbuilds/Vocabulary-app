import { useState } from 'react'
import { Box, Container, Divider, IconButton, Modal, Toolbar, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '100%',
  width: '100%',
  bgcolor: 'background.paper',
  border: 0,
  borderRadius: '1em',
  color: 'black',
  boxShadow: 24,
  p: 4,
}

export default function Words() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <div onClick={handleOpen}>
        <h3>piecemeal</h3>
        <p>(adjective) characterized by unsystematic partial measures taken over a period of time.</p>
        <p>(adverb) in an unsystematic way, through partial measures taken over a period of time.</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Container>
            <Toolbar disableGutters sx={{ textAlign: 'right', my: 5 }}>
              <Typography variant="h2" sx={{ mr: 'auto', fontFamily: 'Kumbh-Sans' }}>rhetorical</Typography>
              <IconButton onClick={handleClose} >
                  <Close />
              </IconButton>
            </Toolbar>
            <p>
              <i>adjective</i>
              <br />
              Orgin: late Middle English (first used in the sense ‘eloquently expressed’): via Latin from Greek 
  rhētorikos (from rhētor ‘rhetor’) + -al
            </p>
            <p>relating to or concerned with the art of rhetoric</p>
            <ul>
              <li>repetition is a common rhetorical device</li>
            </ul>
            <p>relating to or concerned with the art of rhetoric</p>
            <ul>
              <li>repetition is a common rhetorical device</li>
            </ul><p>relating to or concerned with the art of rhetoric</p>
            <ul>
              <li>repetition is a common rhetorical device</li>
            </ul>
          </Container>
        </Box>
      </Modal>
      <Divider textAlign="center" />
    </>
  )
}