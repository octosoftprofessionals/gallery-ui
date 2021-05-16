import React from 'react'
import { useQuery, useInfiniteQuery } from 'react-query'

import ArtworkGrid from '../components/ArtworkGrid'
import Gallery from '../components/Gallery'
import HeroAuction from '../components/HeroAuction'
import Layout from '../components/Layout/Layout'
import ContactUs from '../components/ContactUs'

import {
  getHeroArtwork,
  getArtworkAuctionsPaginated,
} from '../services/autionsService'

const Home = () => {
  const { data: artworkAuctionsPaginated, isLoading } = useInfiniteQuery(
    'artworkAuctionsPaginated',
    getArtworkAuctionsPaginated
  )

  const { data: liveAuctionsQuery, status: statusLiveAuctionsQuery } = useQuery(
    'liveAuctionsQuery',
    getArtworkAuctionsPaginated
  )

  const { data: AuctionsQuery, status: statusAuctionsQuery } = useQuery(
    'AuctionsQuery',
    getArtworkAuctionsPaginated
  )
  const { data: CreatorQuery, status: statusCreatorQuery } = useQuery(
    'CreatorQuery',
    getArtworkAuctionsPaginated
  )

  const {
    data: AuctionArtworkQuery,
    status: statusAuctionArtworkQuery,
  } = useQuery('AuctionArtworkQuery', getHeroArtwork)

  return (
    <Layout>
      <HeroAuction auction={AuctionArtworkQuery} />
      <ArtworkGrid
        title="Live auctions"
        titleButton="live auctions"
        link="/"
        icon
      >
        <Gallery artworksQuery={liveAuctionsQuery} itemType="artworks" />
      </ArtworkGrid>
      <ArtworkGrid title="Featured artworks" titleButton="artworks" link="/">
        <Gallery artworksQuery={AuctionsQuery} itemType="artworks" />
      </ArtworkGrid>
      <ArtworkGrid
        title="Featured creators"
        titleButton="creators"
        link="/creators"
      >
        <Gallery artworksQuery={CreatorQuery} itemType="creator" />
      </ArtworkGrid>
      <ContactUs />
    </Layout>
  )
}

export default Home
