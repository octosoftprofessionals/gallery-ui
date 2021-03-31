import React from "react"
import { Link } from "gatsby"
import logoSrc from './logo.png'
import "./style.css"
import Sectional from "./Sectional/Sectional"

import classes from "./layout.module.css"
import SocialIcons from "./Sectional/SocialIcons/SocialIcons"

const Layout: React.FC = ({
  children,
  showEditionsLink,
  showAuctionsLink,
}) => {
  return (
    <div className={classes.Root}>
      <Sectional
        className={classes.navbar}
        innerStyle={{ padding: 0 }}
      >
        <div className={classes.navbarContent}>
          <Link className={classes.logo} to="/">
            <img src={logoSrc} style={{height: 50}} />
          </Link>
          <span className={classes.socialLinks}>
            {
              showEditionsLink &&
              <Link className={classes.submitLink} to="/timed-collectibles">EDITIONS</Link>
            }
            {
              showAuctionsLink &&
              <Link className={classes.submitLink} to="/">AUCTIONS</Link>
            }
            <span className={classes.socialIcons}>
              <SocialIcons />
            </span>
          </span>
        </div>
      </Sectional>
      <main className={classes.Main}>{children}</main>
    </div>
  )
}

export default Layout
