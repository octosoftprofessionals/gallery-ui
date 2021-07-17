import React, { useState } from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Navigator from './Navigator'
import {
  AppBar,
  Grid,
  Toolbar,
  withWidth,
  Hidden,
  IconButton,
} from '@material-ui/core'

import logoSrc from '../../../assets/logoNew.png'
import LogoDarkSrc from '../../../assets/light-logo-SC.svg'
import LogoSCNFT from '../../../assets/dark-logo-SC.svg'
import { boxShadow } from '../../Styles/Colors'
import ButtonConnectWallet from './ButtonConnectWallet'
import NavBarBid from './NavBarBid'
import LoggedButton from './LoggedButton'
import MenuDrawer from './MenuDrawer'

import { useLocalState } from '../../../hooks/localStoreHook'
import { useSetMetamaskAccount, useMetamaskAccount } from '../../../atom'

const { boxShadow1 } = boxShadow

const useStyles = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(8, 0, 0),
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  img: {
    background: `url(${logoSrc})`,
    paddingBottom: Theme.spacing(14),
    '@media (max-width: 755px)': { paddingBottom: Theme.spacing(13) },
    backgroundPosition: 'left',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  container: {
    display: ({ pathname }) =>
      pathname === '/bid' || pathname === '/account' ? 'none' : 'block',
    boxShadow: boxShadow1,
    padding: Theme.spacing(2),
    borderRadius: Theme.shape.borderRadius[1],
    backgroundColor: Theme.palette.secondary.main,
  },
  selected: {
    backgroundColor: Theme.palette.buttons.selected,
    color: Theme.palette.primary.contrastText,
    '&:hover': { backgroundColor: Theme.palette.buttons.selected },
  },
  boxIconButton: { position: 'relative' },
  buttonMenu: {
    boxShadow: boxShadow1,
    fontSize: `${Theme.typography.fontSize[0]}rem`,
    '@media (max-width: 576px)': {
      fontSize: Theme.typography.fontSize[9],
    },
  },
  buttonCreatorMenu: {
    boxShadow: boxShadow1,
    backgroundColor: Theme.palette.buttons.selected,
    fontSize: `${Theme.typography.fontSize[0]}rem`,
    '@media (max-width: 755px)': { fontSize: Theme.typography.fontSize[9] },
    '&:hover': {
      backgroundColor: Theme.palette.secondary.main,
      fontSize: Theme.typography.fontSize[10],
    },
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  drawer: {
    width: `${Theme.spacing(17)}vw`,
    padding: Theme.spacing(0, 7),
    display: 'flex',
    wrap: 'wrap',
    flexDirection: 'column',
    top: 0,
    left: 0,
  },
  offIcon: { fontSize: Theme.typography.fontSize[11] },
  containerImg: { marginBottom: Theme.spacing(7) },
  menuIcon: { fontSize: Theme.typography.fontSize[10] },
  imgMenu: {
    marginLeft: Theme.spacing(3),
    marginTop: Theme.spacing(7),
    background: `url(${logoSrc})`,
    paddingBottom: Theme.spacing(14),
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  drawerFooter: { marginTop: `${Theme.spacing(3)}vh` },
  logo: {
    display: Theme.palette.type === 'dark' ? 'none' : 'block',
    width: 150,
    height: 150,
    '@media (max-width: 576px)': {
      width: Theme.spacing(17),
      height: Theme.spacing(17),
    },
  },
  logoDark: {
    display: Theme.palette.type === 'dark' ? 'block' : 'none',
    width: 150,
    height: 150,
    '@media (max-width: 576px)': {
      width: Theme.spacing(17),
      height: Theme.spacing(17),
    },
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 110,
    left: 20,
  },
}))

const index = ({ pathname, cois, publicKey, profileImageUrl, name }) => {
  const classes = useStyles({ logoSrc, pathname })
  const [showDrawer, setShowDrawer] = useState(false)

  const metamaskAccount = useMetamaskAccount()
  const [account, setValue] = useLocalState('metamask-account', metamaskAccount)
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className={classes.root}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.nav}
          >
            <Grid item>
              <Link to="/" className={classes.link}>
                <LogoDarkSrc className={classes.logoDark} />
                <LogoSCNFT className={classes.logo} />
              </Link>
            </Grid>

            <Grid item>
              <Navigator pathname={pathname} />
            </Grid>

            <Hidden smDown>
              {account ? (
                <LoggedButton profileImageUrl={profileImageUrl} name={name} />
              ) : (
                <ButtonConnectWallet pathname={pathname} />
              )}
            </Hidden>
            <Hidden mdUp>
              <Grid
                item
                xs={2}
                container
                justify="flex-end"
                alignContent="center"
                className={classes.boxIconButton}
              >
                <IconButton
                  color="inherit"
                  className={
                    pathname === '/creator/'
                      ? classes.buttonCreatorMenu
                      : pathname === '/artwork/'
                      ? classes.buttonCreatorMenu
                      : classes.buttonMenu
                  }
                  aria-label="open drawer"
                  onClick={() => setShowDrawer(true)}
                  edge="end"
                >
                  <MenuIcon className={classes.menuIcon} />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>

      <MenuDrawer
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        LogoDarkSrc={LogoDarkSrc}
      />
    </>
  )
}

export default withWidth()(index)
