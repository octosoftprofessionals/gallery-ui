import React from 'react'
import { Grid } from '@material-ui/core'
import Layout from '../../components/Layout'
import GridPartnershipArtworks from '../../components/Partnership/index'
import { colors } from '../../components/Styles/Colors'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  container: {
    backgroundColor: colors.Black,
  },
}))

const PartnershipPage = () => {
  const classes = useStyle()
  return (
    <Layout padding="20px" marginTop="0">
      <Grid item xs={11} md={12} className={classes.container}>
        <GridPartnershipArtworks />
      </Grid>
    </Layout>
  )
}

export default PartnershipPage
