import React from 'react'
import { Link } from 'gatsby'

import { Grid, Typography, Button, IconButton, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { HighlightOff } from '@material-ui/icons'

const useStyle = makeStyles(Theme => ({
  icon: { fontSize: Theme.typography.fontSize[6] },
  button: {
    borderRadius: Theme.shape.borderRadius[1],
    marginTop: Theme.spacing(3),
  },
  title: {
    fontSize: Theme.spacing(9),
    margin: Theme.spacing(2, 0, 2, 0),
  },
  textButton: {
    cursor: 'pointer',
    fontSize: Theme.spacing(5),
  },
  text: {
    fontSize: Theme.spacing(4),
    textAlign: 'center',
  },
  containerTitle: {
    margin: Theme.spacing(5, 0),
  },
  conteinerButton: {
    marginBottom: Theme.spacing(14),
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonRedirect: {
    borderRadius: 10,
    backgroundColor: 'Black',
  },
  anchortag: {
    color: Theme.palette.secondary.main,
    textDecoration: 'none',
  },
  link: { textDecoration: 'none' },
}))

const MetaMaskRedirectModal = ({ handleCloseRedirect }) => {
  const classes = useStyle()
  const linkMetamask = 'https://metamask.io/download.html'

  return (
    <Grid container justify="center">
      <Grid item xs={12} container justify="flex-end">
        <IconButton aria-label="close" onClick={handleCloseRedirect}>
          <HighlightOff className={classes.icon} />
        </IconButton>
      </Grid>

      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h4" color="primary" className={classes.title}>
          Install MetaMask.
        </Typography>
        <Grid
          item
          className={classes.containerTitle}
          container
          alignItems="center"
          justify="center"
        >
          <Typography
            variant="caption"
            color="primary"
            className={classes.text}
          >
            Install MetaMask to connect to Super Chief Gallery.
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.conteinerButton}>
        <Link to={linkMetamask} className={classes.link}>
          <Button variant="contained" className={classes.buttonRedirect}>
            <Typography variant="button" className={classes.textButton}>
              Go to MetaMask's website
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default MetaMaskRedirectModal
