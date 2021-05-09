import React from 'react'
import { Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import LinkButton from '../LinkButton';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginBottom: theme.spacing(3),
            width: theme.spacing(16),
        },
    },
}));


const ArtworkView = ({artworkLinks}) => {
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
            xs={12}
        >   
            {
                artworkLinks.map((elem)=>{
                    return(
                        <LinkButton link={elem.link} text={elem.text} icon={elem.icon}/>
                        
                    )
                })
            }
        </Grid>
    )
}

export default ArtworkView
