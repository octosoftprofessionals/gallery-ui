import React from 'react'
import styled from 'styled-components'

import GalleryItem from './GalleryItem'

const Carousel = ({ items }) => (
  <ItemList>
    {items.map((item, index) => <GalleryItem key={index} {...item} />)}
  </ItemList>
)

export default Carousel

const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 3.5;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
`
