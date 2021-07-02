import React from 'react'

import Layout from '../../components/Layout'
import { makeStyles } from '@material-ui/core/styles'
import AboutUsMain from '../../components/AboutUs/Index'
import { colors } from '../../components/Styles/Colors'

const useStyle = makeStyles(Theme => ({
  root: {
    flex: 1,
    margin: Theme.spacing(5, 10),
    boxSizing: 'border-box',
    height: '100%',
    '@media (max-width: 576px)': {
      margin: Theme.spacing(2, 4),
      padding: Theme.spacing(0, 0),
      height: '100%',
    },
  },
}))

const AboutUs = () => {
  const classes = useStyle()
  return (
    <Layout
      backgroundColor={colors.WhiteSmoke}
      padding="0"
      marginBottom="0"
      marginTop="0"
    >
      <div className={classes.root}>
        <AboutUsMain></AboutUsMain>
      </div>
    </Layout>
  )
}

export default AboutUs
