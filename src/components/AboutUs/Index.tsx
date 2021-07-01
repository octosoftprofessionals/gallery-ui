import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import About from '../AboutUs/About'
import TeamCard from './ReviewCard'
import MakingHistory from './MakingHistory'
import HowItWorks from './HowItWorks'

import ReviewGrid from './ReviewGrid'

/* import Top50Grid from './Top50'

import { getCreators } from '../services/autionsService' */

const useStyle = makeStyles(Theme => ({
  root: {
    boxSizing: 'border-box',
    flexGrow: 1,
    '@media (max-width: 576px)': {
      padding: 0,
      margin: 0,
      height: '100%',
    },
  },
  block: {
    marginBottom: 60,
  },
}))

const AboutUsMain = () => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <div className={classes.block}>
        <About />
      </div>
      <div className={classes.block}>
        <MakingHistory />
      </div>
      <div className={classes.block}>
        <ReviewGrid />
      </div>
      <div className={classes.block}>
        <HowItWorks />
      </div>
    </div>
  )
}

export default AboutUsMain
