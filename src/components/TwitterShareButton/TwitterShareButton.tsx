import React from "react"
import classes from './TwitterShareButton.module.css'
import {FaTwitter} from 'react-icons/fa'


const SITE_URL = 'https://XXXXX';
const TwitterShareButton = () => {
  const searchParams = new URLSearchParams();
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')

  return (
    <a className={classes.Root} href={`https://twitter.com/share?${searchParams.toString()}`}>
      <FaTwitter /> Share
    </a>
  )
}

export default TwitterShareButton