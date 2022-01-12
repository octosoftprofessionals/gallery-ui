import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import { galleryItemQuery } from '../../services/gallery'
import SearchCreator from './SearchCreator'
import Gallery from '../Gallery'
import CreatorItem from '../GalleryItem/CreatorItem'
import Spinner from '../Spinner'
import config from '../../config'
import axios from 'axios'

const useStyle = makeStyles(Theme => ({
  title: {
    fontSize: '3.5rem',
    '@media (max-width: 576px)': {
      fontSize: '2rem',
    },
    textAlign: 'center',
  },
  divider: {
    marginTop: '0em',
    color: 'black',
    width: '96%',
  },
}))

const Creators = ({ creatorsQuery = [], status }) => {
  const [creators, setCreators] = useState([])
  useEffect(() => {
    const creatorsFilter = async () => {
      let auxUser = []
      await axios.get(`${config.API_URL}/users`).then((response) => {
        auxUser = response.data

        auxUser = auxUser.filter(item => item.creator === true)
        setCreators(auxUser)
      })
    }
    creatorsFilter()
  }, [])

  let creador = JSON.stringify(creators)

  creador = creador.replace(/\"name\":/g, "\"collectionName\":");
  creador = creador.replace(/\"username\":/g, "\"creatorUsername\":");
  creador = creador.replace(/\"publicAddress\":/g, "\"creatorAddress\":");
  creador = creador.replace(/\"profileImgUrl\":/g, "\"creatorImageUrl\":");

  creador = JSON.parse(creador)

console.log('creador :>> ', creador);


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
  creator.push(creador)

  console.log('creatorItem :>> ', creatorItem);

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
          {/* <Grid
            item
            xs={5}
            container
            justify="center"
            alignContent="flex-end"
          > */}
          <Typography
            variant="caption"
            color="primary"
            className={classes.title}
          >
            Meet our creators
          </Typography>
          {/* </Grid> */}

          {/* <SearchCreator
            searchBar={search}
            setSearchBar={setSearch}
            status={status}
          /> */}
        </Grid>
      </Grid>
      <hr className={classes.divider}></hr>
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
