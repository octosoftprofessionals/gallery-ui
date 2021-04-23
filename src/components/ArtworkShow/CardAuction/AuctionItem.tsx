import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Button, Grid, Divider, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { deltaTime, timerArray } from '../../../Utils'

const useStyle = makeStyles(Theme => ({
  root: { padding: Theme.spacing(11) },
  price: { fontSize: Theme.typography.fontSize[6] },
  titlePrice: { fontSize: Theme.typography.fontSize[3] },
  divider: {
    opacity: Theme.palette.action.disabledOpacity[1],
  },
  infoAution: { display: ({ disabeInfo }) => (disabeInfo ? 'blok' : 'none') },
  texTimer: {
    fontSize: Theme.typography.fontSize[3],
    marginTop: Theme.spacing(2),
  },
  button: { borderRadius: Theme.shape.borderRadius[2] },
  textButton: { fontSize: Theme.typography.fontSize[3] },
}))

const AuctionItem = ({ price, money, endingIn, link }) => {
  const [timer, setTimer] = useState(0)
  const [changeTitle, setChangeTitle] = useState('Current Bid')
  const [infoAution, setInfoAution] = useState(
    'Any bids placed in the last 15 minutes will extend the auction for another 15 minutes.'
  )
  const [disabeInfo, setDisabeInfo] = useState(false)
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const delta = deltaTime(endingIn)
      if (delta >= 0) {
        setTimer(timerArray(delta))
      } else {
        clearInterval(timeInterval)
        setInfoAution(
          'If you were to place a bid at this time there is a high chance that it would result in an error.'
        )
        setTimer(0)
      }
    }, 1000)
  }, [])
  let { Hours, Minutes, Seconds } = timer
  if (Hours <= 0 && Minutes < 15) {
    setDisabeInfo(true)
    setChangeTitle('This auction is ending soon!')
    setInfoAution(
      'Any bids placed in the last 15 minutes will extend the auction for another 15 minutes.'
    )
  }
  const classes = useStyle({ disabeInfo })
  return (
    <Grid item>
      <Paper elevation={2}>
        <Grid item xs={12} container direction="column">
          <Grid
            container
            direction="row"
            alignContent="center"
            justify="space-around"
            className={classes.root}
          >
            <Grid item xs={4} container direction="column">
              <Typography
                variant="button"
                color="primary"
                className={classes.titlePrice}
              >
                Current Bid
              </Typography>
              <Typography
                variant="button"
                color="primary"
                className={classes.price}
              >
                {price}
              </Typography>
              <Typography variant="button" color="inherit">
                {money}
              </Typography>
            </Grid>
            <Divider
              orientation="vertical"
              flexItem
              className={classes.divider}
            />
            <Grid item xs={5} container direction="column">
              <Typography
                variant="button"
                color="primary"
                className={classes.titlePrice}
              >
                {changeTitle}
              </Typography>
              <Grid container direction="row" justify="space-between">
                <Grid item xs={4}>
                  <Grid container direction="column" alignItems="flex-start">
                    <Typography variant="h5" color="primary">
                      {Hours}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="inherit"
                      className={classes.texTimer}
                    >
                      Hours
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container direction="column" alignItems="flex-start">
                    <Typography variant="h5" color="primary">
                      {Minutes}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="inherit"
                      className={classes.texTimer}
                    >
                      Minutes
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container direction="column" alignItems="flex-start">
                    <Typography variant="h5" color="primary">
                      {Seconds}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="inherit"
                      className={classes.texTimer}
                    >
                      Seconds
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                color="primary"
                className={classes.infoAution}
              >
                {infoAution}
              </Typography>
            </Grid>
          </Grid>

          <Divider className={classes.divider} />

          <Grid container justify="center" className={classes.root}>
            <Grid item xs={12}>
              <Link to={link}>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.button}
                >
                  <Typography variant="button" className={classes.textButton}>
                    Place a bid
                  </Typography>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default AuctionItem
