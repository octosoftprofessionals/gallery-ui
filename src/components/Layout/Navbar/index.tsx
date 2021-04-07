import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'

import logoSrc from '../../../assets/logo.png'

import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
} from '@material-ui/core'

const useStyles = makeStyles({
  root: { padding: '32px 0 0' },
  img: {
    background: `url(${logoSrc})`,
    paddingBottom: '10vh',
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
})

const index = () => {
  const classes = useStyles({ logoSrc })
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className={classes.root}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={2}>
              <Link to="/">
                <div className={classes.img} />
              </Link>
            </Grid>

            <div className={classes.container}>
              <Button variant="text" className={classes.button}>
                <Typography variant="button" className={classes.textButton}>
                  Artworks
                </Typography>
              </Button>
              <Button
                variant="text"
                className={[classes.button, classes.selected]}
              >
                <Typography variant="button" className={classes.textButton}>
                  Home
                </Typography>
              </Button>
              <Button variant="text" className={classes.button}>
                <Typography variant="button" className={classes.textButton}>
                  Creator
                </Typography>
              </Button>
            </div>

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
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default index
