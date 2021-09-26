import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Paper, Divider } from '@material-ui/core'

import { getAllExhibitions } from '../../services/exhibition'

import GalleryExhibition from './GalleryExhibition'
import GallerySections from './GallerySections'
import useQueryParams from '../../hooks/useQueryParams'

const useStyles = makeStyles(theme => ({
  root: {},
  // title: {
  //   padding: theme.spacing(11, 0),
  //   '@media (max-width: 576px)': {
  //     textAlign: 'center',
  //   },
  // },
  title: { padding: theme.spacing(10) },
  divider: {
    width: '95%',
    height: 1,
    backgroundColor: theme.palette.primary.main,
  },
  containerItem: { padding: theme.spacing(4) },
  button: {
    borderRadius: theme.shape.borderRadius[2],
    padding: theme.spacing(4, 2),
    justifyContent: 'none',
    marginBottom: theme.spacing(5),
  },
  containerCollection: {
    padding: theme.spacing(0, 7),
    '@media (max-width: 576px)': {
      padding: 0,
    },
  },
  typographyButton: {
    alignSelf: 'left',
    color: theme.palette.primary.contrastText,
  },
  img: {
    backgroundImage: ({ imageUrl }) => `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  paper: {
    padding: theme.spacing(3, 5),
  },
  containerButtons: {
    height: `${theme.spacing(13)}vh`,
    overflowY: 'scroll',
    overflowX: 'hidden',
    padding: theme.spacing(2),
  },
}))

const imgUrls = [
  'https://i.pinimg.com/originals/7f/08/52/7f0852baa4ec65a696b2a54c833215d4.jpg',
]

const Exhibition = () => {
  const classes = useStyles({ imageUrl: imgUrls })
  const [showTitles, setShowTitles] = useState(true)
  const { titleId } = useQueryParams()
  const [exhibitionTitle, setExibitionTitle] = useState('')

  useEffect(() => {
    // setExhibitionid(titleId)
    titleId === undefined && setShowTitles(true)
  }, [titleId])

  const {
    data: allExhibitions = [],
    isLoading,
    status: statusGetAllExhibitions,
  } = useQuery('getAllExhibitions', getAllExhibitions)

  const exhibitionQueryParam: number = useQueryParams()?.exhibitionid
  const queryParamInNumberOrUndefined = exhibitionQueryParam
    ? exhibitionQueryParam * 1
    : undefined
  const [exhibitionid, setExhibitionid] = useState(
    queryParamInNumberOrUndefined
  )

  return (
    <Grid container justifyContent="center">
      <Typography variant="h4" color="primary" className={classes.title}>
        {!exhibitionTitle
          ? 'Superchief Collections, Curated by our staff'
          : exhibitionTitle}
      </Typography>
      <Divider light className={classes.divider} />
      <Grid item container justifyContent="center">
        {showTitles ? (
          <Grid
            container
            item
            xs={12}
            md={10}
            className={classes.containerItem}
            justifyContent="center"
          >
            <GallerySections
              exhibitions={allExhibitions}
              isLoading={isLoading}
              setShowTitles={setShowTitles}
              setExibitionTitle={setExibitionTitle}
              setExhibitionid={setExhibitionid}
            />
          </Grid>
        ) : (
          !isLoading &&
          !!allExhibitions.length && (
            <Grid item xs={12} sm={9} md={10}>
              <GalleryExhibition
                exhibitionId={exhibitionid || allExhibitions[0]?.id}
              />
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  )
}

export default Exhibition
