import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography, Button } from '@material-ui/core'
import ContactUsHero from '../assets/contactushero.svg'

const useStyle = makeStyles(Theme => ({
  contactMargin: {
    paddingTop: 100,
    paddingBottom: 100,
    alignItems: 'center',
  },
  text: {
    margin: 0,
    boxSizing: 'border-box',
    minWidth: 0,
    maxWidth: 520,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 21,
    lineHeight: 1.7,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 400,
    fontFamily:
      'Formular Mono, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Courier New',
    '&:hover': { color: Theme.palette.primary.main },
    '@media (max-width: 576px)': {
      fontSize: 14,
    },
  },
  link: { textDecoration: 'none' },
  buttonText: {
    fontSize: 18,
    paddingLeft: 21,
    paddingRight: 21,
    fontWeight: 600,
    borderColor: '#E6E6E6',
    '@media (max-width: 576px)': {
      fontSize: 18,
      margin: 0,
      paddingLeft: 16,
      paddingRight: 16,
      marginLeft: 'auto',
      marginRight: 'auto',
      boxSizing: 'border-box',
      display: 'inline-block',
      border: 2,
      minWidth: 0,
    },
  },
  button: {
    '@media (max-width: 576px)': {
      padding: 0,
      height: 56,
    },
  },
  icon: {
    marginBottom: 30,
    '@media (max-width: 576px)': {
      marginBottom: 0,
    },
  },
}))

const ContactUs = ({ link }) => {
  const classes = useStyle()
  return (
    <Container /* fixed */>
      <Grid
        className={classes.contactMargin}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item container direction="column">
          <ContactUsHero className={classes.icon} />
          <Typography variant="h5" className={classes.text}>
            WE’RE BRINGING DIGITAL CREATORS, CRYPTO NATIVES, AND COLLECTORS
            TOGETHER TO MOVE CULTURE FORWARD.
          </Typography>
        </Grid>
        <Grid item>
          <Link to={link} className={classes.link}>
            <Button variant="outlined" className={classes.button}>
              <Typography variant="button" className={classes.buttonText}>
                Became a creator on SuperChief
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContactUs
