import React from 'react'
import Truncate from 'react-truncate'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import CardInfo from './CardInfo'

const useStyle = makeStyles(Theme => ({
  infoCard: {
    padding: Theme.spacing(10),
    backgroundColor: Theme.palette.card.main,
    borderRadius: Theme.spacing(4, 4, 4, 4),
    width: '100%',
  },
  link: { textDecoration: 'none' },
  containerVideo: { position: 'relative', paddingBottom: '100%' },
  username: {
    fontFamily: Theme.typography.fontFamily[2],
  },
  text: {
    width: '100%',
  },
}))

const ReviewCard = ({ card, link }) => {
  const classes = useStyle()

  return (
    <Paper variant="elevation" elevation={1}>
      <Link to={link} className={classes.link}>
        <div className={classes.infoCard}>
          <Typography variant="h5" color="primary">
            {card.useName}
          </Typography>
          <Typography color="primary" variant="body2" className={classes.text}>
            {card.opinion}
          </Typography>
          <CardInfo
            creatorImageUrl={card.creatorImageUrl}
            creatorUsername={card.creatorUsername}
          />
        </div>
      </Link>
    </Paper>
  )
}

export default ReviewCard
