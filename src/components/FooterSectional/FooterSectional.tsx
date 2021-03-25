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
        <a className={classes.buyEth}
        href="https://go.coinmama.com/visit/?bta=65123&nci=5364" Target="_Top">
            Buy Ethereum with Credit Card on Coinmama.com
          </a>
      </div>
    </Sectional>
  )
}

export default FooterSectional
