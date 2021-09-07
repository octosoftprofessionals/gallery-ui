import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import CreatorButton from '../../../CreatorButton'

import ArtworkShare from './ArtworkShare'

const useStyle = makeStyles(Theme => ({
  root: {
    position: 'relative',
    paddingBottom: Theme.spacing(13),
  },
}))

const HeadButtons = ({
  creatorUsername,
  creatorImageUrl,
  creatorProfileLink,
  linkTwitter,
  setDisplayReportModal,
}: {
  creatorUsername: string
  creatorImageUrl: string
  creatorProfileLink: string
  linkTwitter: Function
  setDisplayReportModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const classes = useStyle()
  return (
    <Grid
      item
      xs={10}
      container
      justify="space-between"
      className={classes.root}
    >
      <CreatorButton
        username={creatorUsername}
        imageUrl={creatorImageUrl}
        profileUrl={creatorProfileLink}
      />
      <ArtworkShare
        linkTwitter={linkTwitter}
        setDisplayReportModal={setDisplayReportModal}
        right="0"
      />
    </Grid>
  )
}

export default HeadButtons
