import React from 'react';
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
    marginBottom: Theme.spacing(4) 
  },
  textButton: {
    cursor: 'pointer',
    fontSize: Theme.spacing(5),
    '&:hover': { color: Theme.palette.secondary.main },
  },
  text: {
    fontSize: Theme.spacing(4),
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
    background: Theme.palette.primary.main,
    color: Theme.palette.secondary.main,
    marginLeft: Theme.spacing(2),
    display: 'inline-block',
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
}))

const MetaMaskRedirectModal = ({ handleCloseRedirect }) => {
  const classes = useStyle()

  return (
    <>
      <Grid
        item
        xs={12}
        container
        justify="flex-end"
        className={classes.header}
      >
        <IconButton aria-label="close"
         onClick={() => handleCloseRedirect()}
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
          <Typography variant="h1" color="primary" className={classes.title}>
            <Box fontWeight="fontWeightBold">Install MetaMask.</Box>
          </Typography>
          <Grid
            xs={12}
            item
            className={[classes.conteiner, classes.containerTitle]}
          >
            <Typography variant="caption" color="primary" className={classes.text}>
              <Box textAlign="center" fontWeight="fontWeightRegular"className={classes.text}>
                Install MetaMask to connect to Super Chief Gallery.
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        justify="center"
        direction="column"
        className={[classes.conteiner, classes.conteinerButton]}
      >
        <a href="https://metamask.io/download.html" className={classes.anchortag}>
          <Button
            variant="contained"
            className={[classes.button, classes.buttonRedirect]}
            endIcon
          >
            <Typography variant="caption" color="secondary" className={classes.textButton}>
              Go to MetaMask's website
            </Typography>
          </Button>
        </a>
      </Grid>
    </>
  )
}

export default MetaMaskRedirectModal
