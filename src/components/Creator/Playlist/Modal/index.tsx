import React, { useState } from 'react'
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
  TextField,
  InputLabel,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Close } from '@material-ui/icons'

const useStyles = makeStyles(Theme => ({
  '@global': {
    '.MuiOutlinedInput-multiline': {
      borderRadius: 50,
      padding: Theme.spacing(2),
    },
    '.MuiOutlinedInput-inputMultiline': {
      padding: Theme.spacing(3),
    },
  },
  titleModal: { textTransform: 'initial' },
  icon: {
    fontSize: Theme.spacing(13),
    color: Theme.palette.primary.main,
    '@media (max-width: 576px)': {
      fontSize: Theme.spacing(10),
    },
  },
  btn: {
    backgroundColor: Theme.palette.primary.dark,
    padding: Theme.spacing(2, 9),
    borderRadius: Theme.shape.borderRadius[1],
  },
  textBtn: { color: Theme.palette.secondary.light },
  input: {
    margin: Theme.spacing(4, 0),
  },
  inputMulti: {
    borderRadius: 10,
    '@global': {
      '.MuiOutlinedInput-multiline': {
        borderRadius: 16,
      },
    },
  },
  conteinerBtn: {
    padding: Theme.spacing(10),
    '& .MuiOutlinedInput': {
      root: { borderRadius: 10 },
    },
  },
  conteinerForm: {
    marginLeft: Theme.spacing(6),
  },
  label: {
    marginLeft: Theme.spacing(6),
  },
}))

const PlaylistModal = ({ onClose, open, setOpen }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const classes = useStyles()
  const handleClose = () => {
    onClose()
  }
  const handleNext = () => {
    setTitle('')
    setDescription('')
  }
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      onClose={handleClose}
      open={open}
      aria-labelledby="simple-dialog-title"
    >
      <DialogActions>
        <IconButton onClick={handleClose}>
          <Close className={classes.icon} />
        </IconButton>
      </DialogActions>
      <Grid container justify="center">
        <DialogTitle>
          <Typography
            variant="h4"
            color="primary"
            className={classes.titleModal}
          >
            Creat a new playlist
          </Typography>
        </DialogTitle>
      </Grid>
      <Grid item xs={12} sm={10} className={classes.conteinerForm}>
        <Grid item xs={12} sm={8}>
          <InputLabel>
            <Typography
              variant="body2"
              color="primary"
              className={classes.label}
            >
              Title:
            </Typography>
          </InputLabel>
          <TextField
            variant="outlined"
            placeholder="Add title here..."
            fullWidth
            required
            multiline
            value={title}
            onChange={e => setTitle(e.target.value)}
            className={classes.input}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>
            <Typography
              variant="body2"
              color="primary"
              className={classes.label}
            >
              Description:
            </Typography>
          </InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            placeholder=" Write a short description for your playlist..."
            multiline
            rows={6}
            value={description}
            onChange={e => setDescription(e.target.value)}
            className={[classes.inputMulti, classes.input]}
          />
        </Grid>
      </Grid>
      <Grid item container justify="flex-end" className={classes.conteinerBtn}>
        <Button variant="text" className={classes.btn} onClick={handleNext}>
          <Typography variant="caption" className={classes.textBtn}>
            Next
          </Typography>
        </Button>
      </Grid>
    </Dialog>
  )
}

export default PlaylistModal