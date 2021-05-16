import React, { useState } from 'react'

import ArtworkShow from '../../components/ArtworkShow'
import Layout from '../../components/Layout/Layout'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container, Button } from '@material-ui/core'
import BecomeCreatorCover from '../../components/BecomeCreatorCover'
import { colors } from '../../components/Styles/Colors'

const useStyle = makeStyles(Theme => ({
  root: {
    flex: 1,
    margin: Theme.spacing(10, 10),
    boxSizing: "border-box",
    '@media (max-width: 576px)': {
      padding: Theme.spacing(0, 0),
      margin: 40,
    },
  },
/*   containerAsset: {
    position: 'relative',
  }, */

/*   containerInfo: { position: 'relative' },
 */}))

const BecomeCreator = () => {
  const classes = useStyle()
  return (
    <Layout
      backgroundColor={colors.WhiteSmoke}
      padding="0"
      marginBottom="0"
      marginTop="0"
    >
      <div className={classes.root}>
        <BecomeCreatorCover></BecomeCreatorCover>
        {/*         <Container>
          <Grid
            item
            xs={12}
            container
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={12} sm={5} md={4}>
              <div className={classes.containerAsset}>
                <h1>
                  Introducing Community Upvote.
                </h1>
                <Typography>
                  With the Community Upvote, artists are encouraged to support other artists and to set the stage for a model of community-led curation that puts power in the hands of creators.
              In the new creative economy, we all rise up together.</Typography>
                <Button variant="contained" color="primary" >Join</Button>
              </div>
            </Grid>
            <div className={classes.line}></div>
            <Grid item xs={12} sm={5} md={4}>
              <div className={classes.containerAsset}>
                <h2>
                  How it works
                </h2>
                <Typography>
                  If you want to join the creator foundation, set up and verify your profile. Add your name to de Community Upvote
                  If you are a verified community member, log into your account, review the creator list, and raise up the artist whose work would like to support. </Typography>
                <Button variant="outlined" color="primary" >Learn more</Button>
              </div>
            </Grid>
          </Grid>
        </Container> */}
      </div>
    </Layout >
  )
}

export default BecomeCreator
