import React from 'react'
import { useQuery } from 'react-query'

import Layout from '../../components/Layout/Layout'
import Creator from '../../components/Creator'

import { getArtwork } from '../../services/autionsService'

const CreatorPage = () => {
  const { data: CreatorQuery, status: statusCreatorQuery } = useQuery(
    'CreatorQuery',
    getArtwork
  )

  return (
    <Layout
      padding="0"
      marginTop="0"
      height
      backgroundImage={
        'https://f8n-production.imgix.net/creators/profile/fcusz42mh-obs-gif-4i7ctk.gif'
      }
    >
      <Creator creatorQuery={CreatorQuery} />
    </Layout>
  )
}

export default CreatorPage
