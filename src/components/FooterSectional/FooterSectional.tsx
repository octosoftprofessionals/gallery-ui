import React from "react"
import { useCookie } from "../../hooks/use-cookie"
import Sectional from "../Sectional/Sectional"
import SocialIcons from "../Sectional/SocialIcons/SocialIcons"
import classes from "./FooterSection.module.css"

const FooterSectional = () => {
  return (
    <Sectional
      style={{
        backgroundImage:
          "linear-gradient(135deg, #191C25 0%, #292C25 65%, #191C25 100%)",
      }}
    >
      <div className={classes.FooterSocialIcons}>
        <SocialIcons />
      </div>
      <div className={classes.FooterCopyright}>
        <div>&#169; 2021 Superchief Gallery NFT. All Rights Reserved.</div>

      </div>
    </Sectional>
  )
}

export default FooterSectional
