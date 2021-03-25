import React from "react"
import FooterSectional from "../components/FooterSectional/FooterSectional"
import Layout from "../components/layout"
import BottomFiller from "../components/Sectional/BottomFiller/BottomFiller"
import Sectional from "../components/Sectional/Sectional"
import classes from "./submit-work.module.css"
import config from '../config';

const SubmitWorkPage = () => {
  console.log('env', config.AIRTABLE_EMBED_SRC);
  return (
    <Layout>
      <div className={classes.container}>
        <h2>SUBMIT YOUR WORK AS AN NFT FOR THE SUPERCHIEF GALLERY</h2>
        <p>
          We are open to submissions!
        </p>
        <p>
          Fill out this form to have your work reviewed for addition to our NFT gallery. After review, we will mint an NFT for your artwork and update you when the auction is announced.
        </p>
        <p>
          To learn more about NFTs, <a href="https://opensea.io/blog/guides/non-fungible-tokens/"
          target="_blank"
          rel="noopener noreferrer">click here</a>.
        </p>
        <p>
          Please wait while the form loads below.<br/>
          Questions or comments? Email us at <a href="mailto: metxr@protonmail.com">metxr@protonmail.com</a>.
        </p>
        <div className={classes.form}>
          <iframe
            className="airtable-embed"
            src={config.AIRTABLE_EMBED_SRC}
            frameborder="0" onmousewheel="" width="100%" height="1250px"
            style={{
              background: 'transparent',
            }}></iframe>
        </div>
      </div>
      <FooterSectional className={classes.submitWorkFooter} />
    </Layout>
  )
}

export default SubmitWorkPage;

