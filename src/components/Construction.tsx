import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Hidden } from '@material-ui/core'

import ConstructionImg from '../assets/Under-construction-SChief.svg'
import ConstructionImgMobile from '../assets/Under-construction-mobile-SC.svg'

const useStyles = makeStyles(Theme => ({
  root: {
    padding: 0,
    margin: 0,
    backgroundColor: Theme.palette.background.default,
  },
  img: {
    width: '100vw',
    height: '100vh',
  },
}))

const Construction = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Hidden smDown>
        <ConstructionImg className={classes.img} />
      </Hidden>
      <Hidden smUp>
        <ConstructionImgMobile className={classes.img} />
      </Hidden>
      <Hidden mdUp>
        <ConstructionImg className={classes.img} />
      </Hidden>
    </Grid>
  )
}

export default Construction
