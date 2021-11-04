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
    gap: 10,
    '@global': {
      h2: {
        fontFamily: Theme.typography.fontFamily[0],
        display: 'flex',
        flex: 1,
        fontSize: 32,
        marginBlock: 0,
      },
      h4: { fontFamily: Theme.typography.fontFamily[0], marginBlock: 0 },
      p: {
        fontFamily: Theme.typography.fontFamily[0],
        fontSize: 15,
        letterSpacing: '0.05rem',
        marginBlock: 0,
      },
      ul: { marginBlock: 0 },
    },
    '@media (max-width: 576px)': {
      fontSize: 14,
    },
  },
  title: {
    fontSize: '8.125rem',
  },
}))

const Terms = ({ terms }) => {
  const classes = useStyle()
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography color="primary" variant="h3" className={classes.title}>
        {terms.title}
      </Typography>
      <Grid
        item
        xs={12}
        md={5}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(JSON.parse(terms.content.raw)),
          }}
        />
      </Grid>
    </Grid>
  )
}

export default Terms
