import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider, Button } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  head: {
    padding: Theme.spacing(16, 0, 9),
  },
  divider: {
    opacity: Theme.palette.action.disabledOpacity[1],
    marginBlockStart: `-0.1em`,
  },
  button: {
    padding: Theme.spacing(3, 0),
    borderRadius: 0,
    margin: 0,
    '&:hover': { transform: 'none' },
  },
  selectButton: { borderBottom: '2px solid' },
}))

const TabBar = ({ children }) => {
  const classes = useStyle()
  const [selectedCreated, setSelectedCreated] = useState(true)
  const [selectedCollected, setSelectedCollected] = useState(false)
  const handleSelected = isTrue => {
    if (isTrue) {
      setSelectedCreated(selectedCreated)
      setSelectedCollected(selectedCollected)
    } else {
      setSelectedCreated(!selectedCreated)
      setSelectedCollected(!selectedCollected)
    }
  }
  return (
    <Grid item container direction="column" justify="flex-start">
      <Grid item xs={5} sm={3} container justify="space-between">
        <Button
          variant="text"
          color="primary"
          className={
            selectedCreated
              ? [classes.button, classes.selectButton]
              : classes.button
          }
          onClick={() => handleSelected(selectedCreated)}
        >
          <Typography variant="caption" color="primary">
            Created
          </Typography>
        </Button>
        <Button
          variant="text"
          color="primary"
          className={
            selectedCollected
              ? [classes.button, classes.selectButton]
              : classes.button
          }
          onClick={() => handleSelected(selectedCollected)}
        >
          <Typography variant="caption" color="primary">
            Collected
          </Typography>
        </Button>
      </Grid>
      <Divider className={classes.divider} />
      {children}
    </Grid>
  )
}

export default TabBar
