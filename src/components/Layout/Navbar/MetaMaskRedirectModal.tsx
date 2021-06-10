import React from 'react'
import { Link } from 'gatsby'
import { Grid, Typography, Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { HighlightOff } from '@material-ui/icons'



import { backgroundGradient } from '../../Styles/Colors'

const useStyle = makeStyles(Theme => ({
  icon: { fontSize: Theme.typography.fontSize[6] },
  button: {
    borderRadius: Theme.shape.borderRadius[1],
    marginTop: Theme.spacing(3),
  },
  title: { fontSize: Theme.spacing(9), marginBottom: Theme.spacing(4) },
  conteiner: { marginBottom: Theme.spacing(4) },
  text: { fontSize: Theme.spacing(4) },
  link: { textDecoration: 'none' },
  textCaption: {
    cursor: 'pointer',
    fontSize: Theme.spacing(4),
    '&:hover': { color: Theme.palette.primary.main },
  },
}))



const MetaMaskRedirectModal = ({ handleClose }) => {
  const classes = useStyle();
    
  return (
    <>
      <Grid item xs={12} container justify="flex-end">
        <IconButton aria-label="close" onClick={() => handleClose()}>
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
          <Typography 
            variant="h1" 
            color="primary" 
            className={classes.title} 
            style={{fontWeight: "bold"}}
          >
            Install MetaMask. 
          </Typography>
          <Grid item className={classes.conteiner}>
            <Typography
              variant="caption"
              color="primary"
              className={classes.text}
              style={{display: "inline", textAlign: "center", fontWeight: "normal"}}
            >
              Install MetaMask to connect to Super Chief Gallery.
            </Typography>
          </Grid>

          <Grid
            container
            justify="space-around"
            direction="column"
            className={classes.conteiner}
          >
            <Button
              variant="contained"
              style={{
                background: "black",
                color: "white",
              }}
              className={classes.button}
              endIcon 
            >
              <a
                href="https://metamask.io/download.html"
                target="_blank"
                style={{
                  color:"inherit",
                  textDecoration: "none"
                }}
              >
                <Typography variant="caption" color="secondary">
                  Go to MetaMask's website
                </Typography>
              </a>

            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default MetaMaskRedirectModal