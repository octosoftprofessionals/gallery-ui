import React from 'react'
import Carousel from 'react-material-ui-carousel'
import HeroAuction from '../components/HeroAuction'
import {
    RadioButtonUnchecked,
    ChevronLeft,
    ChevronRight
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(Theme => ({
    arrowLeft: {
        position: 'absolute',
        top: 'auto',
        left: 'auto',

    },
    arrowRigt: {
        position: 'absolute',
        top: 'auto',
        right: 'auto',
    },

}))

const RotatingCarousel = ({ artworksCarousel }) => {
    const classes = useStyle()
    return (
        <Carousel PrevIcon={[<ChevronLeft className={classes.arrowLeft} />,
        <RadioButtonUnchecked />]
        }
            NextIcon={[<ChevronRight className={classes.arrowRigt} />,
            <RadioButtonUnchecked />]
            }
        >
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
