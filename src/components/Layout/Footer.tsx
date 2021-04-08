import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import logoSrc from '../../assets/logo.png'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#F2F2F2',
    padding: '48px 24px',
  },
  text: {
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#b3b3b3',
    '&:hover': { color: '#666666' },
  },
  containerSocialMedia: {},
  link: { textDecoration: 'none', cursor: 'pointer' },
  img: {
    background: `url(${logoSrc})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    paddingBottom: '2em',
  },
})

const Footer = () => {
  const classes = useStyles()
  const { instagram, twitter, discord, blog } = 'http://localhost:8000/'
  return (
    <>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={4} container justify="space-around">
          <Grid item xs={2}>
            <div className={classes.img} />
          </Grid>
          <Link to={instagram} className={classes.link}>
            <Typography
              variant="overline"
              color="initial"
              className={classes.text}
            >
              Instagram
            </Typography>
          </Link>
          <Link to={twitter} className={classes.link}>
            <Typography
              variant="overline"
              color="initial"
              className={classes.text}
            >
              Twitter
            </Typography>
          </Link>
          <Link to={discord} className={classes.link}>
            <Typography
              variant="overline"
              color="initial"
              className={classes.text}
            >
              Discord
            </Typography>
          </Link>
          <Link to={blog} className={classes.link}>
            <Typography
              variant="overline"
              color="initial"
              className={classes.text}
            >
              Blog
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={5} container justify="space-around">
          <Link to={instagram} className={classes.link}>
            <Typography
              variant="overline"
              color="initial"
              className={classes.text}
            >
              Community Guidelines
            </Typography>
          </Link>
          <Link to={instagram} className={classes.link}>
            <Typography
              variant="overline"
              color="initial"
              className={classes.text}
            >
              Terms of Service
            </Typography>
          </Link>
          <Link to={instagram} className={classes.link}>
            <Typography
              variant="overline"
              color="initial"
              className={classes.text}
            >
              Privacy
            </Typography>
          </Link>
          <Link to={instagram} className={classes.link}>
            <Typography
              variant="overline"
              color="initial"
              className={classes.text}
            >
              Careers
            </Typography>
          </Link>
          <Link to={instagram} className={classes.link}>
            <Typography
              variant="overline"
              color="initial"
              className={classes.text}
            >
              Help
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer
