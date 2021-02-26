import React from "react"
import { Link } from "gatsby"


import classes from "./IconLink.module.css"

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
  return <div className={classes.IconLink}>{linkBody}</div>
}

export default IconLink;