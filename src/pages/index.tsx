import React from "react"
import FooterSectional from "../components/FooterSecitonal/FooterSectional"
import Layout from "../components/layout"
import ProductCard from "../components/ProductCard/ProductCard"
import BottomFiller from "../components/Sectional/BottomFiller/BottomFiller"
import PartnersSectional from "../components/Sectional/PartnersSectional/PartnersSectional"
import Sectional from "../components/Sectional/Sectional"
import classes from "./index.module.css"

const productCard = (<Sectional style={{ backgroundColor: 'beige', color: 'black' }}>
  <h1>Welcome to art!</h1>

  <div className={classes.ProductAndForm}>
    <div className={classes.ProductContainer}>
      <ProductCard
        title="Art"
        imageSrc="/images/pearlearrings.png"
        prices={[
          {
            title: "Small",
            priceId: "price_1IHw3cF7Z5g4zLfD7DKcr7NW",
          },
          {
            title: "Medium",
            priceId: "price_1IHw4YF7Z5g4zLfDRvk4s1EL",
          },
          {
            title: "Large",
            priceId: "price_1IHw5cF7Z5g4zLfDOSuMogxQ",
          },
          {
            title: "X-Large",
            priceId: "price_1IHw6FF7Z5g4zLfDcqVHXWXR",
          },
        ]}
      />
    </div>
  </div>
</Sectional>)

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
