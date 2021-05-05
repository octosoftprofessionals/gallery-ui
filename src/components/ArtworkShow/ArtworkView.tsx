import React, { useState } from 'react'
import { Grid, IconButton, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginBottom: theme.spacing(3),
            width: theme.spacing(16),
        },
    },
    box:{
        boxSizing: "border-box",
        width:"60%",
        backgroundColor: 'white',
        
        alignItems: 'center',
        borderRadius:theme.spacing(2),
        // padding:theme.spacing(7),
        padding: '0',
    },
    paper:{
        width:"100%",
        padding:theme.spacing(7),
        borderRadius:theme.spacing(2),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:"space-between",
        transition:'0.3s all linear',
        fontFamily:'Bai Jamjuree Regular',
        // color:'red',
        '&:hover': {
            color: 'black',
        },
    },
    item:{
        height:"80%"
    },
    icon: { 
        fontSize: theme.spacing(8),
        // color:'grey',
        '&:hover': {
            color: 'black',
        }, 
    },
    iconText:{ fontSize: theme.spacing(9),},
    text:{
        fontSize: theme.spacing(5),
        // color: 'black',
        marginLeft: theme.spacing(3)
    },
    grid:{
        margin:'0',
        color: 'black',
    }
}));

const ArtworkView = ({linkEtherscan, viewIpfs, viewMetadata}) => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return(
        <Grid
            container
            className={classes.root}
            direction="column"
            justify="center"
            alignItems="flex-start"
            spacing={0}
            xs={11}
        >   <Button href={linkEtherscan} underline="none" target="_blank" className={classes.box} component={Link}>
                <Paper elevation={1} className={classes.paper}>
                    <Grid container xs={8} className={classes.grid}>
                        <VisibilityOutlinedIcon className={classes.iconText} />
                        <Typography className={classes.text} variant="h6">
                            View on Etherscan
                        </Typography>
                    </Grid>
                    <OpenInNewOutlinedIcon className={classes.icon}/>
                </Paper>
            </Button>
            <Button href={viewIpfs} underline="none" className={classes.box} target="_blank" component={Link}>
                <Paper elevation={1} className={classes.paper}>
                    <Grid container xs={8} className={classes.grid}>
                        <VisibilityOutlinedIcon className={classes.iconText} />
                        <Typography className={classes.text} variant="h6">
                            View on IPFS
                        </Typography>
                    </Grid>
                    <OpenInNewOutlinedIcon className={classes.icon}/>
                </Paper>
            </Button>
            <Button href={viewMetadata} underline="none" className={classes.box} target="_blank" component={Link}>
                <Paper elevation={1} className={classes.paper}>
                    <Grid container xs={8} className={classes.grid}>
                        <VisibilityOutlinedIcon className={classes.iconText} />
                        <Typography className={classes.text} variant="h6">
                            View IPFS Metadata
                        </Typography>
                    </Grid>
                    <OpenInNewOutlinedIcon className={classes.icon}/>
                </Paper>
            </Button>
        </Grid>
    )
}

export default ArtworkView
