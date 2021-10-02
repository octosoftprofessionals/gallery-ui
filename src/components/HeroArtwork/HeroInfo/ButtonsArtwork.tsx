import React from 'react'
import { Link } from 'gatsby'

import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(Theme => ({
  buttonView: {
    backgroundColor: 'transparent',
    borderRadius: Theme.shape.borderRadius[2],
    border: `${Theme.palette.primary.dark} solid 1px`,
    '&:hover': {
      border: `${Theme.palette.primary.dark} solid 1px`,
    },
  },
  textButton: { fontSize: Theme.typography.fontSize[3] },
  button: { borderRadius: Theme.shape.borderRadius[2] },
  link: { textDecoration: 'none' },
}))

const ButtonsArtwork = ({
  linkButtonArtWork,
  linkButton,
  textButton,
}: {
  linkButtonArtWork?: string
  linkButton?: string
  textButton: string
}) => {
  const classes = useStyle()
  return (
    <Grid item sm={10} container justify="flex-start">
      <Grid item xs={12} md={5}>
        <Link to={linkButton} className={classes.link}>
          <Button variant="outlined" fullWidth className={classes.button}>
            <Typography variant="button" className={classes.textButton}>
              {textButton}
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} md={5}>
        <Link to={linkButtonArtWork} className={classes.link}>
          <Button variant="contained" fullWidth className={classes.buttonView}>
            <Typography variant="button" className={classes.textButton}>
              View artwork
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default ButtonsArtwork
