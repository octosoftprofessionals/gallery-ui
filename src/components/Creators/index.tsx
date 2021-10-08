import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import { galleryItemQuery } from '../../services/gallery'
import SearchCreator from './SearchCreator'
import Gallery from '../Gallery'
import CreatorItem from '../GalleryItem/CreatorItem'
import Spinner from '../Spinner'

const useStyle = makeStyles(Theme => ({
  title: {
    fontSize: '3.5rem',
    '@media (max-width: 576px)': {
      fontSize: '2rem',
    },
    textAlign: 'center',
  },
  header: {
    borderBottom:
      Theme.palette.type === 'dark' ? '1px solid #FFFF' : '1px solid #000',
  },
}))

const Creators = ({ creatorsQuery = [], status }) => {
  // const [filteredCreators, setFilteredCreators] = useState(creatorsQuery)
  const [search, setSearch] = useState<String>('')
  const contractAddress = '0x495f947276749ce646f68ac8c248420045cb7b5e'
  const tokenId =
    '109357140932249174184232105731133177415490681567806678064024980607176452079646'

  const { data: creatorItem, isLoading } = useQuery(
    'creatorQuery',
    () => galleryItemQuery(contractAddress, tokenId),
    {
      refetchOnWindowFocus: false,
    }
  )
  const creator = []
  creator.push([creatorItem])

  // useEffect(() => {
  //   if (search.length > 0) {
  //     const filtered = creatorsQuery.filter(creator =>
  //       creator.username.toLowerCase().includes(search.toLowerCase())
  //     )
  //     setFilteredCreators(filtered)
  //   } else {
  //     setFilteredCreators(creatorsQuery)
  //   }
  // }, [search, creatorsQuery])

  const classes = useStyle()

  return (
    <Grid container justify="center">
      <Grid
        item
        xs={12}
        container
        justify="center"
        alignContent="center"
        className={classes.header}
      >
        <Grid item xs={9} container justify="center" alignContent="center">
          <Grid
            item
            xs={5}
            container
            justify="space-around"
            alignContent="flex-end"
          >
            <Typography
              variant="caption"
              color="primary"
              className={classes.title}
            >
              Meet our creators
            </Typography>
          </Grid>

          {/* <SearchCreator
            searchBar={search}
            setSearchBar={setSearch}
            status={status}
          /> */}
        </Grid>
      </Grid>
      {isLoading ? (
        <Spinner height="50vh" />
      ) : (
        <Gallery
          pages={creator}
          hasNextPage={false}
          renderItem={(items, index) => (
            <CreatorItem galleryItem={items} key={index} />
          )}
        />
      )}
    </Grid>
  )
}

export default Creators
