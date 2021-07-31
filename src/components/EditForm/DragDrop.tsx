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

const DragDrop = ({ setFiles, typeFile, files }) => {
  const classes = useStyles()

  const uploadFile = file => {
    switch (typeFile) {
      case 'user':
        setFiles({ ...files, picture: file })
        break
      case 'cover':
        setFiles({ ...files, cover: file })
        break
    }
  }

  return (
    <DropzoneArea
      dropzoneClass={classes.dropzone}
      dropzoneParagraphClass={classes.dropzoneParagraph}
      acceptedFiles={['image/*']}
      dropzoneText={'Drag and drop an image here or click'}
      onChange={file => uploadFile(file)}
    />
  )
}
export default DragDrop
