import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Button, Grid, Typography } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'

const useStyle = makeStyles(Theme => ({
  root: {},
  userName: { fontSize: Theme.typography.fontSize[6] },
  textFollow: {
    cursor: 'pointer',
    fontSize: Theme.typography.fontSize[4],
    '&:hover': { color: Theme.palette.primary.main },
  },
}))

const InfoCreator = ({
  name,
  username,
  followers,
  following,
  followedes,
  links,
}) => {
  const classes = useStyle()
  const {
    discord,
    facebook,
    instagram,
    snapchat,
    tiktok,
    twitch,
    twitter,
    website,
    youtube,
  } = links ? links : ''

  console.log('object :>> ', tiktok)
  return (
    <Grid container direction="column" justify="space-around">
      <Typography variant="h4" color="primary">
        {name}
      </Typography>
      <Typography
        variant="subtitle2"
        className={classes.userName}
      >{`@${username}`}</Typography>
      <Grid item container direction="row">
        <Grid item xs={3} container direction="column">
          <Typography variant="h6" color="primary">
            {following}
          </Typography>
          <Typography variant="overline" className={classes.textFollow}>
            Following
          </Typography>
        </Grid>
        <Grid item xs={3} container direction="column">
          <Typography variant="h6" color="primary">
            {followers}
          </Typography>
          <Typography variant="overline" className={classes.textFollow}>
            Followers
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined">
            <Typography variant="button">Follow</Typography>
          </Button>
        </Grid>
      </Grid>
      <Typography variant="button" color="primary">
        Followed by
      </Typography>
      <AvatarGroup spacing="small">
        {followedes.map((item, i) => (
          <Avatar key={i} src={item} />
        ))}
      </AvatarGroup>
      <div
        onClick={() => {
          console.log('press hosad')
        }}
      >
        <Typography variant="overline" className={classes.textFollow}>
          View all
        </Typography>
      </div>
      {/* <Grid item>
        {links.map(({ link }, i) => (
          <Button key={i} variant="contained" color="secondary">
            {`${link.platform} ${link.handle}`}
          </Button>
        ))}
      </Grid> */}
    </Grid>
  )
}

export default InfoCreator
