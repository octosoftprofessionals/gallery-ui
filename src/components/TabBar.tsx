import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider, Button } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  head: {
    marginTop: 20,
  },
  divider: {
    opacity: Theme.palette.action.disabledOpacity[1],
    marginBlockStart: `-0.1em`,
  },
  dividerPlaylist: {
    display: 'none',
  },
  button: {
    padding: Theme.spacing(2, 2),
    borderRadius: 15,
    margin: 0,
    transform: 'none',
    '@media (max-width: 300px)': {
      borderRadius: 0,
    },
    '&:hover': {
      transform: 'none',
      borderRadius: 15,
      padding: Theme.spacing(2, 2),
      '@media (max-width: 300px)': {
        borderRadius: 0,
      },
    },
  },
  selectButton: { borderBottom: '2px solid' },
  selectButtonPlaylist: {
    backgroundColor: Theme.palette.secondary.light,
  },
  boxButton: { padding: '0 16px' },
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
    <Grid
      item
      container
      justify={justify ? justify : 'flex-start'}
      className={classes.head}
    >
      <Grid
        item
        sm={6}
        {...props}
        container
        direction="row"
        justify="space-between"
      >
        {titles.map((title, index) => (
          <Grid item sm={inSize} className={classes.boxButton}>
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
