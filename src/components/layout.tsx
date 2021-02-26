import React from "react"
import "./style.css"

import { FaHome, FaTshirt } from "react-icons/fa"

import { GiRobotGrab } from "react-icons/gi"
import Sectional from "./Sectional/Sectional"

import classes from "./layout.module.css"
import SocialIcons from "./Sectional/SocialIcons/SocialIcons"
import IconLink from "./IconLink/IconLink"

const Layout: React.FC = ({ children }) => {
  return (
    <div className={classes.Root}>
      <Sectional
        style={{
          backgroundImage:
            "linear-gradient(135deg, #191C25 0%, #292C25 65%, #191C25 100%)",
        }}
        innerStyle={{ padding: 0 }}
      >
        <nav className={classes.NavBar}>
          <div className={classes.PrimaryIcons}>
            <IconLink to="/" icon={FaHome} text="HOME" />
          </div>
          <SocialIcons />
        </nav>
      </Sectional>
      <main className={classes.Main}>{children}</main>
    </div>
  )
}

export default Layout
