import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button, Hidden } from '@material-ui/core'

import { boxShadow } from '../../Styles/Colors'

const { boxShadow1 } = boxShadow

const useStyles = makeStyles(Theme => ({
  container: {
    display: ({ pathname }) => (pathname === '/bid' ? 'none' : 'flex'),
    justifyContent: 'space-between',
    height: 55,
    minWidth: 600,
    boxShadow: boxShadow1,
    padding: '9px 7px 9px 6px',
    borderRadius: Theme.shape.borderRadius[2],
    backgroundColor: Theme.palette.secondary.main,
  },
  selected: {
    padding: '5px 20px',
    backgroundColor: Theme.palette.buttons.selected,
    borderRadius: Theme.shape.borderRadius[1],
    color: Theme.palette.buttons.navbar,
    '&:hover': {
      backgroundColor: Theme.palette.primary.main,
      color: Theme.palette.primary.contrastText,
    },
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  btn: {
    fontSize: Theme.typography.fontSize[3],
  },
  btnNavbar: {
    padding: '5px 20px',
    '&:hover': {
      backgroundColor: Theme.palette.buttons.selected,
      borderRadius: Theme.shape.borderRadius[1],
      color: Theme.palette.primary.contrastText,
    },
  },
}))

const Navigator = ({ pathname }) => {
  const classes = useStyles({ pathname })
  return (
    <Hidden mdDown>
      <div className={classes.container}>
        <Link to="/construction" className={classes.link}>
          {/*  to="/exhibition" */}
          <Button
            variant="text"
            color="primary"
            className={
              pathname === '/exhibition' ? classes.selected : classes.btnNavbar
            }
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
            className={
              pathname === '/artworks' ? classes.selected : classes.btnNavbar
            }
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
            className={pathname === '/' ? classes.selected : classes.btnNavbar}
          >
            <Typography variant="button" className={classes.btn}>
              Home
            </Typography>
          </Button>
        </Link>
        <Link to="/creators" className={classes.link}>
          <Button
            variant="text"
            color="primary"
            className={
              pathname === '/creators' ? classes.selected : classes.btnNavbar
            }
          >
            <Typography variant="button" className={classes.btn}>
              Creators
            </Typography>
          </Button>
        </Link>
        <Link to="/platformcollaborations" className={classes.link}>
          <Button
            variant="text"
            color="primary"
            className={
              pathname === '/collabs' ? classes.selected : classes.btnNavbar
            }
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
