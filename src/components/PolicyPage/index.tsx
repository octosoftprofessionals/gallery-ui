import React from 'react'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  content: {
    color: Theme.palette.primary.main,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1,
    gap: 20,
    '@global': {
      h5: {
        fontFamily: Theme.typography.fontFamily[0],
        display: 'flex',
        flex: 1,
        fontSize: 32,
        marginBlock: 0,
      },
      p: {
        fontFamily: 'Helvetica',
        fontSize: 15,
        letterSpacing: '0.05rem',
        marginBlock: 0,
      },
    },
    '@media (max-width: 576px)': {
      fontSize: 14,
    },
  },
  title: {
    fontSize: '8.125rem',
    marginBottom: 20,
  },
  box: { marginBottom: 15 },
}))

const PolicyPage = ({ policy }) => {
  const classes = useStyle()

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography color="primary" variant="h3" className={classes.title}>
        {policy.title}
      </Typography>
      <Grid
        item
        xs={12}
        md={5}
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.box}
      >
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(JSON.parse(policy.policy.raw)),
          }}
        />
      </Grid>
    </Grid>
  )
}

export default PolicyPage
