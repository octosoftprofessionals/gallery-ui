import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import HistoryItem from './HistoryItem'

const useStyle = makeStyles(Theme => ({
  history: {
    marginTop: Theme.spacing(14),
  },
  historyContainer: {
    maxHeight: '40vh',
    padding: Theme.spacing(2),
    overflow: 'auto',
    rowGap: Theme.spacing(5),
    columnGap: Theme.spacing(5),
  },
}))

const History = ({ data = [] }) => {
  const classes = useStyle()
  return (
    <div className={classes.history}>
      <Typography variant="h6" color="primary">
        History:
      </Typography>
      <Grid
        container
        justify="center"
        wrap="wrap"
        className={classes.historyContainer}
      >
        {data.map(historyItem => (
          <HistoryItem {...historyItem} key={historyItem.id} />
        ))}
      </Grid>
    </div>
  )
}

export default History
