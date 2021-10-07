import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(9, 12),
    marginTop: Theme.spacing(9),
    backgroundColor: Theme.palette.background.paper,
    '&:hover': {
      borderShadow: 'none',
      transform: 'none',
      translate: 'none',
      border: 'none',
    },
  },
  containerTitle: { paddingBottom: Theme.spacing(4) },
  orderText: {
    color: Theme.palette.primary.dark,
  },
}))
const Title = ({
  title,
  index,
  length,
}: {
  title: string
  index: number
  length: number
}) => {
  const classes = useStyle()
  return (
    <Grid
      item
      xs={12}
      container
      direction="column"
      justify="center"
      alignContent="center"
      className={classes.containerTitle}
    >
      <Typography align="center" color="primary" variant="h5">
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        color="primary"
        className={classes.orderText}
        align="center"
      >{`${index + 1} - ${length}`}</Typography>
    </Grid>
  )
}

export default Title
