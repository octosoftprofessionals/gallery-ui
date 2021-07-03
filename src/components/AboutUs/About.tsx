import React from 'react'
import { Divider, Grid, Hidden, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  container: {
    width: '100%',
    '@media (max-width: 576px)': {
      padding: 0,
      margin: 0,
    },
  },
  divider: {
    backgroundColor: Theme.palette.primary.main,
    marginLeft: '30px',
    marginRight: '30px',
    height: 'inherit',
  },
  divider2: {
    backgroundColor: Theme.palette.primary.main,
    width: 'inherit',
    marginBottom: 60,
  },
  link: { textDecoration: 'none' },
  title: {
    padding: 0,
    marginBottom: 40,
    textAlign: 'center',
    marginBottom: 80,
    '@media (max-width: 576px)': {
      fontSize: 32,
      textAlign: 'left',
      marginBottom: 20,
    },
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 400,
    '@media (max-width: 576px)': {
      marginBottom: 20,
    },
  },
}))

const AboutUsMain = () => {
  const classes = useStyle()
  return (
    <Grid>
      <Typography variant="h3" color="primary" className={classes.title}>
        About Foundation
      </Typography>
      {/*       <Divider orientation="horizontal" className={classes.divider2} />
       */}
      <Grid container justify="center" spacing={10} direction="row">
        <Grid item xs={12} md={5}>
          <Typography
            variant="caption"
            color="primary"
            className={classes.text}
          >
            SuperChief is a platform that aims to build a new creative economy—a
            world where creators can use the Ethereum blockchain to value their
            online expression in entirely new ways, and build stronger
            connections with their supporters. SuperChief bridges crypto and
            culture to foster a network of mutual support between artists,
            creators, and collectors.
          </Typography>
        </Grid>
        <Divider className={classes.divider} orientation="vertical"></Divider>
        <Grid item xs={12} sm={5}>
          <Typography
            variant="caption"
            color="primary"
            className={classes.text}
          >
            We’re forging a community-driven path, providing culturally
            pioneering curation, and sharing our tools with the rapidly evolving
            group of developers who are excited to define this future with us.
            We want anyone and everyone who cares about the future of digital
            expression to be a part of it. Let’s explore these new possibilities
            collectively.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AboutUsMain
