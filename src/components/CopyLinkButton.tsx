import React from 'react'
import { Button, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinkIcon from '@material-ui/icons/Link';

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
    }
}))

const LinkButton = () =>{
    // const url = window.location.href
    // console.log(url)
    const classes = useStyle()
    return (
        <Button href="www.google.com" className={classes.root} underline='none' component={Link} target="_blank">
            <LinkIcon className={classes.icon}/>
            <Typography className={classes.text}>Copy Link</Typography>
        </Button>
    )
}

export default LinkButton;