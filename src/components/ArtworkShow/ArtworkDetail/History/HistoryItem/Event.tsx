import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme => ({
  actionText: {
    fontFamily: theme.typography.fontFamily[2],
    color: theme.palette.primary.main,
  },
  creator: {
    fontFamily: theme.typography.fontFamily[2],
    fontWeight: 600,
    color: theme.palette.primary.light,
    margin: theme.spacing(0, 0, 0, 2),
  },
  link: {
    display: 'flex',
    color: theme.palette.primary.light,
    alignItems: 'center',
    justifyContent: 'flex-end',
    textDecoration: 'none',
  },
  date: {
    fontFamily: theme.typography.fontFamily[2],
    margin: theme.spacing(0),
    fontWeight: 500,
  },
}))
const Event = ({
  eventType,
  transaction,
  createdDate,
}: {
  eventType: string
  transaction: string
  createdDate: string
}) => {
  const classes = useStyle()
  return (
    <Grid
      item
      xs={7}
      container
      direction="column"
      alignContent="flex-start"
      justify="center"
    >
      <Grid item container justify="flex-start">
        <Typography
          className={classes.actionText}
          variant="subtitle1"
        >{`${eventType} by `}</Typography>
        {transaction != null ? (
            <Typography
              className={classes.creator}
              variant="subtitle1"
            >{`@${transaction}`}</Typography>
        ) : null}
      </Grid>
      <Grid item>
        <Typography
          variant="subtitle1"
          color="primary"
          className={classes.date}
        >
          {createdDate}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Event
