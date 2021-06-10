import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  root: {},
  text: {
    fontSize: Theme.typography.fontSize[6],
    fontFamily: Theme.typography.fontFamily[2],
    color: Theme.palette.primary.main,
    '&:hover': { color: Theme.palette.primary.main },
  },
  textSecondary: {
    fontSize: Theme.typography.fontSize[4],
    fontFamily: Theme.typography.fontFamily[2],
    color: Theme.palette.primary.main,
    width: Theme.spacing(18),
    textAlign: 'center',
  },
  button: {
    backgroundColor: Theme.palette.primary.main,
    color: Theme.palette.secondary.main,
    marginTop: Theme.spacing(3),
    '&:hover': {
      backgroundColor: Theme.palette.secondary.main,
      color: Theme.palette.primary.main,
      borderColor: Theme.palette.primary.main,
    },
  },
}))

const EmptyAccount = () => {
  const classes = useStyle()
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography className={classes.text}>
        Your collection is empty.
      </Typography>
      <Typography className={classes.textSecondary}>
        Start building your collection by placing bids on artwork.
      </Typography>
      <Button className={classes.button} variant="outlined" disableElevation>
        <Typography variant="button">Explore</Typography>
      </Button>
    </Grid>
  )
}

export default EmptyAccount
