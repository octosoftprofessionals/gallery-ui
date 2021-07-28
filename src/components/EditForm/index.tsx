import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
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

const EditForm = () => {
  const classes = useStyle()
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Typography variant="body1">HOLA</Typography>
    </Grid>
  )
}

export default EditForm
