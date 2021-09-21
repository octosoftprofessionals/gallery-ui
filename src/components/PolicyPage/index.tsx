import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { policy } from './strPolicy'

const useStyle = makeStyles(Theme => ({
  root: {
    fontSize: 130,
    '@media (max-width: 576px)': {
      fontSize: 60,
    },
  },
  paragraph: {
    margin: Theme.spacing(4, 0),
  },
}))

const PolicityPage = () => {
  const classes = useStyle()

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {policy.map(({ title, text }, i) =>
        i === 0 ? (
          <>
            <Typography
              color="primary"
              variant="h3"
              className={classes.root}
              key={title}
            >
              {title}
            </Typography>
            <Grid item xs={12} md={5}>
              {text.map(paragraph => (
                <Typography
                  color="primary"
                  className={classes.paragraph}
                  variant="body2"
                >
                  {paragraph}
                </Typography>
              ))}
            </Grid>
          </>
        ) : (
          <Grid item xs={12} md={5} key={title}>
            <Typography color="primary" variant="h5">
              {title}
            </Typography>
            {text.map(paragraph => (
              <Typography
                color="primary"
                className={classes.paragraph}
                variant="body2"
              >
                {paragraph}
              </Typography>
            ))}
          </Grid>
        )
      )}
    </Grid>
  )
}

export default PolicityPage
