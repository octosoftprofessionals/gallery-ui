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
import config from "../config"

const Layout: React.FC = ({ children }) => {
  return (
    <div className={classes.Root}>
      <Sectional
        className={classes.navbar}
        innerStyle={{ padding: 0 }}
      >
        <div className={classes.navbarContent}>
          <Link className={classes.logo} to={config.LOGO_LINK}>
            <img src={logoSrc} style={{height: 26}} />
          </Link>
          <span className={classes.socialLinks}>
            <Link className={classes.submitLink} to="https://opensea.io/assets/superchief-gallery-nifty?search%5BresultModel%5D=ASSETS&search%5BsortAscending%5D=false&search%5Btoggles%5D%5B0%5D=BUY_NOW">BUY TIMED COLLECTIBLES</Link>
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
