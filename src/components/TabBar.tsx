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
  dividerPlaylist: {
    width: '100%',
    backgroundColor: Theme.palette.primary.main,
  },
  button: {
    padding: Theme.spacing(3, 0),
    borderRadius: 0,
    margin: 0,
    '&:hover': { transform: 'none' },
  },
  selectButton: { borderBottom: '2px solid' },
  selectButtonPlaylist: { backgroundColor: Theme.palette.secondary.light },
}))

const TabBar = ({
  titles,
  components,
  justify,
  inSize,
  playlist,
  ...props
}) => {
  const classes = useStyle()
  const [selected, setSelected] = useState(0)
  const handleSelected = selection => {
    setSelected(selection)
  }
  return (
    <Grid item container justify={justify ? justify : 'flex-start'}>
      <Grid
        item
        sm={3}
        {...props}
        container
        direction="row"
        justify="space-between"
      >
        {titles.map((title, index) => (
          <Grid item sm={inSize}>
            <Button
              {...props}
              variant="text"
              color="primary"
              className={
                playlist
                  ? selected === index
                    ? [classes.button, classes.selectButtonPlaylist]
                    : classes.button
                  : selected === index
                  ? [classes.button, classes.selectButton]
                  : classes.button
              }
              onClick={() => handleSelected(index)}
            >
              <Typography variant="caption" color="primary">
                {title}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Divider
        {...props}
        className={playlist ? classes.dividerPlaylist : classes.divider}
      />
      {components[selected]}
    </Grid>
  )
}

export default TabBar
