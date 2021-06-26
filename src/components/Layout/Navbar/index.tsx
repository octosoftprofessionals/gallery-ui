import React, { useState } from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Navigator from './Navigator'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Button,
  withWidth,
  Hidden,
  IconButton,
  SwipeableDrawer,
} from '@material-ui/core'

import logoSrc from '../../../assets/logoNew.png'
import LogoDarkSrc from '../../../assets/light-logo-SC.svg'
import LogoSCNFT from '../../../assets/dark-logo-SC.svg'
import { boxShadow } from '../../Styles/Colors'
import ButtonConnectWallet from './ButtonConnectWallet'
import NavBarBid from './NavBarBid'

const { boxShadow1 } = boxShadow

const useStyles = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(11, 0, 0),
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
  drawer: { width: `${Theme.spacing(17)}vw`, padding: Theme.spacing(0, 7) },
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
    display: ({}) => (Theme.palette.type === 'dark' ? 'none' : 'block'),
    width: Theme.spacing(15),
    height: Theme.spacing(15),
  },
  logoDark: {
    display: ({}) => (Theme.palette.type === 'dark' ? 'block' : 'none'),
    width: Theme.spacing(15),
    height: Theme.spacing(15),
  },
}))

const index = ({ pathname, cois, publicKey, profileImageUrl, name }) => {
  const classes = useStyles({ logoSrc, pathname })
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className={classes.root}>
          <Grid
            container
            justify={
              pathname === '/bid' || pathname === '/account'
                ? 'space-between'
                : 'space-around'
            }
            alignItems="center"
            className={classes.nav}
          >
            <Grid item xs={3} justify="center">
              <Link to="/" className={classes.link}>
                <LogoDarkSrc className={classes.logoDark} />
                <LogoSCNFT className={classes.logo} />
              </Link>
            </Grid>
            <Grid justify="center">
              <Navigator pathname={pathname} />
            </Grid>

            <Hidden smDown>
              {pathname === '/bid' || pathname === '/account' ? (
                <NavBarBid
                  cois={cois}
                  publicKey={publicKey}
                  profileImageUrl={profileImageUrl}
                  name={name}
                />
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

      <Hidden mdUp>
        <SwipeableDrawer
          anchor={'right'}
          open={showDrawer}
          onOpen={() => setShowDrawer(true)}
          onClose={() => setShowDrawer(false)}
        >
          <Grid container direction="column" className={classes.drawer}>
            <Grid
              item
              xs={12}
              container
              justify="space-between"
              className={classes.containerImg}
            >
              <Grid item xs={6}>
                <Link to="/" className={classes.link}>
                  <LogoDarkSrc className={classes.logoDark} />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <IconButton
                  color="inherit"
                  onClick={() => setShowDrawer(false)}
                >
                  <HighlightOffIcon className={classes.offIcon} />
                </IconButton>
              </Grid>
            </Grid>
            <Grid container direction="column">
              <Link to={'/artworks'} className={classes.link}>
                <Typography variant="h4" color="secondary">
                  Artworks
                </Typography>
              </Link>
              <Link to="/creators" className={classes.link}>
                <Typography variant="h4" color="secondary">
                  Creators
                </Typography>
              </Link>
              <Link className={classes.link}>
                <Typography variant="h4">Blog</Typography>
              </Link>
              <Link className={classes.link}>
                <Typography variant="h4">Help</Typography>
              </Link>
              <Link className={classes.link}>
                <Typography variant="h4">Discord</Typography>
              </Link>
              <Link className={classes.link}>
                <Typography variant="h4">Careers</Typography>
              </Link>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              className={classes.drawerFooter}
            >
              <Grid item xs={6} container direction="column">
                <Link className={classes.link}>
                  <Typography variant="caption">Twitter</Typography>
                </Link>
                <Link className={classes.link}>
                  <Typography variant="caption">Privacy Policy</Typography>
                </Link>
                <Link className={classes.link}>
                  <Typography variant="caption">Discord</Typography>
                </Link>
              </Grid>
              <Grid item xs={6} container direction="column">
                <Link className={classes.link}>
                  <Typography variant="caption">Terms of Service</Typography>
                </Link>
                <Link className={classes.link}>
                  <Typography variant="caption">Instagram</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </SwipeableDrawer>
      </Hidden>
    </>
  )
}

export default withWidth()(index)
