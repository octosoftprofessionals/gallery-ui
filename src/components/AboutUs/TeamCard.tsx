import React from 'react'
import Truncate from 'react-truncate'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Avatar, Grid, Divider } from '@material-ui/core'
import CardInfo from './CardInfo'

const useStyle = makeStyles(Theme => ({
  infoCard: {
    padding: Theme.spacing(10),
    /*   paddingBottom: `${Theme.spacing(2)}vh`, */
    backgroundColor: Theme.palette.card.main,
    borderRadius: Theme.spacing(4, 4, 4, 4),
    width: '100%',
  },
  /* containerAvatar: { marginBottom: Theme.spacing(2) }, */
  link: { textDecoration: 'none' },
  containerVideo: { position: 'relative', paddingBottom: '100%' },
  job: {
    fontFamily: Theme.typography.fontFamily[1],
    marginTop: 20,
  },
  text: {
    fontFamily: Theme.typography.fontFamily[1],
    fontWeight: 400,
    fontSize: Theme.spacing(6),
    width: '100%',
  },
  large: {
    marginRight: Theme.spacing(10),
    width: '100px',
    height: '100px',
  },
  divider: {
    backgroundColor: Theme.palette.primary.main,
    marginLeft: '30px',
    marginRight: '30px',
    height: 'inherit',
  },
  position: {
    fontWeight: 200,
  },
}))

const TeamCard = ({ card, link }) => {
  const classes = useStyle()

  return (
    <Paper variant="elevation" elevation={1}>
      <Link to={link} className={classes.link}>
        <div className={classes.infoCard}>
          <Grid container item direction="row" justify="space-between">
            <Avatar className={classes.large} src={card.imageUrl} />
            <Divider orientation="horizontal" className={classes.divider} />
            <Typography variant="body2" color="primary">
              New York
            </Typography>
          </Grid>
          <Typography variant="body2" color="primary" className={classes.job}>
            {card.userName} |{' '}
            <span className={classes.position}> {card.position}</span>
          </Typography>
        </div>
      </Link>
    </Paper>
  )
}

export default TeamCard
