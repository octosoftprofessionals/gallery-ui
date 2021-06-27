import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button, Hidden } from '@material-ui/core'

import { boxShadow } from '../../Styles/Colors'

const { boxShadow1 } = boxShadow

const useStyles = makeStyles(Theme => ({
  container: {
    display: ({ pathname }) => (pathname === '/bid' ? 'none' : 'block'),
    boxShadow: boxShadow1,
    padding: Theme.spacing(2),
    borderRadius: Theme.shape.borderRadius[1],
    backgroundColor: Theme.palette.secondary.main,
  },
  selected: {
    backgroundColor: Theme.palette.buttons.selected,
    color: Theme.palette.primary.contrastText,
    '&:hover': { backgroundColor: Theme.palette.primary.main },
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
}))

const Navigator = ({ pathname }) => {
  const classes = useStyles({ pathname })
  return (
    <Hidden mdDown>
      <Grid justify="center" className={classes.container}>
        <Link to="/exhibition" className={classes.link}>
          <Button
            variant="text"
            color="primary"
            className={pathname === '/exhibition' ? classes.selected : ''}
          >
            <Typography variant="button">Exhibition</Typography>
          </Button>
        </Link>
        <Link to="/artworks" className={classes.link}>
          <Button
            variant="text"
            color="primary"
            className={pathname === '/artworks' ? classes.selected : ''}
          >
            <Typography variant="button">Artworks</Typography>
          </Button>
        </Link>
        <Link to="/" className={classes.link}>
          <Button
            variant="text"
            color="primary"
            className={pathname === '/' ? classes.selected : ''}
          >
            <Typography variant="button">Home</Typography>
          </Button>
        </Link>
        <Link to="/creators" className={classes.link}>
          <Button
            variant="text"
            color="primary"
            className={pathname === '/creators' ? classes.selected : ''}
          >
            <Typography variant="button">Creators</Typography>
          </Button>
        </Link>
        <Link to="/collabs" className={classes.link}>
          <Button
            variant="text"
            color="primary"
            className={pathname === '/collabs' ? classes.selected : ''}
          >
            <Typography variant="button">Collabs</Typography>
          </Button>
        </Link>
      </Grid>
    </Hidden>
  )
}
export default Navigator
