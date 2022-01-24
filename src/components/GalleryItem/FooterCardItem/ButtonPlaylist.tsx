import React, { useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography, Hidden } from '@material-ui/core'
import {
  StarBorderRounded,
  SlideshowOutlined,
  GradeSharp,
  SlideshowTwoTone,
} from '@material-ui/icons/'
import MenuListPlaylists from './ListPlaylists'
import ModalPlaylist from '../../Creator/Playlist/Modal'
import ModalArtworkSelected from '../../Creator/Playlist/Modal/ArtworksSelected'
import { getPlaylists } from '../../../services/playlists'
import {
  createPlaylist,
  addArtworkToNewPlaylist,
  deleteOnePlaylistByIdWithAssociatedArtworks,
} from '../../../services/playlists'

const useStyle = makeStyles(Theme => ({
  root: { padding: Theme.spacing(0, 6) },
  icon: {
    fontSize: Theme.spacing(12),
    fill: Theme.palette.primary.light,
  },
  button: { padding: 0, margin: 0 },
}))

const ButtonPlaylist = ({
  handleSubmitFavorite,
  handleSubmitUnFavorite,
  inFavorite,
  inPlaylist,
  account,
  artworkId,
}: {
  handleSubmitFavorite: Function
  handleSubmitUnFavorite: Function
  inFavorite?: boolean
  inPlaylist?: boolean
  account: string
  artworkId: number
}) => {
  // QueryClient
  const queryClient = useQueryClient()
  // Styles
  const classes = useStyle()
  // State
  const [anchorEl, setAnchorEl] = useState(null)
  const [isdelete, setIsDelete] = useState<boolean>(false)
  const [openCreatePlaylist, setOpenCreatePlaylist] = useState<boolean>(false)
  const [openAddPlaylist, setOpenAddPlaylist] = useState(false)
  const [addArtworksPlaylist, setAddArtworksPlaylist] = useState([])
  const [titlePlaylist, setTitlePlaylist] = useState<string>('')
  const [descriptionPlaylist, setDescriptionPlaylist] = useState<string>('')
  // MenuList modal
  const handleCloseMenuList = () => {
    setAnchorEl(null)
  }
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  // Playlist Modal

  const handleOpenCreatePlaylist = () => {
    setOpenCreatePlaylist(true)
    setAddArtworksPlaylist([])
    setTitlePlaylist('')
    setDescriptionPlaylist('')
    setIsDelete(false)
  }
  const handleCloseCreatePlaylist = () => {
    setOpenCreatePlaylist(false)
    handleCloseMenuList()
  }

  const handleCloseAddPlaylist = () => {
    setOpenAddPlaylist(false)
  }

  // Artworks Selected Modal
  const modifyPlaylist = (addIdArtwork: number) => {
    if (addArtworksPlaylist.includes(addIdArtwork)) {
      const index = addArtworksPlaylist.indexOf(addIdArtwork)
      const aux = addArtworksPlaylist
        .slice(0, index)
        .concat(addArtworksPlaylist.slice(index + 1))
      return setAddArtworksPlaylist(aux)
    } else {
      return setAddArtworksPlaylist([...addArtworksPlaylist, addIdArtwork])
    }
  }

  const handlePublishPlaylist = async () => {
    if (addArtworksPlaylist.length != 0) {
      const artworksRelated = addArtworksPlaylist.map((artworkId, index) => ({
        artwork_id: artworkId,
        priority: index + 1,
      }))

      try {
        const resCreatePlaylist = await createPlaylist(account, {
          title: titlePlaylist,
          description: descriptionPlaylist,
        })

        const { id } = resCreatePlaylist.data

        const resAddArtworkToNewPlaylist = await addArtworkToNewPlaylist({
          playlist_id: id,
          artworks_related: artworksRelated,
        })
      } catch (error) {
        console.log('errorCreatePlaylist :>> ', error)
      }
    } else {
      try {
        const resCreatePlaylist = await createPlaylist(account, {
          title: titlePlaylist,
          description: descriptionPlaylist,
        })

        const { id } = resCreatePlaylist.data

        const artworksRelated = [
          {
            artwork_id: artworkId,
            priority: 1,
          },
        ]

        const resAddArtworkToNewPlaylist = await addArtworkToNewPlaylist({
          playlist_id: id,
          artworks_related: artworksRelated,
        })
      } catch (error) {
        console.log('errorCreatePlaylist :>> ', error)
      }
    }
    try {
      const result = await getPlaylists(account)
      queryClient.setQueryData('PlaylistQuery', result)
    } catch (error) {
      console.log('errorUpDate :>> ', error)
    }

    setAddArtworksPlaylist([])
    setTitlePlaylist('')
    setDescriptionPlaylist('')
    handleCloseAddPlaylist()
  }

  const handlerDeletedPlaylist = async (id: number) => {
    setIsDelete(true)
    try {
      const resDeletePlaylist =
        await deleteOnePlaylistByIdWithAssociatedArtworks({
          playlist_id: id,
        })
    } catch (error) {
      console.log('errorResDeletePlaylist :>> ', error)
    }

    try {
      const result = await queryFunction()
      queryClient.setQueryData(queryName, result)
    } catch (error) {
      console.log('errorUpDate :>> ', error)
    }
  }
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.root}
    >
      <Button
        className={classes.button}
        onClick={inFavorite ? handleSubmitUnFavorite : handleSubmitFavorite}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Hidden only="xs">
            <Typography variant="overline" color="textSecondary">
              {inFavorite ? 'Remove Favorites' : 'Add to Favorites'}
            </Typography>
          </Hidden>
          {inFavorite ? (
            <GradeSharp className={classes.icon} />
          ) : (
            <StarBorderRounded className={classes.icon} />
          )}
        </Grid>
      </Button>

      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        className={classes.button}
        onClick={handleClick}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Hidden only="xs">
            <Typography variant="overline" color="textSecondary">
              Add to Playlist
            </Typography>
          </Hidden>
          {inPlaylist ? (
            <SlideshowTwoTone className={classes.icon} />
          ) : (
            <SlideshowOutlined className={classes.icon} />
          )}
        </Grid>
      </Button>
      <MenuListPlaylists
        anchorEl={anchorEl}
        onClose={handleCloseMenuList}
        account={account}
        artworkId={artworkId}
        handleOpenCreatePlaylist={handleOpenCreatePlaylist}
        openCreatePlaylist={openCreatePlaylist}
      />

      <ModalPlaylist
        onClose={handleCloseCreatePlaylist}
        open={openCreatePlaylist}
        setOpen={setOpenAddPlaylist}
        setTitle={setTitlePlaylist}
        title={titlePlaylist}
        setDescription={setDescriptionPlaylist}
        description={descriptionPlaylist}
        fatherComponent="ButtonPlaylist"
        onPublish={handlePublishPlaylist}
      />
      <ModalArtworkSelected
        onClose={handleCloseAddPlaylist}
        open={openAddPlaylist}
        onModifyPlaylist={modifyPlaylist}
        profileAddress={account}
        onPlublish={handlePublishPlaylist}
        artworksSelected={addArtworksPlaylist}
      />
    </Grid>
  )
}

export default ButtonPlaylist
