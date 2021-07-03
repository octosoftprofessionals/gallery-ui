import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import About from '../AboutUs/About'
import TeamCard from './ReviewCard'
import MakingHistory from './MakingHistory'
import HowItWorks from './HowItWorks'
import Newsletter from './Newsletter'
import ReviewGrid from './ReviewGrid'
import OurTeam from './OutTeam'
import { Grid } from '@material-ui/core'

const useStyle = makeStyles(Theme => ({
  block: {
    marginBottom: 60,
  },
  block2: {
    marginBottom: 80,
  },
}))

const AboutUsMain = () => {
  const classes = useStyle()
  return (
    <Grid container justify="center">
      <Grid item xs={12} className={classes.block2}>
        <About />
      </Grid>
      <Grid item xs={12} className={classes.block}>
        <MakingHistory />
      </Grid>
      <Grid item xs={12} className={classes.block}>
        <ReviewGrid />
      </Grid>
      <Grid item xs={12} className={classes.block}>
        <HowItWorks />
      </Grid>
      <Grid item xs={12} className={classes.block}>
        <OurTeam />
      </Grid>
      <Grid item xs={12} className={classes.block}>
        <Newsletter />
      </Grid>
    </Grid>
  )
}

export default AboutUsMain
