import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Grid, Typography, Button, IconButton, Dialog } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { HighlightOff } from '@material-ui/icons'

import { useAccountStore } from '../../../hooks/useAccountStore'

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

  const [_, setMetamaskAccount] = useAccountStore()

  const [metaMaskInstalled, setMetaMaskInstalled] = useState(false)

  useEffect(() => {
    checkMetaMaskConnected()
    async function checkMetaMaskConnected() {
      const provider = await detectEthereumProvider()
      provider && setMetaMaskInstalled(true)
    }
  }, [])

  const handleConnection = async () => {
    if (metaMaskInstalled && typeof window !== 'undefined') {
      try {
        const isConnected = await window.ethereum?.isConnected()

        const accounts =
          (await window.ethereum?.request({
            method: 'eth_requestAccounts',
            params: [
              {
                eth_accounts: {},
              },
            ],
          })) ?? []

        if (isConnected) {
          await window.ethereum?.request({
            method: 'wallet_requestPermissions',
            params: [
              {
                eth_accounts: {},
              },
            ],
          })
        }

        setMetamaskAccount(accounts[0])
        handleCloseConnectWalletModal()
      } catch (e) {
        console.log(e)
      }
    } else {
      handleCloseConnectWalletModal()
      setRedirectModal(true)
    }
  }

  const termsOfService = '/termsOfService'
  const privacyPolicity = '/privacyPolicity'
  const aboutWallets =
    'https://medium.com/@decryptmedia/metamask-the-beginners-guide-6111143f2581'

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
              By connecting your wallet, you agree to our
              <Link to={termsOfService} className={classes.link}>
                <Typography variant="caption" className={classes.textCaption}>
                  {' Terms of Service '}
                </Typography>
              </Link>
              and our
              <Link to={privacyPolicity} className={classes.link}>
                <Typography variant="caption" className={classes.textCaption}>
                  {' Privacy Policy'}
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
              onClick={handleConnection}
            >
              <Typography variant="caption" color="secondary">
                Metamask
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
          <Link to={aboutWallets} target="_blank" className={classes.link}>
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
