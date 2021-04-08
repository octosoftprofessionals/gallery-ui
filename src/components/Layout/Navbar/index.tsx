import React, { useState } from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

import logoSrc from '../../../assets/logo.png'

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

const useStyles = makeStyles({
  root: { padding: '32px 0 0' },
  img: {
    background: `url(${logoSrc})`,
    paddingBottom: 55,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  button: { borderRadius: 10, margin: ' 0 2px' },
  buttonWallet: { borderRadius: 25, margin: ' 0 2px' },
  textButton: {
    fontWeight: 'bold',
    padding: '2px 8px',
    textTransform: 'none',
  },
  container: {
    boxShadow: '0px 10px 20px rgb(0 0 0 / 5%)',
    padding: 8,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: '#000',
    color: '#fff',
  },
  buttonMenu: { boxShadow: '0px 10px 20px rgb(0 0 0 / 5%)' },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  drawer: { width: '100vw', padding: 24 },
  offIcon: { fontSize: '3em' },
  imgMenu: {
    marginLeft: 12,
    marginTop: 20,
    background: `url(${logoSrc})`,
    paddingBottom: 55,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
})

const index = () => {
  const classes = useStyles({ logoSrc })
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className={classes.root}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={2}>
              <Link to="/" className={classes.link}>
                <div className={classes.img} />
              </Link>
            </Grid>

            <div className={classes.container}>
              <Hidden mdDown>
                <Link to="/" className={classes.link}>
                  <Button variant="text" className={classes.button}>
                    <Typography variant="button" className={classes.textButton}>
                      Artworks
                    </Typography>
                  </Button>
                </Link>
                <Link to="/" className={classes.link}>
                  <Button
                    variant="text"
                    className={[classes.button, classes.selected]}
                  >
                    <Typography variant="button" className={classes.textButton}>
                      Home
                    </Typography>
                  </Button>
                </Link>
                <Link to="/" className={classes.link}>
                  <Button variant="text" className={classes.button}>
                    <Typography variant="button" className={classes.textButton}>
                      Creator
                    </Typography>
                  </Button>
                </Link>
              </Hidden>
            </div>

            <Hidden smDown>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.buttonWallet}
                >
                  <Typography variant="button" className={classes.textButton}>
                    Connect Wallet
                  </Typography>
                </Button>
              </Grid>
            </Hidden>
          </Grid>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              className={classes.buttonMenu}
              aria-label="open drawer"
              size="medium"
              onClick={() => setShowDrawer(true)}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Hidden mdUp>
        <SwipeableDrawer
          anchor={'right'}
          open={showDrawer}
          onOpen={() => setShowDrawer(true)}
        >
          <Grid
            container
            justify="space-between"
            alignItems="flex-start"
            className={classes.drawer}
          >
            <Grid
              item
              container
              justify="flex-start"
              direction="column"
              xs={6}
              spacing={5}
            >
              <Grid item>
                <Link to="/" className={classes.link}>
                  <div className={classes.imgMenu} />
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link}>
                  <Typography variant="h4" className={classes.textButton}>
                    Artworks
                  </Typography>
                </Link>
                <Link className={classes.link}>
                  <Typography variant="h4" className={classes.textButton}>
                    Creators
                  </Typography>
                </Link>
                <Link className={classes.link}>
                  <Typography variant="h4" className={classes.textButton}>
                    Blog
                  </Typography>
                </Link>
                <Link className={classes.link}>
                  <Typography variant="h4" className={classes.textButton}>
                    Help
                  </Typography>
                </Link>
                <Link className={classes.link}>
                  <Typography variant="h4" className={classes.textButton}>
                    Discord
                  </Typography>
                </Link>
                <Link className={classes.link}>
                  <Typography variant="h4" className={classes.textButton}>
                    Careers
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <IconButton color="inherit" onClick={() => setShowDrawer(false)}>
                <HighlightOffIcon className={classes.offIcon} />
              </IconButton>
            </Grid>
          </Grid>
        </SwipeableDrawer>
      </Hidden>
    </>
  )
}

export default withWidth()(index)
