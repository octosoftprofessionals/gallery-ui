import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button, Grid, Typography } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  root: {},
  text: {
    fontSize: Theme.typography.fontSize[6],
    fontFamily: Theme.typography.fontFamily[2],
    color: Theme.palette.primary.main,
    '&:hover': { color: Theme.palette.primary.main },
    '@media (max-width: 545px)': { textAlign: 'center' },
  },
  textSecondary: {
    fontSize: Theme.typography.fontSize[4],
    fontFamily: Theme.typography.fontFamily[2],
    color: Theme.palette.primary.main,
    width: Theme.spacing(18),
    textAlign: 'center',
  },
}))

const EmptyAccount = ({
  primaryText = 'Nothing to see here.',
  secondaryText = null,
  showExploreButton = false,
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
        <>
          <Box height={16} />
          <Button variant="outlined" disableElevation href="/">
            <Typography variant="button">Explore</Typography>
          </Button>
        </>
      ) : null}
    </Grid>
  )
}

export default EmptyAccount
