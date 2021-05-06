import React from 'react'
import Layout from '../../components/Layout/Layout'
import Creator from '../../components/Creator'

const CreatorPage = () => {
  return (
    <Layout
      padding="0"
      marginTop="0"
      backgroundImage={
        'https://f8n-production.imgix.net/creators/profile/fcusz42mh-obs-gif-4i7ctk.gif'
      }
    >
      <Creator />
    </Layout>
  )
}

export default CreatorPage
