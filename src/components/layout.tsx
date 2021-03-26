import React from "react"
import { Link, Img } from "gatsby"
import logoSrc from './logo.png'
import "./style.css"

import { FaHome, FaTshirt } from "react-icons/fa"

import { GiRobotGrab } from "react-icons/gi"
import Sectional from "./Sectional/Sectional"

import classes from "./layout.module.css"
import SocialIcons from "./Sectional/SocialIcons/SocialIcons"
import IconLink from "./IconLink/IconLink"
import Countdown from "./Countdown/Countdown"

const Layout: React.FC = ({ children }) => {
  return (
    <div className={classes.Root}>
      <Sectional
        className={classes.navbar}
        innerStyle={{ padding: 0 }}
      >
        <div className={classes.navbarContent}>
          <Link className={classes.logo} to="/">
            <img src={logoSrc} style={{height: 30}} />
          </Link>
          <Countdown long={true} onNavbar={true} />          
          <span className={classes.socialLinks}>
            <Link className={classes.submitLink} to="/submit-art">Submit Art</Link>
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
