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
  overflow: 'scroll'
}

export default function Words(props) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <div onClick={handleOpen}>
        <h3>{props.word.word}</h3>
        {
          props.word.lexicalEntries.map(lexicalEntry => (
            <p key={lexicalEntry.lexicalCategory}>({lexicalEntry.lexicalCategory})&nbsp;
              {lexicalEntry.entry.senses[0][0].definitions}</p>
          ))
        }
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
              <Typography variant="h2" sx={{ mr: 'auto', fontFamily: 'Kumbh-Sans' }}>{props.word.word}</Typography>
              <IconButton onClick={handleClose} >
                  <Close />
              </IconButton>
            </Toolbar>
            {
              props.word.lexicalEntries.map(lexicalEntry => (
                <div key={lexicalEntry.lexicalCategory}>
                  <Typography variant="p" sx={{ color: 'gray' }}>
                    <i>{lexicalEntry.lexicalCategory ? `${lexicalEntry.lexicalCategory}` : ''}</i>
                    <br />
                    {lexicalEntry.entry.etymologies ? `Orgin: ${lexicalEntry.entry.etymologies}` : ''}
                  </Typography>
                  {
                    lexicalEntry.entry.senses.map(sense => (
                      sense.map(s => (
                        <div key={s.definitions}>
                          <p>{s.definitions}</p>
                          <ul>
                            {
                              (s.examples) ? s.examples.map(example => (<li key={example}>{example}</li>)) : ""
                            }
                          </ul>
                        </div>
                      ))
                    ))
                  }
                </div>
              )
            )
          }
          </Container>
        </Box>
      </Modal>
      <Divider textAlign="center" />
    </>
  )
}