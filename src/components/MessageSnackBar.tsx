import React from 'react'

import { Snackbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(Theme => ({
  snack: {
    '@global': {
      '.MuiSnackbarContent-root': {
        minWidth: '100%',
        borderRadius: Theme.spacing(9),
        backgroundColor: Theme.palette.primary.dark,
      },
      '.MuiSnackbarContent-message': {
        fontFamily: Theme.typography.fontFamily[5],
        color: Theme.palette.secondary.main,
        fontWeight: 'bold',
      },
    },
  },
}))

const MessageSnackBar = ({ open, close, transition, key, message }) => {
  const classes = useStyles()
  return (
    <>
      <Snackbar
        open={open}
        onClose={close}
        TransitionComponent={transition}
        message={message}
        key={key}
        className={classes.snack}
      />
    </>
  )
}

export default MessageSnackBar
