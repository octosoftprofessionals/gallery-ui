import React from 'react'
import Layout from '../components/Layout'
import CommunityGuidelines from '../components/CommunityGuidelines'

const communityGuidelinesPage = () => {
  const time = new Date('2021, 7, 23')
  return (
    <Layout>
      <CommunityGuidelines dateTime={time.toUTCString()} />
    </Layout>
  )
}

export default communityGuidelinesPage
