import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

import Gallery from '../Gallery'

const useStyle = makeStyles(Theme => ({
  root: {},
  head: { padding: Theme.spacing(18, 0, 9) },
  '@keyframes fillepa': {
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
  iconDot: {
    paddingRight: Theme.spacing(3),
    animation: '$fillepa 1.5s ease infinite ',
    display: ({ icon }) => (!icon ? 'none' : 'block'),
  },
}))

const Featured = ({ title, items, icon }) => {
  const classes = useStyle({ icon })

  return (
    <Grid item container direction="column">
      <Grid
        item
        xs={12}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.head}
      >
        <Grid item xs={9} container alignItems="center">
          <FiberManualRecordIcon className={classes.iconDot} />
          <Typography variant="h5" color="primary">
            {title}
          </Typography>
        </Grid>

        <Typography variant="body1" color="initial">
          {`View all ${title.toLowerCase()}`}
        </Typography>
      </Grid>
      <Divider />
      <Gallery items={items} />
    </Grid>
  )
}

export default Featured
