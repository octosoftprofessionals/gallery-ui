import React from 'react'

import GalleryItem from '../GalleryItem/GalleryItem'

import classes from './Carousel.module.css'

const Carousel = ({ items }) => (
  <div className={classes.carousel}>
    <div className={classes.items}>
      {items.map((item, index) => <GalleryItem key={index} {...item} />)}
    </div>
    <div className={classes.scrollIndicator}></div>
  </div>
)

export default Carousel
