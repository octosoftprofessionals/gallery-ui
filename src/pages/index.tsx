import React from 'react'
import { Grid } from '@material-ui/core'
import { useQuery } from 'react-query'
import ArtworkGrid from '../components/ArtworkGrid'
import Gallery from '../components/Gallery'
import HeroAuction from '../components/HeroAuction'
import Layout from '../components/Layout/Layout'

import { getArtworkAuctions } from '../services/autionsService'

const items = [...new Array(20)].map(() => ({}))

const Home = () => {
  const liveAuctionsQuery = useQuery('liveAuctions', getArtworkAuctions)
  // const featuredAuctionsQuery = useQuery('featuredAuctions', getArtworkAuctions)
  console.log('liveAuctionsQuery::', liveAuctionsQuery)

  return (
    <Layout>
      {/* <HeroAuction auction={} /> */}
      <ArtworkGrid
        title="Live auctions"
        titleButton="live auctions"
        link="/"
        icon
      >
        <Gallery items={items} itemType="artworks" />
      </ArtworkGrid>
      <ArtworkGrid title="Featured artworks" titleButton="artworks" link="/">
        <Gallery items={items} itemType="artworks" />
      </ArtworkGrid>
      <ArtworkGrid title="Featured creators" titleButton="creators" link="/">
        <Gallery items={items} itemType="creator" />
      </ArtworkGrid>
      <ArtworkGrid title="Blog" titleButton="articles" link="/articles">
        <Gallery items={items} itemType="blog" />
      </ArtworkGrid>
    </Layout>
  )
}

export default Home
