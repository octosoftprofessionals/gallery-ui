import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Grid, Typography, Button, IconButton, Dialog } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { HighlightOff } from '@material-ui/icons'
import { useSetMetamaskAccount, useMetamaskAccount } from '../../../atom'

import detectEthereumProvider from '@metamask/detect-provider'

import { backgroundGradient } from '../../Styles/Colors'

const useStyle = makeStyles(Theme => ({
  icon: { fontSize: Theme.typography.fontSize[6] },
  button: {
    borderRadius: Theme.shape.borderRadius[1],
    marginTop: Theme.spacing(3),
  },
  title: { fontSize: Theme.spacing(9), marginBottom: Theme.spacing(4) },
  conteiner: { marginBottom: Theme.spacing(4) },
  text: { fontSize: Theme.spacing(4) },
  link: { textDecoration: 'none' },
  textCaption: {
    cursor: 'pointer',
    fontSize: Theme.spacing(4),
    '&:hover': { color: Theme.palette.primary.main },
  },
}))

const ConnectWalletModal = ({
  handleCloseConnectWalletModal,
  setRedirectModal,
}) => {
  const classes = useStyle()
  const [metaMaskInstalled, setMetaMaskInstalled] = useState(false)
  const [ethereumAccount, setEthereumAccount] = useState(null)

  const setMetamaskAccount = useSetMetamaskAccount()

  // TODO use to get the user account where needed
  const metamaskAccount = useMetamaskAccount()

  useEffect(() => {
    checkMetaMaskConnected()
    async function checkMetaMaskConnected() {
      const provider = await detectEthereumProvider()
      provider && setMetaMaskInstalled(true)
    }
  }, [])

  const handleConnection = async () => {
    if (metaMaskInstalled) {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      handleCloseConnectWalletModal()

      //account will be needed in the future
      setEthereumAccount(accounts[0])
      setMetamaskAccount(accounts[0])
      return
    } else {
      handleCloseConnectWalletModal()
      setRedirectModal(true)
    }
    setEthereumAccount(false)
  }

  return (
    <>
      <Grid item xs={12} container justify="flex-end">
        <IconButton
          aria-label="close"
          onClick={() => handleCloseConnectWalletModal()}
        >
          <HighlightOff className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Grid
          item
          xs={9}
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.conteiner}
        >
          <Typography variant="h6" color="primary" className={classes.title}>
            Connect your wallet.
          </Typography>
          <Grid item className={classes.conteiner}>
            <Typography
              variant="caption"
              color="primary"
              className={classes.text}
            >
              By connnectin your wallet, you agree to our
              <Link className={classes.link}>
                <Typography variant="caption" className={classes.textCaption}>
                  {' Terms of Service '}
                </Typography>
              </Link>
              and our
              <Link className={classes.link}>
                <Typography variant="caption" className={classes.textCaption}>
                  {' Privacy Policy '}
                </Typography>
              </Link>
              .
            </Typography>
          </Grid>

          <Grid
            container
            justify="space-around"
            direction="column"
            className={classes.conteiner}
          >
            <Button
              variant="contained"
              style={{
                background: `${backgroundGradient.backgroundGradient3}`,
              }}
              className={classes.button}
              endIcon
              onClick={() => handleConnection()}
            >
              <Typography variant="caption" color="secondary">
                Metamask
              </Typography>
            </Button>
            <Button
              variant="contained"
              style={{
                background: `${backgroundGradient.backgroundGradient4}`,
              }}
              className={classes.button}
              endIcon
            >
              <Typography variant="caption" color="secondary">
                WalletConnect
              </Typography>
            </Button>
          </Grid>

          <Typography
            variant="caption"
            color="primary"
            className={classes.text}
          >
            New to Ethereum?
          </Typography>
          <Link className={classes.link}>
            <Typography variant="caption" className={classes.textCaption}>
              Learn more about wallets
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default ConnectWalletModal
