import React, { useState } from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import {
  Grid,
  Typography,
  Hidden,
  IconButton,
  SwipeableDrawer,
} from '@material-ui/core'

import { boxShadow } from '../../Styles/Colors'

const { boxShadow1 } = boxShadow

const useStyles = makeStyles(Theme => ({
  buttonMenu: {
    boxShadow: boxShadow1,
    fontSize: `${Theme.typography.fontSize[0]}rem`,
    '@media (max-width: 576px)': {
      fontSize: Theme.typography.fontSize[9],
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
  drawerFooter: { marginTop: `${Theme.spacing(3)}vh` },
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

const MenuDrawer = ({ showDrawer, setShowDrawer, LogoDarkSrc }) => {
  const classes = useStyles()
  const discord = 'https://discord.com/invite/pxjASBky'
  const instagram = 'https://www.instagram.com/superchiefgallerynft/'
  const twitter = 'https://twitter.com/SuperchiefNFT'
  return (
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
              <IconButton color="inherit" onClick={() => setShowDrawer(false)}>
                <HighlightOffIcon className={classes.offIcon} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container direction="column" className={classes.menu}>
            <Grid container direction="column">
              <Link to={'/exhibition'} className={classes.link}>
                <Typography variant="h4" color="secondary">
                  Exhibition
                </Typography>
              </Link>
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

              <Link to={'/collabs'} className={classes.link}>
                <Typography variant="h4" color="secondary">
                  Collabs
                </Typography>
              </Link>
              {/*     <Link className={classes.link}>
                <Typography variant="h4" color="secondary">Help</Typography>
              </Link>
           <Link className={classes.link}>
                <Typography variant="h4" color="secondary">Careers</Typography>
              </Link> */}
            </Grid>
            <Grid
              item
              xs={11}
              sm={12}
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              className={classes.drawerFooter}
            >
              <Grid item xs={5} container direction="column">
                <Link to={twitter} className={classes.link}>
                  <Typography variant="caption">Twitter</Typography>
                </Link>
                <Link className={classes.link}>
                  <Typography variant="caption">Privacy Policy</Typography>
                </Link>
                <Link to={discord} className={classes.link}>
                  <Typography variant="caption">Discord</Typography>
                </Link>
              </Grid>
              <Grid item xs={6} container direction="column">
                <Link className={classes.link}>
                  <Typography variant="caption">Terms of Service</Typography>
                </Link>
                <Link to={instagram} className={classes.link}>
                  <Typography variant="caption">Instagram</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SwipeableDrawer>
    </Hidden>
  )
}

export default MenuDrawer
