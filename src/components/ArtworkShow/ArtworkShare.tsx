import React, {useState} from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TwShareButton from '../../components/TwShareButton'
import CopyLinkButton from '../CopyLinkButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyle = makeStyles(Theme => ({
    root: {
        backgroundColor: Theme.palette.secondary.main,
        padding: Theme.spacing(3),
        borderRadius: Theme.spacing(2),
        position: 'absolute',
        top: '-140px'
    },
    container:{
        position: 'absolute',
        top:'-28px'
    },
    button:{
        backgroundColor: Theme.palette.secondary.main,
        transition:'0.3s all linear',
        width:'20%',
        position: 'relative',
        boxShadow:'0px 10px 20px rgb(0 0 0 / 5%)',
        '&:hover':{
            boxShadow: '0px 10px 20px rgb(0 0 0 / 10%)',
            transform: 'translateY(-2px)',
            backgroundColor: Theme.palette.secondary.main,
        }
    },
    text:{
        fontFamily: 'Bai Jamjuree',
        color: Theme.palette.primary.main,
        marginLeft: Theme.spacing(4),
    },
    icon: {
        fontSize: Theme.typography.fontSize[10],
        color: Theme.palette.primary.main,
    }
}))

const ArtworkShare = () =>{
    const [showButtons, setShowButtons] = useState(false);

    const classes = useStyle();

    function handleClick(e) {
        e.preventDefault();
        setShowButtons(!showButtons);
    }
    return(
        <Grid container direction="column" justify="flex-end" alignItems='flex-end' xs={6} className={classes.container}>
            {
                showButtons ?
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center"
                    className={classes.root}
                    spacing={2}
                    xs={4}
                >
                    <TwShareButton linkTwitter='www.google.com'/>
                    <CopyLinkButton />
                </Grid>
                : 
                null
            }
            <Button className={classes.button}>
                <MoreHorizIcon className={classes.icon} />
            </Button>
            <Button onClick={handleClick} className={classes.button}>
                <ArrowUpwardIcon className={classes.icon} />
                <Typography className={classes.text} >Share</Typography>
            </Button>
        </Grid>
    )
}

export default ArtworkShare;
