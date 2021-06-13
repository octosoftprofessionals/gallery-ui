import React, { useEffect } from 'react'
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
  title: { fontSize: Theme.spacing(9), marginBottom: Theme.spacing(4) },
  conteiner: {
    marginBottom: Theme.spacing(2),
    paddingLeft: Theme.spacing(4),
    paddingRight: Theme.spacing(4),
    paddingTop: Theme.spacing(3),
    paddingBottom: Theme.spacing(1),
  },
  text: { fontSize: Theme.spacing(4) },
  link: { textDecoration: 'none' },
  textCaption: {
    cursor: 'pointer',
    fontSize: Theme.spacing(4),
    '&:hover': { color: Theme.palette.primary.main },
  },
  header: { marginBottom: Theme.spacing(1) },
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
        <IconButton aria-label="close" onClick={() => handleCloseRedirect()}>
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
            <Box fontWeight="fontWeightRegular">Install MetaMask.</Box>
          </Typography>
          <Grid
            xs={12}
            item
            className={classes.conteiner}
            style={{ marginBottom: '1rem' }}
          >
            <Typography
              variant="caption"
              color="primary"
              className={classes.text}
            >
              <Box textAlign="center" fontWeight="fontWeightRegular">
                Install MetaMask to connect to Super Chief Gallery.
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        justify="center"
        direction="column"
        className={classes.conteiner}
        style={{
          width: '85%',
          textAlign: 'center',
          marginBottom: '1.5em',
          alignItems: 'center',
        }}
      >
        <a
          href="https://metamask.io/download.html"
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <Button
            variant="contained"
            style={{
              background: 'black',
              color: 'white',
              display: 'inline-block',
              width: '100%',
              marginLeft: '1em',
            }}
            className={classes.button}
            endIcon
          >
            <Typography
              variant="caption"
              color="secondary"
              style={{ fontSize: '16px' }}
            >
              Go to MetaMask's website
            </Typography>
          </Button>
        </a>
      </Grid>
    </>
  )
}

export default MetaMaskRedirectModal
