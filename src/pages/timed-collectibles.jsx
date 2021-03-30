import React from "react"
import FooterSectional from "../components/FooterSectional/FooterSectional"
import Layout from "../components/layout"
import BottomFiller from "../components/Sectional/BottomFiller/BottomFiller"
import classes from "./index.module.css"
import "./index.css"
import config from "../config"

class Home extends React.Component {
  render() {
    return (
      <div className={classes.container}>
      <Layout showAuctionsLink={true}>
      {/* <Sectional style={{ backgroundColor: "white", color: "black" }}>
        <div className={classes.TopSection}>
          <h2>MY ART GALLERY</h2>
          <p>Find my awesome art pieces here!</p>
        </div>
        </Sectional> */}
        {/* <div className={classes.banner}>
          <Hero />
        </div> */}
        <div className={classes.loading}>
          <h4>Loading...</h4>
        </div>
        <table border="0" cellspacing="0" cellpadding="0" id="hold-iframe">
          <iframe src={`https://opensea.io/assets/superchief-gallery-nifty?search[sortAscending]=false&search[toggles][0]=BUY_NOW&search[resultModel]=ASSETS&embed=true`}
            width='100%'
            height='1600px'
            frameBorder='0'
            allowFullScreen></iframe>
        </table>
        <FooterSectional />
        <BottomFiller />
      </Layout>
      </div>
    );
  }
}

export default Home
