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
    paddingTop: Theme.spacing(10),
    paddingBottom: Theme.spacing(10),
    fontSize: Theme.spacing(8),
    lineHeight: 1.7,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 400,
    fontFamily: Theme.typography.fontFamily[1],
    '&:hover': { color: Theme.palette.primary.main },
    '@media (max-width: 576px)': {
      fontSize: Theme.spacing(4),
    },
  },
  link: { textDecoration: 'none' },
  buttonText: {
    paddingLeft: Theme.spacing(8),
    paddingRight: Theme.spacing(8),
    borderColor: '#E6E6E6',
    '@media (max-width: 576px)': {
      paddingLeft: Theme.spacing(5),
      paddingRight: Theme.spacing(5),
      marginLeft: 'auto',
      marginRight: 'auto',
      boxSizing: 'border-box',
      display: 'inline-block',
      border: Theme.spacing(1),
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
    marginBottom: Theme.spacing(10),
    '@media (max-width: 576px)': {
      marginBottom: 0,
    },
    fill: Theme.palette.secondary.contrastText,
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
        {/* <Grid item>
          <Link to={link} className={classes.link}>
            <Button variant="outlined" className={classes.button}>
              <Typography variant="button" className={classes.buttonText}>
                Became a creator on OCTOSOFT
              </Typography>
            </Button>
          </Link>
        </Grid> */}
      </Grid>
    </Container>
  )
}

export default ContactUs
