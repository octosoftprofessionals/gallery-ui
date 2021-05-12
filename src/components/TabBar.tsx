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

const TabBar = ({ titles, components }) => {
  const classes = useStyle()
  const [selected, setSelected] = useState(0)
  const handleSelected = selection => {
    setSelected(selection)
  }
  return (
    <Grid item container direction="column" justify="flex-start">
      <Grid item xs={5} sm={3} container justify="space-between">
        {titles.map((title, index) => (
          <Button
            variant="text"
            color="primary"
            className={
              selected == index
                ? [classes.button, classes.selectButton]
                : classes.button
            }
            onClick={() => handleSelected(index)}
          >
            <Typography variant="caption" color="primary">
              {title}
            </Typography>
          </Button>
        ))}
      </Grid>
      <Divider className={classes.divider} />
      {components[selected]}
    </Grid>
  )
}

export default TabBar
