import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider, Button } from '@material-ui/core'
import useQueryParams, { useQueryHash } from '../hooks/useQueryParams'
import { myProfilePathWithView } from '../config/routes'

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
  isMyAccount,
  ...props
}) => {
  const classes = useStyle()
  const { address } = useQueryParams()
  const hash = useQueryHash() || '0'
  const [selected, setSelected] = useState(parseInt(hash))

  useEffect(() => {
    setSelected(parseInt(hash))
  }, [hash])

  const handleSelected = selection => {
    setSelected(selection)
    if (isMyAccount) {
      window.location.href = myProfilePathWithView(address, selection)
    }
  }

  const selectedIn = (playlist, index) => {
    if (playlist) {
      if (selected === index) {
        return [classes.button, classes.selectButtonPlaylist]
      }
    } else if (selected === index) {
      return [classes.button, classes.selectButton]
    }
    return classes.button
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
          <Grid key={title} item sm={inSize} className={classes.boxButton}>
            <Button
              {...props}
              id={`${index}`}
              variant="text"
              color="primary"
              className={selectedIn(playlist, index)}
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
