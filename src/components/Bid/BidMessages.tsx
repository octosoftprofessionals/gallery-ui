import React from 'react'
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
    left: 1,
    textAlign: 'center',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '0px 0px 20px 10px',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-w',
    '@media (max-width: 780px)': {
      marginLeft: '-6px',
      marginBotton: '20px',
    },
  },
  alert2: {
    bottom: '60%',
    borderRadius: Theme.shape.borderRadius[2],
    position: 'absolute',
    margin: 0,
    fontSize: 13,
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
      padding: '0px 10px 40px 10px ',
      marginLeft: '-7px',
    },
  },
}))

const BidMessages = ({ state, setOpen, open }) => {
  const classes = useStyle()

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      className={classes.message}
    >
      {(() => {
        switch (state) {
          case 'ok':
            return (
              <Alert
                icon={false}
                severity="success"
                variant="filled"
                className={classes.alert}
              >
                "Bid successfully placed!"
              </Alert>
            )
          case 'outbid':
            return (
              <Alert
                icon={false}
                severity="warning"
                variant="filled"
                className={classes.alert2}
              >
                {`We're sorry, there was an unexpected error placing your bid.\nPlease refresh the page or wait a few minutes and try again.`}
              </Alert>
            )
          case 'error':
            return (
              <Alert
                icon={false}
                severity="error"
                variant="filled"
                className={classes.alert2}
              >
                You were outbid! Place a higher bid to continue.
              </Alert>
            )
          default:
            return (
              <Alert
                severity="info"
                variant="filled"
                className={classes.alert2}
                icon={false}
              >
                You currently have no bids!
              </Alert>
            )
        }
      })()}
    </Snackbar>
  )
}
export default BidMessages
