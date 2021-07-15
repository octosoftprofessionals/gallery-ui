import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  message: {
    position: 'relative',
    width: '100%',
    zIndex: -1,
  },
  alert: {
    bottom: '60%',
    borderRadius: Theme.shape.borderRadius[2],
    position: 'absolute',
    margin: 0,
    fontSize: 14,
    fontWeight: 800,
    left: 1,
    textAlign: 'center',
    overflow: 'hidden',
    padding: '0px 10px 20px 10px',
    width: '100%',
    overflowWrap: 'anywhere',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    '@media (max-width: 780px)': {
      padding: '0px 5px 40px 5px ',
      marginLeft: '-7px',
    },
  },
}))

const BidMessages = ({ setOpen, open, state }) => {
  const classes = useStyle()

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const messages = {
    ok: {
      severity: 'success',
      message: 'Bid successfully placed!',
    },
    outbid: {
      severity: 'warning',
      message: `We're sorry, there was an unexpected error placing your bid.\nPlease refresh the page or wait and try again.`,
    },
    error: {
      severity: 'error',
      message: 'You were outbid! Place a higher bid to continue.',
    },
    noBid: {
      severity: 'info',
      message: 'You currently have no bids!',
    },
  }

  console.log('messages.[state]?.message :>> ', messages.[state]?.message)
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      className={classes.message}
    >
      <Alert
        icon={false}
        severity={messages.[state]?.severity}
        variant="filled"
        className={classes.alert}
      >
        {messages.[state]?.message}
      </Alert>
    </Snackbar>
  )
}

export default BidMessages
