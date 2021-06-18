import React, { useState } from 'react'
import { Button, Dialog, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../Styles/Colors'

import ConnectWalletModal from './ConnectWalletModal'
import MetaMaskRedirectModal from './MetaMaskRedirectModal'

const useStyle = makeStyles(Theme => ({
  btnGreen: {
    background: colors.Green,
  },
}))

const ButtonConnectWallet = ({ pathname }) => {
  const classes = useStyle()
  const [connectWallet, setConnectWallet] = useState(null)
  const [redirectModal, setRedirectModal] = useState(null)
  const handleCloseConnectWalletModal = () => {
    setConnectWallet(null)
  }
  const handleCloseRedirectModal = () => {
    setRedirectModal(null)
  }
  return (
    <>
      <Grid container xs={3} justify="flex-end">
        <Button
          variant="contained"
          className={classes.btnGreen}
          color={pathname === '/creator' ? 'secondary' : ''}
          onClick={() => setConnectWallet(true)}
        >
          <Typography variant="button">Connect Wallet</Typography>
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
