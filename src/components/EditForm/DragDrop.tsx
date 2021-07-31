import React, { useState } from 'react'
import {
  AttachFile,
  AudioTrack,
  Description,
  PictureAsPdf,
  Theaters,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { DropzoneArea } from 'material-ui-dropzone'

const useStyles = makeStyles(Theme => ({
  dropzone: {
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropzoneParagraph: {
    fontSize: Theme.typography.fontSize[4],
  },
}))

const DragDrop = () => {
  const classes = useStyles()
  return (
    <DropzoneArea
      dropzoneClass={classes.dropzone}
      dropzoneParagraphClass={classes.dropzoneParagraph}
      acceptedFiles={['image/*']}
      dropzoneText={'Drag and drop an image here or click'}
      onChange={files => console.log('Files:', files)}
    />
  )
}
export default DragDrop
