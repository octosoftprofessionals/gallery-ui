import React from 'react'
import Carousel from 'react-material-ui-carousel'
import HeroAuction from '../components/HeroAuction'

const RotatingCarousel = ({ artworksCarousel }) => {
    return (
        <Carousel>
            {artworksCarousel ?
                artworksCarousel.map((artwork, i) => (
                    <HeroAuction
                        auction={artwork}
                        key={i}
                    />
                ))
                :
                null
            }
        </Carousel>
    )
};
export default RotatingCarousel
