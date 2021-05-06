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
    iconPng:{
        width:theme.spacing(3),
    },
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 293.775 293.671">
                            <g id="etherscan-logo-circle" transform="translate(-219.378 -213.33)">
                                <path id="Path_1" data-name="Path 1" d="M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.468-12.47h20.778a12.469,12.469,0,0,1,12.467,12.467v90.279s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.466-12.467h20.778A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152" fill="#21325b"/>
                                <path id="Path_2" data-name="Path 2" d="M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.4-232.79,128.793" transform="translate(35.564 80.269)" fill="#979695"/>
                            </g>
                        </svg>
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
                        <svg id="Capa_1" enable-background="new 0 0 511.973 511.973" height="24" viewBox="0 0 511.973 511.973" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m255.989 0-221.693 127.993v255.985l221.693 127.994 221.688-127.994v-255.985zm176.683 136.651-176.683 101.965-176.688-101.965 176.688-102.01zm-368.376 25.977 176.693 101.969v204.074l-176.693-102.013zm206.693 306.043v-204.074l176.688-101.968v204.03z"/></svg>
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
