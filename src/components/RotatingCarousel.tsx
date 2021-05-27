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
        fill: '#000',
        borderColor: '#000',
        '&:hover': {
            backgroundColor: 'none',
        }
    },
    arrowRigt: {
        position: 'absolute',
        top: 'auto',
        right: 'auto',
        fill: '#000',
        borderColor: '#000',
        '&:hover': {
            backgroundColor: 'none',
        }
    },

}))

const RotatingCarousel = ({ artworksCarousel }) => {
    const classes = useStyle()
    return (
        <Carousel PrevIcon={[<ChevronLeft className={classes.arrowLeft} />,
        <RadioButtonUnchecked className={classes.arrowLeft} />]
        }
            NextIcon={[<ChevronRight className={classes.arrowRigt} />,
            <RadioButtonUnchecked className={classes.arrowLeft} />]
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
