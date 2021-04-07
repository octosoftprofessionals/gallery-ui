import React from 'react'
import styled from 'styled-components'

import Carousel from '../../../components/Carousel'

const items = [...new Array(5)].map(() => ({}))

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

export default MoreItems

const MoreItemsRoot = styled.div`
  width: 50%;
`

const MoreItemsHeader = styled.div`
  width: 100%;
`

const ThickDivider = styled.div`
  border-bottom: 2px solid #333;
  margin-top: 1.25em;
  margin-bottom: 1.5em;
`

const CarouselContainer = styled.div`
  width: 100%;
`
