import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Spinner from '../../components/Spinner'
import ExhibitionTitle from './ExhibitionTitle'

const useStyle = makeStyles(Theme => ({
  containerItem: { padding: Theme.spacing(4) },
}))

const GallerySections = ({
  exhibitions,
  isLoading,
  setShowTitles,
  setExibitionTitle,
  setExhibitionid,
}) => {
  const classes = useStyle()

  const selectHandler = (title: string, id: number) => {
    setExibitionTitle(title)
    setShowTitles(false)
    setExhibitionid(id)
  }

  return (
    <Grid container direction="row" justify="space-between" wrap="wrap">
      {isLoading ? (
        <Spinner height="60vh" />
      ) : (
        exhibitions.map(({ node }) => {
          return (
            <Grid
              item
              key={`${node.title}-${node.idExhibition}`}
              xs={12}
              sm={6}
              md={3}
              className={classes.containerItem}
              onClick={() => selectHandler(node.title, node.idExhibition)}
            >
              <ExhibitionTitle exhibition={node} />
            </Grid>
          )
        })
      )}
    </Grid>
  )
}

export default GallerySections
