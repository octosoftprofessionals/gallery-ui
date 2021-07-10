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
    marginBottom: Theme.spacing(4),
  },
  textButton: {
    cursor: 'pointer',
    fontSize: Theme.spacing(5),
  },
  text: {
    fontSize: Theme.spacing(4),
    textAlign: 'center',
    fontWeight: 400,
  },
  conteiner: {
    marginBottom: Theme.spacing(2),
    paddingLeft: Theme.spacing(4),
    paddingRight: Theme.spacing(4),
    paddingBottom: Theme.spacing(1),
  },
  containerTitle: {
    marginBottom: '1rem',
  },
  conteinerButton: {
    marginBottom: Theme.spacing(12),
    width: Theme.spacing(10.62),
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonRedirect: {
    borderRadius: 10,
    backgroundColor: 'Black',
    width: Theme.spacing(12.5),
  },
  header: {
    paddingTop: Theme.spacing(7),
    paddingRight: Theme.spacing(5),
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
      <Grid
        item
        xs={12}
        container
        justify="flex-end"
        className={classes.header}
      >
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
          xs={6}
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

      <Grid
        item
        xs={12}
        className={[classes.conteiner, classes.conteinerButton]}
      >
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
