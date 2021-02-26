import React from "react"
import CommunitySectional from "../components/CommunitySectional/CommunitySectional"
import FooterSectional from "../components/FooterSecitonal/FooterSectional"
import JoinMemberForm from "../components/JoinMemberForm/JoinMemberForm"

import Layout from "../components/layout"
import ProductCard from "../components/ProductCard/ProductCard"
import BottomFiller from "../components/Sectional/BottomFiller/BottomFiller"
import PartnersSectional from "../components/Sectional/PartnersSectional/PartnersSectional"
import Sectional from "../components/Sectional/Sectional"

import generalClases from "../styles/general.module.css"
import classes from "./index.module.css"

const Home = () => {
  return (
    <Layout>
      <Sectional style={{backgroundColor: 'beige', color: 'black'}}>
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
      </Sectional>
      <Sectional style={{ backgroundColor: "white", color: "black" }}>
        <h2>Details</h2>
        <p>What an awesome art piece!</p>
      </Sectional>
      <FooterSectional />
      <BottomFiller />
    </Layout>
  )
}

export default Home
