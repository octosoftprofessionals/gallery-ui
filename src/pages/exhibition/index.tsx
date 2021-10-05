import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { useSetExhibitionQuery } from '../../atom'

import Layout from '../../components/Layout'
import { Exhibition } from '../../components/Exhibition'

const ExhibitionPage = props => {
  const exhibition = get(props, 'data.allContentfulExhibition.edges')
  const setExhibitionQuery = useSetExhibitionQuery()

  setExhibitionQuery(exhibition)

  return (
    <Layout padding="0 24px" marginTop="12px">
      <Exhibition />
    </Layout>
  )
}

export default ExhibitionPage

export const pageQuery = graphql`
  query ExhibitionQuery {
    allContentfulExhibition {
      edges {
        node {
          title
          idExhibition
          image {
            file {
              url
              fileName
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`
