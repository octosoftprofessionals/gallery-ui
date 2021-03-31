import React from "react"
import { useCookie } from "../../hooks/use-cookie"
import Sectional from "../Sectional/Sectional"
import SocialIcons from "../Sectional/SocialIcons/SocialIcons"
import classes from "./FooterSection.module.css"
import Countdown from "../Countdown/Countdown"
import { Link } from "gatsby"
import config from "../../config"

const FooterSectional: React.FC<{
  className?: string
}> = ({ className: className='' }) => {
  return (
    <Sectional
      className={[classes.footer, className].join(' ')}
    >
      <div className={classes.content}>
      <div className={classes.center}>
        <span className={classes.FooterSocialIcons}>
          <SocialIcons />
        </span>
        <a className={classes.buyEth}
        target="_blank"
        href="https://go.coinmama.com/visit/?bta=65123&nci=5364">
            Buy ETH with Credit Card
          </a>
        <span className={classes.FooterCopyright}>
          &#169; 2021 {config.GALLERY_NAME}
        </span>
      </div>
      </div>
    </Sectional>
  )
}

export default FooterSectional
