import React from 'react'
import Layout from '../../components/Layout'
import Terms from '../../components/TermsOfService'

import { graphql } from 'gatsby'
import get from 'lodash/get'

const TermsOfService = props => {
  const terms = get(props, 'data.contentfulTermsOfService')

  return (
    <Layout padding="0 24px" marginTop="12px">
      <Terms terms={terms} />
    </Layout>
  )
}

export const privateQuery = graphql`
  query privacyPolicyQuery {
    contentfulTermsOfService {
      title
      content {
        raw
      }
    }
  }
`

export default TermsOfService
