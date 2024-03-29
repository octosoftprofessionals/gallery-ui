import React from 'react'
import {
  Dialog,
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
  titleModal: { textTransform: 'initial', marginLeft: Theme.spacing(14) },
  icon: {
    fontSize: Theme.spacing(10),
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
  textBtn: { color: Theme.palette.secondary.contrastText },
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
  conteinerGrid: {
    textAlign: 'center',
    padding: Theme.spacing(6),
  },
  conteinerForm: {
    marginLeft: Theme.spacing(6),
  },
  label: {
    marginLeft: Theme.spacing(6),
  },
}))

const PlaylistModal = ({
  onClose,
  open,
  setOpen,
  setTitle,
  setDescription,
  title,
  description,
  modalTitle,
  fatherComponent,
  onPublish,
}) => {
  const classes = useStyles()

  const handleClose = () => {
    onClose()
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (fatherComponent === 'ButtonPlaylist') {
      onPublish()
      onClose()
      return
    }
    onClose()
    setOpen(true)
  }

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      onClose={handleClose}
      open={open}
      aria-labelledby="simple-dialog-title"
    >
      <form onSubmit={handleSubmit}>
        <Grid container justify="space-between" alignItems="center">
          <Grid
            className={classes.conteinerGrid}
            item
            xs={10}
            container
            justify="center"
          >
            <Typography
              variant="h5"
              color="primary"
              className={classes.titleModal}
            >
              {modalTitle ? modalTitle : 'Create a new playlist'}
            </Typography>
          </Grid>
          <IconButton onClick={handleClose}>
            <Close className={classes.icon} />
          </IconButton>
        </Grid>
        <Grid item xs={12} sm={10} className={classes.conteinerForm}>
          <Grid item xs={12} sm={8}>
            <InputLabel>
              <Typography
                variant="body2"
                color="primary"
                className={classes.label}
              >
                Title
              </Typography>
            </InputLabel>
            <TextField
              id="title"
              variant="outlined"
              placeholder="Add title here..."
              fullWidth
              multiline
              required
              autoFocus
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
                Description
              </Typography>
            </InputLabel>
            <TextField
              id="description"
              variant="outlined"
              fullWidth
              required
              placeholder="Write a short description for your playlist..."
              multiline
              rows={6}
              value={description}
              onChange={e => setDescription(e.target.value)}
              className={[classes.inputMulti, classes.input]}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="flex-end"
          className={classes.conteinerBtn}
        >
          {fatherComponent === 'ButtonPlaylist' ? (
            <Button variant="text" className={classes.btn} type="submit">
              <Typography variant="caption" className={classes.textBtn}>
                Publish
              </Typography>
            </Button>
          ) : (
            <Button variant="text" className={classes.btn} type="submit">
              <Typography variant="caption" className={classes.textBtn}>
                Next
              </Typography>
            </Button>
          )}
        </Grid>
      </form>
    </Dialog>
  )
}

export default PlaylistModal
