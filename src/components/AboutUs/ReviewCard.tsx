import React from 'react'
import Truncate from 'react-truncate'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import CardInfo from './CardInfo'

const useStyle = makeStyles(Theme => ({
  /*  root: { position: 'relative' },
   */
  infoCard: {
    padding: Theme.spacing(4, 4, 6, 6),
    paddingBottom: `${Theme.spacing(2)}vh`,
    backgroundColor: Theme.palette.card.main,
    borderRadius: Theme.spacing(4, 4, 4, 4),
    width: '100%',
  },
  containerAvatar: { marginBottom: Theme.spacing(9) },
  link: { textDecoration: 'none' },
  containerVideo: { position: 'relative', paddingBottom: '100%' },
  username: {
    fontFamily: Theme.typography.fontFamily[2],
  },
  text: {
    fontFamily: 'Bai Jamjuree',
    fontWeight: 300,
    fontSize: Theme.spacing(6),
    width: '100%',
  },
}))

const ReviewCard = ({ card }) => {
  const classes = useStyle()

  return (
    <Link className={classes.link}>
      <Paper variant="elevation" elevation={1} className={classes.root}>
        <Link className={classes.link}>
          <div className={classes.infoCard}>
            <Typography variant="h5" color="primary">
              <Truncate lines={2}>{card.creatorUsername}</Truncate>
            </Typography>
            <Typography color="primary" variant="body" className={classes.text}>
              {card.opinion}
            </Typography>
            <CardInfo imageUrl={card.creatorImageUrl} />
          </div>
        </Link>
      </Paper>
    </Link>
  )
}

export default ReviewCard
