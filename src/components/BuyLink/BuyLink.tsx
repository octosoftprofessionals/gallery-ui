import React, { useState } from "react"
import classes from "./BuyLink.module.css"
import getStripe from "../../utils/stripejs"
import { useStripePrices } from "../../hooks/use-stripe-prices"

const BuyLink: React.FC<{
  priceId: string
}> = ({ priceId, children }) => {
  const prices = useStripePrices()

  console.log({ prices })

  const handleSubmit = async event => {
    event.preventDefault()

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      shippingAddressCollection: {
        allowedCountries: ["US", "CA"],
      },
      lineItems: [{ price: priceId, quantity: 1 }],
      successUrl: `${window.location.origin}/thank-you`,
      cancelUrl: `${window.location.origin}/`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  return (
    <div className={classes.Root}>
      <a onClick={handleSubmit}>{children}</a>
    </div>
  )
}

export default BuyLink
