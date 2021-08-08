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
    border: `1px solid ${Theme.palette.primary.dark}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 90,
  },
  dropzoneParagraph: {
    fontSize: Theme.typography.fontSize[2],
    fontWeight: 400,
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
      dropzoneText={'Drag and drop, or click to select from your computer.'}
      onChange={file => uploadFile(file)}
    />
  )
}
export default DragDrop
