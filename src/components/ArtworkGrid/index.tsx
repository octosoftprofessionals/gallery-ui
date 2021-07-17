import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const useStyle = makeStyles(Theme => ({
  root: {},
  head: {
    padding: Theme.spacing(16, 0, 9),
  },
  '@keyframes fillepa': {
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
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
}))

const ArtworkGrid = ({
  children,
  title,
  titleButton,
  icon,
  link,
  displayTextButton,
  fontSize,
}: Props) => {
  const classes = useStyle({ icon, displayTextButton, fontSize })

  return (
    <Grid item container direction="column">
      <Grid
        item
        xs={12}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.head}
      >
        <Grid item xs={6} container alignItems="center">
          <FiberManualRecordIcon className={classes.iconDot} />
          <Typography variant="h5" color="primary" className={classes.text}>
            {title}
          </Typography>
        </Grid>

        <Grid item>
          <Link to={link} className={classes.link}>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.textButton}
            >
              {`View all ${titleButton}`}
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      {children}
    </Grid>
  )
}

type Props = {
  children?: React.ReactNode
  title?: string
  titleButton?: string
  icon?: boolean
  link?: string
  displayTextButton?: string
  fontSize?: string
}

export default ArtworkGrid
