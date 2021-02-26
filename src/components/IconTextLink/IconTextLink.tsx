import { Link } from "gatsby"
import React from "react"
import classes from "./IconTextLink.module.css"

const FlexLink = ({ internal, href, children, ...props }) => {
  return internal ? (
    <Link to={href} {...props}>
      {children}
    </Link>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

const IconTextLink: React.FC<{
  href?: string
  icon: React.FC
  title: string
  internal?: boolean
}> = ({ children, icon: Icon, title, href = "", internal = false }) => {
  return (
    <div className={classes.Root}>
      <div className={classes.Icon}>
        <FlexLink className={classes.FlexLink} internal={internal} href={href}>
          <Icon />
        </FlexLink>
      </div>
      <div className={classes.Info}>
        <div className={classes.Title}>
          <FlexLink className={classes.FlexLink} internal={internal} href={href}>
            {title}
          </FlexLink>
        </div>
        <div className={classes.Description}>{children}</div>
      </div>
    </div>
  )
}

export default IconTextLink
