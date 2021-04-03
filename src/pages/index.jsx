import React from 'react'

import BottomFiller from '../components/Sectional/BottomFiller/BottomFiller'
import FooterSectional from '../components/FooterSectional/FooterSectional'
import Gallery from '../components/Gallery/Gallery'
import HeroAuction from '../components/HeroAuction'
import Layout from '../components/layout'

import classes from './index.module.css'
import './index.css'

const items = [...new Array(20)].map(() => ({}))

const FeaturedArtworkSection = () => (
  <div className={classes.featuredArtwork}>
    <h2 style={{
      verticalAlign: 'top',
      height: '21px',
      lineHeight: '25px',
      fontSize: '1.5em',
      marginBottom: 0,
    }}>
      Featured Artwork
    </h2>
    <div className='divider' style={{ borderBottom: '2px solid #333', marginTop: '1.25em', marginBottom: '1.5em' }}></div>
    <Gallery items={items} />
  </div>
)

const Home = () => {
  return (
    <div className={classes.container}>
    <Layout>
      <HeroAuction />
      <FeaturedArtworkSection />
      <FooterSectional />
      <BottomFiller />
    </Layout>
    </div>
  )
}

export default Home
