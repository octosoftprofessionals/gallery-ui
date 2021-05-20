import React from 'react'
import { Link } from 'gatsby'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import LogoOctosoft from '../../assets/logoHome.svg'

const useStyle = makeStyles(Theme => ({
  signature: {
    display: 'block',
    lineHeight: Theme.typography.fontSize[3],
  },
  link: { textDecoration: 'none', cursor: 'pointer' },
  icon: {
    height: 30,
    margin: 0,
    padding: 0,
    '@media (max-width: 576px)': {
      marginBottom: 0,
    },
  },
}))

const signature = () => {
  const classes = useStyle()
  return (
    <Grid container>
      <Typography variant="overline" className={classes.signature}>
        Developed by
      </Typography>

      <Link to="https://octosoftprofessionals.com/" className={classes.link}>
        <LogoOctosoft className={classes.icon} />
      </Link>
      <Typography variant="caption">Octosoft Professionals</Typography>
    </Grid>
  )
}

export default signature
