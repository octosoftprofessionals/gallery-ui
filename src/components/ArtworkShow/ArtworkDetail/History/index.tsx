import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import HistoryItem from './HistoryItem'

const useStyle = makeStyles(Theme => ({
  history: {
    marginTop: Theme.spacing(14),
  },
  historyContainer: {
    maxHeight: Theme.spacing(16) * 4.5,
    overflow: 'auto',
  },
}))

const History = ({ data = [] }) => {
  const classes = useStyle()
  return (
    <div className={classes.history}>
      <Typography variant="h6" color="primary">
        History
      </Typography>
      <Grid container className={classes.historyContainer}>
        {data.map(historyItem => (
          <HistoryItem {...historyItem} key={historyItem.id} />
        ))}
      </Grid>
    </div>
  )
}

export default History
