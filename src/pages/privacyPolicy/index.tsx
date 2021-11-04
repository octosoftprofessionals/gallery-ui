import React from 'react'

import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../../components/Layout'
import PolicyPage from '../../components/PolicyPage'

const PrivacyPolicy = props => {
  const policy = get(props, 'data.contentfulPrivacyPolicy')
  return (
    <Layout padding="0 24px" marginTop="12px">
      <PolicyPage policy={policy} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PrivacyPolicyQuery {
    contentfulPrivacyPolicy {
      title
      policy {
        raw
      }
    }
  }
`

export default PrivacyPolicy
