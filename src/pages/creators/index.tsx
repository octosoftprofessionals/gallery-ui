import React from 'react'
import { useQuery } from 'react-query'

import Layout from '../../components/Layout/Layout'
import CreatorsPage from '../../components/Creators'

import { getArtworkAuctions } from '../../services/autionsService'

const creators = () => {
  const { data: CreatorQuery, isLoading } = useQuery(
    'CreatorQuery',
    getArtworkAuctions
  )
  return (
    <Layout>
      <CreatorsPage creatorsQuery={CreatorQuery} status={isLoading} />
    </Layout>
  )
}

export default creators
