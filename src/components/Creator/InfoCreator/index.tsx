import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  Tooltip,
} from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import { FileCopy } from '@material-ui/icons'

import { boxShadow } from '../../Styles/Colors'
import Links from './Links'
import ButtonsSocialMedia from './ButtonsSocialMedia'

const useStyle = makeStyles(Theme => ({
  root: {},
  containerButton: { position: 'relative', marginBottom: Theme.spacing(10) },
  button: {
    padding: 0,
    boxShadow: boxShadow.boxShadow1,
    backgroundColor: Theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: Theme.palette.primary.main,
      transform: 'none',
      boxShadow: 'none',
    },
    zIndex: 30,
  },
  textButton: {
    fontFamily: Theme.typography.fontFamily[1],
    fontWeight: 400,
    padding: Theme.spacing(1, 5),
  },
  textKeyPublic: {
    fontFamily: Theme.typography.fontFamily[1],
    fontWeight: 400,
    padding: Theme.spacing(1, 5),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '60%',
  },
  buttonKeyPublic: {
    width: '65%',
    position: 'absolute',
    left: Theme.spacing(13),
    backgroundColor: Theme.palette.secondary.main,
    padding: Theme.spacing(0, 0, 0, 13),
    boxShadow: boxShadow.boxShadow1,
    '&:hover': {
      backgroundColor: Theme.palette.secondary.main,
      transform: 'none',
      boxShadow: boxShadow.boxShadow1,
    },
  },
  userName: { fontSize: Theme.typography.fontSize[6], width: 'fit-content' },
  textFollow: {
    cursor: 'pointer',
    fontSize: Theme.typography.fontSize[4],
    '&:hover': { color: Theme.palette.primary.main },
  },
  divider: {
    backgroundColor: Theme.palette.primary.main,
    opacity: Theme.palette.action.disabledOpacity[1],
    margin: Theme.spacing(5, 0, 5),
  },
  textDate: { textTransform: 'capitalize' },
}))

const InfoCreator = ({
  name,
  username,
  followers,
  following,
  followedes,
  // links,
  // bio,
  // createdAt,
  userIndex = null,
  publicKey,
  type,
}) => {
  const classes = useStyle()
  // const month = new Date(createdAt).toLocaleString('default', { month: 'long' })
  // const year = new Date(createdAt).getFullYear()

  const getPublicKey = () => {
    return navigator.clipboard.writeText(publicKey)
  }

  return (
    <Grid item xs={12} container direction="column" justify="space-around">
      <Grid item className={classes.containerButton}>
        {userIndex ? (
          <Button variant="contained" className={classes.button}>
            <Typography
              variant="caption"
              color="secondary"
              className={classes.textButton}
            >{`#${userIndex}`}</Typography>
          </Button>
        ) : null}
        <Button
          onClick={getPublicKey}
          variant="contained"
          color="primary"
          endIcon={
            <Tooltip title="Copy Address" placement="top">
              <FileCopy />
            </Tooltip>
          }
          className={classes.buttonKeyPublic}
        >
          <Typography
            variant="caption"
            color="primary"
            className={classes.textKeyPublic}
          >
            {`${publicKey}`}
          </Typography>
        </Button>
      </Grid>
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
            {following ? following : '—'}
          </Typography>
          <Typography variant="overline" className={classes.textFollow}>
            Following
          </Typography>
        </Grid>
        <Grid item xs={3} container direction="column">
          <Typography variant="h6" color="primary">
            {followers ? followers : '—'}
          </Typography>
          <Typography variant="overline" className={classes.textFollow}>
            Followers
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Button variant="outlined" fullWidth>
            {type === 'account' ? (
              <Typography variant="button">Edit Profile</Typography>
            ) : (
              <Typography variant="button">Follow</Typography>
            )}
          </Button>
        </Grid>
      </Grid>
      {type === 'account' ? null : (
        <>
          {' '}
          <Typography variant="button" color="primary">
            Followed by
          </Typography>
          <AvatarGroup spacing="small">
            {followedes.map((item, i) => (
              <Avatar key={i} src={item} />
            ))}
          </AvatarGroup>
          {/* <div
            onClick={() => {
              console.log('press hosad')
            }}
          >
            <Typography variant="overline" className={classes.textFollow}>
              View all
            </Typography>
          </div> */}
          <Grid item xs={12} sm={7}>
            <ButtonsSocialMedia
              // links={links}
              verified={true}
              imgUrl={followedes[3]}
              invited="Diolink"
            />
          </Grid>
        </>
      )}

      {/* <Grid item xs={12} sm={11}>
        <Typography variant="caption" color="primary">
          Bio
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body2" color="primary" paragraph>
          {bio !== undefined && bio !== ' ' ? bio : '—'}
        </Typography>
      </Grid> */}
      {/* <Grid item xs={12} sm={11}>
        <Typography variant="caption" color="primary">
          Links
        </Typography>
        <Divider className={classes.divider} />
        {links ? <Links links={links} /> : '—'}
      </Grid> */}
      {/* <Grid item xs={12} sm={11}>
        <Divider className={classes.divider} />
        <Grid container justify="space-between">
          <Typography variant="caption" color="primary">
            Joined
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            className={classes.textDate}
          >
            {createdAt ? `${month} ${year}` : '—'}
          </Typography>
        </Grid>
        <Divider className={classes.divider} />
      </Grid> */}
      <Box height="24px" />
    </Grid>
  )
}

export default InfoCreator
