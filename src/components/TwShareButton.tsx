import React from 'react'
import { Button, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyle = makeStyles(Theme => ({
    root: {
        padding: Theme.spacing(4),
        width:"100%",
        display: "flex",
        justifyContent: "flex-start"
    },
    text: {
        fontSize: Theme.typography.fontSize[9],
        color: Theme.palette.primary.main,
        fontFamily: 'Bai Jamjuree',
        marginLeft: Theme.spacing(4),
    },
    icon: {
        fontSize: Theme.typography.fontSize[10],
        color: Theme.palette.primary.main,
    }
}))

const TwShareButton = ({linkTwitter}) =>{
    const classes = useStyle()
    return (
        <Button href={linkTwitter} className={classes.root} underline='none' component={Link} target="_blank">
            <TwitterIcon className={classes.icon} />
            <Typography className={classes.text} >Tweet</Typography>
        </Button>
    )
}

export default TwShareButton;
