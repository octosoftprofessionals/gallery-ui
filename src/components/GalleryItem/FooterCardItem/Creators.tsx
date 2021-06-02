import React from 'react'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  footerCard: {
    borderTop: `1px solid ${Theme.palette.secondary.light}`,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    padding: Theme.spacing(9),
    backgroundColor: Theme.palette.secondary.main,
    borderRadius: Theme.spacing(0, 0, 4, 4),
  },
  text: {
    fontSize: Theme.typography.fontSize[4],
    lineHeight: 1,
    '&:hover': { color: Theme.palette.primary.main },
  },
  link: { textDecoration: 'none' },
}))

const Creators = ({ followers, link }) => {
  const classes = useStyle()
  return (
    <Grid
      container
      alignItems="center"
      justify="space-around"
      className={classes.footerCard}
    >
      <Grid item xs={3} md={4} container direction="column">
        <Typography variant="h6" color="primary">
          {followers}
        </Typography>
        <Typography variant="overline" className={classes.text}>
          Followers
        </Typography>
      </Grid>
      <Grid item xs={3} md={4}>
        <Link to={link} className={classes.link}>
          <Button variant="outlined">
            <Typography variant="button">Follow</Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Creators
