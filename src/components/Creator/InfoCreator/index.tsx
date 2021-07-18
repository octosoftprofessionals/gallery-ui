import React from 'react'

import { useMutation } from 'react-query'
import { createFollow } from '../../../services/follow'
import useQueryParams from '../../../hooks/useQueryParams'
// import axios from 'axios'

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
    '@media (max-width: 576px)': {
      width: '100%',
      left: Theme.spacing(0),
      padding: Theme.spacing(0, 0, 0, 15),
    },
  },
  userName: { fontSize: Theme.typography.fontSize[6], width: 'fit-content' },
  textFollow: {
    cursor: 'pointer',
    fontSize: Theme.typography.fontSize[4],
    '&:hover': { color: Theme.palette.primary.main },
  },
  textFollowers: {
    cursor: 'pointer',
    fontSize: Theme.typography.fontSize[4],
    '&:hover': { color: Theme.palette.primary.main },
    '@media (max-width: 576px)': {
      marginLeft: Theme.spacing(8),
    },
  },
  divider: {
    backgroundColor: Theme.palette.primary.main,
    opacity: Theme.palette.action.disabledOpacity[1],
    margin: Theme.spacing(5, 0, 5),
  },
  textDate: { textTransform: 'capitalize' },
}))

//Fake mockup data just to send something and check that route is working properly
const mockUpData = {
  user_name: 'Roger',
  artist_name: '@MetaDrillMinter',
  artist_id: 1,
}

const InfoCreator = ({
  isMyAccount = false,
  username,
  publicKey,
  // name,
  followers,
  following,
  followedes,
  // links,
  // bio,
  // createdAt,
  userIndex = null,
}) => {
  const classes = useStyle()

  // https://react-query.tanstack.com/guides/mutations
  // 1st attempt)
  //const mutation = useMutation(newFollow => axios.post('http://localhost:3000/v1/follow', newFollow))
  //2nd attempt)
  // const mutation = useMutation(createFollow)

  //3rd attempt)
  const mutation = useMutation(newFollow => createFollow())

  // How can I pass the user_name, artist_name and artist_id into the mutation?
  //Try with useQueryParams? VBut doesn't make sense, because this is not comming/going from PARAMS, but from BODY (req.body on original route at server)...
  const { user_name, artist_name, artist_id } = useQueryParams()
  //Still, doesn't work. This error arise:
  /*
  error: el valor nulo en la columna «user_name» de la relación «follow» viola la restricción de no nulo
  Is like
  */

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
      {/* <Typography variant="h4" color="primary">
        {name}
      </Typography> */}
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
          <Typography variant="overline" className={classes.textFollowers}>
            Followers
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => {
              mutation.mutate({
                user_name: mockUpData.user_name,
                artist_name: mockUpData.artist_name,
                artist_id: mockUpData.artist_id,
              }) //What should I pass here? Passing fake data just to check.
            }}
          >
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}

            {mutation.isSuccess ? <div>Mutation able to add!</div> : null}

            <Typography variant="button">Follow</Typography>
          </Button>
        </Grid>
      </Grid>
      {isMyAccount ? null : (
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
