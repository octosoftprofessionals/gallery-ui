import React from 'react'
import styled from 'styled-components'

import BannerImg from '../components/BannerImg'
import BottomFiller from '../components/Sectional/BottomFiller'
import Featured from '../components/Featured'
import HeroAuction from '../components/HeroAuction'
import Layout from '../components/Layout/Layout'

const items = [...new Array(20)].map(() => ({}))

const Home = () => {
  return (
    <Layout>
      <HeroSection>
        <HeroAuction />
      </HeroSection>
      <Featured title="Live auctions" items={items} icon />
      <Featured title="Featured artworks" items={items} />
      <Featured title="Featured creators" items={items} />
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
