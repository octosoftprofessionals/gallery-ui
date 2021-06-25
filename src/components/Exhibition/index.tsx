import React, { useState } from 'react'
import { useQuery } from 'react-query'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import { galleryItemQuery } from '../../services/gallery'
import GalleryArtworks from '../Artworks/GalleryArtworks'
import useQueryParams from '../../hooks/useQueryParams'

const useStyles = makeStyles(theme => ({}))

const Exhibition = () => {
  const classes = useStyles()
  const { contractAddress, tokenId } = useQueryParams()
  const [displayReportModal, setDisplayReportModal] = useState(false)
  const { data: galleryItem, isLoading } = useQuery('artworkQuery', () =>
    galleryItemQuery({
      assetContractAddress: contractAddress,
      assetTokenId: tokenId,
    })
  )
  return (
    <Grid item container justify="space-around">
      <Grid item xs={12} sm={4}>
        cuadro filtro
      </Grid>
      <Grid item xs={12} sm={7}>
        <GalleryArtworks isLoading={isLoading} data={galleryItem} />
      </Grid>
    </Grid>
  )
}

export default Exhibition
