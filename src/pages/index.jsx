import React from 'react'
import styled from 'styled-components'

import BottomFiller from '../components/Sectional/BottomFiller'
import FooterSectional from '../components/FooterSectional'
import Gallery from '../components/Gallery'
import HeroAuction from '../components/HeroAuction'
import Layout from '../components/Layout'

const items = [...new Array(20)].map(() => ({}))

const FeaturedArtworkSection = () => (
  <FeaturedArtwork>
    <FeaturedArtworkTitle>
      Featured Artwork
    </FeaturedArtworkTitle>
    <Divider />
    <Gallery items={items} />
  </FeaturedArtwork>
)

const Home = () => {
  return (
    <Layout>
      <HeroAuction />
      <FeaturedArtworkSection />
      <FooterSectional />
      <BottomFiller />
    </Layout>
  )
}

export default Home

const FeaturedArtwork = styled.div`
  padding-bottom: 78px;
`;

const FeaturedArtworkTitle = styled.h2`
  vertical-align: top;
  height: 21px;
  line-height: 25px;
  font-size: 1.5em;
  margin-bottom: 0;
`;

const Divider = styled.div`
  border-bottom: 2px solid #333;
  margin-top: 1.25em;
  margin-bottom: 1.5em;
`;
