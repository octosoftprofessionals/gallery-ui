import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import CloseIcon from '@material-ui/icons/Close'
import { colors } from '../components/Styles/Colors'
import { makeStyles } from '@material-ui/core/styles'
import { Input, Typography } from '@material-ui/core'

import { useState, useEffect } from 'react'

const useStyle = makeStyles(Theme => ({
  container: {
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 0,
  },
  mainTitle: {
    fontSize: 42,
    color: colors.White,
    isplay: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
    '&hover': {
      color: colors.White,
    },
  },
  input: {
    borderColor: 'trasnparent',
    background: 'trasnparent',
  },
  box: {
    background: colors.Petroleum,
    maxWidth: 800,
    borderRadius: 50,
    padding: 20,
  },
  contBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    margin: 15,
  },
  dialogCont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    maxWidth: 500,
  },
  suscribeBtn: {
    background: colors.AquaGreen,
    fontSize: 16,
    fontWeight: 800,
    padding: 20,
    margin: 20,
    borderRadius: 20,
    width: 150,
    '&hover': {
      background: colors.LigthPetroleum,
      color: colors.Black,
    },
  },
  text: {
    color: colors.Gainsboro,
    fontWeight: 200,
    fontSize: 16,
    marginBottom: 60,
    textAlign: 'center',
    marginRight: 50,
    marginLeft: 50,
    '@media (max-width: 576px)': {
      marginRight: 5,
      marginLeft: 5,
    },
  },
  title: {
    color: colors.White,
    fontWeight: 100,
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'left',
    alignItems: 'left',
    marginLeft: '20%',
  },
  icon: {
    fontSize: 50,
    color: colors.AquaGreen,
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
        className={classes.container}
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="xl"
      >
        <div className={classes.box}>
          <DialogActions className={classes.input}>
            <Button onClick={handleClose} className={classes.closeBtn}>
              <CloseIcon className={classes.icon}></CloseIcon>
            </Button>
          </DialogActions>
          <Typography id="form-dialog-title" className={classes.mainTitle}>
            Join Our Mailing List
          </Typography>
          <DialogContent>
            <div className={classes.text}>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally. To subscribe to this
              website, please enter your email address here. We will send
              updates occasionally. We will send updates occasionally. To
              subscribe to this website, please enter your email address here.
            </div>
            <div className={classes.title}>Mail</div>
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
