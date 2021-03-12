import React from "react"
import FooterSectional from "../components/FooterSectional/FooterSectional"
import Layout from "../components/layout"
import BottomFiller from "../components/Sectional/BottomFiller/BottomFiller"
import Sectional from "../components/Sectional/Sectional"
import classes from "./index.module.css"

const Home = () => {
  return (
    <Layout>
  
      
     {/* <Sectional style={{ backgroundColor: "white", color: "black" }}>
       <div className={classes.TopSection}>
        <h2>MY ART GALLERY</h2>
        <p>Find my awesome art pieces here!</p>
      </div>
       </Sectional> */}
      <iframe src='https://opensea.io/collection/superchief-gallery?embed=true'
        width='100%'
        height='100%'
        frameBorder='0'
        allowFullScreen></iframe>
      <FooterSectional />
      <BottomFiller />
    </Layout>
  )
}

export default Home
