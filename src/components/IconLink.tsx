import React from "react"
import styled from 'styled-components'

import { Link } from "gatsby"

const IconLink: React.FC<{
  icon: React.FC
  to?: string
  externalLink?: boolean
  text?: string
}> = ({ icon: Icon, to, externalLink, text }) => {
  let linkBody = <Icon />

  if (to) {
    if (externalLink) {
      linkBody = (
        <a href={to}>
          <Icon /> {text && <span>{text}</span>}
        </a>
      )
    } else {
      linkBody = (
        <Link to={to}>
          <Icon /> {text && <span>{text}</span>}
        </Link>
      )
    }
  }

  return (
    <Root>
      {linkBody}
    </Root>
  )
}

export default IconLink;

const Root = styled.div`
  font-size: 16px;
  margin: 0 6px;
  display: inline-block;
  color: #e0bd70;

  :first-child {
    padding-left: 0;
  }

  a:link,
  a:visited {
    color: #e0bd70;
  }

  span {
    display: none;
    font-size: 20px;
  }

  @media (min-width: 375px) {
    font-size: 20px;
  }

  @media (min-width: 408px) {
    font-size: 24px;
  }

  @media (min-width: 640px) {
    span {
      display: inline;
    }
  }
`;
