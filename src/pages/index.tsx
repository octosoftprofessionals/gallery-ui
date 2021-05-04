import React, { useState } from 'react'
import { useQuery } from 'react-query'

import ArtworkGrid from '../components/ArtworkGrid'
import Gallery from '../components/Gallery'
import HeroAuction from '../components/HeroAuction'
import Layout from '../components/Layout/Layout'

import { getArtworkAuctions } from '../services/autionsService'

const items = [...new Array(20)].map(() => ({}))

const Home = () => {
  const [liveAuctionsQueryArtworks, setLiveAuctionsQueryArtworks] = useState([])
  const [auctionsQueryArtworks, setAuctionsQueryArtworks] = useState([])
  const [creatorQuery, setCreatorQuery] = useState([])
  const { status: statusLiveAuctionsQuery } = useQuery(
    'liveAuctionsQuery',
    getArtworkAuctions,
    {
      onSuccess: ({ artworks }) => setLiveAuctionsQueryArtworks(artworks),
    }
  )
  const { status: statusAuctionsQuery } = useQuery(
    'AuctionsQuery',
    getArtworkAuctions,
    {
      onSuccess: ({ artworks }) => setAuctionsQueryArtworks(artworks),
    }
  )
  const { status: statusCreatorQuery } = useQuery(
    'CreatorQuery',
    getArtworkAuctions,
    {
      onSuccess: ({ artworks }) => setCreatorQuery(artworks),
    }
  )

  return (
    <Layout>
      {/* <HeroAuction auction={} /> */}
      <ArtworkGrid
        title="Live auctions"
        titleButton="live auctions"
        link="/"
        icon
      >
        <Gallery artworks={liveAuctionsQueryArtworks} itemType="artworks" />
      </ArtworkGrid>
      <ArtworkGrid title="Featured artworks" titleButton="artworks" link="/">
        <Gallery artworks={auctionsQueryArtworks} itemType="artworks" />
      </ArtworkGrid>
      <ArtworkGrid title="Featured creators" titleButton="creators" link="/">
        <Gallery artworks={creatorQuery} itemType="creator" />
      </ArtworkGrid>
      {/* <ArtworkGrid title="Blog" titleButton="articles" link="/articles">
        <Gallery artworks={items} itemType="blog" />
      </ArtworkGrid> */}
    </Layout>
  )
}

export default Home
