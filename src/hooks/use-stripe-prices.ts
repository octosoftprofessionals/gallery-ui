import { useStaticQuery, graphql } from "gatsby"

interface Data {
  prices: {
    edges: {
      node: {
        id: string
        active: boolean
        currency: string
        unit_amount: number
        product: {
          id: string
          name: string
        }
      }
    }[]
  }
}
export const useStripePrices = () => {
  const { prices } = useStaticQuery<Data>(
    graphql`
      query ProductPrices {
        prices: allStripePrice(
          filter: { product: { active: { eq: true } } }
          sort: { fields: [unit_amount] }
        ) {
          edges {
            node {
              id
              active
              currency
              unit_amount
              product {
                id
                name
              }
            }
          }
        }
      }
    `
  )
  return prices
}
