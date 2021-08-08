import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
} from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({})

const useStyle = makeStyles(Theme => ({
  root: {
    margin: 0,
    padding: Theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: Theme.spacing(2),
    top: Theme.spacing(5),
    zIndex: 2,
    color: Theme.palette.grey[500],
  },
  dialogContent: {
    padding: 0,
  },
  dialogAction: {
    margin: 0,
    padding: Theme.spacing(1),
    height: Theme.spacing(5),
  },
}))

const DialogTitle = props => {
  const classes = useStyle()
  const { children, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
}

function Modal({ children, showTitle, setOpen, open, btnFooter = false }) {
  const classes = useStyle()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog onClose={handleClose} className={classes.modal} open={open}>
        {showTitle ? (
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Modal title
          </DialogTitle>
        ) : (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        )}

        <DialogContent dividers className={classes.dialogContent}>
          {children}
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
          {btnFooter ? (
            <Button autoFocus onClick={handleClose} color="primary">
              Save changes
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Modal
