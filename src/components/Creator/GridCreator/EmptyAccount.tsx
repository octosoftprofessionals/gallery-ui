import React from 'react'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  text: {
    fontSize: Theme.typography.fontSize[6],
    fontFamily: Theme.typography.fontFamily[2],
    color: Theme.palette.primary.main,
    '&:hover': { color: Theme.palette.primary.main },
    '@media (max-width: 545px)': { textAlign: 'center' },
    cursor: 'default',
    marginBottom: Theme.spacing(6),
  },
  textSecondary: {
    fontSize: Theme.typography.fontSize[4],
    fontFamily: Theme.typography.fontFamily[2],
    color: Theme.palette.primary.main,
    width: Theme.spacing(18),
    textAlign: 'center',
    '&:hover': { color: Theme.palette.primary.main },
    cursor: 'default',
    marginBottom: Theme.spacing(6),
  },
  link: { textDecoration: 'none' },
}))

const EmptyAccount = ({
  primaryText = 'Nothing to see here.',
  secondaryText = null,
  showExploreButton = false,
}: {
  primaryText?: string
  secondaryText?: string
  showExploreButton?: boolean
}) => {
  const classes = useStyle()
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {primaryText != null ? (
        <Typography className={classes.text}>{primaryText}</Typography>
      ) : null}
      {secondaryText != null ? (
        <Typography className={classes.textSecondary}>
          {secondaryText}
        </Typography>
      ) : null}
      {showExploreButton ? (
        <Link to="/" className={classes.link}>
          <Button variant="outlined">
            <Typography variant="button">Explore</Typography>
          </Button>
        </Link>
      ) : null}
    </Grid>
  )
}

export default EmptyAccount
