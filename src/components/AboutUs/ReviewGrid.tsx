import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider } from '@material-ui/core'
import ReviewCard from './ReviewCard'
import data from './TeamCardData'

const useStyle = makeStyles(Theme => ({
  root: {},
  head: {
    padding: Theme.spacing(16, 0, 9),
  },
  '@keyframes fillepa': {
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
  container: {
    width: 'inherit',
  },
  iconDot: {
    paddingRight: Theme.spacing(3),
    animation: '$fillepa 1.5s ease infinite ',
    display: ({ icon }) => (!icon ? 'none' : 'block'),
  },
  link: { textDecoration: 'none' },
  text: {
    fontSize: ({ fontSize }) => fontSize,
    '@media (max-width: 545px)': { fontSize: Theme.typography.fontSize[9] },
  },
  textButton: {
    display: ({ displayTextButton }) => displayTextButton,
    '@media (max-width: 545px)': { fontSize: Theme.typography.fontSize[8] },
  },
  divider: {
    backgroundColor: Theme.palette.primary.main,
  },
  /*   containerItem: {
    margin: 10,
  }, */
  divider: {
    backgroundColor: Theme.palette.primary.main,
    marginTop: '30px',
    marginBottom: '30px',
    width: 'inherit',
  },
  text: {
    textAlign: 'left',
  },
}))

const ReviewGrid = ({ icon, displayTextButton, fontSize }) => {
  const classes = useStyle({ icon, displayTextButton, fontSize })

  return (
    <Grid item container xs={12} direction="column">
      <Typography variant="h5" color="primary" className={classes.text}>
        What Creators Think
      </Typography>
      <Divider className={classes.divider} orientation="horizontal" />
      <Grid container /* spacing={10} */ xs={12} direction="row">
        {data.map((card, index) => (
          <Grid item xs={12} md={6} className={classes.containerItem}>
            <ReviewCard card={card} key={index} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default ReviewGrid
