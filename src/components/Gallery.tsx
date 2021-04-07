import React from 'react'
import styled from 'styled-components'

import GalleryItem from './GalleryItem'

const Gallery = ({ items }) => (
  <Root>
    {items.map((item, index) => (
      <GalleryItem key={index} {...item} />
    ))}
  </Root>
)

export default Gallery

const Root = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 3;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
