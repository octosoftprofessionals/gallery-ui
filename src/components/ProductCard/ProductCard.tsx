import React, { useState } from "react"
import classes from "./ProductCard.module.css"
import getStripe from "../../utils/stripejs"
import { useStripePrices } from "../../hooks/use-stripe-prices"

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}

const formatPrice = (amount, currency = "USD") => {
  let price = amount / 100
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const ProductCard: React.FC<{
  title: string
  imageSrc: string
  prices: { priceId: string; title: string }[]
}> = ({ title, imageSrc, prices }) => {
  const priceData = useStripePrices()
  const [loading, setLoading] = useState(false)
  const [priceOption, setPriceOption] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()
    if (!priceOption) return
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      shippingAddressCollection: {
        allowedCountries: ["US", "CA"],
      },
      lineItems: [{ price: priceOption, quantity: 1 }],
      successUrl: `${window.location.origin}/thank-you`,
      cancelUrl: `${window.location.origin}`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  const priceMap: {
    unit_amount: string
    name: string
  } = priceData.edges.reduce((acc, edge) => {
    return Object.assign(acc, {
      [edge.node.id]: {
        unit_amount: edge.node.unit_amount,
        name: edge.node.product.name,
      },
    })
  }, {}) as { unit_amount: string; name: string }

  return (
    <div className={classes.Root}>
      <form onSubmit={handleSubmit}>
        {" "}
        <h4 style={{ color: "black" }}>{title}</h4>
        <div className={classes.Image}>
          <img src={imageSrc} />
        </div>
        <div className={classes.SelectSize}>
          <select
            value={priceOption}
            onChange={e => setPriceOption(e.target.value)}
          >
            <option key="" value="" disabled={true}>
              Select Size
            </option>
            {prices.map(p => {
              console.log(priceMap[p.priceId].unit_amount)
              return (
                <option key={p.priceId} value={p.priceId}>
                  {p.title}, S&amp;H{" "}
                  {formatPrice(priceMap[p.priceId].unit_amount)}
                </option>
              )
            })}{" "}
          </select>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            className={classes.BuyButton}
            disabled={loading || !priceOption}
            style={loading ? buttonDisabledStyles : {}}
          >
            SUPPORT
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductCard
