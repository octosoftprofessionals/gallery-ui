import React from 'react'
import { Button, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BlockIcon from '@material-ui/icons/Block';

const useStyle = makeStyles(Theme => ({
    root: {
        padding: Theme.spacing(4),
        width:"100%",
        display: "flex",
        justifyContent: "flex-start"
    },
    text: {
        fontSize: Theme.typography.fontSize[9],
        color: Theme.palette.error.dark,
        fontFamily: 'Bai Jamjuree',
        marginLeft: Theme.spacing(4),
    },
    icon: {
        fontSize: Theme.typography.fontSize[9],
        color: Theme.palette.error.dark,
    }
}))

const ReportButton = () =>{
    const classes = useStyle()
    return (
        <Button href="www.google.com" className={classes.root} underline='none' component={Link} target="_blank">
            <BlockIcon className={classes.icon} />
            <Typography className={classes.text}>Report</Typography>
        </Button>
    )
}

export default ReportButton;