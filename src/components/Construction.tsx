import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import ConstructionImg from '../assets/Under-construction-SC.svg'

const useStyles = makeStyles(Theme => ({
  root: {
    padding: 0,
    margin: 0,
    backgroundColor: 'Black',
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
      <ConstructionImg className={classes.img} />
    </Grid>
  )
}

export default Construction
