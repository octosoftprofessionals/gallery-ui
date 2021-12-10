import React, { useState } from 'react'
import { Button, Dialog, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ConnectWalletModal from './ConnectWalletModal'
import MetaMaskRedirectModal from './MetaMaskRedirectModal'

import { useSetModalShow, useModalShow } from '../../../atom'

const useStyle = makeStyles(Theme => ({
  btnGreen: {
    background: Theme.palette.buttons.wallet,
  },
  textBtn: {
    color: Theme.palette.secondary.main,
    '&:hover': {
      color: '#FFFFFF',
    },
  },
}))

const ButtonConnectWallet = () => {
  const classes = useStyle()
  const setConnectWallet = useSetModalShow()
  const connectWallet = useModalShow()
  const [redirectModal, setRedirectModal] = useState(null)
  const handleCloseConnectWalletModal = () => {
    setConnectWallet(null)
  }
  const handleCloseRedirectModal = () => {
    setRedirectModal(null)
  }
  return (
    <>
      <Grid item>
        <Button
          variant="contained"
          className={classes.btnGreen}
          onClick={() => setConnectWallet(true)}
        >
          <Typography
            color="secondary"
            variant="button"
            className={classes.textBtn}
          >
            Connect Wallet
          </Typography>
        </Button>
      </Grid>
      <Dialog
        onClose={handleCloseConnectWalletModal}
        aria-labelledby="customized-dialog-title"
        open={connectWallet !== null}
      >
        {connectWallet ? (
          <ConnectWalletModal
            handleCloseConnectWalletModal={handleCloseConnectWalletModal}
            setRedirectModal={setRedirectModal}
          />
        ) : (
          ''
        )}
      </Dialog>
      <Dialog
        onClose={handleCloseRedirectModal}
        aria-labelledby="customized-dialog-title"
        open={redirectModal !== null}
      >
        {redirectModal ? (
          <MetaMaskRedirectModal
            handleCloseRedirect={handleCloseRedirectModal}
          />
        ) : (
          ''
        )}
      </Dialog>
    </>
  )
}

export default ButtonConnectWallet
