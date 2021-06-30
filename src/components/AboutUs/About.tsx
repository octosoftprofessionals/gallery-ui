import React from 'react'
import { useQuery } from 'react-query'
import { Button, Divider, Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
/* import Top50Grid from './Top50'

import { getCreators } from '../services/autionsService' */

const useStyle = makeStyles(Theme => ({
  container: {
    width: '100%',
    '@media (max-width: 576px)': {
      padding: 0,
      margin: 0,
    },
  },
  divider: {
    opacity: Theme.palette.action.disabledOpacity[1],
  },
  link: { textDecoration: 'none' },
  title: {
    padding: 0,
    marginBottom: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 400,
    '@media (max-width: 576px)': {
      marginBottom: 20,
    },
  },
  /* textBlock: {
    width: '100px',
  }, */
}))

const AboutUsMain = () => {
  /*   const { data: CreatorQuery } = useQuery('CreatorQuery', getCreators)
   */
  const classes = useStyle()
  return (
    <>
      <Typography variant="h3" color="primary" className={classes.title}>
        About Foundation
      </Typography>

      <Grid container spacing={10} direction="row">
        <Grid item xs={12} sm={6}>
          <Typography
            variant="caption"
            color="primary"
            className={classes.text}
          >
            <span /* className={classes.textBlock} */>
              SuperChief is a platform that aims to build a new creative
              economy—a world where creators can use the Ethereum blockchain to
              value their online expression in entirely new ways, and build
              stronger connections with their supporters. SuperChief bridges
              crypto and culture to foster a network of mutual support between
              artists, creators, and collectors.
            </span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} /* className={classes.textBlock} */>
          <Typography
            variant="caption"
            color="primary"
            className={classes.text}
          >
            <span className={classes.textBlock}>
              We’re forging a community-driven path, providing culturally
              pioneering curation, and sharing our tools with the rapidly
              evolving group of developers who are excited to define this future
              with us. We want anyone and everyone who cares about the future of
              digital expression to be a part of it. Let’s explore these new
              possibilities collectively.
            </span>
          </Typography>
        </Grid>
      </Grid>
      {/* <Top50Grid creatorsQuery={CreatorQuery?.creators} /> */}
    </>
  )
}

export default AboutUsMain
