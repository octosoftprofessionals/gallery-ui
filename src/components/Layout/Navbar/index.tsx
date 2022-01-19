import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { navigate } from 'gatsby'
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
import useQueryParams from '../../../hooks/useQueryParams'
import { getUser } from '../../../services/users'
import { useQuery } from 'react-query'
import { backgroundGradient } from '../../Styles/Colors'
import logoSrc from '../../../assets/logoNew.png'
import LogoDarkSrc from '../../../assets/light-logo-SC.svg'
import LogoSCNFT from '../../../assets/dark-logo-SC.svg'
import { boxShadow } from '../../Styles/Colors'
import ButtonConnectWallet from './ButtonConnectWallet'
import NavBarBid from './NavBarBid'
import LoggedButton from './LoggedButton'
import MenuDrawer from './MenuDrawer'
import Cookies from 'js-cookie'
import { useAccountStore } from '../../../hooks/useAccountStore'
import { useEthers } from '@usedapp/core'

const { boxShadow1 } = boxShadow
const { backgroundGradient5 } = backgroundGradient

const index = ({
  pathname,
  profileImageUrl,
}: {
  pathname: string
  profileImageUrl: string
}) => {
  const { deactivate } = useEthers()

  const classes = useStyles({ logoSrc, pathname })
  const [showDrawer, setShowDrawer] = useState(false)

  const { account, setAccount, metamaskAccount } = useAccountStore()
  const address = account?.toLowerCase()
  const { data: userAccount, isLoading } = useQuery(
    'userQuery',
    () => getUser({ public_address: address })
  )

  const handleLogOut = () => {
    deactivate()
    Cookies.remove('jwt')
    navigate(`/`)

sessionStorage.removeItem('account')
localStorage.removeItem('user')
  }

  const logedAccount = typeof window !== 'undefined' ? sessionStorage.getItem('account') : null

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        className={classes.gradient}
      >
        <Toolbar className={classes.root}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.nav}
          >
            <Grid item md={4} className={classes.navbarElement}>
              <Link to="/" className={classes.link}>
                <LogoDarkSrc className={classes.logoDark} />
                <LogoSCNFT className={classes.logo} />
              </Link>
            </Grid>

            <Grid item md={4} container justify="center">
              <Navigator pathname={pathname} />
            </Grid>

            <Hidden smDown>
              {logedAccount ? (
                <Grid
                  container
                  justify="flex-end"
                  item
                  md={4}
                  sm={6}
                  xs={12}
                  className={classes.navbarElement}
                >
                  <LoggedButton
                    profileImageUrl={userAccount?.profileImgUrl}
                    name={userAccount?.username ?? ''}
                    account={address}
                    onLogOut={handleLogOut}
                  />
                </Grid>
              ) : (
                <Grid
                  item
                  container
                  justify="flex-end"
                  md={4}
                  className={classes.navbarElement}
                >
                  <ButtonConnectWallet setAccount={setAccount} />
                </Grid>
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
                  className={classes.buttonCreatorMenu}
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
        account={account}
        pathname={pathname}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        LogoDarkSrc={LogoDarkSrc}
        handleLogOut={handleLogOut}
        userAccount={userAccount}
      />
    </>
  )
}

export default withWidth()(index)

const useStyles = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(8, 0, 0),
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    '@media (max-width: 575px)': {
      justifyContent: 'space-between',
      flexWrap: 'inherit',
      flexDirection: 'row',
      alignItems: 'center',
      padding: Theme.spacing(0, 6),
    },
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
      pathname === '/bid' || pathname === '/profile' ? 'none' : 'block',
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
  boxIconButton: {
    '@media (max-width: 576px)': {
      padding: Theme.spacing(0, 5, 0, 0),
    },
  },
  buttonMenu: {
    backgroundColor: Theme.palette.background.paper,
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
  menuIcon: {
    fontSize: Theme.typography.fontSize[10],
    color: Theme.palette.type === 'dark' ? Theme.palette.primary.light : '#FFF',
  },
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
  navbarElement: {
    padding: Theme.spacing(0, 13),
    '@media (max-width: 576px)': {
      padding: Theme.spacing(0),
    },
  },
  gradient: {
    background: ({ pathname }) =>
      pathname === '/profile' || pathname === '/creator/'
        ? backgroundGradient5
        : 'none',
  },
}))
