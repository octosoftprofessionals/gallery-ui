import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import About from '../AboutUs/About'
import TeamCard from './TeamCard'
/* import Top50Grid from './Top50'

import { getCreators } from '../services/autionsService' */

const useStyle = makeStyles(Theme => ({
  root: {
    /*    alignItems: 'center',
    height: '100%', */
    flexGrow: 1,
    '@media (max-width: 576px)': {
      padding: 0,
      margin: 0,
      height: '100%',
    },
  },
}))

const AboutUsMain = () => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <About></About>
      {/*  <TeamCard></TeamCard> */}
    </div>
  )
}

export default AboutUsMain
