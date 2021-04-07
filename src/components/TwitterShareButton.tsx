import React from 'react'
import styled from 'styled-components'

import { FaTwitter } from 'react-icons/fa'

const SITE_URL = 'https://XXXXX'
const TwitterShareButton = () => {
  const searchParams = new URLSearchParams();
  searchParams.set('url', SITE_URL)
  searchParams.set('text', 'Art is lit! Check this out!')

  return (
    <Root href={`https://twitter.com/share?${searchParams.toString()}`}>
      <FaTwitter /> Share
    </Root>
  )
}

export default TwitterShareButton

const Root = styled.a`
  &:root, &:link, &:visited {
    background-color: #53a7e6;
    color: white;
    padding: 4px 6px;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    display: inline-block;
    margin: 0 4px;
  }

  &:hover {
    opacity: 0.8;
  }
`
