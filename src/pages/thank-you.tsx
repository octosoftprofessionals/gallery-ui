import React from "react"
import { GiClawSlashes } from "react-icons/gi"
import CommunitySectional from "../components/CommunitySectional/CommunitySectional"
import FbShareButton from "../components/FbShareButton/FbShareButton"
import FooterSectional from "../components/FooterSecitonal/FooterSectional"
import JoinMemberForm from "../components/JoinMemberForm/JoinMemberForm"
import Layout from "../components/layout"
import BottomFiller from "../components/Sectional/BottomFiller/BottomFiller"
import PartnersSectional from "../components/Sectional/PartnersSectional/PartnersSectional"
import Sectional from "../components/Sectional/Sectional"
import TwitterShareButton from "../components/TwitterShareButton/TwitterShareButton"
import classes from './thank-you.module.css'

const ThankYou = () => {
  return (
    <Layout>
      <Sectional>
        <h1>Thank You!!!</h1>

        <p>Thank you for your support!</p>

        <p>
          We hope you enjoy the tee!
        </p>

        <p>We couldn't do it without you! Thank you!</p>

        <div style={{ display: "flex" }}>
          <FbShareButton />
          <TwitterShareButton />
        </div>
        <div className={classes.SideBySide}>
       
        </div>
      </Sectional>

      <FooterSectional />
      <BottomFiller />
    </Layout>
  )
}

export default ThankYou
