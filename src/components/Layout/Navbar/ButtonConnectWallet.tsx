import React, { useState } from 'react'
import { Button, Dialog, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { colors } from '../../Styles/Colors';

import detectEthereumProvider from '@metamask/detect-provider';
import ConnectWalletModal from './ConnectWalletModal'
import MetaMaskRedirectModal from './MetaMaskRedirectModal';

const useStyle = makeStyles(Theme => ({
  btnGreen: {
    background: colors.Green,
  },
}))

const ButtonConnectWallet = ({ pathname }) => {
  const classes = useStyle();
  
  const [connectWallet, setConnectWallet] = useState(null);

  async function checkMetaMaskConnected () {
    const provider = await detectEthereumProvider();
    (provider) ? setConnectWallet(true) : setConnectWallet(false);   
  }

  const handleClose = () => {
    setConnectWallet(null)
  }
  // const handleConnection = () => {
  //   checkMetaMaskConnected() ? setConnectWallet(true): setConnectWallet(false)
  // }
  
  return (
    <>
      <Grid item xs={4} container justify="flex-end">
        <Button
          variant="contained"
          className={classes.btnGreen}
          color={pathname === '/creator' ? 'secondary' : ''}
          onClick={() => checkMetaMaskConnected()}
        >
          <Typography variant="button">Connect Wallet</Typography>
        </Button>
      </Grid>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={connectWallet !== null}
      >
        { connectWallet ? <ConnectWalletModal handleClose={handleClose} /> : <MetaMaskRedirectModal handleClose={handleClose} /> }
      </Dialog>
    </>
  )
}

export default ButtonConnectWallet
