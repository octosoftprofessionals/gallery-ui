import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import {
  Button,
  Divider,
  Grid,
  Hidden,
  Typography,
  withWidth,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  root: { padding: Theme.spacing(12, 0) },
  price: {
    fontSize: 48,
    color: Theme.palette.primary.dark,
  },
  titlePrice: { fontSize: Theme.typography.fontSize[3] },

  divider: {
    backgroundColor: Theme.palette.primary.main,
  },

  texTimer: {
    fontSize: Theme.typography.fontSize[3],
    marginTop: Theme.spacing(2),
  },
  button: { borderRadius: Theme.shape.borderRadius[2] },
  textButton: { fontSize: Theme.typography.fontSize[3] },
  numberTimer: { fontSize: Theme.typography.fontSize[6] },
  link: { textDecoration: 'none' },
  subTitle: {
    fontSize: 24,
    fontWeight: 400,
  },
}))

const MakingHistory = () => {
  const [disableInfo, setDisableInfo] = useState(false)

  const classes = useStyle({ disableInfo })
  const price = '22,353'
  const money = '$47,526,749.46'
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Making History{' '}
        </Typography>
      </Grid>
      <Grid
        item
        xs={11}
        container
        direction="row"
        alignContent="center"
        justify="space-between"
        className={classes.root}
      >
        <Grid item xs={12} lg={4} container direction="column">
          <Typography
            variant="button"
            color="primary"
            className={classes.subTitle}
          >
            Since launching in February 2021, creators have earned...
          </Typography>
          <Divider orientation="horizontal" className={classes.divider} />

          <Typography
            variant="button"
            color="primary"
            className={classes.price}
          >
            {`${price} ETH`}
          </Typography>
          <Typography variant="caption">{money}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withWidth()(MakingHistory)
