import React from 'react'
import { useQuery } from 'react-query'

import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import EmptyAccount from '../../GridCreator/EmptyAccount'
import Spinner from '../../../Spinner'
import { GalleryItem } from '../../../../types'
import ItemsToSelect from './ItemsToSelect'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
}))

const ItemArtworkSelected = ({
  onModifyPlaylist,
  queryName,
  queryFunction,
  emptyMessageProps,
  artworksSelected,
  renderItem = [],
}: {
  onModifyPlaylist: any
  queryName: string
  queryFunction?: () => Promise<GalleryItem[]>
  emptyMessageProps: Record<string, any>
  artworksSelected: number[]
  renderItem?: GalleryItem[]
}) => {
  const { data: galleryItems = [], isLoading } = useQuery(
    queryName,
    queryFunction,
    { refetchOnWindowFocus: false }
  )

  const { data: ItemsToShow = [] } = galleryItems

  const classes = useStyle()

  if (!isLoading && ItemsToShow.length === 0 && renderItem.length === 0) {
    return (
      <Box style={{ padding: 24 }}>
        <EmptyAccount {...emptyMessageProps} />
      </Box>
    )
  }
  if (renderItem.length !== 0) {
    return renderItem.map(galleryItem => (
      <Grid item xs={12} sm={6} md={4} className={classes.containerItem}>
        <ItemsToSelect
          key={galleryItem.id}
          galleryItem={galleryItem}
          onModifyPlaylist={onModifyPlaylist}
          artworksSelected={artworksSelected}
        />
      </Grid>
    ))
  }
  return (
    <>
      {isLoading ? (
        <Spinner height="30vh" />
      ) : (
        <Grid container justify="center" wrap="wrap">
          {ItemsToShow.map(galleryItem => (
            <Grid item xs={12} sm={6} md={4} className={classes.containerItem}>
              <ItemsToSelect
                key={galleryItem.id}
                galleryItem={galleryItem}
                onModifyPlaylist={onModifyPlaylist}
                artworksSelected={artworksSelected}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default ItemArtworkSelected
