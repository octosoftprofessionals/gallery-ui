import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import HistoryItem from './HistoryItem'

const useStyle = makeStyles(Theme => ({
  history: {
    marginTop: Theme.spacing(14),
  },
}))

const History = ({ data = [] }) => {
  const classes = useStyle()
  return (
    <div className={classes.history}>
      <Typography variant="h6" color="primary">
        History
      </Typography>
      <div>
        {data.map(historyItem => (
          <HistoryItem {...historyItem} />
        ))}
      </div>
    </div>
  )
}

export default History