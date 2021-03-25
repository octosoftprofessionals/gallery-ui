import React from "react"
import FooterSectional from "../components/FooterSectional/FooterSectional"
import Layout from "../components/layout"
import classes from "./submit-art.module.css"
import config from '../config';

const SubmitWorkPage = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <h2>
          Submit your work as an NFT for the {config.GALLERY_NAME}
        </h2>
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
          Questions or comments? Email us at <a href={`mailto: ${config.CONTACT_EMAIL}`}>{config.CONTACT_EMAIL}</a>.
        </p>
        <p>
          <em>Please wait while the form loads below.</em>
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

