import React from 'react'
import styled from 'styled-components'

import BannerImg from '../components/BannerImg'
import BottomFiller from '../components/Sectional/BottomFiller'
import ArtworkGrid from '../components/ArtworkGrid'
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
        titleButtom="live auctions"
        items={items}
        icon
      />
      <ArtworkGrid
        title="Featured artworks"
        titleButtom="artworks"
        items={items}
      />
      <ArtworkGrid
        title="Featured creators"
        titleButtom="creators"
        items={items}
      />
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
