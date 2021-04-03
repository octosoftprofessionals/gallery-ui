import React from 'react'

import ArtworkDisplay from '../../../components/ArtworkDisplay/ArtworkDisplay'
import Carousel from '../../../components/Carousel/Carousel'
import FooterSectional from '../../../components/FooterSectional/FooterSectional'
import Layout from '../../../components/layout'
import BottomFiller from '../../../components/Sectional/BottomFiller/BottomFiller'

import classes from './index.module.css'

const imgUrl = 'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg'
const videoUrl = 'http://localhost:8000/float.mp4'
const title = 'unnamed'
const artist = '@jandali'
const descriptionLines = [
  'This is the real deal.',
  'Created by fire and light, it showcases the power of all unknown mysteries witheld.',
  'The night is come, but not too soon;\nAnd sinking silently,\nAll silently, the little moon\nDrops down behind the sky.\nThere is no light in earth or heaven\nBut the cold light of stars;\nAnd the first watch of night is given\nTo the red planet Mars.',
]
const value = '50.00 ETH'

const params = { imgUrl, videoUrl, title, artist, descriptionLines, value }

const Hero = ({ centerpiece }) => (
  <div className={classes.hero}>
    <div className={classes.heroAssetContainer}>
      {centerpiece}
    </div>
  </div>
)

const ThickDivider = () => (
  <div style={{ borderBottom: '2px solid #333', marginTop: '1.25em', marginBottom: '1.5em' }}></div>
)

const items = [...new Array(5)].map(() => ({}))

const Description = ({ lines }) => (
  <div className={classes.description}>
    {descriptionLines.map(line => (
      <p className={classes.descriptionLine}>
        {line.split('\n').map((newline, index, ary) => (
          index === ary.length - 1 ?
            newline :
            <>
              {newline}<br />
            </>
        ))}
      </p>
    ))}
  </div>
)

const MoreItems = () => (
  <div className={classes.moreItemsContainer}>
    <div className={classes.moreItemsHeader}>
      <h2>Browse More Artwork</h2>
      <ThickDivider />
    </div>
    <div className={classes.carouselContainer}>
      <Carousel items={items} />
    </div>
  </div>
)

const ShowArtwork = () => {
  return (
    <div className={classes.container}>
      <Hero centerpiece={<ArtworkDisplay imgUrl={imgUrl} videoUrl={videoUrl} />} />
      {/* TODO: flip navbar style */}
      <Layout>
        <div className={classes.main}>
          <div className={classes.contentContainer}>
            <div className={classes.header}>
              <div className={classes.headerLeft}>
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.artist}>{artist}</p>
              </div>
              <div className={classes.headerRight}>
                <p className={classes.value}>{value}</p>
              </div>
            </div>

            <div className={classes.divider}></div>

            <Description lines={descriptionLines} />
          </div>

          <MoreItems />
        </div>
      </Layout>
    </div>
  )
}

export default ShowArtwork
