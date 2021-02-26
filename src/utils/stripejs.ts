import { loadStripe } from "@stripe/stripe-js"

const GATSBY_STRIPE_PUBLISHABLE_KEY = process.env.GATSBY_STRIPE_PUBLISHABLE_KEY

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(GATSBY_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

export default getStripe