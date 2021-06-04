import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close'
import { Typography } from '@material-ui/core'
import { colors } from '../components/Styles/Colors'
import { makeStyles } from '@material-ui/core/styles'
import { Input } from '@material-ui/core'

import { useState, useEffect } from 'react'

const useStyle = makeStyles(Theme => ({
  h1: {
    color: colors.White,
  },
  input: {
    borderColor: 'trasnparent',
    background: 'trasnparent',
  },
  box: {
    background: colors.Petroleum,
    maxWidth: 800,
    borderRadius: 16,
    padding: 20,
  },
  contBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    margin: 15,
  },
  closeBtn: {
    background: colors.LigthPetroleum,
    height: 60,
    borderRadius: '50%',
    display: 'inline - block',
    padding: 0,
  },
  field: {
    padding: 10,
    background: colors.Black,
    borderRadius: 50,
    borderColor: colors.AquaGreen,
    border: 'solid 2px',
    color: colors.AquaGreen,
    paddingLeft: 20,
  },
  suscribeBtn: {
    background: colors.AquaGreen,
    fontSize: 16,
    fontWeight: 800,
    padding: 20,
    margin: 20,
    borderRadius: 20,
    width: 150,
  },
  text: {
    color: colors.Gainsboro,
    fontWeight: 200,
    fontSize: 16,
    marginBottom: 30,
  },
  title: {
    color: colors.White,
    fontWeight: 100,
    fontSize: 18,
    marginBottom: 5,
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
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        /* aria-labelledby="form-dialog-title" */ fullWidth
      >
        <div className={classes.box}>
          <DialogActions className={classes.input}>
            <Button onClick={handleClose} className={classes.closeBtn}>
              <CloseIcon /* fontSize="large" */></CloseIcon>
            </Button>
          </DialogActions>
          <DialogTitle id="form-dialog-title" className={classes.h1}>
            Join Our Mailing List
          </DialogTitle>
          <DialogContent>
            <div className={classes.text}>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally. To subscribe to this
              website, please enter your email address here. We will send
              updates occasionally.
            </div>
            <div className={classes.title}>Mail</div>
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
              label="email"
            />
          </DialogContent>
          <DialogActions className={classes.contBtn}>
            <Button
              onClick={handleClose}
              color="primary"
              className={classes.suscribeBtn}
              size="large"
              variant="text"
            >
              Sure!
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  )
}
export default EmailPopUp
