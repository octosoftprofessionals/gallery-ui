import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import HeroAuctionItem from '../components/ArtworkShow/CardAuction/HeroAuctionItem'
import { boxShadow } from '../components/Styles/Colors'

import CreatorButton from './CreatorButton'

const useStyle = makeStyles(Theme => ({
  root: {
    flex: 1,
    margin: Theme.spacing(11, 0),
  },
  containerAsset: {
    position: 'relative',
    paddingBottom: '100%',
    filter: boxShadow.boxShadow3,
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  containerInfo: {
    position: 'relative',
    '@media (max-width: 576px)': {
      marginTop: '15vh',
    },
  },
}))

const HeroAuction = ({ auction }) => {
  const { artwork } = auction ? auction : []

  const classes = useStyle()
  return (
    <div className={classes.root}>
      {artwork ? (
        <Grid container justify="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={11}
            container
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={12} sm={5} md={4}>
              <div className={classes.containerAsset}>
                <video
                  poster={artwork.assetIPFSPath}
                  src={artwork.assetIPFSPath}
                  autoPlay={true}
                  loop={true}
                  className={classes.video}
                  muted={true}
                >
                  <source src={artwork.assetIPFSPath} type={artwork.mimeType} />
                  <img src={artwork.assetIPFSPath} />
                </video>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              container
              direction="column"
              justify="space-around"
              className={classes.containerInfo}
            >
              <CreatorButton
                imgUrl={artwork.creator.profileImageUrl}
                name={artwork.creator.username}
                top="-70px"
                link={`/creator/?id=${artwork.creator.username}`}
              />

              <HeroAuctionItem
                endingIn={artwork.duration}
                money={'$23,023.98'}
                price={artwork.price}
                title={artwork.name}
                linkButtonArtWork={`/artwork/?id=${artwork.id}`}
              />
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </div>
  )
}

export default HeroAuction
