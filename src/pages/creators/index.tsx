import React from 'react'
import { useQuery } from 'react-query'

import Layout from '../../components/Layout/Layout'
import CreatorsPage from '../../components/Creators'

import { getArtworkAuctionsPaginated } from '../../services/autionsService'

const creators = () => {
  const { data: CreatorQuery, isLoading } = useQuery(
    'CreatorQuery',
    getArtworkAuctionsPaginated
  )
  return (
    <Layout>
      <CreatorsPage creatorsQuery={CreatorQuery} status={isLoading} />
    </Layout>
  )
}

export default creators
