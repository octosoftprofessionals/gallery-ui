import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Paper, Divider } from '@material-ui/core'

import { getAllExhibitions } from '../../services/exhibition'

import GalleryExhibition from './GalleryExhibition'
import GallerySections from './GallerySections'
import useQueryParams from '../../hooks/useQueryParams'

import { useExhibitionQuery } from '../../atom'

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(2),
    fontSize: '3.5rem',
    '@media (max-width: 576px)': {
      fontSize: '2rem',
    },
  },
  divider: {
    width: '96%',
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

export const Exhibition = props => {
  const classes = useStyles()
  const [showTitles, setShowTitles] = useState(true)
  const { titleId } = useQueryParams()
  const [exhibitionTitle, setExibitionTitle] = useState<string>(
    'OCTOSOFT Collections, Curated by our staff'
  )

  const exhibitions = useExhibitionQuery()

  useEffect(() => {
    if (titleId === undefined) {
      setShowTitles(true)
      setExibitionTitle('OCTOSOFT Collections, Curated by our staff')
    }
  }, [titleId])

  const {
    data: allExhibitions = [],
    isLoading,
    status: statusGetAllExhibitions,
  } = useQuery('getAllExhibitions', getAllExhibitions)

  const [exhibitionid, setExhibitionid] = useState<number>(Number(titleId))

  return (
    <Grid container justifyContent="center">
      <Typography variant="h4" color="primary" className={classes.title}>
        {exhibitionTitle}
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
              exhibitions={exhibitions}
              isLoading={isLoading}
              setShowTitles={setShowTitles}
              setExibitionTitle={setExibitionTitle}
              setExhibitionid={setExhibitionid}
            />
          </Grid>
        ) : (
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
