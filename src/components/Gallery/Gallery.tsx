import React from 'react'

import GalleryItem from '../GalleryItem/GalleryItem'

import classes from './Gallery.module.css'

const Gallery = ({ items }) => (
  <div className={classes.gallery}>
    {items.map((item, index) => <GalleryItem key={index} {...item} />)}
  </div>
)

export default Gallery
