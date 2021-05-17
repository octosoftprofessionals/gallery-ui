import React, { useState } from 'react'
import { Button, Dialog, Grid, Typography } from '@material-ui/core'

import ConnectWalletModal from './ConnectWalletModal'

const ButtonConnectWallet = ({ pathname }) => {
  const [connectWallet, setConnectWallet] = useState(null)
  const handleClose = () => {
    setConnectWallet(null)
  }
  return (
    <>
      <Grid item xs={4} container justify="flex-end">
        <Button
          variant="contained"
          color={pathname === '/creator/' ? 'secondary' : ''}
          onClick={() => setConnectWallet(true)}
        >
          <Typography variant="button">Connect Wallet</Typography>
        </Button>
      </Grid>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={connectWallet !== null}
      >
        {connectWallet ? <ConnectWalletModal handleClose={handleClose} /> : ''}
      </Dialog>
    </>
  )
}

export default ButtonConnectWallet
