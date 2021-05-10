import React, {useState} from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TwShareButton from '../../components/TwShareButton'
import CopyLinkButton from '../CopyLinkButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ReportButton from '../ReportButton';

const useStyle = makeStyles(Theme => ({
    root: {
        backgroundColor: Theme.palette.secondary.main,
        padding: Theme.spacing(3),
        borderRadius: Theme.spacing(2),
        position: 'absolute',
        top: '-140px',
        right: 20,
    },
    report: {
        backgroundColor: Theme.palette.secondary.main,
        position: 'absolute',
        padding: Theme.spacing(2),
        borderRadius: Theme.spacing(2),
        top: '-80px',
        right: 40,
    },
    container:{
        position: 'absolute',
        top:'-28px'
    },
    button:{
        backgroundColor: Theme.palette.secondary.main,
        transition:'0.3s all linear',
        width: 'auto',
        position: 'relative',
        boxShadow:'0px 10px 20px rgb(0 0 0 / 5%)',
        '&:hover':{
            boxShadow: '0px 10px 20px rgb(0 0 0 / 10%)',
            transform: 'translateY(-2px)',
            backgroundColor: Theme.palette.secondary.main,
        }
    },
    buttonReport:{
        backgroundColor: Theme.palette.secondary.main,
        transition:'0.3s all linear',
        borderRadius: '50%',
        minWidth: 50,
        padding:0,
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
    const [showReport, setShowReport] = useState(false);

    const classes = useStyle();

    function displayButtons(e) {
        e.preventDefault();
        setShowButtons(!showButtons);
        setShowReport(false);
    }

    function displayReport(e) {
        e.preventDefault();
        setShowReport(!showReport);
        setShowButtons(false);
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
            {
                showReport ?
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center"
                    className={classes.report}
                    spacing={2}
                    xs={3}
                >
                    <ReportButton />
                </Grid>
                : 
                null
            }
            <Grid container direction="row" justify="center" xs={4}>
                <Button onClick={displayReport} className={classes.buttonReport} >
                    <MoreHorizIcon className={classes.icon} />
                </Button>
                <Button onClick={displayButtons} className={classes.button} >
                    <ArrowUpwardIcon className={classes.icon} />
                    <Typography className={classes.text} >Share</Typography>
                </Button>
            </Grid>
            
        </Grid>
    )
}

export default ArtworkShare;
