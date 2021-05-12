import React, { useState } from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

import logoSrc from '../../../assets/logoNew.png'
import { boxShadow } from '../../Styles/Colors'

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

const { boxShadow1 } = boxShadow

const useStyles = makeStyles(Theme => ({
  root: { padding: Theme.spacing(11, 0, 0) },
  img: {
    background: `url(${logoSrc})`,
    paddingBottom: Theme.spacing(14),
    '@media (max-width: 755px)': { paddingBottom: Theme.spacing(13) },
    backgroundPosition: 'left',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  container: {
    boxShadow: boxShadow1,
    padding: Theme.spacing(2),
    borderRadius: Theme.shape.borderRadius[1],
    backgroundColor: Theme.palette.secondary.main,
  },
  selected: {
    backgroundColor: Theme.palette.primary.main,
    color: Theme.palette.primary.contrastText,
    '&:hover': { backgroundColor: Theme.palette.primary.main },
  },
  boxIconButton: { position: 'relative' },
  buttonMenu: {
    boxShadow: boxShadow1,
    fontSize: `${Theme.typography.fontSize[0]}rem`,
  },
  buttonCreatorMenu: {
    boxShadow: boxShadow1,
    backgroundColor: Theme.palette.secondary.main,
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
  offIcon: { fontSize: `${Theme.typography.fontSize[2]}em` },
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
}))

const index = ({ pathname }) => {
  const classes = useStyles({ logoSrc })
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className={classes.root}>
          <Grid container justify="space-around" alignItems="center">
            <Grid item xs={4}>
              <Link to="/" className={classes.link}>
                <div className={classes.img} />
              </Link>
            </Grid>
            <Hidden mdDown>
              <Grid item className={classes.container}>
                <Link to="/" className={classes.link}>
                  <Button
                    variant="text"
                    color="primary"
                    className={pathname === '/artworks' ? classes.selected : ''}
                  >
                    <Typography variant="button">Artworks</Typography>
                  </Button>
                </Link>
                <Link to="/" className={classes.link}>
                  <Button
                    variant="text"
                    color="primary"
                    className={pathname === '/' ? classes.selected : ''}
                  >
                    <Typography variant="button">Home</Typography>
                  </Button>
                </Link>
                <Link to="/" className={classes.link}>
                  <Button
                    variant="text"
                    color="primary"
                    className={pathname === '/creators' ? classes.selected : ''}
                  >
                    <Typography variant="button">Creators</Typography>
                  </Button>
                </Link>
              </Grid>
            </Hidden>

            <Hidden smDown>
              <Grid item xs={4} container justify="flex-end">
                <Button
                  variant="contained"
                  color={pathname === '/creator/' ? 'secondary' : ''}
                >
                  <Typography variant="button">Connect Wallet</Typography>
                </Button>
              </Grid>
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
                    pathname === '/creator'
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
                  <div className={classes.imgMenu} />
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
              <Link className={classes.link}>
                <Typography variant="h4">Artworks</Typography>
              </Link>
              <Link className={classes.link}>
                <Typography variant="h4">Creators</Typography>
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
                  <Typography variant="caption">Discor</Typography>
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
