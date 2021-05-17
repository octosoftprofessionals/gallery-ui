import React from 'react'
import {
    Button,
    Divider,
    Grid,
    Hidden,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
    root: {
        alignItems: "center",
        height: "100%",
        '@media (max-width: 576px)': {
            padding: 0,
            margin: 0,
            height: "100%",
        },
    },
    container: {
        padding: 20,
        '@media (max-width: 576px)': {
            padding: 0,
            margin: 0,
        },
    },
    coverTitle: {

        '@media (max-width: 768px)': {
            fontSize: 36,
            marginBottom: 20,
        },
    },
    price: {
        fontSize: 18,
        fontWeight: 400,

        '@media (max-width: 576px)': {
            marginBottom: 20,
        },
    },
    titlePrice: {
        width: "70%",
        fontSize: 18,
        fontWeight: 400,
        color: "grey",

        '@media (max-width: 768px)': {
            width: "90%",
            marginBottom: 20,
        },

    },
    divider: {
        opacity: Theme.palette.action.disabledOpacity[1],
    },

    button: {
        borderRadius: Theme.shape.borderRadius[2],
        marginTop: 40,
        marginBottom: 40,
    },
    textButton: {
        fontSize: Theme.typography.fontSize[3],
    },
    numberTimer: { fontSize: Theme.typography.fontSize[6] },
    link: { textDecoration: 'none' },
    title: {
        padding: 0,
        margin: 0,
    }
}))

const BecomeCreatorCover = () => {

    const classes = useStyle()
    return (
        <Grid container className={classes.container} >
            <Grid item container justify="space-around" alignItems="center">
                <Grid item container direction="row" alignContent="center" justify="space-between" className={classes.root}>
                    <Grid item xs={12} sm={5} md={4}>
                        <Typography variant="h3" color="primary"><Grid container direction="collum" className={classes.coverTitle} ><span>Introducing</span><span>Community</span><span>Upvote</span></Grid></Typography>
                        <Typography variant="caption" color="primary" className={classes.price}>With the Community Upvote, artists are encouraged to support other artists and to set the stage for a model of community-led curation that puts power in the hands of creators.
                                In the new creative economy, we all rise up together.</Typography>
                        <Grid item xs={12} md={6}>
                            <Button variant="contained" fullWidth className={classes.button}>
                                <Typography variant="button" className={classes.textButton}>
                                    Join</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Hidden xsDown> <Divider orientation="vertical" flexItem className={classes.divider} /></Hidden>
                    <Grid item xs={12} sm={5} md={4}>
                        <Typography variant="button" color="primary"><h2 className={classes.title}>How it works</h2></Typography>
                        <Typography color="primary" className={classes.titlePrice}>
                            <Grid container direction="collum">
                                <span>If you want to join the creator foundation, set up and verify your profile. Add your name to de Community Upvote.</span>
                                <span>If you are a verified community member, log into your account, review the creator list, and raise up the artist whose work would like to support.</span>
                            </Grid>
                        </Typography>
                        <Grid item xs={12} md={6} container direction="row" justify="flex-start">
                            <Button variant="outlined" fullWidth className={classes.button}>
                                <Typography variant="button" className={classes.textButton}>
                                    Learn More </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BecomeCreatorCover
