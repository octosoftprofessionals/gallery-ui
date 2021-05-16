import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
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
        padding: Theme.spacing(5, 10),
        marginBottom: 40,
        alignItems: "center",
        '@media (max-width: 576px)': {
            padding: Theme.spacing(1, 0),
        },
    },
    container: {
        padding: 20,
        '@media (max-width: 576px)': {
            padding: 0,

        },
    },
    price: {
        width: "70%",
        fontSize: 18,
        fontWeight: 400,
        marginBottom: 40,
        '@media (max-width: 576px)': {
            width: "90%",
            marginBottom: 20,
        },
    },
    titlePrice: {
        width: "70%",
        fontSize: 18,
        fontWeight: 400,
        color: "grey",
        paddingBottom: 40,
        '@media (max-width: 576px)': {
            width: "90%",
            marginBottom: 20,
        },

    },
    divider: {
        opacity: Theme.palette.action.disabledOpacity[1],
    },

    button: { borderRadius: Theme.shape.borderRadius[2] },
    textButton: { fontSize: Theme.typography.fontSize[3] },
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
            <Grid
                item
                xs={12}
                /*  md={11} */
                container
                justify="space-around"
                alignItems="center"
            >

                <Grid
                    item
                    xs={12}

                    container
                    direction="row"
                    alignContent="center"
                    justify="space-between"
                    className={classes.root}
                >
                    <Grid item xs={12} lg={6} container direction="column">
                        <Typography variant="h3" color="primary">
                            Become a Creator
                </Typography>

                        <Typography variant="caption" color="primary" className={classes.price}>With the Community Upvote, artists are encouraged to support other artists and to set the stage for a model of community-led curation that puts power in the hands of creators.
                                In the new creative economy, we all rise up together.</Typography>
                        <Grid item xs={12} md={6}>
                            {/*   <Link to={linkButtonBid} className={classes.link}> */}
                            <Button variant="contained" fullWidth className={classes.button}>
                                <Typography variant="button" className={classes.textButton}>
                                    Place a bid
              </Typography>
                            </Button>
                            {/*   </Link> */}
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Divider
                            orientation="vertical"
                            flexItem
                            className={classes.divider}
                        />
                    </Hidden>
                    <Grid item xs={12} lg={5}>
                        <Grid item xs={12}>
                            <Typography
                                variant="button"
                                color="primary"

                            >
                                <h2 className={classes.title}>                  How it works
</h2>
                            </Typography>
                            <Typography
                                /* variant="caption" */
                                color="primary"
                                className={classes.titlePrice}
                            >
                                If you want to join the creator foundation, set up and verify your profile. Add your name to de Community Upvote
                                If you are a verified community member, log into your account, review the creator list, and raise up the artist whose work would like to support.

                        </Typography>
                        </Grid>
                        <Grid item xs={12} container direction="row" justify="flex-start">

                            <Grid item xs={12} md={5}>
                                {/* <Link to={linkButtonArtWork} className={classes.link}> */}
                                <Button variant="outlined" fullWidth className={classes.button}>
                                    <Typography variant="button" className={classes.textButton}>
                                        View artwork
              </Typography>
                                </Button>
                                {/*    </Link> */}

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    sm={11}
                    container
                    direction="row"
                    justify="flex-start"
                    spacing={4}
                >
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BecomeCreatorCover
