import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider, Button } from '@material-ui/core'
import useQueryParams, { useQueryHash } from '../hooks/useQueryParams'
import { myProfilePathWithView } from '../config/routes'

const useStyle = makeStyles(Theme => ({
  head: {
    marginTop: 20,
    '@media (max-width: 1024px)': {
      marginTop: 3,
      flexDirection: 'column',
    },
  },
  divider: {
    opacity: Theme.palette.action.disabledOpacity[1],
    width: '100%',
    background: '#FFFF',
    height: 2,
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
  textBtn: {
    fontSize: 34,
    '@media (max-width: 375px)': {
      fontSize: 19,
    },
    '@media (max-width: 1024px)': {
      fontSize: 16,
    },
  },
  selectButton: {
    background:
      'transparent linear-gradient(0deg, #0CFFD624 0%, #94F0FF00 100%) 0% 0% no-repeat padding-box',
    borderRadius: 0,
  },
  buttonPrimary: {
    padding: Theme.spacing(2, 6),
    margin: 0,
    transform: 'none',
    '@media (max-width: 300px)': {
      borderRadius: 0,
    },
    '&:hover': {
      background:
        'transparent linear-gradient(0deg, #0CFFD624 0%, #94F0FF00 100%) 0% 0% no-repeat padding-box',
      transform: 'none',
      borderRadius: 0,
      padding: Theme.spacing(2, 6),
      '@media (max-width: 300px)': {
        borderRadius: 0,
      },
    },
  },
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
  initialTab = 0,
  ...props
}: {
  titles: string[]
  components: any[]
  justify: string
  inSize: any
  playlist?: boolean
  isMyAccount?: boolean
  initialTab?: number
}) => {
  const classes = useStyle()
  const [selected, setSelected] = useState(initialTab)

  const handleSelected = selection => {
    setSelected(selection)
    if (isMyAccount) {
      window.location.href = myProfilePathWithView(selection)
    }
  }

  const selectedIn = (playlist, index) => {
    if (playlist) {
      if (selected === index) {
        return [classes.button, classes.selectButtonPlaylist]
      }
    } else if (selected === index) {
      return [classes.buttonPrimary, classes.selectButton]
    }
    return playlist ? classes.button : classes.buttonPrimary
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
              <Typography
                variant="caption"
                color="primary"
                className={playlist ? '' : classes.textBtn}
              >
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
