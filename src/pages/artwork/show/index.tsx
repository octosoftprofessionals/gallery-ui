import React from 'react'
import styled from 'styled-components'

import ArtworkDisplay from '../../../components/ArtworkDisplay'
import Layout from '../../../components/Layout/Layout'
import Hero from './Hero'
import MoreItems from './MoreItems'
import SmartDescription from './SmartDescription'

const imgUrl =
  'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg'
const videoUrl = 'http://localhost:8000/float.mp4'
const title = 'unnamed'
const artist = '@jandali'
const descriptionParagraphs = [
  'This is the real deal.',
  'Created by fire and light, it showcases the power of all unknown mysteries witheld.',
  'The night is come, but not too soon;\nAnd sinking silently,\nAll silently, the little moon\nDrops down behind the sky.\nThere is no light in earth or heaven\nBut the cold light of stars;\nAnd the first watch of night is given\nTo the red planet Mars.',
]
const value = '50.00 ETH'

// params: { imgUrl, videoUrl, title, artist, descriptionParagraphs, value }
const ShowArtwork = () => {
  return (
    <div>
      <Hero>
        <ArtworkDisplay imgUrl={imgUrl} videoUrl={videoUrl} />
      </Hero>
      {/* TODO: flip navbar style */}
      <Layout>
        <Main>
          <ContentContainer>
            <Header>
              <div>
                <TitleText>{title}</TitleText>
                <ArtistText>{artist}</ArtistText>
              </div>
              <ValueTextContainer>
                <ValueText>{value}</ValueText>
              </ValueTextContainer>
            </Header>

            <Divider />

            <SmartDescription paragraphs={descriptionParagraphs} />
          </ContentContainer>

          <MoreItems />
        </Main>
      </Layout>
    </div>
  )
}

export default ShowArtwork

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -38px;
  padding-bottom: 64px;
`

const ContentContainer = styled.div`
  width: 50%;
  min-height: 480px;
  margin-bottom: 64px;

  > * + * {
    margin: 24px 0;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  > * {
    width: 50%;
  }
`

const TitleText = styled.h1`
  margin-bottom: 0;
`

const ArtistText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`

const ValueTextContainer = styled.div`
  text-align: right;
  flex-direction: column;
  justify-content: flex-end;
`

const ValueText = styled.p`
  margin-top: 20px;
  font-weight: bold;
  margin-bottom: 0;
`

const Divider = styled.div`
  border-bottom: 2px solid #333;
  margin: 24px 0;
`
