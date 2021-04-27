import React from 'react'
import styled from 'styled-components'

import BannerImg from '../components/BannerImg'
import BottomFiller from '../components/Sectional/BottomFiller'
import ArtworkGrid from '../components/ArtworkGrid'
import Gallery from '../components/Gallery'
import HeroAuction from '../components/HeroAuction'
import Layout from '../components/Layout/Layout'

const items = [...new Array(20)].map(() => ({}))

const Home = () => {
  return (
    <Layout>
      <HeroSection>
        <HeroAuction />
      </HeroSection>
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
      <BottomFiller />
    </Layout>
  )
}

export default Home

const HeroSection = styled.div`
  width: 100%;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
