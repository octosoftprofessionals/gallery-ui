import React from 'react'
import { useQuery } from 'react-query'

import Layout from '../../components/Layout/Layout'
import CreatorsPage from '../../components/Creators'

import { getCreators } from '../../services/autionsService'

const creators = () => {
  const { data: CreatorQuery, isLoading } = useQuery(
    'CreatorQuery',
    getCreators
  )
  return (
    <Layout>
      <CreatorsPage creatorsQuery={CreatorQuery} status={isLoading} />
    </Layout>
  )
}

export default creators
