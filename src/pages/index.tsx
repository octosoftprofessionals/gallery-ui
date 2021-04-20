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
      {/* <ArtworkGrid
        title="Live auctions"
        titleButtom="live auctions"
        link="/auctions"
        icon
      >
        <Gallery items={items} typeItem="artworks" />
      </ArtworkGrid> */}
      {/* <ArtworkGrid
        title="Featured artworks"
        titleButtom="artworks"
        link="/artworks"
      >
        <Gallery items={items} typeItem="artworks" />
      </ArtworkGrid> */}
      <ArtworkGrid
        title="Featured creators"
        titleButtom="creators"
        link="/creators"
      >
        <Gallery items={items} typeItem="creator" />
      </ArtworkGrid>
      {/* <ArtworkGrid title="Blog" titleButtom="articles" link="/articles">
        <Gallery items={items} typeItem="blog" />
      </ArtworkGrid> */}
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
