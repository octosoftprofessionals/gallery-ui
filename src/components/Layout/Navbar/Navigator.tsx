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
    padding: '9px 7px 9px 6px',
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
  btn: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Navigator = ({ pathname }) => {
  const classes = useStyles({ pathname })
  return (
    <Hidden mdDown>
      <div className={classes.container}>
        <Link to="/construction" className={classes.link}>
          {' '}
          {/*  to="/exhibition" */}
          <Button
            variant="text"
            color="primary"
            className={pathname === '/exhibition' ? classes.selected : ''}
          >
            <Typography variant="button" className={classes.btn}>
              Exhibition
            </Typography>
          </Button>
        </Link>
        <Link to="/artworks" className={classes.link}>
          <Button
            variant="text"
            color="primary"
            className={pathname === '/artworks' ? classes.selected : ''}
          >
            <Typography variant="button" className={classes.btn}>
              Artworks
            </Typography>
          </Button>
        </Link>
        <Link to="/" className={classes.link}>
          <Button
            variant="text"
            color="primary"
            className={pathname === '/' ? classes.selected : ''}
          >
            <Typography variant="button" className={classes.btn}>
              Home
            </Typography>
          </Button>
        </Link>
        <Link to="/construction" className={classes.link}>
          {' '}
          {/* to="/creators" */}
          <Button
            variant="text"
            color="primary"
            className={pathname === '/creators' ? classes.selected : ''}
          >
            <Typography variant="button" className={classes.btn}>
              Creators
            </Typography>
          </Button>
        </Link>
        <Link to="/construction" className={classes.link}>
          {/* to="/collabs" */}
          <Button
            variant="text"
            color="primary"
            className={pathname === '/collabs' ? classes.selected : ''}
          >
            <Typography variant="button" className={classes.btn}>
              Collabs
            </Typography>
          </Button>
        </Link>
      </div>
    </Hidden>
  )
}
export default Navigator
