import React, { useState, useEffect } from 'react'

import CloseIcon from '@material-ui/icons/Close'
import { colors } from '../components/Styles/Colors'
import { makeStyles } from '@material-ui/core/styles'
import {
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Input,
  Typography,
} from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  container: {
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: Theme.spacing(7),
    padding: 0,
  },
  mainTitle: {
    fontSize: 42,
    color: colors.White,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: Theme.spacing(7),
    '&hover': {
      color: colors.White,
    },
    '@media (max-width: 576px)': {
      fontSize: Theme.typography.fontSize[6],
    },
  },
  input: {
    borderColor: 'trasnparent',
    background: 'trasnparent',
  },
  box: {
    backgroundColor: Theme.palette.background.paper,
    maxWidth: 800,
    borderRadius: Theme.shape.borderRadius[3],
    padding: Theme.spacing(7),
    '@media (min-width: 330px)': {
      overflow: 'hidden',
    },
  },
  contBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    margin: 15,
    '@media (max-width: 576px)': {
      margin: 0,
    },
  },
  dialogCont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  closeBtn: {
    background: colors.DarkGrey,
    padding: 0,
  },
  field: {
    padding: 10,
    background: colors.Black,
    borderRadius: Theme.shape.borderRadius[3],
    borderColor: colors.Aqua,
    border: 'solid 2px',
    color: colors.Aqua,
    paddingLeft: Theme.spacing(7),
    maxWidth: 500,
  },
  suscribeBtn: {
    background: colors.Aqua,
    fontSize: Theme.typography.fontSize[3],
    color: colors.White,
    fontWeight: 800,
    padding: Theme.spacing(7),
    margin: Theme.spacing(7),
    borderRadius: Theme.spacing(7),
    width: 150,
    '&hover': {
      background: colors.LigthPetroleum,
      color: colors.Black,
    },
    '@media (max-width: 576px)': {
      margin: Theme.spacing(3),
      padding: Theme.spacing(3),
    },
  },
  text: {
    color: colors.LigthGrey,
    fontWeight: 200,
    fontSize: Theme.typography.fontSize[3],
    marginBottom: 40,
    textAlign: 'center',
    marginRight: 50,
    marginLeft: 50,
    '@media (max-width: 576px)': {
      marginRight: 5,
      marginLeft: 5,
      marginBottom: Theme.spacing(7),
    },
  },
  title: {
    color: colors.White,
    fontWeight: 100,
    fontSize: Theme.typography.fontSize[4],
    marginBottom: 5,
    textAlign: 'left',
    alignItems: 'left',
    marginLeft: `${Theme.spacing(7)}%`,
  },
  icon: {
    fontSize: 50,
    color: colors.Aqua,
    '@media (max-width: 576px)': {
      fontSize: Theme.spacing(12),
    },
  },
}))

function useLocalState(key, initial) {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(key)
      if (saved !== null) {
        return JSON.parse(saved)
      }
    }
    return initial
  })

  useEffect(() => {
    window.localStorage.setItem(key, value)
  }, [value])

  return [value, setValue]
}

const EmailPopUp = () => {
  const [open, setOpen] = useLocalState('show-popup', true)
  const [value, setValue] = useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const classes = useStyle()

  return (
    <>
      <Dialog
        className={classes.container}
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="xl"
      >
        <div className={classes.box}>
          <DialogActions className={classes.input}>
            <IconButton onClick={handleClose} className={classes.closeBtn}>
              <CloseIcon className={classes.icon} />
            </IconButton>
          </DialogActions>
          <Typography className={classes.mainTitle}>
            Join Our Mailing List!
          </Typography>
          <DialogContent>
            <div className={classes.text}>
              <Typography variant="body1">
                To subscribe to this website, please enter your email address.
                We will send updates occasionally.
              </Typography>
            </div>
            <div className={classes.title}>
              <Typography>Mail</Typography>
            </div>
            <div className={classes.dialogCont}>
              <Input
                placeholder="email"
                className={classes.field}
                fullWidth
                color="primary"
                disableUnderline={true}
                margin="none"
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </div>
          </DialogContent>
          <DialogActions className={classes.contBtn}>
            <Button
              onClick={handleClose}
              color="primary"
              className={classes.suscribeBtn}
            >
              Sure!
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  )
}
export default EmailPopUp
