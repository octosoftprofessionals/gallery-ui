import React from 'react'
import styled from 'styled-components'

import ArtworkDisplay from '../../components/ArtworkDisplay'
import Carousel from '../../components/Carousel'
import Layout from '../../components/Layout'

const imgUrl = 'https://image.mux.com/OqOt4fV1UKU02PntGC022luD9O7J01JZ701etlf022JIhd6A/thumbnail.jpg'
const videoUrl = 'http://localhost:8000/float.mp4'
const title = 'unnamed'
const artist = '@jandali'
const descriptionLines = [
  'This is the real deal.',
  'Created by fire and light, it showcases the power of all unknown mysteries witheld.',
  'The night is come, but not too soon;\nAnd sinking silently,\nAll silently, the little moon\nDrops down behind the sky.\nThere is no light in earth or heaven\nBut the cold light of stars;\nAnd the first watch of night is given\nTo the red planet Mars.',
]
const value = '50.00 ETH'

const Hero = ({ centerpiece }) => (
  <HeroRoot>
    <HeroAssetContainer>
      {centerpiece}
    </HeroAssetContainer>
  </HeroRoot>
)

const HeroRoot = styled.div`
  margin-top: 78px;
  background-color: antiquewhite;
  padding: 60px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroAssetContainer = styled.div`
  width: 50%;
  max-width: 520px;
`;

const ThickDivider = () => (
  <div style={{ borderBottom: '2px solid #333', marginTop: '1.25em', marginBottom: '1.5em' }}></div>
)

const items = [...new Array(5)].map(() => ({}))

const Description = ({ lines }) => (
  <DescriptionRoot>
    {descriptionLines.map(line => (
      <p>
        {line.split('\n').map((newline, index, ary) => (
          index === ary.length - 1 ?
            newline :
            <>
              {newline}<br />
            </>
        ))}
      </p>
    ))}
  </DescriptionRoot>
)

const DescriptionRoot = styled.div`
  margin-top: 32px;
`;

const MoreItems = () => (
  <MoreItemsRoot>
    <MoreItemsHeader>
      <h2>Browse More Artwork</h2>
      <ThickDivider />
    </MoreItemsHeader>
    <CarouselContainer>
      <Carousel items={items} />
    </CarouselContainer>
  </MoreItemsRoot>
)

const MoreItemsRoot = styled.div`
  width: 50%;
`;

const MoreItemsHeader = styled.div`
  width: 100%;
`;

const CarouselContainer = styled.div`
  width: 100%;
`;

const params = { imgUrl, videoUrl, title, artist, descriptionLines, value }

const ShowArtwork = () => {
  return (
    <div>
      <Hero centerpiece={<ArtworkDisplay imgUrl={imgUrl} videoUrl={videoUrl} />} />
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
                <ValueText>
                  {value}
                </ValueText>
              </ValueTextContainer>
            </Header>

            <Divider />

            <Description lines={descriptionLines} />
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
`;

const ContentContainer = styled.div`
  width: 50%;
  min-height: 480px;
  margin-bottom: 64px;

  > * + * {
    margin: 24px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  > * {
    width: 50%;
  }
`;

const TitleText = styled.h1`
  margin-bottom: 0;
`;

const ArtistText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const ValueTextContainer = styled.div`
  text-align: right;
  flex-direction: column;
  justify-content: flex-end;
`;

const ValueText = styled.p`
  margin-top: 20px;
  font-weight: bold;
  margin-bottom: 0;
`;

const Divider = styled.div`
  border-bottom: 2px solid #333;
  margin: 24px 0;
`;
