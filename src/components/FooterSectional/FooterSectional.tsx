import React from "react"
import { useCookie } from "../../hooks/use-cookie"
import Sectional from "../Sectional/Sectional"
import SocialIcons from "../Sectional/SocialIcons/SocialIcons"
import classes from "./FooterSection.module.css"

const FooterSectional: React.FC<{
  className?: string
}> = ({ className: className='' }) => {
  return (
    <Sectional
      className={[classes.footer, className].join(' ')}
    >
      <div className={classes.center}>
        <span className={classes.FooterSocialIcons}>
          <SocialIcons />
        </span>
        <span className={classes.FooterCopyright}>
          <div>&#169; 2021 Superchief Gallery NFT. All Rights Reserved.</div>
        </span>
      </div>
    </Sectional>
  )
}

export default FooterSectional
